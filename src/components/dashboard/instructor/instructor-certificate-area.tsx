import { CloseEyeThree, CloseEyeTwo, DeleteSvg, DraftTwoSvg, OpenEyeThree, PenSvg } from "@/components/svg";
import Image from "next/image";


const certificateData = [
   {
      id: 1,
      title: "Design Basics Certificate",
      status: "Draft",
      isPublished: false,
      image: "/assets/img/dashboard/bg/certificate.png",
   },
   {
      id: 2,
      title: "UI/UX Fundamentals",
      status: "Draft",
      isPublished: false,
      image: null,
   },
   {
      id: 3,
      title: "Web Development Advanced",
      status: "Published",
      isPublished: true,
      image: "/assets/img/dashboard/bg/certificate.png",
   },
   {
      id: 4,
      title: "Graphic Design Mastery",
      status: "Published",
      isPublished: true,
      image: null,
   },
   {
      id: 5,
      title: "Digital Marketing Expert",
      status: "Draft",
      isPublished: false,
      image: null,
   },
];


export default function InstructorCertificateArea() {
   return (
      <>
         {/* section area start */}
         <div className="section-area">
            <div className="row">
               <div className="col-lg-6">
                  <div className="tp-dashboard-section">
                     <h2 className="tp-dashboard-title">All Certificates</h2>
                  </div>
               </div>
            </div>
         </div>
         {/* section area end */}

         {/* certificate area start */}
         <div className="tpd-course-area">
            <div className="row">
               <div className="col-12">
                  <div className="tpd-certificate-table li-hover-none mb-25">
                     <ul>
                        {certificateData.map((certificate, index) => (
                           <li key={index}>
                              <div className="tpd-table-row">
                                 <div className="tpd-certificate-box d-flex justify-content-between align-items-center">
                                    <div className="tpd-certificate-info d-flex align-items-center">
                                       {certificate.image && (
                                          <div className="tpd-certificate-img mr-15">
                                             <Image src={certificate.image} alt="certificate" width={90} height={64} />
                                          </div>
                                       )}
                                       <h4 className="tpd-certificate-title">{certificate.title}</h4>
                                    </div>
                                    <div className="tpd-cartificate-btn-box d-flex">
                                       <div className="tpd-certificate-badges">
                                          <button className={`tpd-certificate-badge ${certificate.isPublished ? 'active' : ''}`}>
                                             <span className="tpd-certificate-badge-text">
                                                <span className="tpd-certificate-badge-file">
                                                   {certificate.isPublished ? <OpenEyeThree /> : <DraftTwoSvg />}
                                                </span>
                                                {certificate.status}
                                             </span>
                                             <span className="tpd-certificate-badge-publish">
                                                {certificate.isPublished ? <CloseEyeThree /> : <CloseEyeTwo />}
                                             </span>
                                          </button>
                                       </div>
                                       <div className="tpd-certificate-edit">
                                          <div className="tpd-action-inexact-btn">
                                             <button>
                                                <PenSvg />
                                                <span className="tpd-action-tooltip">Edit</span>
                                             </button>
                                          </div>
                                       </div>
                                       <div className="tpd-certificate-delete">
                                          <div className="tpd-action-inexact-btn">
                                             <button className="border-bg">
                                                <DeleteSvg />
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        ))}
                     </ul>

                  </div>
               </div>
            </div>
         </div>
         {/* certificate area end */}
      </>
   )
}
