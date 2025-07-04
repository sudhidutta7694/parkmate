import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { ReviewOrderByWithRelationInput } from './order-by.args'
import { ReviewWhereInput, ReviewWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from 'generated/prisma/runtime/library'

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
  omit: Prisma.ReviewOmit<DefaultArgs> | null
  where: ReviewWhereInput
  orderBy: ReviewOrderByWithRelationInput[]
  cursor: ReviewWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ReviewScalarFieldEnum])
  distinct: Prisma.ReviewScalarFieldEnum[]
}

@ArgsType()
export class FindManyReviewArgs extends PartialType(FindManyReviewArgsStrict) {}

@ArgsType()
export class FindUniqueReviewArgs {
  where: ReviewWhereUniqueInput
}
