import { Field, ObjectType, Float, Int } from '@nestjs/graphql'
import { Address as AddressType } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Address implements RestrictProperties<Address, AddressType> {
  @Field(() => Int)
  id: number

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field(() => String)
  address: string

  @Field(() => Float)
  lat: number

  @Field(() => Float)
  lng: number

  @Field(() => Int, { nullable: true })
  garageId: number
}
