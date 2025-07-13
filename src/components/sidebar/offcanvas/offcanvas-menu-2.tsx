import Link from "next/link";
import { useState } from "react";
import { menu_data_2 } from "@/data/menu-data";
import NavAcademicDropdown from "@/components/header/navbar/dropdown/nav-academic-dropdown";
import NavPagesDropdown from "@/components/header/navbar/dropdown/nav-pages-dropdown";
import NavCourseDropdown from "@/components/header/navbar/dropdown/nav-course-dropdown";
import NavHomeDropdown from "@/components/header/navbar/dropdown/nav-home-dropdown";
import { useTranslations } from "next-intl";


export default function OffcanvasMenuTwo() {
   const [subMenu, setSubMenu] = useState("");
   const [navTitle, setNavTitle] = useState("");
   const t = useTranslations();
   
   //openMobileMenu
   const openMobileMenu = (menu: string) => {
      if (navTitle === menu) {
         setNavTitle("");
      } else {
         setNavTitle(menu);
      }
      setSubMenu("");
   };
   // openSubMobileMenu
   const openSubMobileMenu = (s_menu: string) => {
      if (subMenu === s_menu) {
         setSubMenu("");
      } else {
         setSubMenu(s_menu);
      }
   };
   return (
      <>
         <div className="tp-main-menu-mobile d-xl-none">
            <nav className="tp-main-menu-content">
               <ul className="dropdown-opened">
                  {menu_data_2.map((menu) => (
                     <li key={menu.id} className={`has-dropdown ${menu.home_dropdown || menu.academic_dropdown || menu.course_dropdown || menu.pages_dropdown ? "tp-static" : ""} ${navTitle === menu.title ? "dropdown-opened expanded" : ""}`}>
                        <Link href={menu.link} className={`${menu.home_dropdown || menu.pages_dropdown ? "tp-static" : ""}`}>
                           {t(menu.title)} <button onClick={() => openMobileMenu(menu.title)} className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}></button>
                        </Link>

                        {menu.home_dropdown && (
                           <div className="tp-megamenu-main" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                              <NavHomeDropdown home_dropdown={menu.home_dropdown} />
                           </div>
                        )}

                        {menu.academic_dropdown && (
                           <div className="tp-megamenu-main" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                              <NavAcademicDropdown academic_dropdown={menu.academic_dropdown} />
                           </div>
                        )}

                        {menu.course_dropdown && (
                           <div className="tp-megamenu-main tp-megamenu-courses" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                              <NavCourseDropdown course_dropdown={menu.course_dropdown} />
                           </div>
                        )}

                        {menu.dashboard_dropdown && (
                           <ul className={`tp-submenu ${navTitle === menu.title ? "dropdown-opened" : ""}`} style={{ display: navTitle === menu.title ? "block" : "none" }}>
                              {menu.dashboard_dropdown.map((dpm) => (
                                 <li key={dpm.id} className={`has-dropdown ${dpm.title === subMenu ? "dropdown-opened expanded" : ""}`}>
                                    <Link href={dpm.link}>
                                      {t(dpm.title)} <button onClick={() => openSubMobileMenu(dpm.title)} className={`dropdown-toggle-btn ${subMenu === dpm.title ? "dropdown-opened" : ""}`}></button>
                                    </Link>
                                    <ul className="tp-submenu" style={{ display: subMenu === dpm.title ? "block" : "none" }}>
                                       {dpm.dropdown_menus.map((dm) => (
                                          <li key={dm.id}>
                                             <Link href={dm.link}>{t(dm.title)}</Link>
                                          </li>
                                       ))}
                                    </ul>
                                 </li>
                              ))}
                           </ul>
                        )}

                        {menu.pages_dropdown && (
                           <div className="tp-megamenu-main" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                              <NavPagesDropdown pages_dropdown={menu.pages_dropdown} />
                           </div>
                        )}

                        {menu.dropdown_menus && (
                           <ul className="tp-submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                              {menu.dropdown_menus.map((dm) => (
                                 <li key={dm.id}>
                                    <Link href={dm.link}>{t(dm.title)}</Link>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </>
   )
}
