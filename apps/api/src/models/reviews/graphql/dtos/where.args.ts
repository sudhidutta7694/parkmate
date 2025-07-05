import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args'
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args'

@InputType()
export class ReviewWhereUniqueInput {
  id: number
}

@InputType()
export class ReviewWhereInputStrict
  implements RestrictProperties<ReviewWhereInputStrict, Prisma.ReviewWhereInput>
{
  @Field(() => IntFilter)
  id: IntFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => IntFilter)
  rating: IntFilter
  @Field(() => StringFilter)
  comment: StringFilter
  @Field(() => StringFilter)
  customerId: StringFilter
  @Field(() => IntFilter)
  garageId: IntFilter
  @Field(() => CustomerRelationFilter)
  Customer: CustomerRelationFilter
  @Field(() => GarageRelationFilter)
  Garage: GarageRelationFilter

  AND: ReviewWhereInput[]
  OR: ReviewWhereInput[]
  NOT: ReviewWhereInput[]
}

@InputType()
export class ReviewWhereInput extends PartialType(ReviewWhereInputStrict) {}

@InputType()
export class ReviewListRelationFilter {
  every?: ReviewWhereInput
  some?: ReviewWhereInput
  none?: ReviewWhereInput
}

@InputType()
export class ReviewRelationFilter {
  is?: ReviewWhereInput
  isNot?: ReviewWhereInput
}
