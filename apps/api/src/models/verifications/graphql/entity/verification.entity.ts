import { Field, ObjectType } from '@nestjs/graphql'
import { Verification as VerificationType } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Verification
  implements RestrictProperties<Verification, VerificationType>
{
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
  verified: boolean
  @Field(() => String)
  adminId: string
  @Field(() => Number)
  garageId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
