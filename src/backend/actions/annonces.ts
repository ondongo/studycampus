"use server";

import { AnnonceController } from "../controllers/AnnonceController";
import { Annonce , UpdateAnnonceData } from "@/types/annonce";
import { Annonce as PrismaAnnonce } from "@prisma/client";

export async function createAnnonceAction(annonceData: any): Promise<PrismaAnnonce> {
  return await AnnonceController.createAnnonce(annonceData);
}

export async function updateAnnonceAction(id: string, annonceData: UpdateAnnonceData): Promise<PrismaAnnonce> {
  return await AnnonceController.updateAnnonce(id, annonceData);
}

export async function deleteAnnonceAction(id: string): Promise<void> {
  await AnnonceController.deleteAnnonce(id);
}

export async function getAnnonceByIdAction(id: string): Promise<PrismaAnnonce | null> {
  return await AnnonceController.getAnnonceById(id);
}

export async function getAllAnnoncesAction(page: number = 1, pageSize: number = 10) {
  const result = await AnnonceController.getAllAnnonces(page, pageSize);

  const data = result.annonces.map((annonce) => ({
    id: annonce.id,
    title: annonce.title,
    description: annonce.description,
    etat: annonce.etat,
    createdAt: new Date(annonce.createdAt),
  }));

  return {
    annonces: data,
    totalPages: result.totalPages,
    totalItems: result.totalItems,
  };
}

export async function getActiveAnnoncesAction(
  pagination: {
    page?: number;
    pageSize?: number;
  }
) {
  const result = await AnnonceController.getActiveAnnonces(pagination);

  const data = result.annonces.map((annonce) => ({
    id: annonce.id,
    title: annonce.title,
    description: annonce.description,
    etat: annonce.etat,
    createdAt: new Date(annonce.createdAt),
  }));

  return {
    annonces: data,
    totalPages: result.totalPages,
    totalItems: result.totalItems,
  };
}

export async function getAnnoncesByEtatAction(
  etat: boolean,
  pagination: {
    page?: number;
    pageSize?: number;
  }
) {
  const result = await AnnonceController.getAnnoncesByEtat(etat, pagination);

  const data = result.annonces.map((annonce) => ({
    id: annonce.id,
    title: annonce.title,
    description: annonce.description,
    etat: annonce.etat,
    createdAt: new Date(annonce.createdAt),
  }));

  return {
    annonces: data,
    totalPages: result.totalPages,
    totalItems: result.totalItems,
  };
} 