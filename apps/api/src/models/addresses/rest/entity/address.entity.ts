import { Address } from '../../../../../generated/prisma'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AddressEntity
  implements RestrictProperties<AddressEntity, Address>
{
  @IsString()
  address: string
  @IsInt()
  id: number
  @IsDate()
  createdAt: Date
  @IsDate()
  updatedAt: Date
  @IsInt()
  lat: number
  @IsInt()
  lng: number
  @IsInt()
  garageId: number
}
