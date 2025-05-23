// auth.decorator.ts

import {
  SetMetadata,
  UseGuards,
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

import { Role } from 'src/common/types'
import { AuthGuard, AuthRequest } from './auth.guard'

export const AllowAuthenticated = (...roles: Role[]) =>
  applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard))

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const gqlCtx = GqlExecutionContext.create(ctx)
    const { req } = gqlCtx.getContext<{ req: AuthRequest }>()
    return req.user
  },
)
