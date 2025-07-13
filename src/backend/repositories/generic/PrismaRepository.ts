import { PaginatedResult } from "@/types/allType";
import { IRepository } from "./IRepository";
import { prisma } from "@/configs/prisma";

export class GenericRepository<T> implements IRepository<T> {
  private model: any;

  constructor(model: any) {
    this.model = model;
  }
  async findAll(page: number, pageSize: number): Promise<PaginatedResult<T>> {
    const skip = (page - 1) * pageSize;

    const [data, totalItems] = await prisma.$transaction([
      this.model.findMany({ skip, take: pageSize }),
      this.model.count(),
    ]);

    return {
      data,
      totalPages: Math.ceil(totalItems / pageSize),
      totalItems,
    };
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findUnique({ where: { id } });
  }

  async save(entity: any): Promise<void> {
    try {
      console.log("Tentative de sauvegarde de l'étudiant:", entity.id);
      await this.model.upsert({
        where: { id: entity.id },
        update: entity,
        create: entity,
      });
      console.log("Étudiant sauvegardé avec succès:", entity.id);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de l'étudiant:", error);
      throw error;
    }
  }

  async create(entity: any): Promise<any> {
    return await this.model.create({
      data: entity,
    });
  }

  async update(id: string, data: Partial<T>): Promise<void> {
    await this.model.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.model.delete({ where: { id } });
  }
}
