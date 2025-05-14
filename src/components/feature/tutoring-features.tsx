import Image from "next/image";

const tutorFeatures = [
  {
    id: 1,
    title: "Professional Educators",
    description: "Get one-on-one help from our subject matter experts.",
  },
  {
    id: 2,
    title: "Real-Time Support",
    description: "Ask questions over live chat or schedule a virtual meeting.",
  },
  {
    id: 3,
    title: "Free Access",
    description: "Every course offers online tutoring at no additional charge.",
  },
];

export default function TutoringFeatures() {
  return (
    <section className="tutor-area grey-bg pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="tp-tutor-section text-center mb-100">
              <h3 className="tp-tutor-section-title">
                Interactive <span> Online Tutoring</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {tutorFeatures.map((feature) => (
            <div className="col-lg-4 col-md-6" key={feature.id}>
              <div className="tp-tutor-item text-center mb-30">
                <div className="tp-tutor-icon">
                  <span>
                    <Image
                      src="/assets/img/icon/tutor/tutor-icon-1.svg"
                      alt={feature.title}
                      width={42}
                      height={30}
                    />
                  </span>
                </div>
                <div className="tp-tutor-content">
                  <h4 className="tp-tutor-title">
                    <a href="#">{feature.title}</a>
                  </h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
