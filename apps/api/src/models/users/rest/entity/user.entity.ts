import { Field } from '@nestjs/graphql'
import { User } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class UserEntity implements RestrictProperties<UserEntity, User> {
  @Field(() => String)
  uid: string
  createdAt: Date
  updatedAt: Date
  @IsOptional()
  name: string
  @IsOptional()
  image: string
}
