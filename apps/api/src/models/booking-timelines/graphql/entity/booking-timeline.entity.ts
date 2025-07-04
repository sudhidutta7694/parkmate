import { Field, ObjectType } from '@nestjs/graphql'
import {
  $Enums,
  BookingTimeline as BookingTimelineType,
} from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class BookingTimeline
  implements RestrictProperties<BookingTimeline, BookingTimelineType>
{
  @Field(() => Number)
  id: number

  @Field(() => Date)
  timestamp: Date

  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus

  @Field(() => Number)
  bookingId: number

  @Field(() => String)
  valetId: string
  @Field(() => String)
  managerId: string
}
