import { Etudiant, TypeStudent } from "@/types/student";
import { StudentController } from "../controllers/StudentController";

import { Etudiant as PrismaStudent } from "@prisma/client";

export async function deleteStudent(studentId: string): Promise<void> {
  await StudentController.deleteStudent(studentId);
}
export async function createStudent(studentData: PrismaStudent): Promise<void> {
  await StudentController.createStudent(studentData);
}

export async function getStudentById(id: string): Promise<Etudiant | null> {
  const Student: PrismaStudent | null = await StudentController.getStudentById(
    id
  );

  if (!Student) {
    return null;
  }

  return {
    id: Student.id,
    fname: Student.fname,
    lname: Student.lname,
    email: Student.email,
    codeCountry: Student.codeCountry,
    phone: Student.phone,
    school: Student.school,
    yearCompletion: Student.yearCompletion,
    qualification: Student.qualification,
    additionalInfo: Student.additionalInfo ?? undefined,
    birthDate: new Date(Student.birthDate),
    zipUrl: Student.zipUrl,
    createdAt: new Date(Student.createdAt),
    typeStudent: Student.typeStudent as TypeStudent,
    isSeen: Student.isSeen,
    isContacted: Student.isContacted,
  };
}

export async function getAllStudents(page: number, pageSize: number) {
  const result = await StudentController.getAllStudents(page, pageSize);

  const data = result.Students.map((Student) => ({
    id: Student.id,
    fname: Student.fname,
    lname: Student.lname,
    email: Student.email,
    codeCountry: Student.codeCountry,
    phone: Student.phone,
    school: Student.school,
    yearCompletion: Student.yearCompletion,
    qualification: Student.qualification,
    additionalInfo: Student.additionalInfo ?? undefined,
    birthDate: new Date(Student.birthDate),
    zipUrl: Student.zipUrl,
    createdAt: new Date(Student.createdAt),
    typeStudent: Student.typeStudent as TypeStudent,
    isSeen: Student.isSeen,
    isContacted: Student.isContacted,
  }));
  return {
    Students: data,
    totalPages: result.totalPages ?? 1,
    totalItems: result.totalItems ?? 0,
  };
}

export async function getFilteredStudents(
  filters: {
    availability?: boolean;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    location?: string;
    category?: string;
    minRating?: number;
    searchQuery?: string;
    startDate?: Date;
    endDate?: Date;
    saleStatus?: "RENT" | "SALE";
    condition?: string;
  },
  pagination: {
    page?: number;
    pageSize?: number;
  }
) {
  try {
    const result = await StudentController.getFilteredStudents(
      filters,
      pagination
    );
    const data = result.Students.map((Student) => ({
      id: Student.id,
      fname: Student.fname,
      lname: Student.lname,
      email: Student.email,
      codeCountry: Student.codeCountry,
      phone: Student.phone,
      school: Student.school,
      yearCompletion: Student.yearCompletion,
      qualification: Student.qualification,
      additionalInfo: Student.additionalInfo ?? undefined,
      birthDate: new Date(Student.birthDate),
      zipUrl: Student.zipUrl,
      createdAt: new Date(Student.createdAt),
      typeStudent: Student.typeStudent as TypeStudent,
      isSeen: Student.isSeen,
      isContacted: Student.isContacted,
    }));
    return {
      Students: data,
      totalPages: result.totalPages ?? 1,
      totalItems: result.totalItems ?? 0,
    };
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des véhicules filtrés :",
      error
    );
    return [];
  }
}
