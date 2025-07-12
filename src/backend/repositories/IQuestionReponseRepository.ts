import { QuestionReponse } from "@prisma/client";
import { IRepository } from "./generic/IRepository";
import { PaginatedResult } from "@/types/allType";
import { QAType } from "@/types/question-reponse";

export interface IQuestionReponseRepository extends IRepository<QuestionReponse> {
  getQuestionsByType(
    type: QAType,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<QuestionReponse>>;
  
  searchQuestions(
    searchQuery: string,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<QuestionReponse>>;
} 