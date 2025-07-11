import { PartialType } from '@nestjs/swagger'
import { CreateValetAssignment } from './create.dto'
import { ValetAssignment } from '../../../../../generated/prisma'

export class UpdateValetAssignment extends PartialType(CreateValetAssignment) {
  bookingId: ValetAssignment['bookingId']
}
