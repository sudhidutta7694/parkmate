import { Field, ObjectType } from '@nestjs/graphql'
import {
  User as UserType,
  AuthProviderType,
} from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field({ nullable: true })
  image: string
  uid: string
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
  @Field({ nullable: true })
  name: string
}

@ObjectType()
export class AuthProvider {
  uid: string
  @Field(() => AuthProviderType)
  type: AuthProviderType
}
