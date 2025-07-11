import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { AddressesService } from './addresses.service'
import { Address } from './entity/address.entity'
import { FindManyAddressArgs, FindUniqueAddressArgs } from './dtos/find.args'
import { CreateAddressInput } from './dtos/create-address.input'
import { UpdateAddressInput } from './dtos/update-address.input'
// import { checkRowLevelPermission } from 'src/common/auth/util'
// import { GetUserType } from 'src/common/types'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Address)
export class AddressesResolver {
  constructor(
    private readonly addressesService: AddressesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Address)
  createAddress(
    @Args('createAddressInput') args: CreateAddressInput,
    // @GetUser() user: GetUserType,
  ) {
    // checkRowLevelPermission(user, args.id)
    return this.addressesService.create(args)
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll(@Args() args: FindManyAddressArgs) {
    return this.addressesService.findAll(args)
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args() args: FindUniqueAddressArgs) {
    return this.addressesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Address)
  async updateAddress(
    @Args('updateAddressInput') args: UpdateAddressInput,
    // @GetUser() user: GetUserType,
  ) {
    const address = await this.prisma.address.findUnique({
      where: { id: args.id },
    })
    if (!address) {
      throw new Error('Address not found')
    }
    // checkRowLevelPermission(user, address.id)
    return this.addressesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Address)
  async removeAddress(@Args() args: FindUniqueAddressArgs) {
    const address = await this.prisma.address.findUnique(args)

    if (!address) {
      throw new Error('Address not found')
    }
    // checkRowLevelPermission(user, address.id)
    return this.addressesService.remove(args)
  }
}
