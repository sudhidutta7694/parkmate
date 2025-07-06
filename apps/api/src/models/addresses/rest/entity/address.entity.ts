import { Address } from '../../../../../generated/prisma'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class AddressEntity
  implements RestrictProperties<AddressEntity, Address>
{
  @IsString()
  @ApiProperty()
  address: string
  @IsInt()
  @ApiProperty()
  id: number
  @IsDate()
  @ApiProperty()
  createdAt: Date
  @IsDate()
  @ApiProperty()
  updatedAt: Date
  @IsInt()
  @ApiProperty()
  lat: number
  @IsInt()
  @ApiProperty()
  lng: number
  @IsInt()
  @ApiProperty()
  garageId: number
}
