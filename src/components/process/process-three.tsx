import Image from "next/image";
import mission_thumb from "@/assets/img/our-mission/thumb-1.png";

const processData = [
  {
    id: 1,
    title: "Complete Application Form",
    description:
      "Creativity and innovation to challenge the status quo will affect what and how we teach and the intellectual ambitions of the university itself.",
  },
  {
    id: 2,
    title: "Review",
    description:
      "Social engagement should orient students’ academic experiences to help them become critically engaged citizens, dedicated to solving problems.",
  },
  {
    id: 3,
    title: "Make Your Deposit",
    description:
      "Estudiar’s commitment to student success, important scholarship and creative activity, and public service sets it apart from other colleges.",
  },
];

export default function ProcessThree() {
  return (
    <section className="tp-our-mission-area grey-bg pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="tp-our-mission-thumb">
              <Image
                src={mission_thumb}
                alt="mission-thumb"
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tp-financial-mission-wrapper">
              <h3 className="tp-financial-mission-title">
                The Financial Aid Process
              </h3>
              {processData.map((item) => (
                <div key={item.id} className="tp-financial-process-box">
                  <h4 className="tp-financial-process-title">
                    <span>{item.id}</span>
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
