'use client';
import { useState } from "react";
import { CalenderThreeSvg, DownloadTwoSvg } from "@/components/svg";
import DatePicker from "@/components/ui/date-picker";
import Pagination from "@/components/ui/pagination";
import usePagination from "@/hooks/use-pagination";

// today order data
const todayOrderData = [
   {
      orderId: "#4024",
      courseName: "Application",
      date: "March 2, 2024",
      price: 50.00,
      status: "On Hold",
      statusClass: "warning",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4056",
      courseName: "Design System in Figma",
      date: "June 2, 2024",
      price: 100.00,
      status: "Success",
      statusClass: "sucess",
      downloadLink: "/assets/img/history.pdf",
   }
]
// monthly order data
const monthlyOrderData = [
   {
      orderId: "#4024",
      courseName: "Application",
      date: "March 2, 2024",
      price: 50.00,
      status: "On Hold",
      statusClass: "warning",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4056",
      courseName: "Design System in Figma",
      date: "June 2, 2024",
      price: 100.00,
      status: "Success",
      statusClass: "sucess",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4034",
      courseName: "App Development",
      date: "May 2, 2024",
      price: 76.00,
      status: "Processing",
      statusClass: "info",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4018",
      courseName: "Graphic",
      date: "March 2, 2024",
      price: 40.00,
      status: "Canceled",
      statusClass: "danger",
      downloadLink: "/assets/img/history.pdf",
   },
]
// yearly order data
const yearlyOrderData = [
   {
      orderId: "#4024",
      courseName: "Application",
      date: "March 2, 2024",
      price: 50.00,
      status: "On Hold",
      statusClass: "warning",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4056",
      courseName: "Design System in Figma",
      date: "June 2, 2024",
      price: 100.00,
      status: "Success",
      statusClass: "sucess",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4034",
      courseName: "App Development",
      date: "May 2, 2024",
      price: 76.00,
      status: "Processing",
      statusClass: "info",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4018",
      courseName: "Graphic",
      date: "March 2, 2024",
      price: 40.00,
      status: "Canceled",
      statusClass: "danger",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4056",
      courseName: "Digital Marketing Courses",
      date: "June 2, 2024",
      price: 100.00,
      status: "Success",
      statusClass: "sucess",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4067",
      courseName: "React Advanced Guide",
      date: "July 15, 2024",
      price: 120.00,
      status: "Success",
      statusClass: "sucess",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4078",
      courseName: "JavaScript Deep Dive",
      date: "August 10, 2024",
      price: 85.00,
      status: "On Hold",
      statusClass: "warning",
      downloadLink: "/assets/img/history.pdf",
   },
   {
      orderId: "#4089",
      courseName: "Web Development Bootcamp",
      date: "September 5, 2024",
      price: 200.00,
      status: "Processing",
      statusClass: "info",
      downloadLink: "/assets/img/history.pdf",
   }
];


const tabs = ['Today', 'Monthly', 'Yearly'];

export default function InstructorOrderArea() {
   const [activeTab, setActiveTab] = useState(tabs[0]);
   const [date, setDate] = useState(new Date());
   const { currentItems, handlePageClick, pageCount } = usePagination(activeTab === 'Today' ? todayOrderData : activeTab === 'Monthly' ? monthlyOrderData : yearlyOrderData, 5);
   return (
      <>
         <section className="tpd-order-area">
            <div className="row">
               <div className="col-lg-6">
                  <div className="tp-dashboard-section">
                     <h2 className="tp-dashboard-title">Order History</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-7">
                  <div className="tpd-order-filter tpd-redio-style tmy-tab mb-30">
                     <ul className="nav nav-tabs">
                        {tabs.map((tab, index) => (
                           <li key={index} className="nav-item p-relative" role="presentation">
                              <button onClick={() => setActiveTab(tab)} className={`nav-link ${activeTab === tab ? 'active' : ''}`}>
                                 <span className="tpd-redio-style-span"> </span>
                                 <span>{tab}</span>
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="tpd-order-date-input text-lg-end">
                     <form action="#">
                        <DatePicker date={date} setDate={setDate} />
                        <span>
                           <CalenderThreeSvg />
                        </span>
                     </form>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="tab-content" id="myTabContent">

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

                        {currentItems.map((order, index) => (
                           <li key={index}>
                              <div className="tpd-table-row">
                                 <div className="tpd-order-id">
                                    <h4 className="tpd-common-text">{order.orderId}</h4>
                                 </div>
                                 <div className="tpd-order-name">
                                    <h4 className="tpd-common-text">{order.courseName}</h4>
                                 </div>
                                 <div className="tpd-order-date">
                                    <h4 className="tpd-common-text">{order.date}</h4>
                                 </div>
                                 <div className="tpd-order-price">
                                    <h4 className="tpd-common-text">{order.price}</h4>
                                 </div>
                                 <div className="tpd-order-status">
                                    <div className="tpd-badge-item">
                                       <span className={`tpd-badge ${order.statusClass}`}>
                                          {order.status}
                                       </span>
                                    </div>
                                 </div>
                                 <div className="tpd-order-action">
                                    <div className="tpd-action-btn">
                                       <a href={order.downloadLink} download="history.pdf">
                                          <DownloadTwoSvg />
                                          <span className="tpd-action-tooltip">Download</span>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>

               </div>
            </div>

            <div className="row">
               <div className="col-12">
                  <div className="tp-dashboard-pagination">
                     <div className="tp-pagination">
                        {/* pagination start */}
                        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} isCenter={true} />
                        {/* pagination end */}
                     </div>
                  </div>
               </div>
            </div>

         </section>
      </>
   )
}
