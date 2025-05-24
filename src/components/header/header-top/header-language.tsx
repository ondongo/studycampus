"use client";
import React from "react";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import flagFr from "@/assets/img/flag/flag-3.png";
import flagLingala from "@/assets/img/flag/flag-2.svg";
import { DownArrow } from "@/components/svg";

type AvailableLanguage = "fr" | "ln";

const languageNames: Record<AvailableLanguage, string> = {
  fr: "Français",
  ln: "Lingala",
};

const flags: Record<AvailableLanguage, any> = {
  fr: flagFr,
  ln: flagLingala,
};

export default function HeaderLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Récupérer la langue courante dans l'URL, par ex /fr/ ou /ln/
  const currentLocale = pathname?.split("/")[1] as AvailableLanguage || "fr";

  const [openLang, setOpenLang] = React.useState(false);
  const [selectedLang, setSelectedLang] = React.useState<AvailableLanguage>(currentLocale);

  const changeLanguage = (lang: AvailableLanguage) => {
    if (lang === selectedLang) {
      setOpenLang(false);
      return;
    }

    // Conserver les query params
    const queryString = searchParams ? `?${searchParams.toString()}` : "";

    // Rediriger vers la même page avec la nouvelle langue dans l'URL
    router.push(`/${lang}${pathname.substring(3)}${queryString}`);

    setSelectedLang(lang);
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
          <Image src={flags[selectedLang]} alt={`${languageNames[selectedLang]} flag`} />
          {languageNames[selectedLang]}
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
              changeLanguage("fr");
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
              changeLanguage("ln");
            }}
          >
            Lingala
          </a>
        </li>
      </ul>
    </li>
  );
}
