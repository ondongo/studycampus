import { Outfit, Jost, Crimson_Pro } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { FaWhatsapp } from "react-icons/fa";

import { setRequestLocale } from "next-intl/server";
const outfit_bold = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-body",
});
const outfit_heading = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-heading",
});
const outfit_p = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-p",
});
const jost_primary = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-primary",
});
const crismon_secondary = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-secondary",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${outfit_bold.variable} ${outfit_heading.variable} ${outfit_p.variable} ${jost_primary.variable} ${crismon_secondary.variable}`}
      >
        <NextIntlClientProvider>
          {children}
          <a
            href="https://wa.me/33753275253?text=Bonjour%2C%20je%20vous%20contacte%20car%20j%E2%80%99aurais%20besoin%20d%E2%80%99un%20accompagnement%20pour%20finaliser%20mon%20dossier.%20Pourriez-vous%20m%E2%80%99indiquer%20les%20%C3%A9tapes%20%C3%A0%20suivre%20ou%20m%E2%80%99orienter%20vers%20la%20personne%20%C3%A0%20contacter%20%3F%0A%0AMerci%20d%E2%80%99avance%20pour%20votre%20aide%20pr%C3%A9cieuse."
            className="circle-ripple"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactez-nous sur WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
