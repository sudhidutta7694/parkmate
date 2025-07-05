import {
  ArgsType,
  Field,
  Int,
  registerEnumType,
  PartialType,
  HideField,
} from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { SlotOrderByWithRelationInput } from './order-by.args'
import { SlotWhereInput, SlotWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from 'generated/prisma/runtime/library'

// Register enum for GraphQL
registerEnumType(Prisma.SlotScalarFieldEnum, {
  name: 'SlotScalarFieldEnum',
})

@ArgsType()
class FindManySlotArgsStrict
  implements
    RestrictProperties<
      FindManySlotArgsStrict,
      Omit<Prisma.SlotFindManyArgs, 'include' | 'select'>
    >
{
  @HideField()
  omit: Prisma.SlotOmit<DefaultArgs> | null

  @Field(() => SlotWhereInput, { nullable: true })
  where: SlotWhereInput

  @Field(() => [SlotOrderByWithRelationInput], { nullable: true })
  orderBy: SlotOrderByWithRelationInput[]

  @Field(() => SlotWhereUniqueInput, { nullable: true })
  cursor: SlotWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take: number

  @Field(() => Int, { nullable: true })
  skip: number

  @Field(() => [Prisma.SlotScalarFieldEnum], { nullable: true })
  distinct: Prisma.SlotScalarFieldEnum[]
}

@ArgsType()
export class FindManySlotArgs extends PartialType(FindManySlotArgsStrict) {}

@ArgsType()
export class FindUniqueSlotArgs {
  @Field(() => SlotWhereUniqueInput)
  where!: SlotWhereUniqueInput
}
