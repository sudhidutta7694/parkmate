import { Field, ObjectType } from '@nestjs/graphql'
import { User as UserType } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field(() => String, {
    nullable: true,
  })
  image: string | null
  @Field(() => String)
  uid: string
  createdAt: Date
  updatedAt: Date
  @Field({
    nullable: true,
  })
  @Field(() => String)
  name: string
}
