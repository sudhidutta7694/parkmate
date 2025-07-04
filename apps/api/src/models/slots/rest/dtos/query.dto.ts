import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class SlotQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.SlotScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.SlotScalarFieldEnum))
  searchBy?: string
}
