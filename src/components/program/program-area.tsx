import Link from "next/link";
import Image from "next/image";
import ProgramSlider from "./slider/program-slider";
import shape_line from "@/assets/img/unlerline/program-1-svg-1.svg";
import { RightSmArrowThree } from "../svg";

export default function ProgramArea() {
  return (
    <section className="program-area mb-75">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-program-wrap wow fadeInUp" data-wow-delay=".3s">
              <div className="tp-section text-center mb-55">
                <h3 className="tp-section-title">
                  <span>
                    {" "}
                    Academic{" "}
                    <Image
                      className="tp-underline-shape-2 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span>{" "}
                  Programs
                </h3>
                <p>Focusing on high education with the best quality.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ProgramSlider />
          </div>
          <div className="col-12">
            <div className="tp-program-dot text-center"></div>
          </div>
          <div className="col-12">
            <div className="tp-program-all text-center">
              <p>
                Explore the most appropriate promgram.​​
                <Link href="/university-program">
                  View all Programs{" "}
                  <span>
                    <RightSmArrowThree />
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
