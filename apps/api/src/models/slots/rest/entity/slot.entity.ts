import { Field, ObjectType } from '@nestjs/graphql'
import { Slot, SlotType } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

@ObjectType()
export class SlotEntity implements RestrictProperties<SlotEntity, Slot> {
  @ApiProperty()
  id: number
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @IsOptional()
  @ApiProperty()
  displayName: string
  @ApiProperty()
  pricePerHour: number
  @IsOptional()
  @ApiProperty()
  length: number
  @IsOptional()
  @ApiProperty()
  width: number
  @IsOptional()
  @ApiProperty()
  height: number
  @Field(() => SlotType)
  @ApiProperty()
  type: SlotType
  @ApiProperty()
  garageId: number
}
