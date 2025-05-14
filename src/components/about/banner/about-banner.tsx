import { RightArrowTwo } from "@/components/svg";
import Link from "next/link";


export default function AboutBanner() {
    return (
        <section className="tp-about-pt fix p-relative pt-200">
            <div className="tp-about-bg-main" data-background="assets/img/about/about/about-bg.png" style={{ backgroundImage: "url(/assets/img/about/about/about-bg.png)" }}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="tp-about-banner mb-80">
                            <span>About our classes</span>
                            <h3 className="tp-about-banner-title">
                                We providing the <br /> best quality online courses.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="tp-about-banner-bg" data-background="assets/img/about/about/about-thumb-1.jpg" style={{ backgroundImage: "url(/assets/img/about/about/about-thumb-1.jpg)" }}>
                    <div className="row g-0">
                        <div className="col-xl-6 col-lg-12"></div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="tp-about-banner-content p-relative">
                                <span className="span">Our Stories</span>
                                <p>When you design products and <br /> services in close partnership with <br /> clients, you are creating a solution <br /> that is tailored to their specific <br /> needs.</p>
                                <Link href="/instructor">Meet the Team <span><RightArrowTwo clr="currentColor"/></span></Link>
                                <div className="tp-about-banner-content-year">
                                    <span>8</span>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
