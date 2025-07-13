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
    // Validation des données requises
    if (!formData.fname || !formData.lname || !formData.email) {
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

    // 1. Créer le fichier ZIP avec tous les documents
    const zip = new JSZip();

    // Ajouter les fichiers au ZIP
    if (files.passportOrBirthCert) {
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

    // 3. Upload du fichier ZIP vers Firebase
    let zipUrl: string;
    try {
      zipUrl = await FirebaseUploadService.uploadZipFile(
        zipFile,
        "etudiants",
        `${formData.fname}_${formData.lname}_documents.zip`
      );
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

    // 6. Sauvegarder l'étudiant en base
    try {
      await createStudent(studentData);
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
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!passportFile) {
        setError("Le passeport ou certificat de naissance est requis");
        setLoading(false);
        return;
      }

      if (!photoFile) {
        setError("La photo est requise");
        setLoading(false);
        return;
      }

      if (transcriptFiles.length === 0) {
        setError("Au moins un bulletin scolaire est requis");
        setLoading(false);
        return;
      }

      if (diplomaFiles.length === 0) {
        setError("Au moins un diplôme est requis");
        setLoading(false);
        return;
      }

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

      for (const file of allFiles) {
        if (file && file.size > maxFileSize) {
          setError(
            `Le fichier ${file.name} est trop volumineux. Taille maximum : 10MB.`
          );
          setLoading(false);
          return;
        }
      }

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

      // Appeler l'action serveur
      const result = await handleStudentSubmit(formData, files);

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
            <div className="col-xl-6 col-lg-6">
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
            <div className="col-xl-6 col-lg-6">
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
            <div className="col-xl-12 col-lg-12">
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
            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Code postal{" "}
                  <span style={{ color: "red", background: "transparent" }}>
                    *
                  </span>
                </label>
                <input
                  type="text"
                  {...register("zipcode", {
                    required: "Le code postal est requis",
                  })}
                />
                {errors.zipcode?.message && (
                  <ErrMsg msg={errors.zipcode.message} />
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
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
            <div className="col-xl-6 col-lg-6">
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
            <div className="col-xl-6 col-lg-6">
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
            <div className="col-xl-6 col-lg-6">
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
            <div className="col-xl-6 col-lg-6">
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
            <div className="col-xl-6 col-lg-6">
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
              Informations importantes
            </h6>
            <ul className="mb-0 small">
              <li>Taille maximum par fichier : 10MB</li>
              <li>Formats acceptés : PDF, DOC, DOCX, JPG, JPEG, PNG</li>
            </ul>
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-input schedule p-relative mb-3">
                <label htmlFor="passportOrBirthCert">
                  Téléchargez le passeport ou certificat de naissance{" "}
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
                      {passportFile.name}
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removePassportFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        Supprimer
                      </button>
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Téléchargez vos bulletins scolaires (jusqu&apos;à 9){" "}
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
                        {file.name}
                        <button
                          type="button"
                          className="btn btn-sm btn-danger ms-auto"
                          onClick={() => removeTranscriptFile(index)}
                        >
                          <i className="fas fa-trash me-1"></i>
                          Supprimer
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Téléchargez vos diplômes (jusqu'à 6){" "}
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
                        {file.name}
                        <button
                          type="button"
                          className="btn btn-sm btn-danger ms-auto"
                          onClick={() => removeDiplomaFile(index)}
                        >
                          <i className="fas fa-trash me-1"></i>
                          Supprimer
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-input schedule p-relative">
                <label>Téléchargez votre CV (Optionnel)</label>
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
                      {cvFile.name}
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removeCvFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        Supprimer
                      </button>
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-input schedule p-relative">
                <label>Lettre de recommandation (optionnel)</label>
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
                      {recommendationFile.name}
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removeRecommendationFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        Supprimer
                      </button>
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-input schedule p-relative">
                <label>
                  Ajoutez votre photo{" "}
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
                      {photoFile.name}
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removePhotoFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        Supprimer
                      </button>
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-input schedule p-relative">
                <label>Attestation ou certificat (optionnel)</label>
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
                      {certificateFile.name}
                      <button
                        type="button"
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={removeCertificateFile}
                      >
                        <i className="fas fa-trash me-1"></i>
                        Supprimer
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
                ></span>
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
