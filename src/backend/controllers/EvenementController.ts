import { EvenementRepository } from "@/backend/repositories/EvenementRepository";
import { EvenementService } from "@/backend/services/EvenementService";
import { Evenement } from "@prisma/client";
import { CreateEvenementData, UpdateEvenementData } from "@/types/evenement";

const repository = new EvenementRepository();
const evenementService = new EvenementService(repository);

export const EvenementController = {
  async getAllEvenements(
    page: number,
    pageSize: number
  ): Promise<{
    evenements: Evenement[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await evenementService.getAllEvenements(page, pageSize);

    return {
      evenements: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },

  async getEvenementById(id: string): Promise<Evenement | null> {
    return await evenementService.getEvenementById(id);
  },

  async createEvenement(evenementData: Evenement): Promise<Evenement> {
    return await evenementService.createEvenement(evenementData);
  },

  async updateEvenement(id: string, evenementData: UpdateEvenementData, zipFile?: File): Promise<Evenement> {
    return await evenementService.updateEvenement(id, evenementData, zipFile);
  },

  async deleteEvenement(id: string): Promise<void> {
    return await evenementService.deleteEvenement(id);
  },

  async getActiveEvenements(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<{
    evenements: Evenement[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await evenementService.getActiveEvenements(pagination);

    return {
      evenements: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },

  async getEvenementsByDateRange(
    dateDebut: Date,
    dateFin: Date,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<{
    evenements: Evenement[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await evenementService.getEvenementsByDateRange(dateDebut, dateFin, pagination);

    return {
      evenements: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },

  async getUpcomingEvenements(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<{
    evenements: Evenement[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await evenementService.getUpcomingEvenements(pagination);

    return {
      evenements: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },
}; 