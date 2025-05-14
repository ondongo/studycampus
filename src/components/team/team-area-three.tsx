import Link from "next/link";
import Image from "next/image";
import { team_university } from "@/data/team-data";
import shape from "@/assets/img/team/about-team/team-shape.png";

export default function TeamAreaThree() {
  return (
    <section className="tp-about-team-area grey-bg p-relative pt-120 pb-90">
      <div className="tp-about-team-shape">
        <Image src={shape} alt="shape"/>
      </div>
      <div className="container">
        <div className="row">
          {team_university.map((item,i) => (
            <div key={item.id} className="col-lg-3 col-sm-6">
              <div
                className="tp-about-team-item p-relative mb-30 wow fadeInUp"
                data-wow-delay={`.${i + 1}s`}
              >
                <div className="tp-about-team-thumb">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={282}
                    height={440}
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="tp-about-team-content">
                  <h4 className="tp-about-team-title">
                    <Link href="/my-profile">{item.name}</Link>
                  </h4>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
