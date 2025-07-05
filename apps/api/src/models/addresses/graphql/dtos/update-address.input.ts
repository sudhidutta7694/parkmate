import { CreateAddressInput } from './create-address.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Address } from '../../../../../generated/prisma'

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @Field(() => String)
  id: Address['id']
}
