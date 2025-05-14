import React from "react";
import Image from "next/image";
import calling from "@/assets/img/icon/calling.svg";
import HeaderLanguage from "./header-language";
import { InstagramSvg, FbSvg, YoutubeSvg } from "@/components/svg";

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
       
              <a href="/faq">Faqs</a>
              <a
                href="https://wa.me/33753275253?text=Bonjour%2C%20je%20vous%20contacte%20car%20j%E2%80%99aurais%20besoin%20d%E2%80%99un%20accompagnement%20pour%20finaliser%20mon%20dossier.%20Pourriez-vous%20m%E2%80%99indiquer%20les%20%C3%A9tapes%20%C3%A0%20suivre%20ou%20m%E2%80%99orienter%20vers%20la%20personne%20%C3%A0%20contacter%20%3F%0A%0AMerci%20d%E2%80%99avance%20pour%20votre%20aide%20pr%C3%A9cieuse."
                target="_blank"
              >
                Contact Whatsapp
              </a>
              <a href="#">
                <InstagramSvg />
              </a>

              <a href="#">
                <FbSvg />
              </a>

         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
