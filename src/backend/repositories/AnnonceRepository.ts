import { Annonce } from "@prisma/client";
import { IAnnonceRepository } from "./IAnnonceRepository";
import { GenericRepository } from "./generic/PrismaRepository";
import { prisma } from "@/configs/prisma";
import { PaginatedResult } from "@/types/allType";

export class AnnonceRepository
  extends GenericRepository<Annonce>
  implements IAnnonceRepository
{
  constructor() {
    super(prisma.annonce);
  }

  async getActiveAnnonces(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Annonce>> {
    const { page = 1, pageSize = 10 } = pagination;
    const skip = (page - 1) * pageSize;

    const [data, totalItems] = await prisma.$transaction([
      prisma.annonce.findMany({
        where: { etat: true },
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" }
      }),
      prisma.annonce.count({ where: { etat: true } })
    ]);

    return {
      data,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize)
    };
  }

  async getAnnoncesByEtat(
    etat: boolean,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Annonce>> {
    const { page = 1, pageSize = 10 } = pagination;
    const skip = (page - 1) * pageSize;

    const [data, totalItems] = await prisma.$transaction([
      prisma.annonce.findMany({
        where: { etat },
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" }
      }),
      prisma.annonce.count({ where: { etat } })
    ]);

    return {
      data,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize)
    };
  }
} 