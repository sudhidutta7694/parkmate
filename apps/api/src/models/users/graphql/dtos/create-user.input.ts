import {
  Field,
  InputType,
  ObjectType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql'
import { AuthProviderType } from 'generated/prisma'
import { User } from '../entity/user.entity'

registerEnumType(AuthProviderType, {
  name: 'AuthProviderType',
})

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['uid', 'name', 'image'],
  InputType,
) {
  @Field(() => AuthProviderType)
  type: AuthProviderType

  @Field()
  uid: string

  @Field()
  name: string
}

@InputType()
export class RegisterWithCredentialsInput {
  @Field()
  email: string

  @Field()
  password: string

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  image?: string
}

@InputType()
export class LoginInput extends PickType(RegisterWithCredentialsInput, [
  'email',
  'password',
]) {}

@ObjectType()
export class LoginOutput {
  @Field(() => String)
  jwtToken: string
}
