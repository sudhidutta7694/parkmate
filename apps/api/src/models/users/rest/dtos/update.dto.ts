import { PartialType } from '@nestjs/swagger'
import { CreateUser } from './create.dto'
// import { User } from '../../../.././../generated/prisma'
import { Field } from '@nestjs/graphql'

export class UpdateUser extends PartialType(CreateUser) {
  @Field(() => String)
  uid: string
}
