"use client";
import React, { useState } from "react";
import { CalenderSvg, RightArrowSeven } from "../svg";
import DatePicker from "../ui/date-picker";
import NiceSelect from "../ui/nice-select";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrMsg from "../err-msg";

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
  photo: FileList; // Pour la photo
  additionalInfo: string;
};

export default function FormulaireApplication() {
  const [date, setDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Inputs>();

  const [transcriptFiles, setTranscriptFiles] = useState<File[]>([]);
  const [diplomaFiles, setDiplomaFiles] = useState<File[]>([]);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [recommendationFile, setRecommendationFile] = useState<File | null>(
    null
  );
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  function handleDegree(item: { value: string; label: string }) {
    console.log(item);
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-contact-input-form application">
        <h4 className="tp-application-from-title">Détails du candidat</h4>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>
                Prénom <span style={{color:"red" , background:"transparent"}}>*</span>
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
                Nom <span style={{color:"red" , background:"transparent"}}>*</span>
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
                Adresse e-mail <span style={{color:"red" , background:"transparent"}}>*</span>
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
                Code postal <span style={{color:"red" , background:"transparent"}}>*</span>
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
                Numéro de téléphone <span style={{color:"red" , background:"transparent"}}>*</span>
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
                Date de naissance <span style={{color:"red" , background:"transparent"}}>*</span>
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
                Type étudiant <span style={{color:"red" , background:"transparent"}}>*</span>
              </label>
              <div className="tp-application-select">
                <NiceSelect
                  cls="wide"
                  options={[
                    { value: "Nouveau Bachelier", label: "Nouveau Bachelier" },
                    { value: "Pas encore le bac ", label: "Pas encore le bac" },
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
                École <span style={{color:"red" , background:"transparent"}}>*</span>
              </label>
              <input
                type="text"
                {...register("school", {
                  required: "Le nom de l'école est requis",
                })}
              />
              {errors.school?.message && <ErrMsg msg={errors.school.message} />}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>
                Année obtention du diplôme <span style={{color:"red" , background:"transparent"}}>*</span>
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
                Qualification obtenue <span style={{color:"red" , background:"transparent"}}>*</span>
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
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>
                Téléchargez le passeport ou certificat de naissance{" "}
           
              </label>
              <input
                type="file"
                {...register("passportOrBirthCert", {
                  required: "Ce document est requis",
                })}
              />
              {errors.passportOrBirthCert?.message && (
                <ErrMsg msg={errors.passportOrBirthCert.message} />
              )}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>
                Téléchargez vos bulletins scolaires (jusqu'à 9){" "}
              
              </label>
              <input
                type="file"
                multiple
                accept=".pdf, .doc, .docx"
                onChange={handleTranscriptChange}
              />
              {errors.transcripts?.message && (
                <ErrMsg msg={errors.transcripts.message} />
              )}
              <div className="file-list">
                {transcriptFiles.map((file, index) => (
                  <span key={index}>{file.name}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>
                Téléchargez vos diplômes (jusqu'à 6){" "}
               
              </label>
              <input
                type="file"
                multiple
                accept=".pdf, .doc, .docx"
                onChange={handleDiplomaChange}
              />
              <div className="file-list">
                {diplomaFiles.map((file, index) => (
                  <span key={index}>{file.name}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>
                Téléchargez votre CV 
              </label>
              <input
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleCvChange}
              />
              {cvFile && <span>{cvFile.name}</span>}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>
                Ajoutez votre photo <span style={{color:"red" , background:"transparent"}}>*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
              {photoFile && <span>{photoFile.name}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <button type="submit">
          Soumettre <RightArrowSeven />
        </button>
      </div>
    </form>
  );
}
