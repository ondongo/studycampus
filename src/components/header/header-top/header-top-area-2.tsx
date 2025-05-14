import Link from "next/link";
import {SearchSvg, UserSvgFour } from "@/components/svg";
import HeaderLanguage from "./header-language";

export default function HeaderTopAreaTwo() {
  return (
    <div className="tp-header-4-top d-none d-lg-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="tp-heder-info d-flex align-items-center">
              <div className="tp-header-info-item">
                <span>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  7500k Followers
                </span>
              </div>
              <div className="tp-header-info-item">
                <div className="header-bottom__lang">
                  <ul>
                    <HeaderLanguage/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-header-4-top d-flex align-items-center justify-content-md-end">
              <div className="tp-header-4-top-item">
                <div className="tp-header-4-link">
                  <Link href="/event">Events</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
              <div className="tp-header-4-top-item">
                <div className="tp-header-4-btn-top">
                  <Link href="/login">
                    <span>
                      <UserSvgFour />
                    </span>
                    log in as a student
                    <i>
                      <svg
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L4.5 4.5L8 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
              <div className="tp-header-4-top-item">
                <div className="tp-header-4-search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <span>
                      <SearchSvg clr="white" />
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
