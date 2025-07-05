import {
  ArgsType,
  Field,
  Int,
  registerEnumType,
  PartialType,
  HideField,
} from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { ReviewOrderByWithRelationInput } from './order-by.args'
import { ReviewWhereInput, ReviewWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from 'generated/prisma/runtime/library'

// Register enum for GraphQL
registerEnumType(Prisma.ReviewScalarFieldEnum, {
  name: 'ReviewScalarFieldEnum',
})

@ArgsType()
class FindManyReviewArgsStrict
  implements
    RestrictProperties<
      FindManyReviewArgsStrict,
      Omit<Prisma.ReviewFindManyArgs, 'include' | 'select'>
    >
{
  @HideField()
  omit: Prisma.ReviewOmit<DefaultArgs> | null

  @Field(() => ReviewWhereInput, { nullable: true })
  where: ReviewWhereInput

  @Field(() => [ReviewOrderByWithRelationInput], { nullable: true })
  orderBy: ReviewOrderByWithRelationInput[]

  @Field(() => ReviewWhereUniqueInput, { nullable: true })
  cursor: ReviewWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take: number

  @Field(() => Int, { nullable: true })
  skip: number

  @Field(() => [Prisma.ReviewScalarFieldEnum], { nullable: true })
  distinct: Prisma.ReviewScalarFieldEnum[]
}

@ArgsType()
export class FindManyReviewArgs extends PartialType(FindManyReviewArgsStrict) {}

@ArgsType()
export class FindUniqueReviewArgs {
  @Field(() => ReviewWhereUniqueInput)
  where!: ReviewWhereUniqueInput
}
