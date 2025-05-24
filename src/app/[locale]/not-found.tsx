import { Metadata } from "next";
import Image from "next/image";
import error_img from "@/assets/img/error/error.png";
import Link from "next/link";
import HeaderOne from "@/components/header/header-one";
import FooterOne from "@/components/footer/footer-one";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "Not Found - Acadia",
};

export default function NotFound() {
  return (
    <>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}
      <main>
        <section className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix">
          <div
            className="tp-breadcrumb__bg overlay"
            style={{
              backgroundImage:
                "url(/assets/img/error/error.png)",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat"
            }}
          ></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12"></div>
            </div>
          </div>
        </section>
        {/* not found area start */}
        <div className="tp-hero-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tp-error-wrapper text-center">
                  <h4 className="tp-error-title">Oops!</h4>
              
                  <div className="tp-error-content">
                    <h4 className="tp-error-title-sm">
                      Something went Wrong...
                    </h4>
                    <p>Sorry, {"we couldn't"} find your page.</p>
                    <Link className="tp-btn-inner" href="/">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* not found area end */}
      </main>

      {/* footer area start */}
      <FooterOne />
      {/* footer area end */}
    </>
  );
}
