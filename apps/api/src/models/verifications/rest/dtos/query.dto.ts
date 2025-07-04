import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class VerificationQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.VerificationScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.VerificationScalarFieldEnum))
  searchBy?: string
}
