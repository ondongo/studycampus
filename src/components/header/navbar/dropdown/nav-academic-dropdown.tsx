import Link from "next/link";
import { RightArrowTwo } from "@/components/svg";
import { IAcademicDP } from "@/types/menu-d-t";
import shape from "@/assets/img/menu/menu-shape.png";
import shape_2 from "@/assets/img/menu/menu-shape-2.png";
import Image from "next/image";

type IProps = {
  academic_dropdown: IAcademicDP[];
};

export default function NavAcademicDropdown({ academic_dropdown }: IProps) {
  return (
      <div className="megamenu-demo-academics p-relative">
        <div className="tp-megamenu-academics-border">
          <div className="row tp-gx-50">
            {academic_dropdown.map((dp) => (
              <div key={dp.id} className="col-xl-3 col-12">
                <div className="tp-megamenu-academics-list">
                  <h4 className="tp-megamenu-academics-title">{dp.title}</h4>
                  {dp.dropdown_menus.map((dm) => (
                    <Link key={dm.id} href={dm.link}>
                      {dm.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="col-xl-6 col-12">
              <div className="tp-megamenu-academics-banner p-relative d-none d-xl-block">
                <h4 className="tp-megamenu-academics-banner-title">Alumni</h4>
                <Image src={shape_2} alt="shape" />
                <p>
                  Everything that I learned at <br />
                  Kempbelle University really <br />
                  helped put me above the <br />
                  competition in the field <br />
                  of Computer Science.
                </p>
                <a href="#">
                  Our Alumni{" "}
                  <span>
                    <RightArrowTwo clr="currentColor" />
                  </span>
                </a>
                <div className="tp-megamenu-academics-banner-shape">
                  <Image src={shape} alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-none d-xl-block">
            <div className="tp-megamenu-academics-btns text-center">
              <Link href="/university-request-info">Request Info</Link>
              <Link className="active" href="/university-application-form">
                Apply Now
              </Link>
              <Link href="/university-schedule">Visit University</Link>
            </div>
          </div>
        </div>
      </div>
  );
}
