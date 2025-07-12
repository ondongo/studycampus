import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardArea from "./(instructor)/instructor-dashboard/_components/dashboard-area";

export const metadata:Metadata = {
    title: "Instructor Dashboard - Acadia",
}

export default function InstructorDashboardPage() {
  return (
    <>
  
        {/* dashboard content area start */}
        <DashboardArea/>
        {/* dashboard content area end */}

    </>
  )
}
