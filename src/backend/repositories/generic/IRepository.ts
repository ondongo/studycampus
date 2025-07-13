import { PaginatedResult } from "@/types/allType";

// Abstract Repository Interfaces (repositories/abstract)
export interface IRepository<T> {
  findAll(page: number, pageSize: number): Promise<PaginatedResult<T>>;
  findById(id: string): Promise<T | null>;
  create(entity: T): Promise<T>;
  save(entity: T): Promise<void>;
  update(id: string, data: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
}
