import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class GarageQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.GarageScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.GarageScalarFieldEnum))
  searchBy?: string
}
