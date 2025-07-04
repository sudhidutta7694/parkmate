import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class CompanyQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.CompanyScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.CompanyScalarFieldEnum))
  searchBy?: string
}
