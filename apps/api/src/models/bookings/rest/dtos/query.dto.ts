import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class BookingQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.BookingScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.BookingScalarFieldEnum))
  searchBy?: string
}
