import type { Metadata } from "next";
import "./globals.scss";
import "./custom.css"

export const metadata: Metadata = {
  title:
    "Blessings Travels - Accompagnement Campus France, Bourses et Reconnaissance",
  description:
    "Blessings Travels est une plateforme spécialisée dans l'accompagnement des étudiants pour leurs démarches Campus France, l'obtention de bourses d'études, et la reconnaissance de diplômes. Notre objectif est d'offrir un soutien personnalisé et efficace à chaque étape du parcours académique international.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
