import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ReviewListRelationFilter } from 'src/models/reviews/graphql/dtos/where.args'

@InputType()
export class CustomerWhereUniqueInput {
  uid: string
}

@InputType()
export class CustomerWhereInputStrict
  implements
    RestrictProperties<CustomerWhereInputStrict, Prisma.CustomerWhereInput>
{
  @Field(() => UserRelationFilter, { nullable: true })
  User: UserRelationFilter

  @Field(() => StringFilter, { nullable: true })
  uid: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  displayName: StringFilter

  @Field(() => BookingListRelationFilter, { nullable: true })
  Bookings: BookingListRelationFilter

  @Field(() => ReviewListRelationFilter, { nullable: true })
  Reviews: ReviewListRelationFilter

  AND: CustomerWhereInput[]

  OR: CustomerWhereInput[]

  NOT: CustomerWhereInput[]
}

@InputType()
export class CustomerWhereInput extends PartialType(CustomerWhereInputStrict) {}

@InputType()
export class CustomerListRelationFilter {
  every?: CustomerWhereInput
  some?: CustomerWhereInput
  none?: CustomerWhereInput
}

@InputType()
export class CustomerRelationFilter {
  is?: CustomerWhereInput
  isNot?: CustomerWhereInput
}
