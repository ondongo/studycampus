import Image from "next/image";
import { kids_program_data } from "@/data/program-data";
import shape from '@/assets/img/program/program-3-shape-1.png';
import Link from "next/link";

export default function ProgramAreaTwo() {
  return (
    <section className="tp-program-area tp-program-3-bg pb-100 pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-lg-7">
            <div className="tp-section-2 text-center mb-60">
              <span className="tp-section-2-subtitle mb-10">Our Programs</span>
              <h2 className="tp-section-2-title">
                Discover Our Educational Programs
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {kids_program_data.map((item, i) => (
            <div key={item.id} className="col-xl-4 col-md-6">
              <div
                className="tp-program-3-item mb-40 wow fadeInUp"
                data-wow-delay={`.${i + 1}s`}
              >
                <div className="tp-program-3-thumb">
                  <Link href="/university-program">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={322}
                      height={229}
                      style={{ height: "auto" }}
                    />
                  </Link>
                </div>
                <div className="tp-program-3-content">
                  <h4 className="tp-program-3-title">
                    <Link href="/university-program">{item.title}</Link>
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  <div className="tp-program-3-schedule d-flex align-items-center">
                    <div className="tp-program-3-schedule-item">
                      <span>Age</span>
                      <p>{item.age}</p>
                    </div>
                    <div className="tp-program-3-schedule-item">
                      <span>Time</span>
                      <p>{item.time}</p>
                    </div>
                    <div className="tp-program-3-schedule-item">
                      <span>Size</span>
                      <p>{item.size}</p>
                    </div>
                  </div>
                  <div className="tp-program-3-btn">
                    <Link href="/course-details-2/1">Preview this Course</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tp-program-3-shape">
        <div className="tp-program-3-shape-1">
          <Image src={shape} alt="shape" />
        </div>
        <div className="tp-program-3-shape-2"></div>
      </div>
    </section>
  );
}
