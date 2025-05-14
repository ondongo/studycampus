"use client";
import React from "react";
import Image from "next/image";
import flagFr from "@/assets/img/flag/flag-3.png";
import flagLingala from "@/assets/img/flag/flag-2.svg";
import { DownArrow } from "@/components/svg";

type AvailableLanguage = "Français" | "Lingala";

export default function HeaderLanguage() {
  const [openLang, setOpenLang] = React.useState(false);
  const [selectedLang, setSelectedLang] =
    React.useState<AvailableLanguage>("Français");

  const languages: Record<AvailableLanguage, any> = {
    Français: flagFr,
    "Lingala": flagLingala,
  };

  const handleSelectLang = (lang: string) => {
    if (lang === "Lingala)") return;
    setSelectedLang(lang as AvailableLanguage);
    setOpenLang(false);
  };

  return (
    <li>
      <a
        onClick={(e) => {
          e.preventDefault();
          setOpenLang(!openLang);
        }}
        id="header-bottom__lang-toggle"
        href="#"
      >
        <span>
          <Image src={languages[selectedLang]} alt="flag-img" />
          {selectedLang}
        </span>
        <span>
          <DownArrow />
        </span>
      </a>
      <ul className={`header-bottom__lang-submenu ${openLang ? "open" : ""}`}>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleSelectLang("Français");
            }}
          >
            Français
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleSelectLang("Lingala");
            }}
          >
            Lingala (indisponible)
          </a>
        </li>
      </ul>
    </li>
  );
}
