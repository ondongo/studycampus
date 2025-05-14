import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProcessLineSvg, RightArrowFour } from '../svg';
import process_icon_1 from '@/assets/img/icon/process/process-icon-1.svg';
import process_icon_2 from '@/assets/img/icon/process/process-icon-2.svg';
import process_icon_3 from '@/assets/img/icon/process/process-icon-3.svg';
import process_ground from '@/assets/img/shape/process/process-3-ground.png';
import leaf_1 from '@/assets/img/shape/process/process-3-leaf-1.svg';
import leaf_2 from '@/assets/img/shape/process/process-3-leaf-2.png';
import leaf_3 from '@/assets/img/shape/process/process-3-leaf-3.png';
import leaf_4 from '@/assets/img/shape/process/process-3-leaf-4.png';
import leaf_5 from '@/assets/img/shape/process/process-3-leaf-5.png';
import baby_1 from '@/assets/img/shape/process/process-3-baby-1.png';
import baby_2 from '@/assets/img/shape/process/process-3-baby-2.png';
import heart_1 from '@/assets/img/shape/process/process-3-heart-1.png';
import football from '@/assets/img/shape/process/process-3-football-1.png';

const shapeData = [
   { cls: "tp-process-3-shape-2", src: process_ground },
   { cls: "tp-process-3-shape-3", src: leaf_1 },
   { cls: "tp-process-3-shape-4", src: leaf_2 },
   { cls: "tp-process-3-shape-5", src: leaf_3 },
   { cls: "tp-process-3-shape-6", src: leaf_4 },
   { cls: "tp-process-3-shape-7", src: leaf_5 },
   { cls: "tp-process-3-shape-8", src: baby_1 },
   { cls: "tp-process-3-shape-9", src: baby_2 },
   { cls: "tp-process-3-shape-10", src: heart_1 },
   { cls: "tp-process-3-shape-11", src: football },
];

const processData = [
   {
      id: 1,
      borderCls: "pink-border",
      icon: process_icon_1,
      title: "We care about kids",
      description: "Lorem ipsum dolor sit amet, mea ei viderer probatus.",
   },
   {
      id: 2,
      borderCls: "gblue-border",
      icon: process_icon_2,
      title: "Building life-long learners",
      description: "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur.",
   },
   {
      id: 3,
      borderCls: "lyellow-border",
      icon: process_icon_3,
      title: "Helping struggling students",
      description: "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur.",
   }
];

export default function ProcessOne() {
   return (
      <section className="process-area tp-process-3-bg fix">
         <div className="container">
            <div className="row">
               <div className="col-xxl-6 col-lg-8">
                  <div className="tp-process-3-wrap">
                     <div className="tp-section-2">
                        <h2 className="tp-section-2-title">Our Unique <br /> learning environment</h2>
                        <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. <br /> Exercise joy man children rejoiced.</p>
                     </div>
                     <div className="tp-process-3-btn">
                        <Link href="/contact">Contact Us
                           <span>
                              <RightArrowFour />
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-process-3-wrapper">
               <div className="row">
                  {processData.map((process, index) => (
                     <div className="col-lg-4" key={index}>
                        <div className={`tp-process-3-item tp-process-3-item-${process.id} wow fadeInUp`} data-wow-delay={`.${process.id}s`}>
                           <div className="tp-process-3-icon">
                              <span className={process.borderCls}>
                                 <Image src={process.icon} alt={process.title} />
                              </span>
                           </div>
                           <div className="tp-process-3-content">
                              <h4 className="tp-process-3-title">{process.title}</h4>
                              <p>{process.description}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="tp-process-3-shape-1 wow fadeInUp" data-wow-delay=".5s">
                  <span>
                     <ProcessLineSvg />
                  </span>
               </div>
            </div>
         </div>
         <div className="tp-process-3-shape">
            {shapeData.map((shape, index) => (
               <div className={shape.cls} key={index}>
                  <Image src={shape.src} alt="shape" style={{height:'auto'}} />
               </div>
            ))}
            <div className="tp-process-3-shape-12"></div>
            <div className="tp-process-3-shape-13"></div>
            <div className="tp-process-3-shape-14"></div>
            <div className="tp-process-3-shape-15"></div>
            <div className="tp-process-3-shape-16"></div>
            <div className="tp-process-3-shape-17"></div>
         </div>
      </section>
   )
}
