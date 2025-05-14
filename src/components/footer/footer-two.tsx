import Image from 'next/image';
import Link from 'next/link';
import { DownArrowTwo, Email, RightArrowFour } from '../svg';
import FooterSocial from './footer-social';
import { footerLinks } from '@/data/footer-links';
import logo from '@/assets/img/logo/logo-black.png';
import google_play from '@/assets/img/footer/google-play.jpg';
import apple_store from '@/assets/img/footer/apple-store.jpg';

export default function FooterTwo() {
   return (
      <footer>
         <div className="tp-footer-2">
            <div className="tp-footer-main pt-70 pb-55">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="tp-footer-widget tp-footer-2-col-1 mb-30">
                           <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                              <Link href="/">
                                 <Image src={logo} alt="logo" style={{height:"auto"}} />
                              </Link>
                           </div>
                           <div className="tp-footer-widget-content">
                              <p>Acadia education theme, built specifically for the education centers which is teaching and involve learners.</p>
                           </div>
                           <div className="tp-footer-contact">
                              <div className="tp-footer-btn">
                                 <Link className="tp-btn-round" href="/contact">Contact Us
                                    <span>
                                       <RightArrowFour />
                                    </span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="tp-footer-widget tp-footer-2-col-2 mb-30">
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
                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="tp-footer-widget tp-footer-2-col-3 mb-30">
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
                     <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="p-footer-widget tp-footer-2-col-4 mb-30">
                           <h4 className="tp-footer-widget-title mb-20">Our Newsletter</h4>
                           <div className="tp-footer-contact">
                              <span>Got Questions? Call us</span>
                              <a href="tel:012345678">+670 413 90 762</a>
                           </div>
                           <div className="tp-footer-contact-mail mb-20">
                              <a href="mailto:acadia@gmail.com">
                                 <span>
                                    <Email />
                                 </span>
                                 Yébaschoo@gmail.com</a>
                           </div>
                           <div className="tp-footer-app">
                              <a href="#">
                                 <Image src={google_play} alt="google-play" />
                              </a>
                              <a href="#">
                                 <Image src={apple_store} alt="apple-store" />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-footer-bottom">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-3 col-md-4">
                        <div className="tp-footer-bottom-social">
                           <FooterSocial />
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-5">
                        <div className="tp-footer-copyright text-start text-md-center">
                           <span>© {new Date().getFullYear()} <a href="#">Acadia</a>. All rights reserved.</span>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-3">
                        <div className="header-bottom__lang-2 text-start text-md-end">
                           <ul>
                              <li>
                                 <a id="header-bottom__lang-toggle" href="#">
                                    <span>EN</span>
                                    <span>
                                       <DownArrowTwo />
                                    </span>
                                 </a>
                                 <ul className="header-bottom__lang-submenu-2">
                                    <li><a href="#">Arabic</a></li>
                                    <li><a href="#">Spanish</a></li>
                                    <li><a href="#">Mandarin</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
