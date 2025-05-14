import { Metadata } from "next";
import Image from "next/image";
import error_img from '@/assets/img/error/error.png';
import Link from "next/link";
import HeaderTwo from "@/components/header/header-two";
import FooterSeven from "@/components/footer/footer-seven";


export const metadata: Metadata = {
    title: "Not Found - Acadia",
};

export default function NotFound() {
    return (
        <>
            {/* header area start */}
            <HeaderTwo inner={true} />
            {/* header area end */}
            <main>

                {/* not found area start */}
                <div className="tp-error-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="tp-error-wrapper text-center">
                                    <h4 className="tp-error-title">Oops!</h4>
                                    <div className="tp-error-thumb mb-50">
                                        <Image src={error_img} alt="error-img" style={{ height: "auto" }} />
                                    </div>
                                    <div className="tp-error-content">
                                        <h4 className="tp-error-title-sm">Something went Wrong...</h4>
                                        <p>Sorry, {"we couldn't"} find your page.</p>
                                        <Link className="tp-btn-inner" href="/">Back to Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* not found area end */}
            </main>

            {/* footer area start */}
            <FooterSeven />
            {/* footer area end */}
        </>
    );
}
