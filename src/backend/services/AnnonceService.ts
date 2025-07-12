import { Annonce } from "@prisma/client";
import { AnnonceRepository } from "@/backend/repositories/AnnonceRepository";
import { PaginatedResult } from "@/types/allType";
import { CreateAnnonceData, UpdateAnnonceData } from "@/types/annonce";
import { FirebaseUploadService } from "./firebase-upload.service";

export class AnnonceService {
  private repository: AnnonceRepository;

  constructor(repository: AnnonceRepository) {
    this.repository = repository;
  }
  
  async getAllAnnonces(
    page: number,
    pageSize: number
  ): Promise<PaginatedResult<Annonce>> {
    return this.repository.findAll(page, pageSize);
  }

  async getAnnonceById(id: string): Promise<Annonce | null> {
    return this.repository.findById(id);
  }

  async createAnnonce(annonceData: Annonce): Promise<Annonce> {

    const annonceToCreate = {
      ...annonceData,
   
      etat: annonceData.etat ?? true
    };

    await this.repository.save(annonceToCreate as Annonce);
    
    // Récupérer l'annonce créée
    const createdAnnonce = await this.repository.findById(annonceToCreate.id);
    if (!createdAnnonce) {
      throw new Error('Erreur lors de la création de l\'annonce');
    }
    
    return createdAnnonce;
  }

  async updateAnnonce(id: string, annonceData: UpdateAnnonceData, zipFile?: File): Promise<Annonce> {
    const existingAnnonce = await this.repository.findById(id);
    if (!existingAnnonce) {
      throw new Error('Annonce non trouvée');
    }



    const annonceToUpdate = {
      ...existingAnnonce,
      ...annonceData,
   
    };

    await this.repository.save(annonceToUpdate);
    
    // Récupérer l'annonce mise à jour
    const updatedAnnonce = await this.repository.findById(id);
    if (!updatedAnnonce) {
      throw new Error('Erreur lors de la mise à jour de l\'annonce');
    }
    
    return updatedAnnonce;
  }

  async deleteAnnonce(id: string): Promise<void> {
    const annonce = await this.repository.findById(id);
    if (!annonce) {
      throw new Error('Annonce non trouvée');
    }

 
    return this.repository.delete(id);
  }

  async getActiveAnnonces(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Annonce>> {
    return this.repository.getActiveAnnonces(pagination);
  }

  async getAnnoncesByEtat(
    etat: boolean,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Annonce>> {
    return this.repository.getAnnoncesByEtat(etat, pagination);
  }
} 