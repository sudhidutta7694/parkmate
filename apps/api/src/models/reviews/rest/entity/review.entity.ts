import { Field } from '@nestjs/graphql'
import { Review } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class ReviewEntity implements RestrictProperties<ReviewEntity, Review> {
  @Field(() => Number)
  @ApiProperty()
  id: number
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @Field(() => Number)
  @ApiProperty()
  rating: number
  @IsOptional()
  @ApiProperty()
  comment: string
  @ApiProperty()
  customerId: string
  @ApiProperty()
  garageId: number
}
