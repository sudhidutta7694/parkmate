import {
  ArgsType,
  Field,
  Int,
  registerEnumType,
  PartialType,
  HideField,
} from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { CustomerOrderByWithRelationInput } from './order-by.args'
import { CustomerWhereInput, CustomerWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from 'generated/prisma/runtime/library'

registerEnumType(Prisma.CustomerScalarFieldEnum, {
  name: 'CustomerScalarFieldEnum',
})

@ArgsType()
class FindManyCustomerArgsStrict
  implements
    RestrictProperties<
      FindManyCustomerArgsStrict,
      Omit<Prisma.CustomerFindManyArgs, 'include' | 'select'>
    >
{
  @HideField()
  omit: Prisma.CustomerOmit<DefaultArgs> | null

  @Field(() => CustomerWhereInput, { nullable: true })
  where: CustomerWhereInput

  @Field(() => [CustomerOrderByWithRelationInput], { nullable: true })
  orderBy: CustomerOrderByWithRelationInput[]

  @Field(() => CustomerWhereUniqueInput, { nullable: true })
  cursor: CustomerWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take: number

  @Field(() => Int, { nullable: true })
  skip: number

  @Field(() => [Prisma.CustomerScalarFieldEnum], { nullable: true })
  distinct: Prisma.CustomerScalarFieldEnum[]
}

@ArgsType()
export class FindManyCustomerArgs extends PartialType(
  FindManyCustomerArgsStrict,
) {}

@ArgsType()
export class FindUniqueCustomerArgs {
  @Field(() => CustomerWhereUniqueInput)
  where!: CustomerWhereUniqueInput
}
