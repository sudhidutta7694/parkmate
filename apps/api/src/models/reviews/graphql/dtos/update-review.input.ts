import { CreateReviewInput } from './create-review.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Review } from '../../../../../generated/prisma'

@InputType()
export class UpdateReviewInput extends PartialType(CreateReviewInput) {
  id: Review['id']
}
