import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorProfileArea from "@/components/dashboard/instructor/instructor-profile-area";

export const metadata: Metadata = {
  title: "Instructor Profile - BlessingTravel",
};

export default function InstructorProfilePage() {
  return (
    <>
      <InstructorProfileArea />
    </>
  );
}
