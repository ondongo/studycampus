import {  Etudiant } from "@prisma/client";
import { IStudentRepository } from "./IStudentRepository";
import { GenericRepository } from "./generic/PrismaRepository";
import { prisma } from "@/configs/prisma";
import { PaginatedResult } from "@/types/allType";

export class StudentRepository
  extends GenericRepository<Etudiant>
  implements IStudentRepository
{
  constructor() {
    super(prisma.etudiant);
  }

  async getFilteredStudents(
    filters: {
      searchQuery?: string;
      typeStudent?: string;
      isSeen?: boolean;
      isContacted?: boolean;
      startDate?: Date;
      endDate?: Date;
    },
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ):Promise<PaginatedResult<Etudiant>> {
    const { searchQuery, typeStudent, isSeen, isContacted, startDate, endDate } = filters;
    const { page = 1, pageSize = 10 } = pagination;

    const whereClause: any = {};

    if (searchQuery) {
      whereClause.OR = [
        { fname: { contains: searchQuery, mode: "insensitive" } },
        { lname: { contains: searchQuery, mode: "insensitive" } },
        { email: { contains: searchQuery, mode: "insensitive" } },
        { school: { contains: searchQuery, mode: "insensitive" } }
      ];
    }

    if (typeStudent) {
      whereClause.typeStudent = typeStudent;
    }

    if (isSeen !== undefined) {
      whereClause.isSeen = isSeen;
    }

    if (isContacted !== undefined) {
      whereClause.isContacted = isContacted;
    }

    if (startDate || endDate) {
      whereClause.createdAt = {};
      if (startDate) {
        whereClause.createdAt.gte = startDate;
      }
      if (endDate) {
        whereClause.createdAt.lte = endDate;
      }
    }

    const total = await prisma.etudiant.count({ where: whereClause });

    const data = await prisma.etudiant.findMany({
      where: whereClause,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: "desc"
      }
    });

    return {
      data,
      totalItems: total,
      totalPages: Math.ceil(total / pageSize)
    };
  }
}
