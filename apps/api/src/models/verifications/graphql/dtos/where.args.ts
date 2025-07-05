import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AdminRelationFilter } from 'src/models/admins/graphql/dtos/where.args'
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args'

@InputType()
export class VerificationWhereUniqueInput {
  garageId: number
}

@InputType()
export class VerificationWhereInputStrict
  implements
    RestrictProperties<
      VerificationWhereInputStrict,
      Prisma.VerificationWhereInput
    >
{
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => BoolFilter)
  verified: BoolFilter
  @Field(() => StringFilter)
  adminId: StringFilter
  @Field(() => IntFilter)
  garageId: IntFilter
  @Field(() => AdminRelationFilter)
  Admin: AdminRelationFilter
  @Field(() => GarageRelationFilter)
  Garage: GarageRelationFilter
  AND: VerificationWhereInput[]
  OR: VerificationWhereInput[]
  NOT: VerificationWhereInput[]
}

@InputType()
export class VerificationWhereInput extends PartialType(
  VerificationWhereInputStrict,
) {}

@InputType()
export class VerificationListRelationFilter {
  every?: VerificationWhereInput
  some?: VerificationWhereInput
  none?: VerificationWhereInput
}

@InputType()
export class VerificationRelationFilter {
  is?: VerificationWhereInput
  isNot?: VerificationWhereInput
}
