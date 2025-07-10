'use client';
import { useState } from "react";
import NiceSelect from "@/components/ui/nice-select";
import DatePicker from "@/components/ui/date-picker";
import { CalenderThreeSvg } from "@/components/svg";

type IProps = {
    title?: string;
}
export default function SectionArea({title='Quiz Attempts'}: IProps) {
    const [date, setDate] = useState(new Date());
    function handleCourseFilter(item: { value: string, label: string }) {
        console.log(item);
    }
    function handleCourseSorting(item: { value: string, label: string }) {
        console.log(item);
    }
    return (
        <div className="section-area">
            <div className="tp-dashboard-section">
                <h2 className="tp-dashboard-title">{title}</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="tpd-dashboard-select-course">
                        <div className="tp-course-filter-select">
                            <NiceSelect
                                options={[
                                    { value: "", label: "All Courses" },
                                    { value: "latest", label: "New Courses 2024" },
                                    { value: "web-d", label: "Web Design System in Figma" },
                                    { value: "interior", label: "Interior design concepts Masterclass" },
                                    { value: "graphic", label: "Graphic Design Masterclass" },
                                    { value: "bootstrap", label: "Bootstrap 5 From Scratch" },
                                ]}
                                defaultCurrent={0}
                                cls="wide"
                                onChange={handleCourseFilter}
                                name="courseSort"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="tpd-dashboard-select-calender d-flex align-items-center justify-content-lg-end">
                        <div className="tpd-order-short-list mb-30">
                            <div className="tp-course-filter-select">
                                <NiceSelect
                                    options={[
                                        { value: "desc", label: "DESC" },
                                        { value: "asc", label: "SCFW" },
                                        { value: "popularity", label: "QESC" },
                                    ]}
                                    defaultCurrent={0}
                                    cls="wide"
                                    onChange={handleCourseSorting}
                                    name="sorting"
                                />
                            </div>
                        </div>
                        <div className="tpd-order-date-input mb-30 ml-10">
                            <form action="#">
                                <DatePicker date={date} setDate={setDate} />
                                <span><CalenderThreeSvg /></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
