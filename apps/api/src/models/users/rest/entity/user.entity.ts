import { Field } from '@nestjs/graphql'
import { User } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class UserEntity implements RestrictProperties<UserEntity, User> {
  @Field(() => String)
  @ApiProperty()
  uid: string
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @IsOptional()
  @Field(() => String)
  @ApiProperty()
  name: string
  @IsOptional()
  @Field(() => String)
  @ApiProperty()
  image: string
}
