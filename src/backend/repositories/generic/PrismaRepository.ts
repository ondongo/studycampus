import { PaginatedResult } from "@/types/allType";
import { IRepository } from "./IRepository";
import { prisma } from "../../configs/prisma";
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
    await this.model.upsert({
      where: { id: entity.id },
      update: entity,
      create: entity,
    });
  }

  async delete(id: string): Promise<void> {
    await this.model.delete({ where: { id } });
  }
}
