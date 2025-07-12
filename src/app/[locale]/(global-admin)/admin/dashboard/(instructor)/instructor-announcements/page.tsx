"use client";

import React, { useState, useEffect } from "react";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import AnnonceForm from "@/components/dashboard/annonce-form";
import {
  getAllAnnoncesAction,
  createAnnonceAction,
  updateAnnonceAction,
  deleteAnnonceAction,
} from "@/backend/actions/annonces";
import { CreateAnnonceData, UpdateAnnonceData, Annonce } from "@/types/annonce";
import InstructorAnnouncementArea from "@/components/dashboard/instructor/instructor-announcement-area";
import AnnouncementModal from "@/components/modal/announcement-modal";

export default function AnnoncesPage() {

  return (
    <>
      <InstructorAnnouncementArea /> <AnnouncementModal />
    </>
  );
}
