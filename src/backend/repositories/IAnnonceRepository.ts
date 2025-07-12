import { Annonce } from "@prisma/client";
import { IRepository } from "./generic/IRepository";
import { PaginatedResult } from "@/types/allType";

export interface IAnnonceRepository extends IRepository<Annonce> {
  getActiveAnnonces(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Annonce>>;
  
  getAnnoncesByEtat(
    etat: boolean,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Annonce>>;
} 