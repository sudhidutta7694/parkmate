// import { CreateUserInput } from './create-user.input'
import { User } from '../entity/user.entity'
import { InputType, PartialType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(User) {
  @Field(() => String)
  uid: string
}
