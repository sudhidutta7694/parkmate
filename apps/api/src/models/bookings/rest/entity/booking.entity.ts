import { IsOptional } from 'class-validator'
import { $Enums, Booking } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingEntity
  implements RestrictProperties<BookingEntity, Booking>
{
  id: number
  createdAt: Date
  updatedAt: Date
  @IsOptional()
  pricePerHour: number
  @IsOptional()
  totalPrice: number
  startTime: Date
  endTime: Date
  vehicleNumber: string
  @IsOptional()
  phoneNumber: string
  @IsOptional()
  passcode: string
  status: $Enums.BookingStatus
  slotId: number
  customerId: string
}
