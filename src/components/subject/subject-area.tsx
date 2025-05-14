import Image from "next/image";
import subject_icon_1 from "@/assets/img/icon/subject/subject-icon-1.svg";
import subject_icon_2 from "@/assets/img/icon/subject/subject-icon-2.svg";
import subject_icon_3 from "@/assets/img/icon/subject/subject-icon-3.svg";
import subject_icon_4 from "@/assets/img/icon/subject/subject-icon-4.svg";
import subject_icon_5 from "@/assets/img/icon/subject/subject-icon-5.svg";
import subject_icon_6 from "@/assets/img/icon/subject/subject-icon-6.svg";

const subjectsData = [
  {
    id: 1,
    icon: subject_icon_1,
    borderClass: "pink-border",
    title: "Sign Language",
  },
  {
    id: 2,
    icon: subject_icon_2,
    borderClass: "gblue-border",
    title: "Everyday Math",
  },
  {
    id: 3,
    icon: subject_icon_3,
    borderClass: "yellow-border",
    title: "Handwriting",
  },
  {
    id: 4,
    icon: subject_icon_4,
    borderClass: "blue-border",
    title: "Movement Matters",
  },
  {
    id: 5,
    icon: subject_icon_5,
    borderClass: "tomato-border",
    title: "Second Language",
  },
  {
    id: 6,
    icon: subject_icon_6,
    borderClass: "dark-border",
    title: "Art Studio",
  },
];

export default function SubjectArea() {
  return (
    <section
      className="subject-area tp-subject-bg"
      style={{ backgroundImage: "url(/assets/img/bg/subject-bg-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-8">
            <div
              className="tp-subject-section mb-40 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <span>Key Features</span>
              <h2 className="tp-section-2-title">
                What kindergarten functionality is inside?
              </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12">
            <div
              className="tp-subject-wrap mb-30 wow fadeInUp"
              data-wow-delay=".5s"
            >
              {subjectsData.map((item) => (
                <div key={item.id} className="tp-subject-item">
                  <div className="tp-subject-icon">
                    <span className={item.borderClass}>
                      <Image src={item.icon} alt={item.title} />
                    </span>
                  </div>
                  <div className="tp-subject-content">
                    <h5 className="tp-subject-title-sm">{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
