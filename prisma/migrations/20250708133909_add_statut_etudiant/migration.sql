-- AlterTable
ALTER TABLE "Etudiant" ADD COLUMN     "isContacted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSeen" BOOLEAN NOT NULL DEFAULT false;
