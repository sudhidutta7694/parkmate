import { Field, ObjectType } from '@nestjs/graphql'
import { ValetAssignment as ValetAssignmentType } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class ValetAssignment
  implements RestrictProperties<ValetAssignment, ValetAssignmentType>
{
  @Field(() => Number)
  bookingId: number
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
  @Field(() => Number)
  pickupLat: number
  @Field(() => Number)
  pickupLng: number
  @Field({ nullable: true })
  returnLat: number
  @Field({ nullable: true })
  returnLng: number
  @Field({ nullable: true })
  pickupValetId: string
  @Field({ nullable: true })
  returnValetId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
