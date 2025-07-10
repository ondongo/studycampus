'use client';
import { DeleteSvg } from "@/components/svg";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/components/ui/pagination";
import SectionArea from "./section-area";
import Link from "next/link";

// quiz data
const quizData = [
   {
      date: "March 26, 2024",
      title: "What is design thinking",
      student: "Benjamin Evalent",
      questions: 2,
      totalMarks: 1,
      correctAnswers: 0,
      result: "Fail",
      resultClass: "danger",
   },
   {
      date: "March 26, 2024",
      title: "Quiz Test 01",
      student: "Benjamin Evalent",
      questions: 1,
      totalMarks: 0,
      correctAnswers: 1,
      result: "Pass",
      resultClass: "sucess",
   },
   {
      date: "March 26, 2024",
      title: "Quiz Test 02",
      student: "Benjamin Evalent",
      questions: 2,
      totalMarks: 0,
      correctAnswers: 1,
      result: "Pass",
      resultClass: "sucess",
   },
   {
      date: "March 26, 2024",
      title: "Knowledge Check",
      student: "Benjamin Evalent",
      questions: 1,
      totalMarks: 1,
      correctAnswers: 1,
      result: "Pass",
      resultClass: "sucess",
   },
   {
      date: "March 26, 2024",
      title: "Quiz Test 03",
      student: "Benjamin Evalent",
      questions: 1,
      totalMarks: 0,
      correctAnswers: 0,
      result: "Fail",
      resultClass: "danger",
   },
];


export default function InstructorQuizArea() {
   const { currentItems, handlePageClick, pageCount } = usePagination(quizData, 4);
   return (
      <>

         {/* section area start */}
         <SectionArea/>
         {/* section area end */}

         {/* quiz area start */}
         <div className="tpd-course-area">
            <div className="tpd-table mb-25">
               <ul>
                  <li className="tpd-table-head">
                     <div className="tpd-table-row">
                        <div className="tpd-quiz-info">
                           <h4 className="tpd-table-title">Quiz Info</h4>
                        </div>
                        <div className="tpd-quiz-ques">
                           <h4 className="tpd-table-title">Qus</h4>
                        </div>
                        <div className="tpd-quiz-tm">
                           <h4 className="tpd-table-title">TM</h4>
                        </div>
                        <div className="tpd-quiz-ca">
                           <h4 className="tpd-table-title">CA</h4>
                        </div>
                        <div className="tpd-quiz-result">
                           <h4 className="tpd-table-title">Result</h4>
                        </div>
                        <div className="tpd-quiz-details">
                           <h4 className="tpd-table-title">Details</h4>
                        </div>
                     </div>
                  </li>

                  {currentItems.map((quiz, index) => (
                     <li key={index}>
                        <div className="tpd-table-row">
                           <div className="tpd-quiz-info">
                              <span className="tpd-common-date">{quiz.date}</span>
                              <h4 className="tpd-quiz-title">{quiz.title}</h4>
                              <div className="tpd-student-info">
                                 <p>
                                    <span>Student: </span> {quiz.student}
                                 </p>
                              </div>
                           </div>
                           <div className="tpd-quiz-ques">
                              <span className="tpd-common-text">{quiz.questions}</span>
                           </div>
                           <div className="tpd-quiz-tm">
                              <h4 className="tpd-table-title">{quiz.totalMarks}</h4>
                           </div>
                           <div className="tpd-quiz-ca">
                              <h4 className="tpd-table-title">{quiz.correctAnswers}</h4>
                           </div>
                           <div className="tpd-quiz-result">
                              <div className="tpd-badge-item">
                                 <span className={`tpd-badge ${quiz.resultClass}`}>{quiz.result}</span>
                              </div>
                           </div>
                           <div className="tpd-quiz-details">
                              <div className="tpd-quiz-details-box d-flex">
                                 <div className="tpd-quiz-details-btn mr-15">
                                    <Link className="tpd-border-btn" href="/dashboard/instructor-quiz-attempts">Details</Link>
                                 </div>
                                 <div className="tpd-action-inexact-btn">
                                    <button className="border-bg">
                                       <DeleteSvg />
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         {/* quiz area end */}

         {/* pagination area start */}
         <div className="tp-dashboard-pagination pt-20">
            <div className="tp-pagination">
               <Pagination handlePageClick={handlePageClick} pageCount={pageCount} isCenter={true} />
            </div>
         </div>
         {/* pagination area end */}
      </>
   )
}
