import { Etudiant } from "@prisma/client";
import { IRepository } from "./generic/IRepository";
import { PaginatedResult } from "@/types/allType";

export interface IStudentRepository extends IRepository<Etudiant> {
  getFilteredStudents(
    filters: {
      searchQuery?: string;
      Date?: Date;

      typeEtudiant?: string;
    },
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Etudiant>>;
}
