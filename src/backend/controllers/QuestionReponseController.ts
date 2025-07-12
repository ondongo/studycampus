import { QuestionReponseRepository } from "@/backend/repositories/QuestionReponseRepository";
import { QuestionReponseService } from "@/backend/services/QuestionReponseService";
import { QuestionReponse } from "@prisma/client";
import { CreateQuestionReponseData, UpdateQuestionReponseData } from "@/types/question-reponse";

const repository = new QuestionReponseRepository();
const questionService = new QuestionReponseService(repository);

export const QuestionReponseController = {
  async getAllQuestions(
    page: number,
    pageSize: number
  ): Promise<{
    questions: QuestionReponse[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await questionService.getAllQuestions(page, pageSize);

    return {
      questions: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },

  async getQuestionById(id: string): Promise<QuestionReponse | null> {
    return await questionService.getQuestionById(id);
  },

  async createQuestion(questionData: QuestionReponse): Promise<QuestionReponse> {
    return await questionService.createQuestion(questionData);
  },

  async updateQuestion(id: string, questionData: UpdateQuestionReponseData): Promise<QuestionReponse> {
    return await questionService.updateQuestion(id, questionData);
  },

  async deleteQuestion(id: string): Promise<void> {
    return await questionService.deleteQuestion(id);
  },

  async getQuestionsByType(
    type: string,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<{
    questions: QuestionReponse[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await questionService.getQuestionsByType(type, pagination);

    return {
      questions: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },

  async searchQuestions(
    searchQuery: string,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<{
    questions: QuestionReponse[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await questionService.searchQuestions(searchQuery, pagination);

    return {
      questions: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },
}; 