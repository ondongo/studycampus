"use client";
import { GlobalContext } from "@/context/global-context";
import { IAnnouncementDT } from "@/types/announcement-d-t";
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


  return (
    <GlobalContext.Provider
      value={{
        announceEditMode,
        handleAnnounceAddEditModal,
        handleAnnounceDetailsModal,
        showAnnounceAddEditModal,
        showAnnounceDetailsModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
