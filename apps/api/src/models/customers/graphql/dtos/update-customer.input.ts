import { CreateCustomerInput } from './create-customer.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Customer } from '../../../../../generated/prisma'

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  uid: Customer['uid']
}
