export type AlertType = "success" | "error";


export interface PaginatedResult<T> {
    data: T[];
    totalPages: number;
    totalItems: number;
  }