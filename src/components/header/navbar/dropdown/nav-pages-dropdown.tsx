import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RightSmArrow } from "@/components/svg";
import { IPagesDropdown } from "@/types/menu-d-t";
import menu_shape_1 from "@/assets/img/shape/menu-shape-1.png";
import menu_shape_2 from "@/assets/img/shape/menu-shape-2.png";

type IProps = {
  pages_dropdown: IPagesDropdown[];
};

export default function NavPagesDropdown({ pages_dropdown }: IProps) {
  return (
    <div className="megamenu-demo-fullwidth p-relative">
      <div className="row">
        <div className="col-xl-8 col-lg-12">
          <div className="tp-megamenu-fullwidth-list-wrapper">
            <div className="row tp-gx-90">
              {pages_dropdown.map((pd) => (
                <div key={pd.id} className={`col-xl-${pd.id === 2 ? 6 : 3}`}>
                  {pd.id !== 2 && (
                    <div className="tp-megamenu-fullwidth-list">
                      <h4 className="tp-megamenu-fullwidth-title">
                        {pd.title}
                      </h4>
                      <ul>
                        {pd.dropdown_menus.map((sm) => (
                          <li key={sm.id}>
                            <Link href={sm.link}>{sm.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {pd.id === 2 && (
                    <div className="tp-megamenu-fullwidth-list ">
                      <h4 className="tp-megamenu-fullwidth-title">
                        {pd.title}
                      </h4>
                      <div className="tp-megamenu-fullwidth-list-wrap">
                        <div className="row">
                          <div className="col-xl-6 col-12">
                            <ul>
                              {pd.dropdown_menus.slice(0, 6).map((sm) => (
                                <li key={sm.id}>
                                  <Link href={sm.link}>{sm.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-xl-6 col-12">
                            <ul>
                              {pd.dropdown_menus.slice(6).map((sm) => (
                                <li key={sm.id}>
                                  <Link href={sm.link}>{sm.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12">
          <div className="tp-megamenu-fullwidth-item-wrap d-none d-xl-block">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-megamenu-fullwidth-item d-flex justify-content-between align-items-center mb-8">
                  <div className="tp-megamenu-fullwidth-content blue">
                    <h4 className="tp-megamenu-fullwidth-content-title">
                      Online <br /> Learning Platforms
                    </h4>
                    <Link className="tp-btn" href="/course-with-filter">
                      All Course{" "}
                      <span>
                        <RightSmArrow />
                      </span>
                    </Link>
                  </div>
                  <div className="tp-megamenu-fullwidth-content-thumb">
                    <Image src={menu_shape_1} alt="menu-shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tp-megamenu-fullwidth-item bg d-flex justify-content-between align-items-center">
                  <div className="tp-megamenu-fullwidth-content">
                    <h4 className="tp-megamenu-fullwidth-content-title">
                      Accelerated <br /> Degree Programs
                    </h4>
                    <Link className="tp-btn" href="/university-program">
                      All Programs{" "}
                      <span>
                        <RightSmArrow />
                      </span>
                    </Link>
                  </div>
                  <div className="tp-megamenu-fullwidth-content-thumb">
                    <Image src={menu_shape_2} alt="menu-shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
