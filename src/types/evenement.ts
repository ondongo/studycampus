export interface Evenement {
  id: string;
  title: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  etat: boolean;
  zipUrl?: string;
  createdAt: Date;
}

export interface CreateEvenementData {
  title: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  etat?: boolean;
  zipUrl?: string;
}

export interface UpdateEvenementData {
  title?: string;
  description?: string;
  dateDebut?: Date;
  dateFin?: Date;
  etat?: boolean;
  zipUrl?: string;
} 