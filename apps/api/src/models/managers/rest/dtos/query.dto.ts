import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ManagerQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ManagerScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ManagerScalarFieldEnum))
  searchBy?: string
}
