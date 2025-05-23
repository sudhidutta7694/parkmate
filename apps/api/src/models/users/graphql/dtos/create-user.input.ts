// import { InputType, PickType } from '@nestjs/graphql'
// import { User } from '../entity/user.entity'

// @InputType()
// export class CreateUserInput extends PickType(
//   User,
//   ['uid', 'name'],
//   InputType,
// ) {}

import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field()
  uid: string

  @Field()
  name: string
}
