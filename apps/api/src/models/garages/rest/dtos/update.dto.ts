import { PartialType } from '@nestjs/swagger'
import { CreateGarage } from './create.dto'
import { Garage } from '../../../../../generated/prisma'

export class UpdateGarage extends PartialType(CreateGarage) {
  id: Garage['id']
}
