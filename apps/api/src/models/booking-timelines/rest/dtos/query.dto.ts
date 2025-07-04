import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '../../../../../generated/prisma'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class BookingTimelineQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.BookingTimelineScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.BookingTimelineScalarFieldEnum))
  searchBy?: string
}
