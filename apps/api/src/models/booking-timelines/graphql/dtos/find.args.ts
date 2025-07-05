import {
  ArgsType,
  Field,
  Int,
  registerEnumType,
  PartialType,
  HideField,
} from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { BookingTimelineOrderByWithRelationInput } from './order-by.args'
import {
  BookingTimelineWhereInput,
  BookingTimelineWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from 'generated/prisma/runtime/library'

// Register enum for GraphQL
registerEnumType(Prisma.BookingTimelineScalarFieldEnum, {
  name: 'BookingTimelineScalarFieldEnum',
})

@ArgsType()
class FindManyBookingTimelineArgsStrict
  implements
    RestrictProperties<
      FindManyBookingTimelineArgsStrict,
      Omit<Prisma.BookingTimelineFindManyArgs, 'include' | 'select'>
    >
{
  @HideField()
  omit: Prisma.BookingTimelineOmit<DefaultArgs> | null

  @Field(() => BookingTimelineWhereInput, { nullable: true })
  where: BookingTimelineWhereInput

  @Field(() => [BookingTimelineOrderByWithRelationInput], { nullable: true })
  orderBy: BookingTimelineOrderByWithRelationInput[]

  @Field(() => BookingTimelineWhereUniqueInput, { nullable: true })
  cursor: BookingTimelineWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take: number

  @Field(() => Int, { nullable: true })
  skip: number

  @Field(() => [Prisma.BookingTimelineScalarFieldEnum], { nullable: true })
  distinct: Prisma.BookingTimelineScalarFieldEnum[]
}

@ArgsType()
export class FindManyBookingTimelineArgs extends PartialType(
  FindManyBookingTimelineArgsStrict,
) {}

@ArgsType()
export class FindUniqueBookingTimelineArgs {
  @Field(() => BookingTimelineWhereUniqueInput)
  where!: BookingTimelineWhereUniqueInput
}
