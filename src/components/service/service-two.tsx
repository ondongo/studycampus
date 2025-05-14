import Image from "next/image";
import heading_shape from '@/assets/img/shape/service/services-shape-2.png';
import ser_shape_1 from '@/assets/img/shape/service/services-3-shape-1.png';
import ser_shape_2 from '@/assets/img/shape/service/services-3-shape-2.png';
import ser_shape_3 from '@/assets/img/shape/service/services-3-shape-3.png';
import ser_shape_4 from '@/assets/img/shape/service/services-3-shape-4.png';
import ser_shape_5 from '@/assets/img/shape/service/services-3-shape-5.png';


const servicesData = [
   {
      id: 1,
      title: "Home-like Environment",
      description: "We create for children an home-like place.",
      iconActive: "/assets/img/icon/service/services-3-icon-1.svg",
      iconHover: "/assets/img/icon/service/services-3-hover-1.svg",
   },
   {
      id: 2,
      title: "Safety and <br> Security",
      description: "We create for children an home-like place.",
      iconActive: "/assets/img/icon/service/services-3-icon-2.svg",
      iconHover: "/assets/img/icon/service/services-3-hover-2.svg",
   },
   {
      id: 3,
      title: "Quality <br> Educators",
      description: "We create for children an home-like place.",
      iconActive: "/assets/img/icon/service/services-3-icon-3.svg",
      iconHover: "/assets/img/icon/service/services-3-hover-3.svg",
   },
   {
      id: 4,
      title: "Play <br> to Learn",
      description: "We create for children an home-like place.",
      iconActive: "/assets/img/icon/service/services-3-icon-4.svg",
      iconHover: "/assets/img/icon/service/services-3-hover-4.svg",
   },
];

export default function ServiceTwo() {
   return (
      <section className="service-area tp-service-3-bg" style={{ backgroundImage: `url(/assets/img/bg/services-3-bg.jpg)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="tp-section p-relative mb-45 text-center">
                     <h3 className="tp-section-title-white">We are kindergarten <br /> & childhood is our passion.</h3>
                     <div className="tp-service-3-heading">
                        <Image src={heading_shape} alt="heading-shape" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               {servicesData.map((item) => (
                  <div key={item.id} className="col-lg-3 col-sm-6">
                     <div className="tp-service-3-item mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div className="tp-service-3-icon">
                           <span className="tp-service-3-icon-active">
                              <Image src={item.iconActive} alt="icon" width={35} height={36} />
                           </span>
                           <span className="tp-service-3-icon-hover">
                              <Image src={item.iconHover} alt="icon" width={35} height={36} />
                           </span>
                        </div>
                        <div className="tp-service-3-content">
                           <h4 className="tp-service-3-title">
                              <a href="#" dangerouslySetInnerHTML={{ __html: item.title }}></a>
                           </h4>
                           <p>{item.description}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="tp-service-3-shape">
            <div className="tp-service-3-shape-1">
               <Image src={ser_shape_1} alt="service-shape" />
            </div>
            <div className="tp-service-3-shape-2">
               <Image src={ser_shape_2} alt="service-shape" />
            </div>
            <div className="tp-service-3-shape-3">
               <Image src={ser_shape_3} alt="service-shape" />
            </div>
            <div className="tp-service-3-shape-4">
               <Image src={ser_shape_4} alt="service-shape" />
            </div>
            <div className="tp-service-3-shape-5">
               <Image src={ser_shape_5} alt="service-shape" />
            </div>
         </div>
      </section>
   )
}
