import Link from "next/link";
import Image from "next/image";
import { RightArrowSix } from "../svg";
import thumb_img from '@/assets/img/bg/school-4-thumb-1.png';
import school_bg from '@/assets/img/bg/school-4-bg-2.jpg';


export default function WhyChooseUsArea() {
   return (
      <section className="school-area grey-bg fix pb-120">
         <div className="container">
            <div className="tp-school-4-bg wow fadeInUp" data-wow-delay=".3s" data-background="assets/img/bg/school-4-bg-1.jpg">
               <div className="tp-school-4-bg-2 grey-bg">
                  <div className="tp-school-4-shape">
                     <Image src={school_bg} alt="school-bg" />
                  </div>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="tp-school-4-wrap">
                           <h4 className="tp-school-4-title">Why Enrol at <br /> Virtual High <span>School?
                              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="9" viewBox="0 0 120 9" fill="none">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M115.442 8.25039C64.7892 -2.54947 20.433 3.78533 4.88329 8.17023C3.53609 8.55013 1.62363 8.4481 0.611686 7.94234C-0.400258 7.43658 -0.128479 6.71861 1.21872 6.33871C18.3618 1.5045 65.3347 -5.06747 118.455 6.25855C119.92 6.57094 120.434 7.27006 119.601 7.82009C118.769 8.37012 116.907 8.56277 115.442 8.25039Z" fill="#161613" />
                              </svg>
                           </span></h4>
                           <div className="tp-school-4-list">
                              <ul>
                                 <li>Flexible, self-paced courses</li>
                                 <li>20+ years of online education leadership</li>
                                 <li>Established reputation with colleges and universities</li>
                                 <li>Interactive student community programs and events</li>
                                 <li>Balanced student-teacher ratios</li>
                              </ul>
                           </div>
                           <div className="tp-school-4-btn">
                              <Link href="/university-about">Learn More
                                 <span>
                                    <RightArrowSix/>
                                 </span>
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="tp-school-4-thumb">
                           <Image src={thumb_img} alt="thumb_img" style={{ height: 'auto' }} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
