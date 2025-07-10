'use client';
import { useEffect, useState } from "react";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/components/ui/pagination";
import { online_courses_data } from "@/data/course-data";
import DashboardEnrollCourseItem from "@/components/course/single/dashboard/dashboard-enroll-course-item";

const tab_lists = [
   { id: 'enroll', title: 'Enrolled Courses' },
   { id: 'active-course', title: 'Active Courses' },
   { id: 'completed', title: 'Completed Courses' },
]

export default function InstructorEnrollCourseArea() {
   const limit = 5;
   const [activeTab, setActiveTab] = useState(tab_lists[0].id);
   const [enrollCourses, setEnrollCourses] = useState([...online_courses_data]);
   const { currentItems, handlePageClick, pageCount } = usePagination(enrollCourses, limit);

   useEffect(() => {
      if (activeTab === 'enroll') {
         setEnrollCourses([...online_courses_data]);
      } else if (activeTab === 'active-course') {
         setEnrollCourses([...online_courses_data].slice(0, 3));
      } else if (activeTab === 'completed') {
         setEnrollCourses([...online_courses_data].slice(3, 6));
      }
   }, [activeTab]);

   function handleCourseCount(tab: string) {
      let count = 0;
      switch (tab) {
         case 'enroll':
            count = [...online_courses_data].length;
            break;
         case 'active-course':
            count = [...online_courses_data].slice(0, 3).length;
            break;
         case 'completed':
            count = [...online_courses_data].slice(3, 6).length;
            break;
      }
      return count;
   }

   return (
      <>
         {/* course tab list area start */}
         <div className="dashboader-area mb-30">
            <div className="tp-dashboard-tab">
               <h2 className="tp-dashboard-tab-title">Dashboard</h2>
               <div className="tp-dashboard-tab-list">
                  <ul>
                     {tab_lists.map((tab, index) => (
                        <li key={index}>
                           <a className={`${activeTab === tab.id ? 'active' : ''} pointer`} onClick={() => setActiveTab(tab.id)} >{tab.title} <span>({handleCourseCount(tab.id)})</span></a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
         {/* course tab list area end */}

         {/* course area start */}
         <div className="course-area">
            <div className="row">
               {currentItems.map((course, index) => (
                  <div className="col-xl-4 col-md-6" key={index}>
                     <DashboardEnrollCourseItem course={course} />
                  </div>
               ))}
            </div>
         </div>
         {/* course area end */}

         {/* pagination area start */}
         {enrollCourses.length > 0 && enrollCourses.length >= limit && (
            <div className="tp-dashboard-pagination pt-20">
               <div className="tp-pagination">
                  <Pagination handlePageClick={handlePageClick} pageCount={pageCount} isCenter={true} />
               </div>
            </div>
         )}
         {/* pagination area end */}
      </>
   )
}
