"use client";
import { GlobalContext } from "@/context/global-context";
import { IAnnouncementDT } from "@/types/announcement-d-t";
import { Evenement } from "@/types/evenement";
import React, { useState } from "react";

type IPropType = {
  children: React.ReactNode;
};



export default function GlobalContextProvider({ children }: IPropType) {
  const [showAnnounceDetailsModal, setShowAnnounceDetailsModal] =
    useState<boolean>(false);
  const [showAnnounceAddEditModal, setShowAnnounceAddEditModal] =
    useState<boolean>(false);
  const [announceEditMode, setAnnounceEditMode] = useState<IAnnouncementDT | null>(null);

  // Nouvelles états pour les événements
  const [showEvenementAddEditModal, setShowEvenementAddEditModal] =
    useState<boolean>(false);
  const [evenementEditMode, setEvenementEditMode] = useState<Evenement | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  function handleAnnounceDetailsModal() {
    setShowAnnounceDetailsModal(!showAnnounceDetailsModal);
  }

  function handleAnnounceAddEditModal(edit?: IAnnouncementDT) {
    if (edit) {
        setAnnounceEditMode(edit); // Set the edit data if it's passed
    } else {
        setAnnounceEditMode(null); // Clear the edit mode if no edit data is provided
    }
    setShowAnnounceAddEditModal(!showAnnounceAddEditModal); // Toggle the modal visibility
}

  function handleEvenementAddEditModal(edit?: Evenement, selectedDate?: Date) {
    if (edit) {
        setEvenementEditMode(edit); // Set the edit data if it's passed
        setSelectedDate(null); // Clear selected date when editing
    } else {
        setEvenementEditMode(null); // Clear the edit mode if no edit data is provided
        setSelectedDate(selectedDate || null); // Set selected date if provided
    }
    setShowEvenementAddEditModal(!showEvenementAddEditModal); // Toggle the modal visibility
  }

  return (
    <GlobalContext.Provider
      value={{
        announceEditMode,
        handleAnnounceAddEditModal,
        handleAnnounceDetailsModal,
        showAnnounceAddEditModal,
        showAnnounceDetailsModal,
        // Nouvelles propriétés pour les événements
        evenementEditMode,
        showEvenementAddEditModal,
        selectedDate,
        handleEvenementAddEditModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
