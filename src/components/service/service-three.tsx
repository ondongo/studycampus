import Image from "next/image";
import icon_1 from "@/assets/img/icon/service/service-5-icon-1.svg";
import icon_2 from "@/assets/img/icon/service/service-5-icon-2.svg";
import icon_3 from "@/assets/img/icon/service/service-5-icon-3.svg";

const service_data = [
  {
    id: 1,
    icon: icon_1,
    title: "Build Confidence",
    description:
      "Here are some tips and activities that can help boost your mood and promote a positive mindset.",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Boost Your Mood",
    description:
      "Here are some tips and activities that can help boost your mood and promote a positive mindset.",
  },
  {
    id: 3,
    icon: icon_3,
    title: "Increase Energy Levels",
    description:
      "Here are some tips and activities that can help boost your mood and promote a positive mindset.",
  },
];

export default function ServiceThree() {
  return (
    <section className="service-area tp-service-5-wrap mb-105">
      <div className="container-fluid">
        <div className="row">
          {service_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="tp-service-5-item text-center">
                <div className="tp-service-5-icon">
                  <span>
                    <Image src={item.icon} alt={item.title} />
                  </span>
                </div>
                <div className="tp-service-5-content">
                  <h4 className="tp-service-5-title">
                    <a href="#">{item.title}</a>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
