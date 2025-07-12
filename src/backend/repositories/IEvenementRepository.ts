import { Evenement } from "@prisma/client";
import { IRepository } from "./generic/IRepository";
import { PaginatedResult } from "@/types/allType";

export interface IEvenementRepository extends IRepository<Evenement> {
  getActiveEvenements(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Evenement>>;
  
  getEvenementsByDateRange(
    dateDebut: Date,
    dateFin: Date,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Evenement>>;
  
  getUpcomingEvenements(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Evenement>>;
} 