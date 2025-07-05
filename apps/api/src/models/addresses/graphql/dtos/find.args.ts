import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
  HideField,
} from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { AddressOrderByWithRelationInput } from './order-by.args'
import { AddressWhereInput, AddressWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from 'generated/prisma/runtime/library'

registerEnumType(Prisma.AddressScalarFieldEnum, {
  name: 'AddressScalarFieldEnum',
})

@ArgsType()
class FindManyAddressArgsStrict
  implements
    RestrictProperties<
      FindManyAddressArgsStrict,
      Omit<Prisma.AddressFindManyArgs, 'include' | 'select'>
    >
{
  @HideField() // 👈 This hides it from the GraphQL schema
  omit: Prisma.AddressOmit<DefaultArgs> | null

  @Field(() => AddressWhereInput, { nullable: true })
  where: AddressWhereInput

  @Field(() => [AddressOrderByWithRelationInput], { nullable: true })
  orderBy: AddressOrderByWithRelationInput[]

  @Field(() => AddressWhereUniqueInput, { nullable: true })
  cursor: AddressWhereUniqueInput

  @Field(() => Number, { nullable: true })
  take: number

  @Field(() => Number, { nullable: true })
  skip: number

  @Field(() => [Prisma.AddressScalarFieldEnum], { nullable: true })
  distinct: Prisma.AddressScalarFieldEnum[]
}
@ArgsType()
export class FindManyAddressArgs extends PartialType(
  FindManyAddressArgsStrict,
) {}

@ArgsType()
export class FindUniqueAddressArgs {
  where: AddressWhereUniqueInput
}
