"use client";
import Pagination from "@/components/ui/pagination";
import useGlobalContext from "@/hooks/use-global-context";
import usePagination from "@/hooks/use-pagination";
import DatePicker from "@/components/ui/date-picker";
import { useState } from "react";
import Image from "next/image";
import {
  CalenderThreeSvg,
  DeleteSvg,
  DotsTwoSvg,
  PenTwoSvg,
} from "@/components/svg";
import useClickOutside from "@/hooks/use-click-outside";

// Données simulées des étudiants congolais (à remplacer par un fetch réel)
const etudiantsCongolaisData = [
  {
    id: "stu_1",
    fname: "Jean",
    lname: "Kabasele",
    email: "jean.kabasele@rdc.cd",
    studentImage: "/assets/img/dashboard/profile/reviews-profile-1.png",
    typeStudent: "Boursier",
    status: "Vu",
    statusClass: "success",
    isSeen: true,
    isContacted: false,
    createdAt: "2024-06-01",
    codeCountry: "CD",
  },
  {
    id: "stu_2",
    fname: "Marie",
    lname: "Mbuyi",
    email: "marie.mbuyi@rdc.cd",
    studentImage: "/assets/img/dashboard/profile/reviews-profile-2.png",
    typeStudent: "Payant",
    status: "Non vu",
    statusClass: "warning",
    isSeen: false,
    isContacted: false,
    createdAt: "2024-06-02",
    codeCountry: "CD",
  },
  {
    id: "stu_3",
    fname: "Patrick",
    lname: "Ilunga",
    email: "patrick.ilunga@rdc.cd",
    studentImage: "/assets/img/dashboard/profile/reviews-profile-3.png",
    typeStudent: "Boursier",
    status: "Contacté",
    statusClass: "info",
    isSeen: true,
    isContacted: true,
    createdAt: "2024-06-03",
    codeCountry: "CD",
  },
  {
    id: "stu_4",
    fname: "Chantal",
    lname: "Kasongo",
    email: "chantal.kasongo@rdc.cd",
    studentImage: "/assets/img/dashboard/profile/reviews-profile-4.png",
    typeStudent: "Payant",
    status: "Refusé",
    statusClass: "danger",
    isSeen: true,
    isContacted: false,
    createdAt: "2024-06-04",
    codeCountry: "CD",
  },
  {
    id: "stu_5",
    fname: "Aimé",
    lname: "Mutombo",
    email: "aime.mutombo@rdc.cd",
    studentImage: "/assets/img/dashboard/profile/reviews-profile-1.png",
    typeStudent: "Boursier",
    status: "Vu",
    statusClass: "success",
    isSeen: true,
    isContacted: false,
    createdAt: "2024-06-05",
    codeCountry: "CD",
  },
  {
    id: "stu_6",
    fname: "Solange",
    lname: "Lusamba",
    email: "solange.lusamba@rdc.cd",
    studentImage: "/assets/img/dashboard/profile/reviews-profile-2.png",
    typeStudent: "Payant",
    status: "Non vu",
    statusClass: "warning",
    isSeen: false,
    isContacted: false,
    createdAt: "2024-06-06",
    codeCountry: "CD",
  },
];

const tabs = ["Tous", "Campus France", "Bourse"];

export default function InstructorCandidateArea() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [date, setDate] = useState(new Date());
  const { handleAnnounceAddEditModal, handleAnnounceDetailsModal } =
    useGlobalContext();
  // Correction du type pour éviter le warning TypeScript
  const [openActionId, setOpenActionId] = useState<number | null>(null);
  const actionButtonRef = useClickOutside(setOpenActionId);

  // Filtrage par type d'étudiant et nationalité congolaise
  const filteredEtudiants =
    activeTab === "Tous"
      ? etudiantsCongolaisData
      : etudiantsCongolaisData.filter(
          (e) => e.typeStudent === activeTab
        );

  // Pagination custom hook
  const { currentItems, handlePageClick, pageCount } = usePagination(
    filteredEtudiants,
    5
  );

  function toggleAction(index: number) {
    if (openActionId === index) {
      setOpenActionId(null);
    } else {
      setOpenActionId(index);
    }
  }

  return (
    <>
      <section className="tpd-order-area">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-dashboard-section">
              <h2 className="tp-dashboard-title">Liste des candidatures</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="tpd-order-filter tpd-redio-style tmy-tab mb-30">
              <ul className="nav nav-tabs">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className="nav-item p-relative"
                    role="presentation"
                  >
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`nav-link ${
                        activeTab === tab ? "active" : ""
                      }`}
                    >
                      <span className="tpd-redio-style-span"> </span>
                      <span>{tab}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tpd-order-date-input text-lg-end">
              <form action="#">
                <DatePicker date={date} setDate={setDate} />
                <span>
                  <CalenderThreeSvg />
                </span>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="tab-content" id="myTabContent">
            <div className="tpd-table mb-45">
              <ul>
                <li className="tpd-table-head">
                  <div className="tpd-table-row">
                  <div className="tpd-order-id">
                      <h4 className="tpd-table-title">Image</h4>
                    </div>
                    <div className="tpd-order-id">
                      <h4 className="tpd-table-title">Nom</h4>
                    </div>
                    <div className="tpd-order-name">
                      <h4 className="tpd-table-title">Email</h4>
                    </div>
                    <div className="tpd-order-date">
                      <h4 className="tpd-table-title">Date de candidature</h4>
                    </div>
                    <div className="tpd-order-price">
                      <h4 className="tpd-table-title">Type</h4>
                    </div>
                    <div className="tpd-order-status">
                      <h4 className="tpd-table-title">Statut</h4>
                    </div>

                    <div className="tpd-order-status">
                      <h4 className="tpd-table-title">Action</h4>
                    </div>

                    <div className="tpd-order-status">
                      <h4 className="tpd-table-title">Contact</h4>
                    </div>
                    
                    <div className="tpd-order-action"></div>
                  </div>
                </li>

                {currentItems.map((etudiant, index) => (
                  <li key={etudiant.id}>
                    <div className="tpd-table-row">
                      <div className="tpd-reviews-student">
                        <div className="tpd-reviews-profile d-flex align-items-center">
                          <div className="tpd-reviews-thumb">
                            <Image
                              src={etudiant.studentImage}
                              alt={`${etudiant.fname} ${etudiant.lname}`}
                              width={38}
                              height={38}
                            />
                          </div>
                          <div className="ms-2">
                            <h4 className="tpd-common-text mb-0">
                              {etudiant.fname} {etudiant.lname}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="tpd-order-name">
                        <h4 className="tpd-common-text">{etudiant.email}</h4>
                      </div>
                      <div className="tpd-order-date">
                        <h4 className="tpd-common-text">
                          {new Date(etudiant.createdAt).toLocaleDateString("fr-FR")}
                        </h4>
                      </div>
                      <div className="tpd-order-price">
                        <h4 className="tpd-common-text">{etudiant.typeStudent}</h4>
                      </div>
                      <div className="tpd-order-status">
                        <div className="tpd-badge-item">
                          <span className={`tpd-badge ${etudiant.statusClass}`}>
                            {etudiant.status}
                          </span>
                        </div>
                      </div>
                      <div
                        className="tpd-announcement-action"
                        ref={actionButtonRef}
                      >
                        <div
                          className={`tpd-action-inexact-btn ${
                            openActionId === index ? "active" : ""
                          }`}
                        >
                          <button
                            className="click"
                            onClick={() => toggleAction(index)}
                            type="button"
                          >
                            <DotsTwoSvg />
                          </button>
                          <div className="tpd-action-click-tooltip bundle">
                            <button>
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
                      {/* Pas de bouton de téléchargement pour les étudiants */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="tp-dashboard-pagination">
              <div className="tp-pagination">
                {/* pagination start */}
                <Pagination
                  handlePageClick={handlePageClick}
                  pageCount={pageCount}
                  isCenter={true}
                />
                {/* pagination end */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pagination area end */}
    </>
  );
}
