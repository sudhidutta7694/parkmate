import {
  ArgsType,
  Field,
  Int,
  registerEnumType,
  PartialType,
  HideField,
} from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { AdminOrderByWithRelationInput } from './order-by.args'
import { AdminWhereInput, AdminWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from '.prisma/client/runtime/library'

registerEnumType(Prisma.AdminScalarFieldEnum, {
  name: 'AdminScalarFieldEnum',
})

@ArgsType()
class FindManyAdminArgsStrict
  implements
    RestrictProperties<
      FindManyAdminArgsStrict,
      Omit<Prisma.AdminFindManyArgs, 'include' | 'select'>
    >
{
  @HideField()
  omit: Prisma.AdminOmit<DefaultArgs> | null

  @Field(() => AdminWhereInput, { nullable: true })
  where: AdminWhereInput

  @Field(() => [AdminOrderByWithRelationInput], { nullable: true })
  orderBy: AdminOrderByWithRelationInput[]

  @Field(() => AdminWhereUniqueInput, { nullable: true })
  cursor: AdminWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take: number

  @Field(() => Int, { nullable: true })
  skip: number

  @Field(() => [Prisma.AdminScalarFieldEnum], { nullable: true })
  distinct: Prisma.AdminScalarFieldEnum[]
}

@ArgsType()
export class FindManyAdminArgs extends PartialType(FindManyAdminArgsStrict) {}

@ArgsType()
export class FindUniqueAdminArgs {
  @Field(() => AdminWhereUniqueInput)
  where!: AdminWhereUniqueInput
}
