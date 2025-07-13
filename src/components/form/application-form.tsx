"use client";
import React, { useState } from "react";
import { CalenderSvg, RightArrowSeven } from "../svg";
import DatePicker from "../ui/date-picker";
import NiceSelect from "../ui/nice-select";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrMsg from "../err-msg";
import { TypeStudent, Source } from "@/types/student";
import { useRouter } from "next/navigation";
import JSZip from "jszip";
import { FirebaseUploadService } from "@/backend/services/firebase-upload.service";
import { createStudent } from "@/backend/actions/students";
import { v4 as uuid } from "uuid";
type Inputs = {
  fname: string;
  lname: string;
  email: string;
  zipcode: string;
  phone: string;
  school: string;
  yearCompletion: string;
  qualification: string;
  passportOrBirthCert: FileList;
  transcripts: FileList;
  diplomas: FileList;
  cv: FileList;
  recommendationLetter: FileList;
  certificate: FileList; // Pour une attestation, par exemple
  photo: FileList;
  additionalInfo: string;
};

async function handleStudentSubmit(
  formData: {
    fname: string;
    lname: string;
    email: string;
    zipcode: string;
    phone: string;
    school: string;
    yearCompletion: string;
    qualification: string;
    additionalInfo?: string;
    birthDate: Date;
    typeStudent: TypeStudent;
    source: Source;
  },
  files: {
    passportOrBirthCert?: File;
    transcripts?: File[];
    diplomas?: File[];
    cv?: File;
    recommendationLetter?: File;
    certificate?: File;
    photo?: File;
  }
): Promise<{ success: boolean; message: string; studentId?: string }> {
  try {
    console.log("handleStudentSubmit: Début de la fonction");
    console.log("Données reçues:", formData);
    console.log("Fichiers reçus:", files);
    
    // Validation des données requises
    if (!formData.fname || !formData.lname || !formData.email) {
      console.log("Erreur: Données personnelles manquantes");
      return {
        success: false,
        message:
          "Les informations personnelles (prénom, nom, email) sont requises.",
      };
    }

    if (!files.passportOrBirthCert) {
      return {
        success: false,
        message: "Le passeport ou certificat de naissance est requis.",
      };
    }

    if (!files.photo) {
      return {
        success: false,
        message: "La photo est requise.",
      };
    }

    // Validation de la taille des fichiers (max 10MB par fichier)
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const allFiles = [
      files.passportOrBirthCert,
      files.photo,
      files.cv,
      files.recommendationLetter,
      files.certificate,
      ...(files.transcripts || []),
      ...(files.diplomas || []),
    ].filter(Boolean);

    for (const file of allFiles) {
      if (file && file.size > maxFileSize) {
        return {
          success: false,
          message: `Le fichier ${file.name} est trop volumineux. Taille maximum : 10MB.`,
        };
      }
    }

    console.log("Création du fichier ZIP...");
    // 1. Créer le fichier ZIP avec tous les documents
    const zip = new JSZip();

    // Ajouter les fichiers au ZIP
    if (files.passportOrBirthCert) {
      console.log("Ajout du passeport au ZIP");
      const extension =
        files.passportOrBirthCert.name.split(".").pop() || "pdf";
      zip.file(
        `passport_or_birth_cert.${extension}`,
        files.passportOrBirthCert
      );
    }

    if (files.transcripts && files.transcripts.length > 0) {
      files.transcripts.forEach((file, index) => {
        const extension = file.name.split(".").pop() || "pdf";
        zip.file(`transcript_${index + 1}.${extension}`, file);
      });
    }

    if (files.diplomas && files.diplomas.length > 0) {
      files.diplomas.forEach((file, index) => {
        const extension = file.name.split(".").pop() || "pdf";
        zip.file(`diploma_${index + 1}.${extension}`, file);
      });
    }

    if (files.cv) {
      const extension = files.cv.name.split(".").pop() || "pdf";
      zip.file(`cv.${extension}`, files.cv);
    }

    if (files.recommendationLetter) {
      const extension =
        files.recommendationLetter.name.split(".").pop() || "pdf";
      zip.file(
        `recommendation_letter.${extension}`,
        files.recommendationLetter
      );
    }

    if (files.certificate) {
      const extension = files.certificate.name.split(".").pop() || "pdf";
      zip.file(`certificate.${extension}`, files.certificate);
    }

    // 2. Générer le fichier ZIP
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipFile = new File(
      [zipBlob],
      `${formData.fname}_${formData.lname}_documents.zip`,
      {
        type: "application/zip",
      }
    );

    console.log("Upload du fichier ZIP vers Firebase...");
    // 3. Upload du fichier ZIP vers Firebase
    let zipUrl: string;
    try {
      console.log("Tentative d'upload du ZIP:", zipFile.name, zipFile.size);
      zipUrl = await FirebaseUploadService.uploadZipFile(
        zipFile,
        "etudiants",
        `${formData.fname}_${formData.lname}_documents.zip`
      );
      console.log("ZIP uploadé avec succès, URL:", zipUrl);
    } catch (uploadError) {
      console.error("Erreur lors de l'upload du ZIP:", uploadError);
      return {
        success: false,
        message: "Erreur lors de l'upload des documents. Veuillez réessayer.",
      };
    }

    // 4. Upload de la photo vers Firebase (si fournie)
    let profilePictureUrl: string | null = null;
    if (files.photo) {
      try {
        profilePictureUrl = await FirebaseUploadService.uploadZipFile(
          files.photo,
          "etudiants/photos",
          `${formData.fname}_${formData.lname}_photo.${files.photo.name
            .split(".")
            .pop()}`
        );
      } catch (photoUploadError) {
        console.error("Erreur lors de l'upload de la photo:", photoUploadError);
        // On continue même si l'upload de la photo échoue
      }
    }

    // 5. Créer l'objet étudiant pour Prisma
    const studentData: any = {
      id: uuid(),
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      codeCountry: "+242",
      phone: formData.phone,
      school: formData.school,
      yearCompletion: formData.yearCompletion,
      qualification: formData.qualification,
      additionalInfo: formData.additionalInfo || null,
      birthDate: formData.birthDate,
      zipUrl: zipUrl,
      profilePicture: profilePictureUrl,
      createdAt: new Date(),
      typeStudent: formData.typeStudent,
      isSeen: false,
      isContacted: false,
      source: formData.source,
    };

    console.log("Sauvegarde de l'étudiant en base...");
    console.log("Données à sauvegarder:", studentData);
    // 6. Sauvegarder l'étudiant en base
    try {
      await createStudent(studentData);
      console.log("Étudiant sauvegardé avec succès en base");
    } catch (dbError) {
      console.error("Erreur lors de la sauvegarde en base:", dbError);

      // En cas d'erreur de sauvegarde, essayer de supprimer les fichiers uploadés
      try {
        if (FirebaseUploadService.isValidUrl(zipUrl)) {
          await FirebaseUploadService.deleteFile(zipUrl);
        }
        if (
          profilePictureUrl &&
          FirebaseUploadService.isValidUrl(profilePictureUrl)
        ) {
          await FirebaseUploadService.deleteFile(profilePictureUrl);
        }
      } catch (cleanupError) {
        console.error("Erreur lors du nettoyage des fichiers:", cleanupError);
      }

      return {
        success: false,
        message:
          "Erreur lors de la sauvegarde des données. Veuillez réessayer.",
      };
    }

    return {
      success: true,
      message: "Candidature soumise avec succès !",
      studentId: studentData.id,
    };
  } catch (error) {
    console.error("Erreur lors de la soumission de la candidature:", error);

    return {
      success: false,
      message:
        "Une erreur inattendue est survenue lors de la soumission de votre candidature. Veuillez réessayer.",
    };
  }
}
export default function FormulaireApplication() {
  // Styles CSS pour les champs de fichiers
  const fileInputStyles = `
    .file-input-wrapper {
      margin-bottom: 10px;
      width: 100%;
    }
    
    .file-input-wrapper input {
      display: none;
    }
    
    .file-input-wrapper label {
      display: inline-block;
      width: 100%;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      border: 1px solid #ced4da;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
      min-height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .file-input-wrapper label:hover {
      background-color: #e9ecef;
      border-color: #adb5bd;
      color: #495057;
    }
    
    .file-input-wrapper label:focus {
      outline: none;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    
    .selected-file {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6 !important;
      border-radius: 4px;
      padding: 8px 12px;
    }
    
    .selected-file:hover {
      background-color: #e9ecef;
    }
    
    .selected-file .btn-danger {
      transition: all 0.3s ease;
    }
    
    .selected-file .btn-danger:hover {
      transform: scale(1.05);
    }
    
    .file-list {
      margin-top: 10px;
    }
    
    /* Responsive design pour mobile */
    @media (max-width: 768px) {
      .col-xl-6.col-lg-6, .col-xl-6.col-lg-6.col-md-6.col-sm-12 {
        margin-bottom: 20px;
      }
      
      .file-input-wrapper label {
        padding: 10px 15px;
        font-size: 13px;
        min-height: 44px;
      }
      
      .selected-file {
        padding: 6px 10px;
      }
      
      .selected-file span {
        flex-wrap: wrap;
        gap: 8px;
      }
      
      .selected-file .btn-danger {
        font-size: 12px;
        padding: 4px 8px;
      }
      
      /* Truncation des noms de fichiers */
      .file-name-truncate {
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
      }
      
      /* Ajustement des colonnes pour mobile */
      .mobile-full-width {
        width: 100% !important;
      }
      
      /* Réduction de la taille des textes pour mobile */
      .tp-application-from-title {
        font-size: 1.2rem;
      }
      
      .alert-heading {
        font-size: 0.9rem;
      }
      
      .alert ul li {
        font-size: 0.8rem;
      }
    }
    
    @media (max-width: 576px) {
      .file-name-truncate {
        max-width: 100px;
      }
      
      .selected-file span {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .selected-file .btn-danger {
        align-self: flex-end;
        margin-top: 5px;
      }
      
      /* Ajustements pour très petits écrans */
      .tp-application-from-title {
        font-size: 1.1rem;
      }
      
      .alert {
        padding: 0.75rem;
      }
      
      .alert-heading {
        font-size: 0.85rem;
      }
      
      .alert ul li {
        font-size: 0.75rem;
      }
      
      /* Réduction des marges et paddings */
      .tp-contact-input-form {
        padding: 15px;
      }
      
      .tp-contact-input {
        margin-bottom: 15px;
      }
    }
    
    @media (max-width: 480px) {
      .file-name-truncate {
        max-width: 80px;
      }
      
      .selected-file .btn-danger {
        font-size: 11px;
        padding: 3px 6px;
      }
      
      .file-input-wrapper label {
        font-size: 12px;
        padding: 8px 12px;
      }
    }
  `;
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [selectedTypeStudent, setSelectedTypeStudent] = useState<TypeStudent>(
    TypeStudent.NOUVEAU_BACHELIER
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [transcriptFiles, setTranscriptFiles] = useState<File[]>([]);
  const [diplomaFiles, setDiplomaFiles] = useState<File[]>([]);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [recommendationFile, setRecommendationFile] = useState<File | null>(
    null
  );

  const handleTranscriptChange = (e: any) => {
    if (e.target.files) {
      setTranscriptFiles((prevFiles: any) => [
        ...prevFiles,
        ...Array.from(e.target.files),
      ]);
    }
  };

  const handleDiplomaChange = (e: any) => {
    if (e.target.files) {
      setDiplomaFiles((prevFiles: any) => [
        ...prevFiles,
        ...Array.from(e.target.files),
      ]);
    }
  };

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  const handlePassportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPassportFile(e.target.files[0]);
    }
  };

  const handleRecommendationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setRecommendationFile(e.target.files[0]);
    }
  };

  const handleCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCertificateFile(e.target.files[0]);
    }
  };

  // Fonctions de suppression des fichiers
  const removeTranscriptFile = (index: number) => {
    setTranscriptFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const removeDiplomaFile = (index: number) => {
    setDiplomaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const removeCvFile = () => {
    setCvFile(null);
  };

  const removePhotoFile = () => {
    setPhotoFile(null);
  };

  const removePassportFile = () => {
    setPassportFile(null);
  };

  const removeRecommendationFile = () => {
    setRecommendationFile(null);
  };

  const removeCertificateFile = () => {
    setCertificateFile(null);
  };

  function handleDegree(item: { value: string; label: string }) {
    // Mapper les valeurs du select vers les enum TypeStudent
    switch (item.value) {
      case "Nouveau Bachelier":
        setSelectedTypeStudent(TypeStudent.NOUVEAU_BACHELIER);
        break;
      case "Pas encore le bac":
        setSelectedTypeStudent(TypeStudent.PAS_ENCORE_BACHELIER);
        break;
      case "A une licence":
        setSelectedTypeStudent(TypeStudent.LICENCE);
        break;
      default:
        setSelectedTypeStudent(TypeStudent.NOUVEAU_BACHELIER);
    }
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("Début de la soumission du formulaire");
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log("Validation des fichiers...");
      if (!passportFile) {
        console.log("Erreur: Passeport manquant");
        setError("Le passeport ou certificat de naissance est requis");
        setLoading(false);
        return;
      }

      if (!photoFile) {
        console.log("Erreur: Photo manquante");
        setError("La photo est requise");
        setLoading(false);
        return;
      }

      if (transcriptFiles.length === 0) {
        console.log("Erreur: Bulletins scolaires manquants");
        setError("Au moins un bulletin scolaire est requis");
        setLoading(false);
        return;
      }

      if (diplomaFiles.length === 0) {
        console.log("Erreur: Diplômes manquants");
        setError("Au moins un diplôme est requis");
        setLoading(false);
        return;
      }

      console.log("Validation de la taille des fichiers...");
      const maxFileSize = 10 * 1024 * 1024; // 10MB
      const allFiles = [
        passportFile,
        photoFile,
        cvFile,
        recommendationFile,
        certificateFile,
        ...transcriptFiles,
        ...diplomaFiles,
      ].filter(Boolean);

      console.log("Nombre total de fichiers:", allFiles.length);
      for (const file of allFiles) {
        if (file && file.size > maxFileSize) {
          console.log("Erreur: Fichier trop volumineux:", file.name, file.size);
          setError(
            `Le fichier ${file.name} est trop volumineux. Taille maximum : 10MB.`
          );
          setLoading(false);
          return;
        }
      }
      console.log("Validation de la taille des fichiers terminée");

      // Préparer les données du formulaire
      const formData = {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        zipcode: data.zipcode,
        phone: data.phone,
        school: data.school,
        yearCompletion: data.yearCompletion,
        qualification: data.qualification,
        additionalInfo: data.additionalInfo,
        birthDate: new Date(date),
        typeStudent: selectedTypeStudent,
        source: Source.CAMPUS_FRANCE as Source,
      };

      // Préparer les fichiers
      const files = {
        passportOrBirthCert: passportFile,
        transcripts: transcriptFiles,
        diplomas: diplomaFiles,
        cv: cvFile || undefined,
        recommendationLetter: recommendationFile || undefined,
        certificate: certificateFile || undefined,
        photo: photoFile,
      };

      console.log("Appel de handleStudentSubmit avec les données:", formData);
      console.log("Fichiers à traiter:", files);
      
      // Appeler l'action serveur
      const result = await handleStudentSubmit(formData, files);
      console.log("Résultat de handleStudentSubmit:", result);

      if (result.success) {
        await fetch("/api/sendMail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname: formData.fname,
            lname: formData.lname,
            email: formData.email,
            phone: formData.phone,
            birthDate: formData.birthDate,
            zipUrl: result.studentId
              ? `https://firebasestorage.googleapis.com/.../${formData.fname}_${formData.lname}_documents.zip`
              : "", // Remplace par l'URL ZIP si elle est ailleurs
            profilePicture: files.photo
              ? `https://firebasestorage.googleapis.com/.../${formData.fname}_${
                  formData.lname
                }_photo.${files.photo.name.split(".").pop()}`
              : null,
            typeStudent: formData.typeStudent,
            source: formData.source,
          }),
        });
        setSuccess(true);
        reset();
        setTranscriptFiles([]);
        setDiplomaFiles([]);
        setCvFile(null);
        setCertificateFile(null);
        setPhotoFile(null);
        setPassportFile(null);
        setRecommendationFile(null);

        router.push("/candidature/success");
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error("Erreur lors de la soumission>>>>>:", error);
      setError(
        "Une erreur est survenue lors de la soumission de votre candidature. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{fileInputStyles}</style>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {success && (
          <div className="alert alert-success" role="alert">
            <i className="fas fa-check-circle me-2"></i>
            Votre candidature a été soumise avec succès ! Vous allez être
            redirigé...
          </div>
        )}

        <div className="tp-contact-input-form application">
          <h4 className="tp-application-from-title">Détails du candidat</h4>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Prénom{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <input
                  type="text"
                  {...register("fname", { required: "Le prénom est requis" })}
                  id="fname"
                />
                {errors.fname?.message && <ErrMsg msg={errors.fname.message} />}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Nom{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <input
                  type="text"
                  {...register("lname", { required: "Le nom est requis" })}
                />
                {errors.lname?.message && <ErrMsg msg={errors.lname.message} />}
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Adresse e-mail{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "L'email est requis" })}
                />
                {errors.email?.message && <ErrMsg msg={errors.email.message} />}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Code pays{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Ex : +242"
                  {...register("zipcode", {
                    required: "Le code pays est requis (Ex:+242)",
                  })}
                />
                {errors.zipcode?.message && (
                  <ErrMsg msg={errors.zipcode.message} />
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Numéro de téléphone{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Le numéro de téléphone est requis",
                  })}
                />
                {errors.phone?.message && <ErrMsg msg={errors.phone.message} />}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Date de naissance{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <DatePicker date={date} setDate={setDate} />
                <span className="icon">
                  <CalenderSvg />
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Type étudiant{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <div className="tp-application-select">
                  <NiceSelect
                    cls="wide"
                    options={[
                      {
                        value: "Nouveau Bachelier",
                        label: "Nouveau Bachelier",
                      },
                      {
                        value: "Pas encore le bac",
                        label: "Pas encore le bac",
                      },
                      { value: "A une licence", label: "A une licence" },
                    ]}
                    defaultCurrent={0}
                    onChange={(item) => handleDegree(item)}
                    name="Degree"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-contact-input-form application">
          <h4 className="tp-application-from-title">Dossier académique</h4>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  École{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <input
                  type="text"
                  {...register("school", {
                    required: "Le nom de l'école est requis",
                  })}
                />
                {errors.school?.message && (
                  <ErrMsg msg={errors.school.message} />
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Année obtention du diplôme{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <input
                  type="text"
                  {...register("yearCompletion", {
                    required: "L'année d'obtention du diplôme est requise",
                  })}
                />
                {errors.yearCompletion?.message && (
                  <ErrMsg msg={errors.yearCompletion.message} />
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Qualification obtenue{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <input
                  type="text"
                  {...register("qualification", {
                    required: "La qualification obtenue est requise",
                  })}
                />
                {errors.qualification?.message && (
                  <ErrMsg msg={errors.qualification.message} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="tp-contact-input-form application">
          <h4 className="tp-application-from-title">Documents à fournir</h4>
          <div className="alert alert-info mb-4">
            <h6 className="alert-heading">
              <i className="fas fa-info-circle me-2"></i>
              <span className="d-none d-sm-inline">Informations importantes</span>
              <span className="d-inline d-sm-none">Infos</span>
            </h6>
            <ul className="mb-0 small">
              <li><span className="d-none d-sm-inline">Taille maximum par fichier : </span><span className="d-inline d-sm-none">Max : </span>10MB</li>
              <li><span className="d-none d-sm-inline">Formats acceptés : </span><span className="d-inline d-sm-none">Formats : </span>PDF, DOC, DOCX, JPG, JPEG, PNG</li>
            </ul>
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative mb-3">
                <label htmlFor="passportOrBirthCert">
                  Passeport/certificat naissance{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>

                <div className="file-input-wrapper">
                  <input
                    type="file"
                    id="passportOrBirthCert"
                    className={`form-control ${
                      errors.passportOrBirthCert ? "is-invalid" : ""
                    }`}
                    accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                    onChange={handlePassportChange}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="passportOrBirthCert"
                    className="btn btn-outline-secondary"
                  >
                    <i className="fas fa-upload me-2"></i>
                    Choisir un fichier
                  </label>
                </div>

                {errors.passportOrBirthCert?.message && (
                  <div className="invalid-feedback d-block mt-1">
                    {errors.passportOrBirthCert.message}
                  </div>
                )}
                {passportFile && (
                  <div className="selected-file mt-2 p-2 border rounded">
                    <span className="d-flex align-items-center">
                      <i className="fas fa-file me-2"></i>
                      <span className="file-name-truncate">{passportFile.name}</span>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removePassportFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        <span className="d-sm-inline">Supprimer</span>
                      </button>
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Bulletins scolaires (max 9){" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>{" "}
                </label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    multiple
                    className={`form-control ${
                      errors.transcripts ? "is-invalid" : ""
                    }`}
                    accept=".pdf, .doc, .docx"
                    onChange={handleTranscriptChange}
                    style={{ display: "none" }}
                    id="transcripts"
                  />
                  <label
                    htmlFor="transcripts"
                    className="btn btn-outline-secondary"
                  >
                    <i className="fas fa-upload me-2"></i>
                    Ajouter des fichiers
                  </label>
                </div>
                {errors.transcripts?.message && (
                  <ErrMsg msg={errors.transcripts.message} />
                )}
                <div className="file-list mt-2">
                  {transcriptFiles.map((file, index) => (
                    <div
                      key={index}
                      className="selected-file p-2 border rounded mb-2"
                    >
                      <span className="d-flex align-items-center">
                        <i className="fas fa-file me-2"></i>
                        <span className="file-name-truncate">{file.name}</span>
                        <button
                          type="button"
                          className="btn btn-sm btn-danger ms-auto"
                          onClick={() => removeTranscriptFile(index)}
                        >
                          <i className="fas fa-trash me-1"></i>
                          <span className="d-sm-inline">Supprimer</span>
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Diplômes (max 6){" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>{" "}
                </label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    multiple
                    className={`form-control`}
                    accept=".pdf, .doc, .docx"
                    onChange={handleDiplomaChange}
                    style={{ display: "none" }}
                    id="diplomas"
                  />
                  <label
                    htmlFor="diplomas"
                    className="btn btn-outline-secondary"
                  >
                    <i className="fas fa-upload me-2"></i>
                    Ajouter des fichiers
                  </label>
                </div>
                <div className="file-list mt-2">
                  {diplomaFiles.map((file, index) => (
                    <div
                      key={index}
                      className="selected-file p-2 border rounded mb-2"
                    >
                      <span className="d-flex align-items-center">
                        <i className="fas fa-file me-2"></i>
                        <span className="file-name-truncate">{file.name}</span>
                        <button
                          type="button"
                          className="btn btn-sm btn-danger ms-auto"
                          onClick={() => removeDiplomaFile(index)}
                        >
                          <i className="fas fa-trash me-1"></i>
                          <span className="d-sm-inline">Supprimer</span>
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>CV (Optionnel)</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    accept=".pdf, .doc, .docx"
                    className={`form-control`}
                    onChange={handleCvChange}
                    style={{ display: "none" }}
                    id="cv"
                  />
                  <label htmlFor="cv" className="btn btn-outline-secondary">
                    <i className="fas fa-upload me-2"></i>
                    Choisir un fichier
                  </label>
                </div>
                {cvFile && (
                  <div className="selected-file mt-2 p-2 border rounded">
                    <span className="d-flex align-items-center">
                      <i className="fas fa-file me-2"></i>
                      <span className="file-name-truncate">{cvFile.name}</span>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removeCvFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        <span className="d-sm-inline">Supprimer</span>
                      </button>
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>Lettre recommandation (optionnel)</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    accept=".pdf, .doc, .docx"
                    className={`form-control`}
                    onChange={handleRecommendationChange}
                    style={{ display: "none" }}
                    id="recommendation"
                  />
                  <label
                    htmlFor="recommendation"
                    className="btn btn-outline-secondary"
                  >
                    <i className="fas fa-upload me-2"></i>
                    Choisir un fichier
                  </label>
                </div>
                {recommendationFile && (
                  <div className="selected-file mt-2 p-2 border rounded">
                    <span className="d-flex align-items-center">
                      <i className="fas fa-file me-2"></i>
                      <span className="file-name-truncate">{recommendationFile.name}</span>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removeRecommendationFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        <span className="d-sm-inline">Supprimer</span>
                      </button>
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Photo{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    accept="image/*"
                    className={`form-control`}
                    onChange={handlePhotoChange}
                    style={{ display: "none" }}
                    id="photo"
                  />
                  <label htmlFor="photo" className="btn btn-outline-secondary">
                    <i className="fas fa-upload me-2"></i>
                    Choisir une image
                  </label>
                </div>
                {photoFile && (
                  <div className="selected-file mt-2 p-2 border rounded">
                    <span className="d-flex align-items-center">
                      <i className="fas fa-image me-2"></i>
                      <span className="file-name-truncate">{photoFile.name}</span>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removePhotoFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        <span className="d-sm-inline">Supprimer</span>
                      </button>
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="tp-contact-input schedule p-relative">
                <label>Attestation/certificat (optionnel)</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                    className={`form-control`}
                    onChange={handleCertificateChange}
                    style={{ display: "none" }}
                    id="certificate"
                  />
                  <label
                    htmlFor="certificate"
                    className="btn btn-outline-secondary"
                  >
                    <i className="fas fa-upload me-2"></i>
                    Choisir un fichier
                  </label>
                </div>
                {certificateFile && (
                  <div className="selected-file mt-2 p-2 border rounded">
                    <span className="d-flex align-items-center">
                      <i className="fas fa-file me-2"></i>
                      <span className="file-name-truncate">{certificateFile.name}</span>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removeCertificateFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        <span className="d-sm-inline">Supprimer</span>
                      </button>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            <i className="fas fa-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}

        <div className="col-12 d-flex justify-content-end">
          <button className="tp-btn" type="submit" disabled={loading}>
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                  style={{
                    verticalAlign: "middle",
                    display: "inline-block",
                    animation: "spin 0.6s linear infinite"
                  }}
                ></span>
                <style>
                  {`
                    @keyframes spin {
                      0% { transform: rotate(0deg);}
                      100% { transform: rotate(360deg);}
                    }
                  `}
                </style>
                Soumission en cours...
              </>
            ) : (
              <>
                Soumettre <RightArrowSeven />
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
