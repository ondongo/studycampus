import { StudentRepository } from "@/backend/repositories/StudentRepository";
import { StudentService } from "@/backend/services/StudentService";
import { Etudiant } from "@prisma/client";

const repository = new StudentRepository();
const studentService = new StudentService(repository);

export const StudentController = {
  async getAllStudents(
    page: number,
    pageSize: number
  ): Promise<{
    Students: Etudiant[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await studentService.getAllStudents(page, pageSize);

    return {
      Students: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },

  async getStudentById(id: string): Promise<Etudiant | null> {
    return await studentService.getStudentById(id);
  },

  async createStudent(StudentData: Etudiant): Promise<void> {
    return await studentService.createStudent(StudentData);
  },

  async deleteStudent(id: string): Promise<void> {
    return await studentService.deleteStudent(id);
  },

  async markStudentAsSeen(id: string): Promise<void> {
    return await studentService.markStudentAsSeen(id);
  },

  async markStudentAsContacted(id: string): Promise<void> {
    return await studentService.markStudentAsContacted(id);
  },

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
  ): Promise<{
    Students: Etudiant[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await studentService.getFilteredStudents(
      filters,
      pagination
    );

    return {
      Students: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },
};
