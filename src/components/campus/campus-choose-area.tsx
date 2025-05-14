import Link from "next/link";
import { DownArrowThree } from "../svg";

export default function CampusChooseArea() {
  return (
    <section className="tp-campus-choose-area pt-120 pb-30 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-campus-choose-wrapper text-center">
              <div
                className="tp-campus-choose-btn admission wow fadeInUp"
                data-wow-delay=".3s"
              >
                <p>Financial Aid</p>
                <Link href="#down">
                  <span>
                    <DownArrowThree />
                  </span>
                </Link>
                <div
                  className="tp-campus-choose-content mb-10 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <h2 className="tp-campus-choose-title fs-50">
                    At Stanford, we practice holistic admission. <br />
                    This means that each piece in your application <br /> is
                    reviewed as part of an integrated and <br /> comprehensive
                    whole.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
