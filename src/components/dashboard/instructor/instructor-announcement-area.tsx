"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CalenderThreeSvg,
  DeleteSvg,
  DotsTwoSvg,
  PenTwoSvg,
} from "@/components/svg";
import DatePicker from "@/components/ui/date-picker";

import announce_icon from "@/assets/img/dashboard/icon/announcement-icon.svg";
import useGlobalContext from "@/hooks/use-global-context";
import useClickOutside from "@/hooks/use-click-outside";
import {
  getAllAnnoncesAction,
  createAnnonceAction,
  updateAnnonceAction,
  deleteAnnonceAction,
} from "@/backend/actions/annonces";
import { UpdateAnnonceData } from "@/types/annonce";
import { Annonce } from "@prisma/client";

const announcementData = [
  {
    id: 1,
    date: "August 27, 2024",
    time: "6:01 am",
    announcement: "Web Design System in Figma",
    courseName: "Course:",
    courseTitle: "Design Masterclass",
  },
  {
    id: 2,
    date: "August 27, 2024",
    time: "6:01 am",
    announcement: "Web Design System in Figma",
    courseName: "Course:",
    courseTitle: "Design Masterclass",
  },
  {
    id: 3,
    date: "August 27, 2024",
    time: "6:01 am",
    announcement: "Web Design System in Figma",
    courseName: "Course:",
    courseTitle: "Design Masterclass",
  },
  {
    id: 4,
    date: "August 27, 2024",
    time: "6:01 am",
    announcement: "Web Design System in Figma",
    courseName: "Course:",
    courseTitle: "Design Masterclass",
  },
  {
    id: 5,
    date: "August 27, 2024",
    time: "6:01 am",
    announcement: "Web Design System in Figma",
    courseName: "Course:",
    courseTitle: "Design Masterclass",
  },
];

export default function InstructorAnnouncementArea() {
  const [date, setDate] = useState(new Date());
  const { handleAnnounceAddEditModal, handleAnnounceDetailsModal } =
    useGlobalContext();
  const [openActionId, setOpenActionId] = useState<number | null>(null);
  const actionButtonRef = useClickOutside(setOpenActionId);
  function toggleAction(id: number) {
    if (openActionId === id) {
      setOpenActionId(null);
    } else {
      setOpenActionId(id);
    }
  }

  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAnnonce, setEditingAnnonce] = useState<Annonce | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    loadAnnonces();
  }, []);

  const loadAnnonces = async () => {
    setLoading(true);
    try {
      const result = await getAllAnnoncesAction(1, 50);
      setAnnonces(result.annonces);
    } catch (error) {
      console.error("Erreur lors du chargement des annonces:", error);
      setError("Impossible de charger les annonces");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAnnonce = async (data: any) => {
    try {
      await createAnnonceAction(data);
      setSuccess("Annonce créée avec succès !");
      setShowForm(false);
      loadAnnonces();
    } catch (error) {
      console.error("Erreur lors de la création:", error);
      setError("Erreur lors de la création de l'annonce");
    }
  };

  const handleUpdateAnnonce = async (
    data: UpdateAnnonceData,
    zipFile?: File
  ) => {
    if (!editingAnnonce) return;

    try {
      await updateAnnonceAction(editingAnnonce.id, data, zipFile);
      setSuccess("Annonce mise à jour avec succès !");
      setEditingAnnonce(null);
      setShowForm(false);
      loadAnnonces();
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      setError("Erreur lors de la mise à jour de l'annonce");
    }
  };

  const handleDeleteAnnonce = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette annonce ?")) {
      return;
    }

    try {
      await deleteAnnonceAction(id);
      setSuccess("Annonce supprimée avec succès !");
      loadAnnonces();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      setError("Erreur lors de la suppression de l'annonce");
    }
  };

  const handleEdit = (annonce: Annonce) => {
    setEditingAnnonce(annonce);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingAnnonce(null);
  };

  return (
    <>
      <section className="tpd-order-area">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-dashboard-section">
              <h2 className="tp-dashboard-title">Annonces</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tpd-announcement tpd-common-shadow d-flex align-items-center justify-content-between mb-70">
              <div className="tpd-announcement-info d-flex align-items-center">
                <div className="tpd-announcement-icon">
                  <span>
                    <Image src={announce_icon} alt="icon" />
                  </span>
                </div>
              </div>
              <div className="text-lg-end">
                <button
                  className="tpd-border-btn active"
                  onClick={() => handleAnnounceAddEditModal()}
                >
                  Créer une annonce
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="tpd-dashboard-select-course">
              <div className="tp-course-filter-select"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tpd-dashboard-select-calender d-flex align-items-center justify-content-lg-end">
              <div className="tpd-order-short-list mb-30">
                <div className="tp-course-filter-select"></div>
              </div>
              <div className="tpd-order-date-input mb-30 ml-10">
                <form action="#">
                  <DatePicker date={date} setDate={setDate} />
                  <span>
                    <CalenderThreeSvg />
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tpd-table tpd-announcement-table mb-45">
              <ul>
                <li className="tpd-table-head">
                  <div className="tpd-table-row">
                    <div className="tpd-announcement-date">
                      <h4 className="tpd-table-title">Date</h4>
                    </div>
                    <div className="tpd-announcement-announcement">
                      <h4 className="tpd-table-title">Annonces</h4>
                    </div>
                    <div className="tpd-announcement-btn"></div>
                    <div className="tpd-announcement-action"></div>
                  </div>
                </li>

                {announcementData.map((item, index) => (
                  <li key={index}>
                    <div className="tpd-table-row">
                      <div className="tpd-announcement-date">
                        <h4 className="tpd-common-text">{item.date}</h4>
                        <span className="tpd-announcement-time">
                          {item.time}
                        </span>
                      </div>
                      <div className="tpd-announcement-announcement">
                        <h4 className="tpd-common-text">{item.announcement}</h4>
                        <div className="tpd-course-wrap">
                          <span className="tpd-course-name">
                            {item.courseName}
                          </span>
                          <span className="tpd-course-title">
                            {item.courseTitle}
                          </span>
                        </div>
                      </div>
                      <div
                        className="tpd-announcement-btn"
                        onClick={handleAnnounceDetailsModal}
                      >
                        <button className="tpd-btn-details">Details</button>
                      </div>
                      <div
                        className="tpd-announcement-action"
                        ref={actionButtonRef}
                      >
                        <div
                          className={`tpd-action-inexact-btn ${
                            openActionId === item.id ? "active" : ""
                          }`}
                        >
                          <button
                            className="click"
                            onClick={() => toggleAction(item.id)}
                          >
                            <DotsTwoSvg />
                          </button>
                          <div className="tpd-action-click-tooltip bundle">
                            <button
                              onClick={() => handleAnnounceAddEditModal(item)}
                            >
                              <span>
                                <PenTwoSvg />
                              </span>
                             Modifier
                            </button>
                            <button>
                              <span>
                                <DeleteSvg />
                              </span>
                              Supprimer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
