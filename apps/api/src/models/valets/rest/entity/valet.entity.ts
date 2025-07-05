import { Field } from '@nestjs/graphql'
import { Valet } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class ValetEntity implements RestrictProperties<ValetEntity, Valet> {
  @ApiProperty()
  uid: string
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @ApiProperty()
  displayName: string
  @IsOptional()
  @ApiProperty()
  image: string
  @ApiProperty()
  licenceID: string
  @IsOptional()
  @ApiProperty()
  companyId: number
}
