import { $Enums, BookingTimeline } from '../../../../../generated/prisma'
import { IsString, IsOptional, IsEnum, IsDate, IsNumber } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class BookingTimelineEntity
  implements RestrictProperties<BookingTimelineEntity, BookingTimeline>
{
  @ApiProperty()
  @IsNumber()
  id: number

  @ApiProperty()
  @IsDate()
  timestamp: Date

  @ApiProperty({ enum: $Enums.BookingStatus })
  @IsEnum($Enums.BookingStatus)
  status: $Enums.BookingStatus

  @ApiProperty()
  @IsNumber()
  bookingId: number

  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  @ApiProperty()
  valetId: string

  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  @ApiProperty()
  managerId: string
}
