/*
  Warnings:

  - You are about to drop the `Etudiant` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Source" AS ENUM ('BOURSE', 'CAMPUS_FRANCE');

-- CreateEnum
CREATE TYPE "QAType" AS ENUM ('PARENT', 'ETUDIANT');

-- DropTable
DROP TABLE "Etudiant";

-- CreateTable
CREATE TABLE "etudiants" (
    "id" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "codeCountry" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "yearCompletion" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "additionalInfo" TEXT,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "zipUrl" TEXT NOT NULL,
    "profilePicture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "typeStudent" "TypeStudent" NOT NULL,
    "isSeen" BOOLEAN NOT NULL DEFAULT false,
    "isContacted" BOOLEAN NOT NULL DEFAULT false,
    "source" "Source" NOT NULL,

    CONSTRAINT "etudiants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evenements" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateDebut" TIMESTAMP(3) NOT NULL,
    "dateFin" TIMESTAMP(3) NOT NULL,
    "etat" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "evenements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions_reponses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "QAType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "questions_reponses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "annonces" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "etat" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "annonces_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "etudiants_email_key" ON "etudiants"("email");
