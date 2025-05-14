export type IPagesDropdown = {
  id: number;
  title: string;
  dropdown_menus: {
    id: number;
    title: string;
    link: string;
  }[];
};

export type IHomeDropdown = {
  id: number;
  title: string;
  link: string;
  img: string;
};

export type IDropdownMenus = {
  id: number;
  title: string;
  link: string;
  new?: boolean;
};

export type IMenu = {
  id: number;
  title: string;
  link: string;
  home_dropdown?: IHomeDropdown[];
  dropdown_menus?: IDropdownMenus[];
  sm_mega_menus?: IDropdownMenus[];
  pages_dropdown?: IPagesDropdown[];
};




export type ICourseDP = {
  id: number;
  title: string;
  dropdown_menus:IDropdownMenus[];
}
export type IAcademicDP = {
  id: number;
  title: string;
  dropdown_menus:IDropdownMenus[];
}
export type IDashboardDP = {
  id: number;
  title: string;
  link: string;
  dropdown_menus:IDropdownMenus[];
}
// menu data type 2
export type IMenuDT2 = {
  id: number;
  title: string;
  link: string;
  home_dropdown?: IHomeDropdown[];
  academic_dropdown?:IAcademicDP[];
  course_dropdown?:ICourseDP[];
  dashboard_dropdown?:IDashboardDP[];
  pages_dropdown?: IPagesDropdown[];
  dropdown_menus?: IDropdownMenus[];
}
