import { Field, ObjectType } from '@nestjs/graphql'
import { Valet as ValetType } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Valet implements RestrictProperties<Valet, ValetType> {
  uid: string
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
  displayName: string
  @Field({ nullable: true })
  image: string
  licenceID: string
  @Field({ nullable: true })
  companyId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
