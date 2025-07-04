import { Injectable } from '@nestjs/common'
import {
  FindManyValetAssignmentArgs,
  FindUniqueValetAssignmentArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateValetAssignmentInput } from './dtos/create-valet-assignment.input'
import { UpdateValetAssignmentInput } from './dtos/update-valet-assignment.input'

@Injectable()
export class ValetAssignmentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createValetAssignmentInput: CreateValetAssignmentInput) {
    return this.prisma.valetAssignment.create({
      data: createValetAssignmentInput,
    })
  }

  findAll(args: FindManyValetAssignmentArgs) {
    return this.prisma.valetAssignment.findMany(args)
  }

  findOne(args: FindUniqueValetAssignmentArgs) {
    const { where, ...rest } = args
    return this.prisma.valetAssignment.findUnique({
      ...rest,
      where:
        where as unknown as import('../../../../generated/prisma').Prisma.ValetAssignmentWhereUniqueInput,
    })
  }

  update(updateValetAssignmentInput: UpdateValetAssignmentInput) {
    const { bookingId, ...data } = updateValetAssignmentInput
    return this.prisma.valetAssignment.update({
      where: { bookingId },
      data: data,
    })
  }

  remove(args: FindUniqueValetAssignmentArgs) {
    const { where } = args
    return this.prisma.valetAssignment.delete({
      where:
        where as unknown as import('../../../../generated/prisma').Prisma.ValetAssignmentWhereUniqueInput,
    })
  }
}
