'use client';
import { IAnnouncementDT } from "@/types/announcement-d-t";
import React from "react";

type InitialContext = {
    announceEditMode: IAnnouncementDT | null;
    showAnnounceDetailsModal:boolean;
    showAnnounceAddEditModal:boolean;
    handleAnnounceDetailsModal(): void;
    handleAnnounceAddEditModal(edit?: IAnnouncementDT): void
}

export const GlobalContext = React.createContext<InitialContext | null>(null)