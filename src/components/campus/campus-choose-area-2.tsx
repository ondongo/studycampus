import Link from "next/link";
import Image from "next/image";
import campus_thumb_1 from "@/assets/img/campus/campus/campus-thumb-1.jpg";
import campus_thumb_2 from "@/assets/img/campus/campus/campus-thumb-2.jpg";
import campus_thumb_3 from "@/assets/img/campus/campus/campus-thumb-3.jpg";
import { DownArrowThree } from "../svg";


export default function CampusChooseAreaTwo() {
  return (
    <section className="tp-campus-choose-area pt-120 pb-90 grey-bg">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-campus-choose-wrapper text-center">
                     <div className="tp-campus-choose-btn wow fadeInUp" data-wow-delay=".3s">
                        <p>CAMPUS HIGHLIGHTS</p>
                        <a href="#down">
                           <span>
                           <DownArrowThree />
                           </span>
                        </a>
                     </div>
                     <div className="tp-campus-choose-content mb-10 wow fadeInUp" data-wow-delay=".5s">
                        <h2 className="tp-campus-choose-title">Our goal is to develop and meet the needs <br/> of each child so that he or she becomes a <br/> well-rounded tomorrow individual.</h2>
                        <Link className="tp-btn" href="/university-about">Why Choose Acadia </Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="tp-campus-choose-thumb text-center mb-30 wow fadeInUp" data-wow-delay=".3s">
                     <Image src={campus_thumb_1} alt="campus-thumb" style={{height:'auto'}}/>
                  </div>
               </div>
               <div className="col-lg-6 col-md-6">
                  <div className="tp-campus-choose-thumb-main text-center pt-100 mb-30 wow fadeInUp" data-wow-delay=".5s">
                     <Image src={campus_thumb_2} alt="campus-thumb" style={{height:'auto'}}/>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="tp-campus-choose-thumb text-center mb-30 wow fadeInUp" data-wow-delay=".7s">
                     <Image src={campus_thumb_3} alt="campus-thumb" style={{height:'auto'}}/>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
