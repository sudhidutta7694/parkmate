import { Field, ObjectType } from '@nestjs/graphql'
import { Review as ReviewType } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Review implements RestrictProperties<Review, ReviewType> {
  id: number
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
  rating: number
  @Field({ nullable: true })
  comment: string
  customerId: string
  garageId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
