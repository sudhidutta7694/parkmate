import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { Field } from '@nestjs/graphql'

export class CustomerQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.CustomerScalarFieldEnum))
  @Field(() => String, { nullable: true })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.CustomerScalarFieldEnum))
  @Field(() => String, { nullable: true })
  searchBy?: string
}
