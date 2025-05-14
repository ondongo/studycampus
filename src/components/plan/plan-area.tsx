'use client';
import Link from "next/link";
import { useState } from "react";


const planData = [
   {
      id: 1,
      title: "Athletics",
      description: "Athletics",
      image: "/assets/img/bg/plan/plan-4-bg-1.jpg",
      link: "/university-campus",
   },
   {
      id: 2,
      title: "Faculty and <br/> staff",
      description: "Meet our team",
      image: "/assets/img/bg/plan/plan-4-bg-2.jpg",
      link: "/university-leadership",
   },
   {
      id: 3,
      title: "Contact Us",
      description: "Get in touch",
      image: "/assets/img/bg/plan/plan-4-bg-3.jpg",
      link: "/contact",
   },
];

export default function PlanArea() {
   const [activeId, setActiveId] = useState(1);
   return (
      <section className="plan-area tp-plan-4-wrap fix">
         <div className="container">
            <div className="row">
               <div className="col-lg-3">
                  <div className="tp-plan-4-section">
                     <span>Visit Barry!</span>
                     <h3 className="tp-plan-4-section-title">Plan Your Meeting With Us</h3>
                  </div>
               </div>
               <div className="col-lg-9">
                  <div className="tp-plan-4-wrapper">
                     <div className="row">
                        {planData.map((item) => (
                           <div key={item.id} className="col-md-4">
                              <Link onMouseEnter={() => setActiveId(item.id)} href={item.link} className={`tp-plan-4-item ${activeId === item.id ? "active" : ""}`}>
                                 <div className="tp-plan-4-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
                                 <div className="tp-plan-4-content d-flex align-items-center justify-content-center">
                                    <div className="tp-plan-4-box text-center">
                                       <span>{item.id <= 9 ? `0${item.id}` : item.id}</span>
                                       <h4 className="tp-plan-4-title" dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                                       <p>{item.description}</p>
                                    </div>
                                 </div>
                              </Link>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
