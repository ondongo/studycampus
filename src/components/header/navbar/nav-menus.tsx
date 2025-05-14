import React from "react";
import Link from "next/link";
import menu_data from "@/data/menu-data";
import NavPagesDropdown from "./dropdown/nav-pages-dropdown";
import NavHomeDropdown from "./dropdown/nav-home-dropdown";
import NavSmMegaMenus from "./dropdown/nav-sm-mega-menus";

// prop type 
type IProps = {
  sm_mega_title?: string;
}

export default function NavMenus({sm_mega_title}: IProps) {
  return (
    <nav className="tp-main-menu-content">
      <ul>
        {menu_data.map((menu) => (
          <li
            key={menu.id}
            className={`has-dropdown ${
              menu.home_dropdown || menu.pages_dropdown ? "tp-static" : ""
            }`}
          >
            <Link href={menu.link}>
              {menu.sm_mega_menus && sm_mega_title ? sm_mega_title : menu.title}
            </Link>

            {menu.home_dropdown && (
              <div className="tp-megamenu-main tp-megamenu-container">
                <NavHomeDropdown home_dropdown={menu.home_dropdown} />
              </div>
            )}

            {menu.sm_mega_menus && (
              <div className="tp-megamenu-main tp-megamenu-small">
                <NavSmMegaMenus dropdown_menus={menu.sm_mega_menus} />
              </div>
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
