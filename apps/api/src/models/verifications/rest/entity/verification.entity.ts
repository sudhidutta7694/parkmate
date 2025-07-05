import { Field } from '@nestjs/graphql'
import { Verification } from '../../../../../generated/prisma'
import { IsString } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class VerificationEntity
  implements RestrictProperties<VerificationEntity, Verification>
{
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @Field(() => Boolean)
  @ApiProperty()
  verified: boolean
  @Field(() => String)
  @IsString()
  @ApiProperty()
  adminId: string
  @Field(() => Number)
  @ApiProperty()
  garageId: number
}
