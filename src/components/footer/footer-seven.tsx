import Image from "next/image";
import Link from "next/link";
import { Email } from "../svg";
import FooterSocial from "./footer-social";
import logo from '@/assets/img/logo/logo-black.png';
import logo_white from '@/assets/img/logo/logoyeba.png';
import { footerLinks } from "@/data/footer-links";

type Props = {
  dashboard_footer?:boolean;
  bgClr?:string;
}

export default function FooterSeven({bgClr,dashboard_footer}: Props) {
  return (
    <footer>
      <div className={`tp-footer-main ${dashboard_footer?'tpd-dashboard-footer':'tp-footer-inner'} pt-80 pb-55`} 
         style={bgClr?{backgroundColor:bgClr}:dashboard_footer?{backgroundColor:"#0a1c3a"}:{}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
              <div className="tp-footer-widget tp-footer-col-1 mb-30">
                <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                  <Link href="/">
                    <Image src={dashboard_footer?logo_white:logo} alt="logo" style={{ height: "auto" }} />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisc ing elit.</p>
                </div>
                <div className="tp-footer-contact">
                  <span>Got Questions? Call us</span>
                  <a href="tel:012345678">+670 413 90 762</a>
                </div>
                <div className="tp-footer-contact-mail">
                  <a href="mailto:sofial@gmail.com">
                    <span>
                      <Email />
                    </span>
                    acadia@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="tp-footer-widget tp-footer-col-2 mb-30">
                <h4 className="tp-footer-widget-title mb-15">About</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerLinks.link_one.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-5">
              <div className="tp-footer-widget tp-footer-col-3 mb-30">
                <h4 className="tp-footer-widget-title mb-15">Quick links</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerLinks.link_two.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-7 col-sm-7">
              <div className="p-footer-widget tp-footer-5-col-4 mb-30">
                <h4 className="tp-footer-widget-title mb-15">Our Newsletter</h4>
                <div className="tp-footer-newsletter-wrap">
                  <p>Enter your email and we will send you <br /> more information</p>
                  <form action="#">
                    <div className={`tp-footer-newsletter-wrapper ${dashboard_footer?'':'tp-footer-inner-input'} mb-30`}>
                      <div className="tp-footer-newsletter-input">
                        <input type="email" placeholder="Your email" />
                      </div>
                      <div className={`${dashboard_footer?'tp-footer-newsletter-submit':'tp-footer-5-newsletter-submit'}`}>
                        <button className={`${dashboard_footer?'tp-btn':'tp-btn-inner'}`}>Subscribe</button>
                      </div>
                    </div>
                  </form>
                  <div className="tp-footer-newsletter-social tp-footer-inner-social">
                    <FooterSocial />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${dashboard_footer?'tp-footer-bottom tpd-dashboard-footer-bottom':'tp-footer-5-bottom tp-footer-inner-bottom'}`} 
        style={bgClr ? { backgroundColor: bgClr } : {}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-footer-copyright text-center">
                <span>© {new Date().getFullYear()} <a href="#">Acadia</a>. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
