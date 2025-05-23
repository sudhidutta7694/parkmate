import { CreateUserInput } from './create-user.input'
import { InputType, PartialType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  uid: string
}
