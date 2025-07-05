import { Field } from '@nestjs/graphql'
import { Company } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class CompanyEntity
  implements RestrictProperties<CompanyEntity, Company>
{
  @ApiProperty()
  id: number
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @IsOptional()
  @ApiProperty()
  displayName: string
  @IsOptional()
  @ApiProperty()
  description: string
}
