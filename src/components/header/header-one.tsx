import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenus from "./navbar/nav-menus";
import logo from "@/assets/img/logo/logoyeba.png";
import HeaderTopArea from "./header-top/header-top-area";
import logo_black from "@/assets/img/logo/logo-black.png";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import OffcanvasButton from "./button/offcanvas-btn";

export default function HeaderOne() {
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
                      style={{ height: "80px", width: "180px" }}
                    />
                    <Image
                      className="logo-2"
                      src={logo_black}
                      alt="logo"
                      priority
                      style={{ height: "80px", width: "180px" }}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-10">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  <div className="main-menu text-end d-none d-md-block">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </div>
                  <div className="tp-header-btn d-none d-md-block ml-30">
                    <Link href="/university-application-form">
                      Booker un rdv
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
