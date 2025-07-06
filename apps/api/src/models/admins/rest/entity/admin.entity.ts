import { Admin } from '../../../../../generated/prisma'
import { IsDate, IsString } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class AdminEntity implements RestrictProperties<AdminEntity, Admin> {
  @IsString()
  @ApiProperty()
  uid: string

  @IsDate()
  @ApiProperty()
  createdAt: Date

  @IsDate()
  @ApiProperty()
  updatedAt: Date
}
