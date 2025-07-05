import { Field, ObjectType } from '@nestjs/graphql'
import { Garage as GarageType, SlotType } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Garage implements RestrictProperties<Garage, GarageType> {
  id: number
  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
  @Field({ nullable: true })
  displayName: string
  @Field({ nullable: true })
  description: string
  images: string[]
  companyId: number
}

@ObjectType()
export class SlotTypeCount {
  @Field(() => SlotType)
  type: SlotType
  count?: number
}
