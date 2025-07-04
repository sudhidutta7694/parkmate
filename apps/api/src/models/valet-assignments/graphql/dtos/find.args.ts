import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
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
  omit: Prisma.ValetAssignmentOmit<DefaultArgs> | null
  where: ValetAssignmentWhereInput
  orderBy: ValetAssignmentOrderByWithRelationInput[]
  cursor: Prisma.ValetAssignmentWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ValetAssignmentScalarFieldEnum])
  distinct: Prisma.ValetAssignmentScalarFieldEnum[]
}

@ArgsType()
export class FindManyValetAssignmentArgs extends PartialType(
  FindManyValetAssignmentArgsStrict,
) {}

@ArgsType()
export class FindUniqueValetAssignmentArgs {
  where: ValetAssignmentWhereUniqueInput
}
