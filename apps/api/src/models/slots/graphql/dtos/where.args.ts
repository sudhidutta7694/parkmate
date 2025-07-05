import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '../../../../../generated/prisma'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args'

@InputType()
export class SlotWhereUniqueInput {
  id: number
}
@InputType()
export class EnumSlotTypeFilter {
  @Field(() => $Enums.SlotType, { nullable: true })
  equals?: $Enums.SlotType;
  @Field(() => [$Enums.SlotType], { nullable: true })
  in?: $Enums.SlotType[]
  @Field(() => [$Enums.SlotType], { nullable: true })
  notIn?: $Enums.SlotType[]
  @Field(() => $Enums.SlotType, { nullable: true })
  not?: $Enums.SlotType
}

@InputType()
export class SlotWhereInputStrict
  implements RestrictProperties<SlotWhereInputStrict, Prisma.SlotWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  displayName: StringFilter

  @Field(() => FloatFilter, { nullable: true })
  pricePerHour: FloatFilter

  @Field(() => IntFilter, { nullable: true })
  length: IntFilter

  @Field(() => IntFilter, { nullable: true })
  width: IntFilter

  @Field(() => IntFilter, { nullable: true })
  height: IntFilter

  @Field(() => EnumSlotTypeFilter)
  type: EnumSlotTypeFilter

  @Field(() => IntFilter, { nullable: true })
  garageId: IntFilter

  @Field(() => GarageRelationFilter, { nullable: true })
  Garage: GarageRelationFilter

  @Field(() => BookingListRelationFilter, { nullable: true })
  Bookings: BookingListRelationFilter

  AND: SlotWhereInput[]

  OR: SlotWhereInput[]

  NOT: SlotWhereInput[]
}

@InputType()
export class SlotWhereInput extends PartialType(SlotWhereInputStrict) {}

@InputType()
export class SlotListRelationFilter {
  every?: SlotWhereInput
  some?: SlotWhereInput
  none?: SlotWhereInput
}

@InputType()
export class SlotRelationFilter {
  is?: SlotWhereInput
  isNot?: SlotWhereInput
}
