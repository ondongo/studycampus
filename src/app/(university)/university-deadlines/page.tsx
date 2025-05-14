import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import DeadlinesArea from "./_components/deadlines-area";

export const metadata: Metadata = {
  title: "University Deadlines - Acadia",
};

export default function UniversityDeadlinesPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Dates & Deadlines"
        subtitle="Dates & Deadlines"
        admission={true}
      />
      {/* breadcrumb area end */}

      {/* deadline area start */}
      <DeadlinesArea/>
      {/* deadline area end */}
    </main>
  );
}
