'use client';
import Link from "next/link";
import SectionArea from "./section-area";
import Pagination from "@/components/ui/pagination";
import usePagination from "@/hooks/use-pagination";

const assignmentData = [
   {
      id: 1,
      name: "What is design thinking",
      course: "Graphic",
      totalMarks: 2,
      totalSubmit: 1,
      detailsLink: "#",
   },
   {
      id: 2,
      name: "Web Design System in Figma",
      course: "Graphic",
      totalMarks: 2,
      totalSubmit: 1,
      detailsLink: "#",
   },
   {
      id: 3,
      name: "Assignments 02",
      course: "Graphic",
      totalMarks: 2,
      totalSubmit: 1,
      detailsLink: "#",
   },
   {
      id: 4,
      name: "Assignments 03",
      course: "Graphic",
      totalMarks: 2,
      totalSubmit: 1,
      detailsLink: "#",
   },
   {
      id: 5,
      name: "Introduction to JavaScript",
      course: "Web Development",
      totalMarks: 20,
      totalSubmit: 18,
      detailsLink: "#",
   },
   {
      id: 6,
      name: "Responsive Web Design",
      course: "Front-End Development",
      totalMarks: 12,
      totalSubmit: 9,
      detailsLink: "#",
   },
   {
      id: 7,
      name: "User Research Methods",
      course: "UX Design",
      totalMarks: 8,
      totalSubmit: 7,
      detailsLink: "#",
   },
];

export default function InstructorAssignmentArea() {
   const { currentItems, handlePageClick, pageCount } = usePagination(assignmentData, 5);
   return (
      <>
         {/* section area start */}
         <SectionArea title="Assignments" />
         {/* section area end */}

         {/* assignment area start */}
         <div className="tpd-course-area">
            <div className="row">
               <div className="col-12">
                  <div className="tpd-table li-hover-none mb-25">
                     <ul>
                        <li className="tpd-table-head">
                           <div className="tpd-table-row">
                              <div className="tpd-assign-info">
                                 <h4 className="tpd-table-title">Assignments Name</h4>
                              </div>
                              <div className="tpd-assign-mark">
                                 <h4 className="tpd-table-title">Total Marks</h4>
                              </div>
                              <div className="tpd-assign-submit">
                                 <h4 className="tpd-table-title">Total Submit</h4>
                              </div>
                              <div className="tpd-assign-details">
                                 <h4 className="tpd-table-title">Details</h4>
                              </div>
                           </div>
                        </li>

                        {currentItems.map((assignment, index) => (
                           <li key={index}>
                              <div className="tpd-table-row">
                                 <div className="tpd-assign-info">
                                    <h4 className="tpd-assign-title">{assignment.name}</h4>
                                    <div className="tpd-student-info">
                                       <p>
                                          Course: <span>{assignment.course}</span>
                                       </p>
                                    </div>
                                 </div>
                                 <div className="tpd-assign-mark">
                                    <span className="tpd-common-text">{assignment.totalMarks}</span>
                                 </div>
                                 <div className="tpd-assign-submit">
                                    <h4 className="tpd-table-title">{assignment.totalSubmit}</h4>
                                 </div>
                                 <div className="tpd-assign-details">
                                    <Link className="tpd-border-btn" href={assignment.detailsLink}>
                                       Details
                                    </Link>
                                 </div>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         {/* assignment area end */}


         {/* pagination area start */}
         <div className="tp-dashboard-pagination pt-20">
            <div className="tp-pagination">
               <Pagination handlePageClick={handlePageClick} pageCount={pageCount} isCenter={true} />
            </div>
         </div>
         {/* pagination area end */}
      </>
   );
}
