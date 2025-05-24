import { Metadata } from "next";
import { useTranslations } from 'next-intl';
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import DeadlinesArea from "./_components/deadlines-area";

export const metadata: Metadata = {
  title: "Deadlines - Yéba school",
};

export default function UniversityDeadlinesPage() {
  const t = useTranslations('university_deadlines');

  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title={t('page_title')}
        subtitle={t('intro')}
        admission={true}
      />
      {/* breadcrumb area end */}

      {/* deadline area start */}
      <DeadlinesArea/>
      {/* deadline area end */}
    </main>
  );
}
