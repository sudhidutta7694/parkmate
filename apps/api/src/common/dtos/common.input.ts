import {
  ArgsType,
  Field,
  Float,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '../../../generated/prisma'

// Utility to restrict Prisma types
export type RestrictProperties<T, U> = {
  [K in keyof T]: K extends keyof U ? T[K] : never
} & Required<U>

// === Filters ===

@InputType()
export class DateTimeFilter {
  @Field(() => String, { nullable: true })
  equals?: string;

  @Field(() => [String], { nullable: true })
  in?: string[]

  @Field(() => [String], { nullable: true })
  notIn?: string[]

  @Field(() => String, { nullable: true })
  lt?: string

  @Field(() => String, { nullable: true })
  lte?: string

  @Field(() => String, { nullable: true })
  gt?: string

  @Field(() => String, { nullable: true })
  gte?: string
}

registerEnumType(Prisma.QueryMode, {
  name: 'QueryMode',
})

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;

  @Field(() => [String], { nullable: true })
  in?: string[]

  @Field(() => [String], { nullable: true })
  notIn?: string[]

  @Field(() => String, { nullable: true })
  lt?: string

  @Field(() => String, { nullable: true })
  lte?: string

  @Field(() => String, { nullable: true })
  gt?: string

  @Field(() => String, { nullable: true })
  gte?: string

  @Field(() => String, { nullable: true })
  contains?: string

  @Field(() => String, { nullable: true })
  startsWith?: string

  @Field(() => String, { nullable: true })
  endsWith?: string

  @Field(() => String, { nullable: true })
  not?: string

  @Field(() => Prisma.QueryMode, { nullable: true })
  mode?: Prisma.QueryMode
}

@InputType()
export class StringListFilter {
  @Field(() => [String], { nullable: true })
  equals?: string[]

  @Field(() => String, { nullable: true })
  has?: string

  @Field(() => [String], { nullable: true })
  hasEvery?: string[]

  @Field(() => [String], { nullable: true })
  hasSome?: string[]

  @Field(() => Boolean, { nullable: true })
  isEmpty?: boolean
}

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean

  @Field(() => Boolean, { nullable: true })
  not?: boolean
}

@InputType()
export class IntFilter {
  @Field(() => Number, { nullable: true })
  equals?: number

  @Field(() => Number, { nullable: true })
  lt?: number

  @Field(() => Number, { nullable: true })
  lte?: number

  @Field(() => Number, { nullable: true })
  gt?: number

  @Field(() => Number, { nullable: true })
  gte?: number
}

@InputType()
export class FloatFilter {
  @Field(() => Number, { nullable: true })
  equals?: number

  @Field(() => Number, { nullable: true })
  lt?: number

  @Field(() => Number, { nullable: true })
  lte?: number

  @Field(() => Number, { nullable: true })
  gt?: number

  @Field(() => Number, { nullable: true })
  gte?: number

  @Field(() => Number, { nullable: true })
  not?: number
}

registerEnumType(Prisma.SortOrder, {
  name: 'SortOrder',
})

// === Output Types ===

@ObjectType()
export class AggregateCountOutput {
  @Field(() => Number)
  count: number
}

// === Location & Pagination Inputs ===

@InputType()
export class LocationFilterInput {
  @Field(() => Float)
  ne_lat: number

  @Field(() => Float)
  ne_lng: number

  @Field(() => Float)
  sw_lat: number

  @Field(() => Float)
  sw_lng: number
}

@ArgsType()
export class PaginationInput {
  @Field(() => Number, { nullable: true })
  take?: number

  @Field(() => Number, { nullable: true })
  skip?: number
}
