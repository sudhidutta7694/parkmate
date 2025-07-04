import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class VerificationOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      VerificationOrderByWithRelationInputStrict,
      Prisma.VerificationOrderByWithRelationInput
    >
{
  createdAt: Prisma.SortOrder
  updatedAt: Prisma.SortOrder
  verified: Prisma.SortOrder
  adminId: Prisma.SortOrder
  garageId: Prisma.SortOrder
  Admin: Prisma.AdminOrderByWithRelationInput
  Garage: Prisma.GarageOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class VerificationOrderByWithRelationInput extends PartialType(
  VerificationOrderByWithRelationInputStrict,
) {}

@InputType()
export class VerificationOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
