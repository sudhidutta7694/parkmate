import {
  ArgsType,
  Field,
  Int,
  registerEnumType,
  PartialType,
  HideField,
} from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { ManagerOrderByWithRelationInput } from './order-by.args'
import { ManagerWhereInput, ManagerWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from 'generated/prisma/runtime/library'

// Register enum for GraphQL
registerEnumType(Prisma.ManagerScalarFieldEnum, {
  name: 'ManagerScalarFieldEnum',
})

@ArgsType()
class FindManyManagerArgsStrict
  implements
    RestrictProperties<
      FindManyManagerArgsStrict,
      Omit<Prisma.ManagerFindManyArgs, 'include' | 'select'>
    >
{
  @HideField()
  omit: Prisma.ManagerOmit<DefaultArgs> | null

  @Field(() => ManagerWhereInput, { nullable: true })
  where: ManagerWhereInput

  @Field(() => [ManagerOrderByWithRelationInput], { nullable: true })
  orderBy: ManagerOrderByWithRelationInput[]

  @Field(() => ManagerWhereUniqueInput, { nullable: true })
  cursor: ManagerWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take: number

  @Field(() => Int, { nullable: true })
  skip: number

  @Field(() => [Prisma.ManagerScalarFieldEnum], { nullable: true })
  distinct: Prisma.ManagerScalarFieldEnum[]
}

@ArgsType()
export class FindManyManagerArgs extends PartialType(
  FindManyManagerArgsStrict,
) {}

@ArgsType()
export class FindUniqueManagerArgs {
  @Field(() => ManagerWhereUniqueInput)
  where!: ManagerWhereUniqueInput
}
