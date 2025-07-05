import { Field } from '@nestjs/graphql'
import { Manager } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class ManagerEntity
  implements RestrictProperties<ManagerEntity, Manager>
{
  @Field(() => String)
  @ApiProperty()
  uid: string
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @IsOptional()
  @Field(() => String)
  @ApiProperty()
  displayName: string
  @IsOptional()
  @ApiProperty()
  companyId: number
}
