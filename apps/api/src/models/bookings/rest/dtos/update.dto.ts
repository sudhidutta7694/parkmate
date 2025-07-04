import { PartialType } from '@nestjs/swagger'
import { CreateBooking } from './create.dto'
import { Booking } from '../../../../../generated/prisma'

export class UpdateBooking extends PartialType(CreateBooking) {
  id: Booking['id']
}
