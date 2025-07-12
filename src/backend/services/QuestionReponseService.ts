import { QuestionReponse } from "@prisma/client";
import { QuestionReponseRepository } from "@/backend/repositories/QuestionReponseRepository";
import { PaginatedResult } from "@/types/allType";
import { CreateQuestionReponseData, UpdateQuestionReponseData } from "@/types/question-reponse";

export class QuestionReponseService {
  private repository: QuestionReponseRepository;

  constructor(repository: QuestionReponseRepository) {
    this.repository = repository;
  }
  
  async getAllQuestions(
    page: number,
    pageSize: number
  ): Promise<PaginatedResult<QuestionReponse>> {
    return this.repository.findAll(page, pageSize);
  }

  async getQuestionById(id: string): Promise<QuestionReponse | null> {
    return this.repository.findById(id);
  }

  async createQuestion(questionData: QuestionReponse): Promise<QuestionReponse> {

    await this.repository.save(questionData as QuestionReponse);
    const createdQuestion = await this.repository.findById(questionData.id);
    if (!createdQuestion) {
      throw new Error('Erreur lors de la création de la question');
    }  
    return createdQuestion;
  }

  async updateQuestion(id: string, questionData: UpdateQuestionReponseData): Promise<QuestionReponse> {
    const existingQuestion = await this.repository.findById(id);
    if (!existingQuestion) {
      throw new Error('Question non trouvée');
    }

    const questionToUpdate = {
      ...existingQuestion,
      ...questionData
    };

    await this.repository.save(questionToUpdate);
    
    // Récupérer la question mise à jour
    const updatedQuestion = await this.repository.findById(id);
    if (!updatedQuestion) {
      throw new Error('Erreur lors de la mise à jour de la question');
    }
    
    return updatedQuestion;
  }

  async deleteQuestion(id: string): Promise<void> {
    const question = await this.repository.findById(id);
    if (!question) {
      throw new Error('Question non trouvée');
    }

    return this.repository.delete(id);
  }

  async getQuestionsByType(
    type: string,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<QuestionReponse>> {
    return this.repository.getQuestionsByType(type as any, pagination);
  }

  async searchQuestions(
    searchQuery: string,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<QuestionReponse>> {
    return this.repository.searchQuestions(searchQuery, pagination);
  }
} 