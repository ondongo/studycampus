"use server";

import { EvenementController } from "../controllers/EvenementController";
import { Evenement, UpdateEvenementData } from "@/types/evenement";
import { Evenement as PrismaEvenement } from "@prisma/client";

export async function createEvenementAction(evenementData: any): Promise<PrismaEvenement> {
  return await EvenementController.createEvenement(evenementData);
}

export async function updateEvenementAction(id: string, evenementData: UpdateEvenementData): Promise<PrismaEvenement> {
  return await EvenementController.updateEvenement(id, evenementData);
}

export async function deleteEvenementAction(id: string): Promise<void> {
  await EvenementController.deleteEvenement(id);
}

export async function getEvenementByIdAction(id: string): Promise<PrismaEvenement | null> {
  return await EvenementController.getEvenementById(id);
}

export async function getAllEvenementsAction(page: number = 1, pageSize: number = 10) {
  const result = await EvenementController.getAllEvenements(page, pageSize);

  const data = result.evenements.map((evenement) => ({
    id: evenement.id,
    title: evenement.title,
    description: evenement.description,
    dateDebut: new Date(evenement.dateDebut),
    dateFin: new Date(evenement.dateFin),
    etat: evenement.etat,
    createdAt: new Date(evenement.createdAt),
  }));

  return {
    evenements: data,
    totalPages: result.totalPages,
    totalItems: result.totalItems,
  };
}

export async function getActiveEvenementsAction(
  pagination: {
    page?: number;
    pageSize?: number;
  }
) {
  const result = await EvenementController.getActiveEvenements(pagination);

  const data = result.evenements.map((evenement) => ({
    id: evenement.id,
    title: evenement.title,
    description: evenement.description,
    dateDebut: new Date(evenement.dateDebut),
    dateFin: new Date(evenement.dateFin),
    etat: evenement.etat,
    createdAt: new Date(evenement.createdAt),
  }));

  return {
    evenements: data,
    totalPages: result.totalPages,
    totalItems: result.totalItems,
  };
}

export async function getEvenementsByDateRangeAction(
  dateDebut: Date,
  dateFin: Date,
  pagination: {
    page?: number;
    pageSize?: number;
  }
) {
  const result = await EvenementController.getEvenementsByDateRange(dateDebut, dateFin, pagination);

  const data = result.evenements.map((evenement) => ({
    id: evenement.id,
    title: evenement.title,
    description: evenement.description,
    dateDebut: new Date(evenement.dateDebut),
    dateFin: new Date(evenement.dateFin),
    etat: evenement.etat,
    createdAt: new Date(evenement.createdAt),
  }));

  return {
    evenements: data,
    totalPages: result.totalPages,
    totalItems: result.totalItems,
  };
}

export async function getUpcomingEvenementsAction(
  pagination: {
    page?: number;
    pageSize?: number;
  }
) {
  const result = await EvenementController.getUpcomingEvenements(pagination);

  const data = result.evenements.map((evenement) => ({
    id: evenement.id,
    title: evenement.title,
    description: evenement.description,
    dateDebut: new Date(evenement.dateDebut),
    dateFin: new Date(evenement.dateFin),
    etat: evenement.etat,
    createdAt: new Date(evenement.createdAt),
  }));

  return {
    evenements: data,
    totalPages: result.totalPages,
    totalItems: result.totalItems,
  };
} 