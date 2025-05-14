import Link from "next/link";
import { menu_data_2 } from "@/data/menu-data";
import NavHomeDropdown from "./dropdown/nav-home-dropdown";
import NavPagesDropdown from "./dropdown/nav-pages-dropdown";
import NavAcademicDropdown from "./dropdown/nav-academic-dropdown";
import NavCourseDropdown from "./dropdown/nav-course-dropdown";

export default function NavbarMenusTwo() {
  return (
    <nav className="tp-main-menu-content">
      <ul>
        {menu_data_2.map((menu) => (
          <li
            key={menu.id}
            className={`has-dropdown ${
              menu.home_dropdown ||
              menu.academic_dropdown ||
              menu.course_dropdown ||
              menu.pages_dropdown
                ? "tp-static"
                : ""
            }`}
          >
            <Link href={menu.link}>{menu.title}</Link>

            {menu.home_dropdown && (
              <div className="tp-megamenu-main tp-megamenu-container">
                <NavHomeDropdown home_dropdown={menu.home_dropdown} />
              </div>
            )}

            {menu.academic_dropdown && (
              <div className="tp-megamenu-main tp-megamenu-academics">
                <NavAcademicDropdown academic_dropdown={menu.academic_dropdown} />
              </div>
            )}

            {menu.course_dropdown && (
              <div className="tp-megamenu-main tp-megamenu-courses">
                <NavCourseDropdown course_dropdown={menu.course_dropdown} />
              </div>
            )}

            {menu.dashboard_dropdown && (
              <ul className="tp-submenu">
                {menu.dashboard_dropdown.map((dpm) => (
                  <li key={dpm.id} className="has-dropdown">
                    <Link href={dpm.link}>{dpm.title}</Link>
                    <ul className="tp-submenu">
                      {dpm.dropdown_menus.map((dm) => (
                        <li key={dm.id}>
                          <Link href={dm.link}>{dm.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}

            {menu.pages_dropdown && (
              <div className="tp-megamenu-main tp-megamenu-fullwidth">
                <NavPagesDropdown pages_dropdown={menu.pages_dropdown} />
              </div>
            )}

            {menu.dropdown_menus && (
              <ul className="tp-submenu">
                {menu.dropdown_menus.map((dm) => (
                  <li key={dm.id}>
                    <Link href={dm.link}>{dm.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
