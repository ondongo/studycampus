"use client";
import { useState, useEffect } from "react";
import Pagination from "@/components/ui/pagination";
import useGlobalContext from "@/hooks/use-global-context";
import DatePicker from "@/components/ui/date-picker";
import NiceSelect from "@/components/ui/nice-select";
import Image from "next/image";
import {
  CalenderThreeSvg,
  DeleteSvg,
  DotsTwoSvg,
  DownloadTwoSvg,
  PenTwoSvg,
  OpenEye,
  TelSvg,
} from "@/components/svg";
import useClickOutside from "@/hooks/use-click-outside";
import {
  getAllStudents,
  getFilteredStudents,
  markStudentAsSeen,
  markStudentAsContacted,
} from "@/backend/actions/students";
import { Etudiant, TypeStudent, Source } from "@/types/student";
import StudentDetailsModal from "@/components/modal/student-details-modal";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

// Types pour les filtres
interface Filters {
  searchQuery?: string;
  typeStudent?: string;
  source?: string;
  isSeen?: boolean;
  isContacted?: boolean;
  startDate?: Date;
  endDate?: Date;
}

const tabs = ["Tous", "Boursier", "Payant"];

export default function InstructorCandidateArea() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [date, setDate] = useState(new Date());
  const { handleAnnounceAddEditModal, handleAnnounceDetailsModal } =
    useGlobalContext();
  const [openActionId, setOpenActionId] = useState<number | null>(null);
  const actionButtonRef = useClickOutside(setOpenActionId);

  // États pour les données et la pagination
  const [students, setStudents] = useState<Etudiant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  // États pour les filtres avec query params
  const [filters, setFilters] = useState<Filters>({});
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") || ""
  );
  const [selectedSource, setSelectedSource] = useState(
    searchParams.get("source") || ""
  );
  const [selectedSeenStatus, setSelectedSeenStatus] = useState(
    searchParams.get("seenStatus") || ""
  );
  const [selectedContactStatus, setSelectedContactStatus] = useState(
    searchParams.get("contactStatus") || ""
  );
  const [startDate, setStartDate] = useState<Date | null>(
    searchParams.get("startDate")
      ? new Date(searchParams.get("startDate")!)
      : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    searchParams.get("endDate") ? new Date(searchParams.get("endDate")!) : null
  );

  // États pour la modale de détails
  const [showStudentDetailsModal, setShowStudentDetailsModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Etudiant | null>(null);

  // Charger les données initiales
  useEffect(() => {
    loadStudents();
  }, [currentPage, activeTab]);

  // Charger les étudiants avec filtres
  const loadStudents = async () => {
    setLoading(true);
    setError(null);

    try {
      let result;

      // Construire les filtres combinés
      const combinedFilters = { ...filters };

      // Ajouter le filtre par onglet actif
  

      if (Object.keys(combinedFilters).length > 0) {
        // Utiliser les filtres
        result = await getFilteredStudents(combinedFilters, {
          page: currentPage,
          pageSize: pageSize,
        });
      } else {
        // Charger tous les étudiants
        result = await getAllStudents(currentPage, pageSize);
      }

      setStudents(result.Students.map(student => ({
        ...student,
        profilePicture: student.profilePicture || undefined
      })));
      setTotalPages(result.totalPages);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Erreur lors du chargement des étudiants:", error);
      setError("Impossible de charger les étudiants");
    } finally {
      setLoading(false);
    }
  };

  // Appliquer les filtres avec query params
  const applyFilters = () => {
    const newFilters: Filters = {};
    const params = new URLSearchParams();

    if (searchQuery.trim()) {
      newFilters.searchQuery = searchQuery.trim();
      params.set("search", searchQuery.trim());
    }



    // Mettre à jour l'URL avec les paramètres
    const newUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;
    router.push(newUrl);

    setFilters(newFilters);
    setCurrentPage(1);
    loadStudents();
  };

  // Réinitialiser les filtres
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedType("");
    setSelectedSource("");
    setSelectedSeenStatus("");
    setSelectedContactStatus("");
    setStartDate(null);
    setEndDate(null);
    setFilters({});
    setCurrentPage(1);
    // Nettoyer l'URL
    router.push(pathname);
    loadStudents();
  };

  // Télécharger le ZIP d'un étudiant
  const downloadStudentZip = (student: Etudiant) => {
    if (student.zipUrl) {
      const link = document.createElement("a");
      link.href = student.zipUrl;
      link.download = `${student.fname}_${student.lname}_dossier.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Télécharger la photo d'un étudiant
  const downloadStudentPhoto = (student: Etudiant) => {
    console.log(student , ">>>>>>>>>>")
    if (student.profilePicture) {
      const link = document.createElement("a");
      link.href = student.profilePicture;
      link.download = `${student.fname}_${student.lname}_photo.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Marquer un étudiant comme vu
  const markAsSeen = async (studentId: string) => {
    try {
      await markStudentAsSeen(studentId);
      await loadStudents(); // Recharger les données
    } catch (error) {
      console.error("Erreur lors du marquage comme vu:", error);
    }
  };

  // Marquer un étudiant comme contacté
  const markAsContacted = async (studentId: string) => {
    try {
      await markStudentAsContacted(studentId);
      await loadStudents(); // Recharger les données
    } catch (error) {
      console.error("Erreur lors du marquage comme contacté:", error);
    }
  };

  function toggleAction(index: number) {
    if (openActionId === index) {
      setOpenActionId(null);
    } else {
      setOpenActionId(index);
    }
  }

  // Gestionnaire de changement de page
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  // Obtenir le label du type d'étudiant
  const getTypeStudentLabel = (type: TypeStudent) => {
    switch (type) {
      case TypeStudent.NOUVEAU_BACHELIER:
        return "Nouveau Bachelier";
      case TypeStudent.PAS_ENCORE_BACHELIER:
        return "Pas encore Bachelier";
      case TypeStudent.LICENCE:
        return "Licence";
      case TypeStudent.DIPLOME_SUPERIEUR:
        return "Diplôme Supérieur";
      default:
        return type;
    }
  };

  

  // Obtenir la classe CSS du statut vu
  const getSeenStatusClass = (isSeen: boolean) => {
    return isSeen ? "success" : "secondary";
  };

  // Obtenir le texte du statut vu
  const getSeenStatusText = (isSeen: boolean) => {
    return isSeen ? "Vu" : "Non Vu";
  };

  // Obtenir la classe CSS du statut contacté
  const getContactStatusClass = (isContacted: boolean) => {
    return isContacted ? "success" : "warning";
  };

  // Obtenir le texte du statut contacté
  const getContactStatusText = (isContacted: boolean) => {
    return isContacted ? "Contacté" : "Non Contacté";
  };

  // Ouvrir la modale de détails d'un étudiant
  const openStudentDetails = (student: Etudiant) => {
    setSelectedStudent(student);
    setShowStudentDetailsModal(true);
  };

  // Fermer la modale de détails
  const closeStudentDetails = () => {
    setShowStudentDetailsModal(false);
    setSelectedStudent(null);
  };

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

        {/* Filtres avec query params */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Filtres</h5>
                <div className="row d-flex align-items-center ">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Recherche</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nom, email, téléphone..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            applyFilters();
                          }
                        }}
                      />
                    </div>
                  </div>
             
                  <div className="col-md-6 d-flex align-items-end">
                    <div className="form-group">
                      <label>Actions</label>
                      <div className="d-flex gap-2 w-100">
                        <button
                          className="btn btn-primary btn-sm flex-fill"
                          onClick={applyFilters}
                        >
                          <i className="fas fa-search me-1"></i>
                          Filtrer
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={resetFilters}
                        >
                          <i className="fas fa-undo"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau des étudiants avec design amélioré */}
        <div className="tab-content" id="myTabContent">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Chargement...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : (
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: "10%", padding: "15px" }}>Photo</th>
                        <th style={{ width: "30%", padding: "15px" }}>
                          Nom & Téléphone
                        </th>
                        <th style={{ width: "20%", padding: "15px" }}>Email</th>
                        <th style={{ width: "10%", padding: "15px" }}>Date</th>
                        <th style={{ width: "25%", padding: "15px" }}>Type</th>
                       
                        <th style={{ width: "5%", padding: "15px" }}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, index) => (
                        <tr key={student.id} className="align-middle">
                          <td style={{ padding: "15px" }}>
                            <div
                              className="d-flex align-items-center justify-content-center"
                              style={{ cursor: "pointer" }}
                              onClick={() => openStudentDetails(student)}
                              title="Cliquer pour voir les détails"
                            >
                              <Image
                                src={
                                  student.profilePicture ||
                                  "/assets/img/dashboard/profile/reviews-profile-1.png"
                                }
                                alt={`${student.fname} ${student.lname}`}
                                width={45}
                                height={45}
                                className="rounded-circle"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </td>
                          <td style={{ padding: "15px" }}>
                            <div>
                              <h6
                                className="mb-1"
                                style={{ fontSize: "14px", fontWeight: "500" }}
                              >
                                {student.fname} {student.lname}
                              </h6>
                              <small
                                className="text-muted"
                                style={{ fontSize: "12px" }}
                              >
                                {student.phone}
                              </small>
                            </div>
                          </td>
                          <td style={{ padding: "15px" }}>
                            <a
                              href={`mailto:${student.email}`}
                              className="text-decoration-none"
                              style={{ color: "#007bff" }}
                            >
                              {student.email}
                            </a>
                          </td>
                          <td style={{ padding: "15px" }}>
                            <span style={{ fontSize: "14px" }}>
                              {new Date(student.createdAt).toLocaleDateString(
                                "fr-FR"
                              )}
                            </span>
                          </td>
                          <td style={{ padding: "15px" }}>
                            <div>
                              <div
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  marginBottom: "4px",
                                }}
                              >
                                {getTypeStudentLabel(student.typeStudent)}
                              </div>
                            </div>
                          </td>
          
                          <td style={{ padding: "15px" }}>
                            <div className="d-flex gap-1 justify-content-center">
                              <div className="tpd-order-action">
                                <div className="tpd-action-btn">
                                  <button
                                    onClick={() => downloadStudentZip(student)}
                                    title="Télécharger le dossier"
                                  >
                                    <DownloadTwoSvg />
                                    <span className="tpd-action-tooltip">
                                      {" "}
                                      Télécharger les documents
                                    </span>
                                  </button>
                                </div>

                         
                              </div>

                              <div className="tpd-action-btn">
                                  <button
                                   onClick={() =>
                                    downloadStudentPhoto(student)
                                  }
                                    title="Télécharger la photo"
                                  >
                                    <DownloadTwoSvg />
                                    <span className="tpd-action-tooltip">
                                      {" "}
                                      Télécharger la photo
                                    </span>
                                  </button>
                                </div>

                    
                         
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-12">
            <div className="tp-dashboard-pagination">
              <div className="tp-pagination">
                <Pagination
                  handlePageClick={handlePageClick}
                  pageCount={totalPages}
                  isCenter={true}
                />
              </div>
              <div className="text-center mt-2">
                <small className="text-muted">
                  {totalItems} étudiant(s) au total
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modale de détails de l'étudiant */}
      <StudentDetailsModal
        show={showStudentDetailsModal}
        onHide={closeStudentDetails}
        student={selectedStudent}
        onStudentUpdate={loadStudents}
      />
    </>
  );
}
