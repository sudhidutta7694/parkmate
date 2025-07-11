import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class AdminQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.AdminScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.AdminScalarFieldEnum))
  searchBy?: string
}
