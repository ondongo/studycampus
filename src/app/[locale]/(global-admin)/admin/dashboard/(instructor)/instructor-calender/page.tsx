import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorCalenderArea from "@/components/dashboard/instructor/instructor-calender-area";
import AnnounceDetailsModal from "@/components/modal/announce-details-modal";
import AnnouncementModal from "@/components/modal/announcement-modal";
import EvenementModal from "@/components/modal/evenement-modal";

export const metadata: Metadata = {
  title: "Instructor Question Answer - BlessingTravel",
};

export default function InstructorQuestionAnswerPage() {
  return (
    <>
      <InstructorCalenderArea />
      <AnnouncementModal />
      <AnnounceDetailsModal />
      <EvenementModal />
    </>
  );
}
