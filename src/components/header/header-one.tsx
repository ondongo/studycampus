import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenus from "./navbar/nav-menus";
import logo from "@/assets/img/logo/logoyeba.png";
import HeaderTopArea from "./header-top/header-top-area";
import logo_black from "@/assets/img/logo/logo-black.png";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import OffcanvasButton from "./button/offcanvas-btn";
import { useTranslations } from "next-intl";

export default function HeaderOne() {
  const t = useTranslations('home');
  return (
    <>
      <header className="header-area tp-header-transparent p-relative">
        {/* header top start*/}
        <HeaderTopArea />
        {/* header top end */}

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo-1 tp-header-logo">
                  <Link href="/">
                    <Image
                      className="logo-1"
                      src={logo}
                      alt="logo"
                      priority
                      style={{ height: "80px", width: "250px" }}
                    />
                    <Image
                      className="logo-2"
                      src={logo_black}
                      alt="logo"
                      priority
                      style={{ height: "80px", width: "250px" }}
                    />
                  </Link>
                </div>
              </div>


          
              <div className="col-xxl-10 col-xl-10 col-lg-6 col-md-6 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                <div className="main-menu text-end">
                  {/* nav menus start */}
                  <NavMenus />
                  {/* nav menus end */}
                </div>
              </div>
                  <div className="tp-header-btn d-none d-md-block ml-30">
                    <Link href="https://calendly.com/gloireondongo1205/prise-de-contact?back=1&month=2025-05">
                    {t('book_appointment')}
                    </Link>
                  </div>
                  <div className="tp-header-bar d-xl-none ml-30">
                    <OffcanvasButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar" />
      {/* mobile offcanvas */}
    </>
  );
}
