import Link from "next/link";
import shape from '@/assets/img/menu/menu-shape-3.png';
import { ICourseDP } from "@/types/menu-d-t";
import Image from "next/image";

type IProps = {
  course_dropdown: ICourseDP[];
};

export default function NavCourseDropdown({ course_dropdown }: IProps) {
  return (
    <div className="megamenu-demo-courses p-relative">
      <div className="tp-megamenu-courses-content">
        <div className="row tp-gx-50">
          {course_dropdown.map((cm) => (
            <div key={cm.id} className="col-xl-6">
              <div className="tp-megamenu-courses-list">
                <h4 className="tp-megamenu-courses-title">{cm.title}</h4>
                {cm.dropdown_menus.map((dm) => (
                  <Link key={dm.id} href={dm.link}>
                    {dm.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tp-megamenu-courses-wrap d-none d-xl-block">
        <h4 className="tp-megamenu-courses-wrap-title">Developer hub</h4>
        <p>Start building fast, with code samples and more</p>
        <div className="tp-megamenu-courses-thumb">
          <Image src={shape} alt="shape" />
        </div>
      </div>
    </div>
  );
}
