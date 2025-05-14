import Image from "next/image";
import shape_underline from "@/assets/img/unlerline/brand-2-svg-1.svg";
// brands
import brand_1 from "@/assets/img/brand/brand-2-logo-1.png";
import brand_2 from "@/assets/img/brand/brand-2-logo-2.png";
import brand_3 from "@/assets/img/brand/brand-2-logo-3.png";
import brand_4 from "@/assets/img/brand/brand-2-logo-4.png";
import brand_5 from "@/assets/img/brand/brand-2-logo-5.png";
import brand_6 from "@/assets/img/brand/brand-2-logo-6.png";
import brand_7 from "@/assets/img/brand/brand-2-logo-7.png";
import brand_8 from "@/assets/img/brand/brand-2-logo-8.png";
import brand_9 from "@/assets/img/brand/brand-2-logo-9.png";

const brands = [
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  brand_7,
  brand_8,
  brand_9,
];

export default function BrandArea() {
  return (
    <section className="brand-area mb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="tp-brand-2-content mb-40">
              <h4 className="tp-brand-2-title">
                Who will <br /> You Learn {' '}
                <span>
                  With?
                  <Image
                    className="tp-underline-shape-10 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  />
                </span>
              </h4>
              <p>
                You can list your partners or instructors <br /> brands here to
                show off your sites
              </p>
              <div className="tp-brand-2-btn">
                <a className="tp-btn-round" href="#">
                  View All Partners
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tp-brand-2-wrapper">
              {brands.map((brand, index) => (
                <div className="tp-brand-2-item" key={index}>
                  <Image src={brand} alt="brand" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
