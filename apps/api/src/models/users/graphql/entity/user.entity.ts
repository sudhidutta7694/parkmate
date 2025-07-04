import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, User as UserType } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field({ nullable: true })
  image: string
  uid: string
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  name: string
}

@ObjectType()
export class AuthProvider {
  uid: string
  @Field(() => $Enums.AuthProviderType)
  type: $Enums.AuthProviderType
}
