import { Etudiant } from "@prisma/client";
import { IRepository } from "./generic/IRepository";
import { PaginatedResult } from "@/types/allType";

export interface IStudentRepository extends IRepository<Etudiant> {
  getFilteredStudents(
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
  ): Promise<PaginatedResult<Etudiant>>;
}
