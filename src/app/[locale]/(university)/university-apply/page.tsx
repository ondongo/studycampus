import { Metadata } from "next";
import { useTranslations } from 'next-intl';
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import ProcessTwo from "@/components/process/process-two";
import ApplyRequirement from "@/components/requirement/apply-requirement-area";

export const metadata: Metadata = {
  title: "Blessings Travels",
};

export default function UniversityApplyPage() {
  const t = useTranslations('menu');

  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title={t('how_to_apply')}
        subtitle={t('how_to_apply')}
        admission={true}
      />

      {/* process area start */}
      <ProcessTwo />
      {/* process area end */}

      {/* apply requirement area start */}
      <ApplyRequirement />
      {/* apply requirement area end */}
    </main>
  );
}
