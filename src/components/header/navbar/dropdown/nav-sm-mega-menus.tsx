import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IDropdownMenus } from '@/types/menu-d-t';
import cta_shape from "@/assets/img/cta/menu-cta-shape.png";

type IProps = {
    dropdown_menus: IDropdownMenus[];
}

export default function NavSmMegaMenus({dropdown_menus}: IProps) {
  return (
    <div className="megamenu-demo-small p-relative">
    <div className="tp-megamenu-small-content">
      <div className="row tp-gx-50">
        <div className="col-xl-6">
          <div className="tp-megamenu-list">
            {dropdown_menus.slice(0, 4).map((dm) => (
              <Link key={dm.id} href={dm.link}>
                {dm.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-xl-6">
          <div className="tp-megamenu-list">
            {dropdown_menus.slice(4).map((dm) => (
              <Link key={dm.id} href={dm.link}>
                {dm.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="tp-megamenu-small-cta-wrap d-none d-xl-block">
      <div className="row">
        <div className="col-xl-12">
          <div className="tp-megamenu-small-cta d-flex">
            <div className="tp-megamenu-small-cta-thumb">
              <Image src={cta_shape} alt="cta-shape" />
            </div>
            <h4 className="tp-megamenu-small-cta-title">
              
            </h4>
            <div className="tp-megamenu-small-cta-btn">
              <Link
                className="tp-btn"
                href="/university-application-form"
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
