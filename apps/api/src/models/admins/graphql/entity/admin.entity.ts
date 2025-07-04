import { Field } from '@nestjs/graphql'
import { Admin as AdminType } from '../../../../../generated/prisma'
import { IsDate, IsString } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class Admin implements RestrictProperties<AdminType, AdminType> {
  @Field(() => String)
  @IsString()
  uid: string

  @Field(() => Date)
  @IsDate()
  createdAt: Date

  @Field(() => Date)
  @IsDate()
  updatedAt: Date
}
