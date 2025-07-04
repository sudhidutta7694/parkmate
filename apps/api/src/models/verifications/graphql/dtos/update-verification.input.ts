import { CreateVerificationInput } from './create-verification.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Verification } from '../../../../../generated/prisma'

@InputType()
export class UpdateVerificationInput extends PartialType(
  CreateVerificationInput,
) {
  garageId: Verification['garageId']
}
