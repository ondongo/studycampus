import { useState } from "react";
import { CalenderThreeSvg, DownloadTwoSvg } from "@/components/svg";
import DatePicker from "@/components/ui/date-picker";
import NiceSelect from "@/components/ui/nice-select";
import { formatPrice } from "@/lib/format-price";


const statementData = [
   {
      id: "#4024",
      courseName: "Application",
      date: "March 2, 2024",
      price: 50.00,
      status: "On Hold",
      statusClass: "warning",
   },
   {
      id: "#4056",
      courseName: "Design System in Figma",
      date: "June 2, 2024",
      price: 100.00,
      status: "Success",
      statusClass: "sucess",
   },
   {
      id: "#4034",
      courseName: "App Development",
      date: "May 2, 2024",
      price: 76.00,
      status: "Processing",
      statusClass: "info",
   },
   {
      id: "#4018",
      courseName: "Graphic",
      date: "March 2, 2024",
      price: 10,
      status: "Canceled",
      statusClass: "danger",
   },
   {
      id: "#4056",
      courseName: "Digital Marketing Courses",
      date: "June 2, 2024",
      price: 100.00,
      status: "Success",
      statusClass: "sucess",
   },
   {
      id: "#4018",
      courseName: "Application",
      date: "June 2, 2024",
      price: 100.00,
      status: "On Hold",
      statusClass: "warning",
   },
];


export default function InstructorAnalyticsStatementArea() {
   const [date, setDate] = useState(new Date());
   function handleCourseFilter(item: { value: string, label: string }) {
      console.log(item);
   }
   return (
      <>
         <div className="row">
            <div className="col-lg-6">
               <div className="tpd-dashboard-select-course mb-30">
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
               <div className="tpd-order-date-input text-lg-end mb-30">
                  <form action="#">
                     <DatePicker date={date} setDate={setDate} />
                     <span><CalenderThreeSvg /></span>
                  </form>
               </div>
            </div>
         </div>




         <div className="row">
            <div className="col-lg-12">
               <div className="tpd-table mb-45">
                  <ul>
                     <li className="tpd-table-head">
                        <div className="tpd-table-row">
                           <div className="tpd-order-id">
                              <h4 className="tpd-table-title">Order ID</h4>
                           </div>
                           <div className="tpd-order-name">
                              <h4 className="tpd-table-title">Course Name</h4>
                           </div>
                           <div className="tpd-order-date">
                              <h4 className="tpd-table-title">Date</h4>
                           </div>
                           <div className="tpd-order-price">
                              <h4 className="tpd-table-title">Price</h4>
                           </div>
                           <div className="tpd-order-status">
                              <h4 className="tpd-table-title">Status</h4>
                           </div>
                           <div className="tpd-order-action"></div>
                        </div>
                     </li>

                     {statementData.map((statement, index) => (
                        <li key={index}>
                           <div className="tpd-table-row">
                              <div className="tpd-order-id">
                                 <h4 className="tpd-common-text">{statement.id}</h4>
                              </div>
                              <div className="tpd-order-name">
                                 <h4 className="tpd-common-text">{statement.courseName}</h4>
                              </div>
                              <div className="tpd-order-date">
                                 <h4 className="tpd-common-text">{statement.date}</h4>
                              </div>
                              <div className="tpd-order-price">
                                 <h4 className="tpd-common-text">{formatPrice(statement.price,true)}</h4>
                              </div>
                              <div className="tpd-order-status">
                                 <div className="tpd-badge-item">
                                    <span className={`tpd-badge ${statement.statusClass}`}>
                                       {statement.status}
                                    </span>
                                 </div>
                              </div>
                              <div className="tpd-order-action">
                                 <div className="tpd-action-btn">
                                    <button>
                                       <DownloadTwoSvg />
                                       <span className="tpd-action-tooltip">Download</span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}
