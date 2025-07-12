import { QuestionReponse } from "@prisma/client";
import { IQuestionReponseRepository } from "./IQuestionReponseRepository";
import { GenericRepository } from "./generic/PrismaRepository";
import { prisma } from "@/configs/prisma";
import { PaginatedResult } from "@/types/allType";
import { QAType } from "@/types/question-reponse";

export class QuestionReponseRepository
  extends GenericRepository<QuestionReponse>
  implements IQuestionReponseRepository
{
  constructor() {
    super(prisma.questionReponse);
  }

  async getQuestionsByType(
    type: QAType,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<QuestionReponse>> {
    const { page = 1, pageSize = 10 } = pagination;
    const skip = (page - 1) * pageSize;

    const [data, totalItems] = await prisma.$transaction([
      prisma.questionReponse.findMany({
        where: { type },
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" }
      }),
      prisma.questionReponse.count({ where: { type } })
    ]);

    return {
      data,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize)
    };
  }

  async searchQuestions(
    searchQuery: string,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<QuestionReponse>> {
    const { page = 1, pageSize = 10 } = pagination;
    const skip = (page - 1) * pageSize;

    const [data, totalItems] = await prisma.$transaction([
      prisma.questionReponse.findMany({
        where: {
          OR: [
            { title: { contains: searchQuery, mode: "insensitive" } },
            { description: { contains: searchQuery, mode: "insensitive" } }
          ]
        },
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" }
      }),
      prisma.questionReponse.count({
        where: {
          OR: [
            { title: { contains: searchQuery, mode: "insensitive" } },
            { description: { contains: searchQuery, mode: "insensitive" } }
          ]
        }
      })
    ]);

    return {
      data,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize)
    };
  }
} 