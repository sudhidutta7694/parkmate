import { Field } from '@nestjs/graphql'
import { Garage } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class GarageEntity implements RestrictProperties<GarageEntity, Garage> {
  @Field(() => Number)
  @ApiProperty()
  id: number
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @Field(() => String)
  @ApiProperty()
  displayName: string
  @IsOptional()
  @ApiProperty()
  description: string
  @ApiProperty()
  images: string[]
  @ApiProperty()
  companyId: number
}
