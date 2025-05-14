import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IHomeDropdown } from "@/types/menu-d-t";

type IProps = {
  home_dropdown: IHomeDropdown[];
};

export default function NavHomeDropdown({ home_dropdown }: IProps) {
  return (
    <div className="megamenu-demo-conteiner p-relative">
      <div className="row tp-gx-20">
        {home_dropdown.map((hm_m) => (
          <div key={hm_m.id} className="col-xl-3 col-md-6 col-12">
            <div className="tp-megamenu-home-item text-center p-relative mb-30">
              <div className="tp-megamenu-home-thumb">
                <Link href={hm_m.link}>
                  <Image
                    src={hm_m.img}
                    alt={hm_m.title}
                    width={270}
                    height={170}
                  />
                </Link>
              </div>
              <h4 className="tp-megamenu-home-title">
                <Link className="red" href={hm_m.link}>
                  {hm_m.title}
                </Link>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
