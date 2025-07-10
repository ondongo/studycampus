'use client';
import Pagination from "@/components/ui/pagination";
import { online_courses_data } from "@/data/course-data";
import usePagination from "@/hooks/use-pagination";
import DashboardCourseItemTwo from "@/components/course/single/dashboard/dashboard-course-item-2";

export default function InstructorWishlistArea() {
    const { currentItems, handlePageClick, pageCount } = usePagination([...online_courses_data], 6);
    return (
        <>
            {/* course area start */}
            <div className="course-area">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-dashboard-section">
                            <h2 className="tp-dashboard-title">Wishlist</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Render courses based on enrollCoursesRef.current */}
                    {currentItems.map((course, index) => (
                        <div className="col-xl-4 col-md-6" key={index}>
                            <DashboardCourseItemTwo course={course} />
                        </div>
                    ))}
                </div>
            </div>
            {/* course area end */}

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
