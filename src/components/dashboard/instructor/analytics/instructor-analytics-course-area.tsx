'use client';
import {RefreshSvg, SearchSvg } from "@/components/svg";
import NiceSelect from "@/components/ui/nice-select";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/components/ui/pagination";
import { formatPrice } from "@/lib/format-price";


// analytics course data
const analyticsCourseData = [
   {
      id: 1,
      courseName: "Product Design",
      learners: 4,
      earnings: 0.00,
      rating: 1,
      lessons: 0,
      assignments: 0,
      quizzes: 1,
   },
   {
      id: 2,
      courseName: "Graphic Design Masterclass",
      learners: 2,
      earnings: 0.00,
      rating: 1,
      lessons: 0,
      assignments: 0,
      quizzes: 1,
   },
   {
      id: 3,
      courseName: "Design System in Figma",
      learners: 2,
      earnings: 0.00,
      rating: 1,
      lessons: 0,
      assignments: 0,
      quizzes: 1,
   },
   {
      id: 4,
      courseName: "3D Motion Design",
      learners: 2,
      earnings: 0.00,
      rating: 1,
      lessons: 0,
      assignments: 0,
      quizzes: 1,
   },
   {
      id: 5,
      courseName: "App Development",
      learners: 4,
      earnings: 0.00,
      rating: 1,
      lessons: 0,
      assignments: 0,
      quizzes: 1,
   },
   {
      id: 6,
      courseName: "Web Development Bootcamp",
      learners: 5,
      earnings: 100.00,
      rating: 4,
      lessons: 10,
      assignments: 3,
      quizzes: 2,
   },
   {
      id: 7,
      courseName: "UI/UX Design Fundamentals",
      learners: 3,
      earnings: 50.00,
      rating: 3,
      lessons: 8,
      assignments: 2,
      quizzes: 1,
   },
   {
      id: 8,
      courseName: "Python Programming",
      learners: 7,
      earnings: 150.00,
      rating: 5,
      lessons: 15,
      assignments: 4,
      quizzes: 3,
   },
   {
      id: 9,
      courseName: "React Development",
      learners: 6,
      earnings: 200.00,
      rating: 5,
      lessons: 12,
      assignments: 5,
      quizzes: 2,
   },
   {
      id: 10,
      courseName: "Digital Marketing",
      learners: 4,
      earnings: 75.00,
      rating: 3,
      lessons: 6,
      assignments: 2,
      quizzes: 1,
   },
];


export default function InstructorAnalyticsCourseArea() {
   const { currentItems, handlePageClick, pageCount } = usePagination(analyticsCourseData, 7);
   function handleCourseFilter(item: { value: string, label: string }) {
      console.log(item);
   }
   return (
      <div className="tpd-course-area">
         <div className="tpd-dashboard-filter d-flex justify-content-between align-items-center mb-30">
            <div className="tpd-dashboard-search">
               <div className="tp-header-2-search">
                  <form action="#">
                     <input type="text" placeholder="Search for Courses..."/>
                     <button className="tp-header-2-search-btn" type="submit">
                        <SearchSvg/>
                     </button>
                  </form>
               </div>
            </div>
            <div className="tpd-dashboard-select">
               <div className="tp-course-filter-select">
                  <NiceSelect
                     options={[
                        { value: "default", label: "Free" },
                        { value: "latest", label: "Newest" },
                        { value: "popularity", label: "Oldest" },
                     ]}
                     defaultCurrent={0}
                     cls="wide"
                     onChange={handleCourseFilter}
                     name="courseSort"
                  />
               </div>
            </div>
         </div>

         <div className="tpd-table li-hover-none mb-25">
            <ul>
               <li className="tpd-table-head">
                  <div className="tpd-table-row">
                     <div className="tpd-assign-info analytic">
                        <h4 className="tpd-table-title">Course Name</h4>
                     </div>
                     <div className="tpd-assign-mark analytic">
                        <h4 className="tpd-table-title">Learners</h4>
                     </div>
                     <div className="tpd-assign-submit analytic">
                        <h4 className="tpd-table-title">Earnings</h4>
                     </div>
                     <div className="tpd-assign-details">
                        <h4 className="tpd-table-title">Rating</h4>
                     </div>
                  </div>
               </li>
               {currentItems.map((course, index) => (
                  <li key={index}>
                     <div className="tpd-table-row">
                        <div className="tpd-assign-info analytic">
                           <h4 className="tpd-assign-title">{course.courseName}</h4>
                           <div className="tpd-student-info">
                              <p>
                                 Lesson: <span>{course.lessons}</span>
                              </p>
                              <p>
                                 Assignment: <span>{course.assignments}</span>
                              </p>
                              <p>
                                 Quiz <span>{course.quizzes}</span>
                              </p>
                           </div>
                        </div>
                        <div className="tpd-assign-mark analytic">
                           <span className="tpd-common-text">{course.learners}</span>
                        </div>
                        <div className="tpd-assign-submit analytic">
                           <h4 className="tpd-table-title">{formatPrice(course.earnings, true)}</h4>
                        </div>
                        <div className="tpd-assign-details analytic">
                           <a className="tpd-border-btn" href="#">
                              Details
                           </a>
                           <button>
                              <RefreshSvg />
                           </button>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>


         <div className="tp-dashboard-pagination pt-20">
            <div className="tp-pagination">
               <Pagination handlePageClick={handlePageClick} pageCount={pageCount} isCenter={true} />
            </div>
         </div>
      </div>
   )
}
