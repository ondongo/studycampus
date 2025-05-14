import { DownArrowThree } from "../svg";

export default function CampusChooseAreaFour() {
  return (
    <section className="tp-campus-choose-area pt-120 pb-90 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-campus-choose-wrapper text-center">
              <div className="tp-campus-choose-btn">
                <p>History Acadia</p>
                <a href="#down">
                  <span>
                    <DownArrowThree />
                  </span>
                </a>
              </div>
              <div className="tp-campus-choose-content mb-10">
                <h2 className="tp-campus-choose-title">
                  Opened in 1896 to meet the growing educational needs of
                  Melbourne’s west, the University early decades were quite
                  challenging.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
