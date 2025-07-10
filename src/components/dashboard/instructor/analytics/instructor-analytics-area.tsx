'use client';
import { useState } from "react";
import Image from "next/image";
import InstructorAnalyticsTopArea from "./instructor-analytics-top-area";
import ProgressEarningsGraph from "./instructor-analytics-progress-area";
import InstructorAnalyticsPopularCourses from "./instructor-analytics-popular-courses";
import InstructorAnalyticsRecentReviews from "./instructor-analytics-recent-reviews";
import InstructorAnalyticsCourseArea from "./instructor-analytics-course-area";
import InstructorAnalyticsEarningArea from "./instructor-analytics-earning-area";
import InstructorAnalyticsStatementArea from "./instructor-analytics-statement-area";
import InstructorAnalyticsStudentArea from "./instructor-analytics-student-area";
import no_data_bg from '@/assets/img/dashboard/bg/withdrawal-bg.png';

// Tab data
const tabData = ['Overview', 'Courses', 'Earnings', 'Statements', 'Students', 'Export'];

export default function InstructorAnalyticsArea() {
   const [activeTab, setActiveTab] = useState(tabData[0]);
   return (
      <>
         <div className="tp-dashboard-tab mb-60">
            <h2 className="tp-dashboard-tab-title">Analytics</h2>
            <div className="tp-dashboard-tab-list">
               <ul>
                  {tabData.map((tab) => (
                     <li key={tab}>
                        <a className={`${activeTab === tab ? 'active' : ''} pointer`} onClick={() => setActiveTab(tab)}>
                           {tab}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         {activeTab === 'Overview' && (
            <>
               {/* Instructor analytics top area start */}
               <InstructorAnalyticsTopArea />
               {/* Instructor analytics top area end */}

               {/* Progress earnings graph */}
               <ProgressEarningsGraph />
               {/* Progress earnings graph */}

               {/* Popular courses */}
               <InstructorAnalyticsPopularCourses />
               {/* Popular courses */}

               {/* Recent reviews */}
               <InstructorAnalyticsRecentReviews />
               {/* Recent reviews */}
            </>
         )}

         {activeTab === 'Courses' && (
            <InstructorAnalyticsCourseArea />
         )}

         {activeTab === 'Earnings' && (
            <InstructorAnalyticsEarningArea />
         )}

         {activeTab === 'Statements' && (
            <InstructorAnalyticsStatementArea />
         )}

         {activeTab === 'Students' && (
            <InstructorAnalyticsStudentArea />
         )}

         {activeTab === 'Export' && (
            <div className="tpd-withdraw-bg text-center mt-100">
               <Image src={no_data_bg} alt="no-data-bg" style={{ height: 'auto' }} />
               <p>No Data Available in this Section</p>
            </div>
         )}
      </>
   )
}
