import InstructorCandidateArea from "@/components/dashboard/instructor/instructor-candidate-area";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructor Reviews - Acadia",
};

export default function InstructorReviewsPage() {
  return (
    <>
      <InstructorCandidateArea />
    </>
  );
}
