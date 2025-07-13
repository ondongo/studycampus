import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardArea from "./(instructor)/instructor-dashboard/_components/dashboard-area";
import InstructorProfileArea from "@/components/dashboard/instructor/instructor-profile-area";

export const metadata:Metadata = {
  title: "Instructor Profile - BlessingTravel",
}

export default function InstructorDashboardPage() {
  return (
    <>
  
        {/* dashboard content area start */}
        <InstructorProfileArea />
        {/* dashboard content area end */}

    </>
  )
}
