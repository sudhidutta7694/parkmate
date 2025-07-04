import { Verification } from '../../../../../generated/prisma'
import { IsString } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class VerificationEntity
  implements RestrictProperties<VerificationEntity, Verification>
{
  createdAt: Date
  updatedAt: Date
  verified: boolean
  @IsString()
  adminId: string
  garageId: number
}
