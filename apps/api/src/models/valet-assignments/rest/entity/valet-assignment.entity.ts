import { Field } from '@nestjs/graphql'
import { ValetAssignment } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class ValetAssignmentEntity
  implements RestrictProperties<ValetAssignmentEntity, ValetAssignment>
{
  @Field(() => Number)
  @ApiProperty()
  bookingId: number
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @Field(() => Number)
  @ApiProperty()
  pickupLat: number
  @Field(() => Number)
  @ApiProperty()
  pickupLng: number
  @IsOptional()
  @Field(() => Number)
  @ApiProperty()
  returnLat: number
  @IsOptional()
  @Field(() => Number)
  @ApiProperty()
  returnLng: number
  @Field(() => String)
  @ApiProperty()
  pickupValetId: string
  @Field(() => String)
  @ApiProperty()
  returnValetId: string
}
