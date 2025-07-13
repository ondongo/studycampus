"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo/logoyeba.png";
import shape_3 from "@/assets/img/login/login-register-shape-3.png";

export default function AccessDeniedBanner() {
  return (
    <div
      className="tp-login-register-banner-box p-relative"
      style={{
        backgroundImage: "url(/assets/img/hero/2149156390.jpg)",
      }}
    >
      <div
        className="tp-login-register-logo tp-header-logo"
        style={{ textAlign: "center", marginTop: "32px" }}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            style={{
              height: "100px",
              width: "180px",
              maxWidth: "80vw",
              objectFit: "contain",
            }}
          />
        </Link>
      </div>

      <div className="tp-login-register-shape">
        <div className="shape-2">
          <Image src={shape_3} alt="shape" />
        </div>
        <div className="shape-3">
          <Image src={shape_3} alt="shape" />
        </div>
      </div>
      <style jsx>{`
        .tp-login-register-banner-box {
          display: block;
          background-size: cover;
          background-position: center;
          border-radius: 0 0 16px 16px;
          position: relative;
        }
        @media (max-width: 767px) {
          .tp-login-register-banner-box {
            min-height: 180px;
            height: clamp(180px, 30vh, 350px);
            border-radius: 0 0 16px 16px;
          }
          .tp-login-register-logo {
            margin-top: 16px;
          }
        }
        @media (min-width: 768px) {
          .tp-login-register-banner-box {
            min-height: 100vh;
            height: 100vh;
            border-radius: 0px 0px 0px 0px;
          
          }
          .tp-login-register-logo {
            margin-top: 48px;
          }
        }
        @media (min-width: 1200px) {
          .tp-login-register-banner-box {
            min-height: 600px;
           
          }
        }
      `}</style>
    </div>
  );
} 