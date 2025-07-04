import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { JwtService } from '@nestjs/jwt'
import { Reflector } from '@nestjs/core'
import { Role } from 'src/common/types'
import { PrismaService } from 'src/common/prisma/prisma.service'
// import { IncomingHttpHeaders } from 'http'
import { Request } from 'express'

interface JwtPayload {
  uid: string
}

export interface AuthRequest extends Request {
  user?: JwtPayload & { roles?: Role[] }
  headers: { authorization?: string }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext<{ req: AuthRequest }>().req

    await this.authenticateUser(req)
    return this.authorizeUser(req, context)
  }

  private async authenticateUser(req: AuthRequest): Promise<void> {
    const bearerHeader = req.headers.authorization
    const token = bearerHeader?.split(' ')[1]

    if (!token) {
      throw new UnauthorizedException('No token provided.')
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token)
      if (payload?.uid) {
        const uid = payload?.uid
        const user = await this.prisma.user.findUnique({
          where: { uid },
        })
        if (!user) {
          throw new UnauthorizedException('User not found.')
        }
        throw new UnauthorizedException('Invalid token payload.')
      }
      console.log('Token payload:', payload)
      req.user = payload
    } catch (err) {
      console.error('Token validation error:', err)
      throw new UnauthorizedException('Invalid token.')
    }
  }

  private async authorizeUser(
    req: AuthRequest,
    context: ExecutionContext,
  ): Promise<boolean> {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated.')
    }

    const userRoles = await this.getUserRoles(req.user.uid)
    req.user.roles = userRoles

    const requiredRoles = this.getMetadata<Role[]>('roles', context)
    if (!requiredRoles || requiredRoles.length === 0) {
      return true
    }

    return requiredRoles.some((role) => userRoles.includes(role))
  }

  private getMetadata<T>(key: string, context: ExecutionContext): T {
    return this.reflector.getAllAndOverride<T>(key, [
      context.getHandler(),
      context.getClass(),
    ])
  }

  private async getUserRoles(uid: string): Promise<Role[]> {
    const [admin] = await Promise.all([
      this.prisma.admin.findUnique({ where: { uid } }),
    ])

    const roles: Role[] = []
    if (admin) roles.push('admin')
    const manager = await this.prisma.manager.findUnique({ where: { uid } })
    if (manager) roles.push('manager')
    const valet = await this.prisma.valet.findUnique({ where: { uid } })
    if (valet) roles.push('valet')

    return roles
  }
}
