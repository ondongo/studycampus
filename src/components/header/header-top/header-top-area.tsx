import React from "react";
import Image from "next/image";
import calling from "@/assets/img/icon/calling.svg";
import HeaderLanguage from "./header-language";

export default function HeaderTopArea() {
  return (
    <div className="tp-header-top theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-heder-info d-flex justify-content-center justify-content-lg-start align-items-center">
              <div className="tp-header-info-item">
                <span>
                  <a href="tel:+33753275253">
                    <i>
                      <Image src={calling} alt="phone-img" />
                    </i>{" "}
                    +(33) 7 53 27 52 53
                  </a>
                </span>
              </div>
              <div className="tp-header-info-item">
                <div className="header-bottom__lang">
                  <ul>
                    <HeaderLanguage />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-none d-lg-block">
            <div className="tp-header-right-list d-flex justify-content-md-end">
              <a href="#">Contact</a>
              <a href="#">Faqs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
