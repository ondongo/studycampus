import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '@/firebase/storage';

export class FirebaseUploadService {
  /**
   * Upload un fichier ZIP vers Firebase Storage
   * @param file - Le fichier à uploader
   * @param folder - Le dossier de destination (ex: 'annonces', 'evenements', 'etudiants')
   * @param fileName - Le nom du fichier (optionnel, généré automatiquement si non fourni)
   * @returns L'URL de téléchargement du fichier
   */
  static async uploadZipFile(
    file: File,
    folder: string,
    fileName?: string
  ): Promise<string> {
    try {
      const timestamp = Date.now();
      const fileExtension = file.name.split('.').pop();
      const finalFileName = fileName || `${timestamp}.${fileExtension}`;
      const storageRef = ref(storage, `${folder}/${finalFileName}`);

      // Upload du fichier
      const snapshot = await uploadBytes(storageRef, file);
      
      // Récupération de l'URL de téléchargement
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      return downloadURL;
    } catch (error) {
      console.error('Erreur lors de l\'upload du fichier ZIP:', error);
      throw new Error('Échec de l\'upload du fichier ZIP');
    }
  }

  /**
   * Supprime un fichier de Firebase Storage
   * @param fileUrl - L'URL du fichier à supprimer
   */
  static async deleteFile(fileUrl: string): Promise<void> {
    try {
      const fileRef = ref(storage, fileUrl);
      await deleteObject(fileRef);
    } catch (error) {
      console.error('Erreur lors de la suppression du fichier:', error);
      throw new Error('Échec de la suppression du fichier');
    }
  }

  /**
   * Vérifie si une URL est valide
   * @param url - L'URL à vérifier
   * @returns true si l'URL est valide, false sinon
   */
  static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
} 