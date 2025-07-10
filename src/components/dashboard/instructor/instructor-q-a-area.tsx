'use client';
import Image from "next/image";
import { useState } from "react";
import { CheckTwoSvg, DeleteSvg, DotsTwoSvg, EmailFour } from "@/components/svg";
import NiceSelect from "@/components/ui/nice-select";
import useClickOutside from "@/hooks/use-click-outside";

// student q-a data
const studentQaData = [
   {
      id: 1,
      student: {
         name: "Hanson Deck",
         date: "June 11, 2021 at 6:01 am",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-1.png"
      },
      question: "Hello! Could you explain the last lesson?",
      course: "New Course",
      replies: 2,
      status: "pending",
   },
   {
      id: 2,
      student: {
         name: "Indigo Violet",
         date: "June 12, 2021 at 2:15 pm",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-2.png"
      },
      question: "I'm struggling with the assignment.",
      course: "Advanced Math",
      replies: 3,
      status: "complete",
   },
];
// instructor q-a data
const instructorQaData = [
   {
      id: 1,
      student: {
         name: "Hanson Deck",
         date: "June 11, 2021 at 6:01 am",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-1.png"
      },
      question: "Hello! Could you explain the last lesson?",
      course: "New Course",
      replies: 2,
      status: "pending",
   },
   {
      id: 2,
      student: {
         name: "Indigo Violet",
         date: "June 12, 2021 at 2:15 pm",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-2.png"
      },
      question: "I'm struggling with the assignment.",
      course: "Advanced Math",
      replies: 3,
      status: "complete",
   },
   {
      id: 3,
      student: {
         name: "Benjamin Evalent",
         date: "June 13, 2021 at 9:45 am",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-3.png"
      },
      question: "Can you clarify the project requirements?",
      course: "Physics 101",
      replies: 1,
      status: "pending",
   },
   {
      id: 4,
      student: {
         name: "Jennifer Lang",
         date: "June 14, 2021 at 8:30 am",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-4.png"
      },
      question: "What is the due date for the final project?",
      course: "Art History",
      replies: 5,
      status: "complete",
   },
   {
      id: 5,
      student: {
         name: "Michael Lee",
         date: "June 15, 2021 at 3:20 pm",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-2.png"
      },
      question: "Is there any extra credit available?",
      course: "Chemistry Basics",
      replies: 0,
      status: "pending",
   },
   {
      id: 6,
      student: {
         name: "Sophia Blake",
         date: "June 16, 2021 at 5:00 pm",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-1.png"
      },
      question: "Can you review my essay before submission?",
      course: "English Literature",
      replies: 4,
      status: "complete",
   },
   {
      id: 7,
      student: {
         name: "David Kim",
         date: "June 17, 2021 at 12:00 pm",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-4.png"
      },
      question: "I have trouble understanding the last chapter.",
      course: "Economics",
      replies: 2,
      status: "pending",
   },
   {
      id: 8,
      student: {
         name: "Rachel Green",
         date: "June 18, 2021 at 10:15 am",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-3.png"
      },
      question: "What resources do you recommend for exam preparation?",
      course: "Business Administration",
      replies: 3,
      status: "complete",
   }
];
// tabs
const tabs = ["Etudiant", "Parent"];

export default function InstructorQuestionAnswerArea() {
   const [activeTab, setActiveTab] = useState(tabs[0]);
   const question_answer_data = activeTab === "Etudiant" ? studentQaData : instructorQaData;


   function handleFilter(item: { value: string, label: string }) {
      console.log(item);
   }


   return (
      <>
         <section className="tpd-order-area">
            <div className="row">
               <div className="col-lg-6">
                  <div className="tp-dashboard-section">
                     <h2 className="tp-dashboard-title">Question & Réponses</h2>
                  </div>
               </div>
               <div className="col-lg-12">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="tpd-dashboard-qa-tab mb-30">
                           <div className="nav nav-tabs tpd-dashboard-qa-tab-bg" id="myTab" role="tablist">
                              {tabs.map((tab) => (
                                 <button onClick={() => setActiveTab(tab)} key={tab} className={`nav-link ${activeTab === tab ? 'active' : ''} ${tab === 'Etudiant' ? 'monthly' : 'yearly'}`}>{tab}</button>
                              ))}
                              <div className="test"></div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="tpd-dashboard-qa-select mb-30">
                           <div className="tp-course-filter-select">
                              <NiceSelect
                                 options={[{ value: '1', label: 'Récent' }, { value: '2', label: 'Ancien' }]}
                                 defaultCurrent={0}
                                 cls="wide"
                                 placeholder="Default"
                                 onChange={handleFilter}
                                 name="filter"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="tab-content" id="myTabContent">

                     <div className="tpd-table mb-45">
                        <ul>
                           <li className="tpd-table-head">
                              <div className="tpd-table-row">
                                 <div className="tpd-instructor-qa-student">
                                    <h4 className="tpd-table-title">Student</h4>
                                 </div>
                                 <div className="tpd-instructor-qa-question">
                                    <h4 className="tpd-table-title">Question</h4>
                                 </div>
                                 <div className="tpd-instructor-qa-reply">
                                    <h4 className="tpd-table-title">Reply</h4>
                                 </div>
                                 <div className="tpd-instructor-qa-status">
                                    <h4 className="tpd-table-title">Status</h4>
                                 </div>
                                 <div className="tpd-instructor-qa-btn"></div>
                                 <div className="tpd-instructor-qa-action"></div>
                              </div>
                           </li>

                           {question_answer_data.map((item, index) => (
                              <QuestionAnswerItem key={index} item={item} />
                           ))}
                        </ul>
                     </div>

                  </div>
               </div>

            </div>
         </section>
      </>
   )
}


type Props = {
   item:{
      id: number;
      student: {
          name: string;
          date: string;
          profileImg: string;
      };
      question: string;
      course: string;
      replies: number;
      status: string;
  }
}
export function QuestionAnswerItem({ item }: Props) {
   const [openActionId, setOpenActionId] = useState<number | null>(null);
   const actionButtonRef = useClickOutside(setOpenActionId);
   function toggleAction(id: number) {
      if (openActionId === id) {
         setOpenActionId(null);
      } else {
         setOpenActionId(id);
      }
   }
   return (
      <li>
         <div className="tpd-table-row">
            <div className="tpd-instructor-qa-student">
               <div className="tpd-reviews-profile d-flex align-items-center">
                  <div className="tpd-reviews-thumb">
                     <Image src={item.student.profileImg} alt={item.student.name} width={38} height={38} />
                  </div>
                  <div className="tpd-reviews-text">
                     <h4 className="tpd-reviews-thumb-title">{item.student.name}</h4>
                     <span className="tpd-common-date">{item.student.date}</span>
                  </div>
               </div>
            </div>
            <div className="tpd-instructor-qa-question">
               <h4 className="tpd-common-text">{item.question}</h4>
               <div className="tpd-course-wrap">
                  <span className="tpd-course-name">Course:</span>
                  <span className="tpd-course-title">{item.course}</span>
               </div>
            </div>
            <div className="tpd-instructor-qa-reply">
               <h4 className="tpd-common-text">{item.replies}</h4>
            </div>
            <div className="tpd-instructor-qa-status">
               <div className={`tpd-status${item.status === "complete" ? "-complete" : ""}`}>
                  <button><CheckTwoSvg /></button>
               </div>
            </div>
            <div className="tpd-instructor-qa-btn">
               <a className="tpd-border-btn" href="#">Details</a>
            </div>
            <div className="tpd-instructor-qa-action" ref={actionButtonRef}>
               <div className={`tpd-action-inexact-btn ${openActionId === item.id ? 'active' : ''}`}>
                  <button className="click" onClick={() => toggleAction(item.id)}>
                     <DotsTwoSvg />
                  </button>
                  <div className="tpd-action-click-tooltip">
                     <button>
                        <span>
                           <EmailFour />
                        </span>
                        Mark as Unread
                     </button>
                     <button>
                        <span>
                           <DeleteSvg />
                        </span>
                        Delete
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </li>
   )
}
