export interface Annonce {
  id: string;
  title: string;
  description: string;
  etat: boolean;
  zipUrl?: string;
  createdAt: Date;
}

export interface CreateAnnonceData {
  title: string;
  description: string;
  etat?: boolean;
  zipUrl?: string;
}

export interface UpdateAnnonceData {
  title?: string;
  description?: string;
  etat?: boolean;
  zipUrl?: string;
} 