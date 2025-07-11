import { CreateAdminInput } from './create-admin.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Admin } from '../../../../../generated/prisma'

@InputType()
export class UpdateAdminInput extends PartialType(CreateAdminInput) {
  uid: Admin['uid']
}
