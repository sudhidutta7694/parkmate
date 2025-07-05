import { Field, ObjectType } from '@nestjs/graphql'
import { Manager as ManagerType } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Manager implements RestrictProperties<Manager, ManagerType> {
  uid: string
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
  @Field({ nullable: true })
  displayName: string
  companyId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
