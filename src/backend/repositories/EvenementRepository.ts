import { Evenement } from "@prisma/client";
import { IEvenementRepository } from "./IEvenementRepository";
import { GenericRepository } from "./generic/PrismaRepository";
import { prisma } from "@/configs/prisma";
import { PaginatedResult } from "@/types/allType";

export class EvenementRepository
  extends GenericRepository<Evenement>
  implements IEvenementRepository
{
  constructor() {
    super(prisma.evenement);
  }

  async getActiveEvenements(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Evenement>> {
    const { page = 1, pageSize = 10 } = pagination;
    const skip = (page - 1) * pageSize;

    const [data, totalItems] = await prisma.$transaction([
      prisma.evenement.findMany({
        where: { etat: true },
        skip,
        take: pageSize,
        orderBy: { dateDebut: "asc" }
      }),
      prisma.evenement.count({ where: { etat: true } })
    ]);

    return {
      data,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize)
    };
  }

  async getEvenementsByDateRange(
    dateDebut: Date,
    dateFin: Date,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Evenement>> {
    const { page = 1, pageSize = 10 } = pagination;
    const skip = (page - 1) * pageSize;

    const [data, totalItems] = await prisma.$transaction([
      prisma.evenement.findMany({
        where: {
          etat: true,
          dateDebut: {
            gte: dateDebut
          },
          dateFin: {
            lte: dateFin
          }
        },
        skip,
        take: pageSize,
        orderBy: { dateDebut: "asc" }
      }),
      prisma.evenement.count({
        where: {
          etat: true,
          dateDebut: {
            gte: dateDebut
          },
          dateFin: {
            lte: dateFin
          }
        }
      })
    ]);

    return {
      data,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize)
    };
  }

  async getUpcomingEvenements(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Evenement>> {
    const { page = 1, pageSize = 10 } = pagination;
    const skip = (page - 1) * pageSize;
    const now = new Date();

    const [data, totalItems] = await prisma.$transaction([
      prisma.evenement.findMany({
        where: {
          etat: true,
          dateDebut: {
            gte: now
          }
        },
        skip,
        take: pageSize,
        orderBy: { dateDebut: "asc" }
      }),
      prisma.evenement.count({
        where: {
          etat: true,
          dateDebut: {
            gte: now
          }
        }
      })
    ]);

    return {
      data,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize)
    };
  }
} 