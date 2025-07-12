import { Evenement } from "@prisma/client";
import { EvenementRepository } from "@/backend/repositories/EvenementRepository";
import { PaginatedResult } from "@/types/allType";
import { CreateEvenementData, UpdateEvenementData } from "@/types/evenement";
import { FirebaseUploadService } from "./firebase-upload.service";

export class EvenementService {
  private repository: EvenementRepository;

  constructor(repository: EvenementRepository) {
    this.repository = repository;
  }
  
  async getAllEvenements(
    page: number,
    pageSize: number
  ): Promise<PaginatedResult<Evenement>> {
    return this.repository.findAll(page, pageSize);
  }

  async getEvenementById(id: string): Promise<Evenement | null> {
    return this.repository.findById(id);
  }

  async createEvenement(evenementData: Evenement): Promise<Evenement> {


    const evenementToCreate = {
      ...evenementData,
      etat: evenementData.etat ?? true
    };

    await this.repository.save(evenementToCreate as Evenement);
    const createdEvenement = await this.repository.findById(evenementToCreate.id);
    if (!createdEvenement) {
      throw new Error('Erreur lors de la création de l\'événement');
    }
    
    return createdEvenement;
  }

  async updateEvenement(id: string, evenementData: UpdateEvenementData, zipFile?: File): Promise<Evenement> {
    const existingEvenement = await this.repository.findById(id);
    if (!existingEvenement) {
      throw new Error('Événement non trouvé');
    }
    const evenementToUpdate = {
      ...existingEvenement,
      ...evenementData,
   
    };

    await this.repository.save(evenementToUpdate);
    
    // Récupérer l'événement mis à jour
    const updatedEvenement = await this.repository.findById(id);
    if (!updatedEvenement) {
      throw new Error('Erreur lors de la mise à jour de l\'événement');
    }
    return updatedEvenement;
  }

  async deleteEvenement(id: string): Promise<void> {
    const evenement = await this.repository.findById(id);
    if (!evenement) {
      throw new Error('Événement non trouvé');
    }
    return this.repository.delete(id);
  }

  async getActiveEvenements(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Evenement>> {
    return this.repository.getActiveEvenements(pagination);
  }

  async getEvenementsByDateRange(
    dateDebut: Date,
    dateFin: Date,
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Evenement>> {
    return this.repository.getEvenementsByDateRange(dateDebut, dateFin, pagination);
  }

  async getUpcomingEvenements(
    pagination: {
      page?: number;
      pageSize?: number;
    }
  ): Promise<PaginatedResult<Evenement>> {
    return this.repository.getUpcomingEvenements(pagination);
  }
} 