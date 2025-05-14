import Link from "next/link";
import { HomeSvg } from "../svg";

// prop type 
type IProps = {
    subtitle: string;
    title: string;
    color?: string;
    pages?: boolean;
};

export default function BreadcrumbOne({ subtitle, title,color='',pages}: IProps) {
  return (
    <section className="tp-breadcrumb__area pt-60 pb-60 p-relative z-index-1 fix">
      <div
        className="tp-breadcrumb__bg"
        style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg.jpg)" }}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list">
                <span>
                  <Link href="/">
                    <HomeSvg/>
                  </Link>
                </span>
                {pages && <span>Pages</span>}
                <span className={color}>{subtitle}</span>
              </div>
              <h3 className="tp-breadcrumb__title white">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
