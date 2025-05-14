import Image from "next/image";
import icon_1 from "@/assets/img/icon/funfact/funfact-2-icon-1.svg";
import icon_2 from "@/assets/img/icon/funfact/funfact-2-icon-2.svg";
import icon_3 from "@/assets/img/icon/funfact/funfact-2-icon-3.svg";
import icon_4 from "@/assets/img/icon/funfact/funfact-2-icon-4.svg";

const funFacts = [
  {
    id: 1,
    title: "Flexible classes",
    description: "You pick schedule.",
    icon: icon_1,
  },
  {
    id: 2,
    title: "Offline mode",
    description: "Download classes.",
    icon: icon_2,
    cls: "tp-funfact-item-2",
  },
  {
    id: 3,
    title: "10k online courses",
    description: "Explore fresh topics.",
    icon: icon_3,
    cls: "tp-funfact-item-3",
  },
  {
    id: 4,
    title: "Educator help",
    description: "Always get answers.",
    icon: icon_4,
  },
];

export default function FunFactArea() {
  return (
    <section
      className="funfact-area tp-funfact-bg"
      data-background="assets/img/bg/funfact-2-bg-1.jpg"
      style={{ backgroundImage: "url(/assets/img/bg/funfact-2-bg-1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          {funFacts.map((fact) => (
            <div key={fact.id} className="col-lg-3 col-sm-6">
              <div className={`tp-funfact-item d-flex align-items-center ${fact.cls || ""}`}>
                <div className="tp-funfact-icon">
                  <span>
                    <Image src={fact.icon} alt="icon" />
                  </span>
                </div>
                <div className="tp-funfact-content">
                  <h4 className="tp-funfact-title">{fact.title}</h4>
                  <span>{fact.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
