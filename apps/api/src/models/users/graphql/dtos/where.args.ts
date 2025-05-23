import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '../../../../../generated/prisma'
// import { RestrictProperties } from 'src/common/dtos/common.input'
import { StringFilter } from 'src/common/dtos/common.input'
import { DateTimeFilter } from 'src/common/dtos/common.input'

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String)
  uid: string
}

@InputType()
class UserWhereBase {
  @Field(() => StringFilter, { nullable: true })
  uid?: Prisma.StringFilter<'User'>

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: Prisma.DateTimeFilter<'User'>

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: Prisma.DateTimeFilter<'User'>

  @Field(() => StringFilter, { nullable: true })
  name?: Prisma.StringNullableFilter<'User'> | null
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereBase) {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: UserWhereInput[]

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: UserWhereInput[]

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: UserWhereInput[]
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  every?: UserWhereInput

  @Field(() => UserWhereInput, { nullable: true })
  some?: UserWhereInput

  @Field(() => UserWhereInput, { nullable: true })
  none?: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is?: UserWhereInput

  @Field(() => UserWhereInput, { nullable: true })
  isNot?: UserWhereInput
}
