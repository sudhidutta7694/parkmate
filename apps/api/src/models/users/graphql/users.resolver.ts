import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entity/user.entity'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import {
  LoginInput,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dtos/create-user.input'
import { UpdateUserInput } from './dtos/update-user.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  async registerWithCredentials(
    @Args('registerWithCredentialsInput') args: RegisterWithCredentialsInput,
  ) {
    return this.usersService.registerWithCredentials(args)
  }

  @Mutation(() => User)
  async registerWithProvider(
    @Args('registerWithProviderInput') args: RegisterWithProviderInput,
  ) {
    return this.usersService.registerWithProvider(args)
  }

  @Mutation(() => LoginOutput)
  async login(@Args('loginInput') args: LoginInput) {
    return this.usersService.login(args)
  }

  @AllowAuthenticated()
  @Query(() => User)
  whoami(@GetUser() userInfo: GetUserType) {
    return this.usersService.findOne({
      where: { uid: userInfo.uid },
    })
  }

  @AllowAuthenticated('admin')
  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs, @GetUser() userInfo: GetUserType) {
    checkRowLevelPermission(userInfo, args.where.uid)
    return this.usersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') args: UpdateUserInput,
    @GetUser() userInfo: GetUserType,
  ) {
    const existingUser = await this.prisma.user.findUnique({
      where: { uid: args.uid },
      select: {
        uid: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    if (!existingUser) throw new Error('User not found')
    checkRowLevelPermission(existingUser, userInfo.uid)
    return this.usersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  async removeUser(
    @Args() args: FindUniqueUserArgs,
    @GetUser() userInfo: GetUserType,
  ) {
    const existingUser = await this.prisma.user.findUnique({
      where: args.where,
      select: {
        uid: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    if (!existingUser) throw new Error('User not found')
    checkRowLevelPermission(existingUser, userInfo.uid)
    return this.usersService.remove(args)
  }
}
