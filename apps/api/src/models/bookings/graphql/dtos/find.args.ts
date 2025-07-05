import {
  ArgsType,
  Field,
  Int,
  registerEnumType,
  PartialType,
  HideField,
} from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
import { BookingOrderByWithRelationInput } from './order-by.args'
import { BookingWhereInput, BookingWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { DefaultArgs } from 'generated/prisma/runtime/library'

// Register Prisma enum for GraphQL
registerEnumType(Prisma.BookingScalarFieldEnum, {
  name: 'BookingScalarFieldEnum',
})

@ArgsType()
class FindManyBookingArgsStrict
  implements
    RestrictProperties<
      FindManyBookingArgsStrict,
      Omit<Prisma.BookingFindManyArgs, 'include' | 'select'>
    >
{
  @HideField()
  omit: Prisma.BookingOmit<DefaultArgs> | null

  @Field(() => BookingWhereInput, { nullable: true })
  where: BookingWhereInput

  @Field(() => [BookingOrderByWithRelationInput], { nullable: true })
  orderBy: BookingOrderByWithRelationInput[]

  @Field(() => BookingWhereUniqueInput, { nullable: true })
  cursor: BookingWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take: number

  @Field(() => Int, { nullable: true })
  skip: number

  @Field(() => [Prisma.BookingScalarFieldEnum], { nullable: true })
  distinct: Prisma.BookingScalarFieldEnum[]
}

@ArgsType()
export class FindManyBookingArgs extends PartialType(
  FindManyBookingArgsStrict,
) {}

@ArgsType()
export class FindUniqueBookingArgs {
  @Field(() => BookingWhereUniqueInput)
  where!: BookingWhereUniqueInput
}
