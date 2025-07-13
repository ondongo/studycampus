'use client';
import { IAnnouncementDT } from "@/types/announcement-d-t";
import { Evenement } from "@/types/evenement";
import React from "react";

type InitialContext = {
    announceEditMode: IAnnouncementDT | null;
    showAnnounceDetailsModal:boolean;
    showAnnounceAddEditModal:boolean;
    handleAnnounceDetailsModal(): void;
    handleAnnounceAddEditModal(edit?: IAnnouncementDT): void;
    // Nouvelles propriétés pour les événements
    evenementEditMode: Evenement | null;
    showEvenementAddEditModal: boolean;
    selectedDate: Date | null;
    handleEvenementAddEditModal(edit?: Evenement, selectedDate?: Date): void;
}

export const GlobalContext = React.createContext<InitialContext | null>(null)