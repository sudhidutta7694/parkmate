import { IsOptional } from 'class-validator'
import { $Enums, Booking } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { Field } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'

export class BookingEntity
  implements RestrictProperties<BookingEntity, Booking>
{
  @Field(() => Number)
  @ApiProperty()
  id: number
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @IsOptional()
  @Field(() => Number)
  @ApiProperty()
  pricePerHour: number
  @IsOptional()
  @Field(() => Number)
  @ApiProperty()
  totalPrice: number
  @Field(() => Date)
  @ApiProperty()
  startTime: Date
  @Field(() => Date)
  @ApiProperty()
  endTime: Date
  @ApiProperty()
  vehicleNumber: string
  @IsOptional()
  @ApiProperty()
  phoneNumber: string
  @IsOptional()
  @ApiProperty()
  passcode: string
  @ApiProperty()
  status: $Enums.BookingStatus
  @ApiProperty()
  slotId: number
  @ApiProperty()
  customerId: string
}
