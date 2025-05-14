import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import ProcessTwo from "@/components/process/process-two";
import ApplyRequirement from "@/components/requirement/apply-requirement-area";

export const metadata: Metadata = {
  title: "Yéba school",
};

export default function UniversityApplyPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Comment ça marche"
        subtitle="Comment ça marche"
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
