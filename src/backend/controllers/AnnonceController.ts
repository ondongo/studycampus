import { AnnonceRepository } from "@/backend/repositories/AnnonceRepository";
import { AnnonceService } from "@/backend/services/AnnonceService";
import { Annonce } from "@prisma/client";
import { CreateAnnonceData, UpdateAnnonceData } from "@/types/annonce";

const repository = new AnnonceRepository();
const annonceService = new AnnonceService(repository);

export const AnnonceController = {
  async getAllAnnonces(
    page: number,
    pageSize: number
  ): Promise<{
    annonces: Annonce[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await annonceService.getAllAnnonces(page, pageSize);

    return {
      annonces: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },

  async getAnnonceById(id: string): Promise<Annonce | null> {
    return await annonceService.getAnnonceById(id);
  },

  async createAnnonce(annonceData: Annonce): Promise<Annonce> {
    return await annonceService.createAnnonce(annonceData);
  },

  async updateAnnonce(id: string, annonceData: UpdateAnnonceData, zipFile?: File): Promise<Annonce> {
    return await annonceService.updateAnnonce(id, annonceData, zipFile);
  },

  async deleteAnnonce(id: string): Promise<void> {
    return await annonceService.deleteAnnonce(id);
  },

  async getActiveAnnonces(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<{
    annonces: Annonce[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await annonceService.getActiveAnnonces(pagination);

    return {
      annonces: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },

  async getAnnoncesByEtat(
    etat: boolean,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<{
    annonces: Annonce[];
    totalPages: number;
    totalItems: number;
  }> {
    const result = await annonceService.getAnnoncesByEtat(etat, pagination);

    return {
      annonces: result.data,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    };
  },
}; 