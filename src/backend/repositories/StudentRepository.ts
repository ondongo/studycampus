import { Prisma, Etudiant } from "@prisma/client";
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
      Date?: Date;

      typeEtudiant?: string;
    },
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ):Promise<PaginatedResult<Etudiant>> {
    const { searchQuery, Date, typeEtudiant } = filters;
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

    if (Date) {
      whereClause.birthDate = {
        equals: Date
      };
    }

    if (typeEtudiant) {
      whereClause.typeStudent = typeEtudiant;
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
