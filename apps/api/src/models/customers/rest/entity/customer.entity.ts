import { Field } from '@nestjs/graphql'
import { Customer } from '../../../../../generated/prisma'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ApiProperty } from '@nestjs/swagger'

export class CustomerEntity
  implements RestrictProperties<CustomerEntity, Customer>
{
  @ApiProperty()
  uid: string
  @Field(() => Date)
  @ApiProperty()
  createdAt: Date
  @Field(() => Date)
  @ApiProperty()
  updatedAt: Date
  @IsOptional()
  @ApiProperty()
  displayName: string
}
