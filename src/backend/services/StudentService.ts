import { Etudiant } from "@prisma/client";
import { StudentRepository } from "@/backend/repositories/StudentRepository";
import { PaginatedResult } from "@/types/allType";

export class StudentService {
  private repository: StudentRepository;

  constructor(repository: StudentRepository) {
    this.repository = repository;
  }
  
  async getAllStudents(
    page: number,
    pageSize: number
  ): Promise<PaginatedResult<Etudiant>> {
    return this.repository.findAll(page, pageSize);
  }

  async getStudentById(id: string): Promise<Etudiant | null> {
    return this.repository.findById(id);
  }

  async createStudent(StudentData: Etudiant): Promise<void> {
    return this.repository.save(StudentData);
  }

  async deleteStudent(id: string): Promise<void> {
    return this.repository.delete(id);
  }

  async markStudentAsSeen(id: string): Promise<void> {
    return this.repository.update(id, { isSeen: true });
  }

  async markStudentAsContacted(id: string): Promise<void> {
    return this.repository.update(id, { isContacted: true });
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
  ): Promise<PaginatedResult<Etudiant>> {
    return this.repository.getFilteredStudents(filters, pagination);
  }


}
