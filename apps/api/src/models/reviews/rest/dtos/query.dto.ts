import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ReviewQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ReviewScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ReviewScalarFieldEnum))
  searchBy?: string
}
