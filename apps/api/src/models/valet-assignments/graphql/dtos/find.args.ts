import {
  ArgsType,
  Field,
  Int,
  registerEnumType,
  PartialType,
  HideField,
} from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { ValetAssignmentOrderByWithRelationInput } from './order-by.args'
import {
  ValetAssignmentWhereInput,
  ValetAssignmentWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from 'generated/prisma/runtime/library'

registerEnumType(Prisma.ValetAssignmentScalarFieldEnum, {
  name: 'ValetAssignmentScalarFieldEnum',
})

@ArgsType()
class FindManyValetAssignmentArgsStrict
  implements
    RestrictProperties<
      FindManyValetAssignmentArgsStrict,
      Omit<Prisma.ValetAssignmentFindManyArgs, 'include' | 'select'>
    >
{
  @HideField()
  omit: Prisma.ValetAssignmentOmit<DefaultArgs> | null

  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  where: ValetAssignmentWhereInput

  @Field(() => [ValetAssignmentOrderByWithRelationInput], { nullable: true })
  orderBy: ValetAssignmentOrderByWithRelationInput[]

  @Field(() => ValetAssignmentWhereUniqueInput, { nullable: true })
  cursor: Prisma.ValetAssignmentWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take: number

  @Field(() => Int, { nullable: true })
  skip: number

  @Field(() => [Prisma.ValetAssignmentScalarFieldEnum], { nullable: true })
  distinct: Prisma.ValetAssignmentScalarFieldEnum[]
}

@ArgsType()
export class FindManyValetAssignmentArgs extends PartialType(
  FindManyValetAssignmentArgsStrict,
) {}

@ArgsType()
export class FindUniqueValetAssignmentArgs {
  @Field(() => ValetAssignmentWhereUniqueInput)
  where!: ValetAssignmentWhereUniqueInput
}
