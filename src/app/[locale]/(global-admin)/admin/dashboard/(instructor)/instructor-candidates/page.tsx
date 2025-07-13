import InstructorCandidateArea from "@/components/dashboard/instructor/instructor-candidate-area";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructor Reviews - BlessingTravel",
};

export default function InstructorReviewsPage() {
  return (
    <>
      <InstructorCandidateArea />
    </>
  );
}
