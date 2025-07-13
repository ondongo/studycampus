import { IMenu, IMenuDT2 } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    title: "menu.admissions",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "menu.how_to_apply", link: "/university-apply" },
      { id: 2, title: "menu.dates_deadlines", link: "/university-deadlines" },
      { id: 3, title: "menu.start_support", link: "/university-application-form" },
    ],
  },
];
export default menu_data;

// menu data 2
export const menu_data_2: IMenuDT2[] = [
  {
    id: 1,
    title: "menu.home",
    link: "#",
    home_dropdown: [
      {
        id: 1,
        title: "menu.university_classic",
        link: "/",
        img: "/assets/img/menu/home-1.jpg",
      },
      {
        id: 2,
        title: "menu.online_course",
        link: "/home-online-course",
        img: "/assets/img/menu/home-2.jpg",
      },
      {
        id: 3,
        title: "menu.kids_education",
        link: "/home-kids-education",
        img: "/assets/img/menu/home-3.jpg",
      },
      {
        id: 4,
        title: "menu.gym_coaching",
        link: "/home-gym-coaching",
        img: "/assets/img/menu/home-4.jpg",
      },
      {
        id: 5,
        title: "menu.high_school",
        link: "/home-high-school",
        img: "/assets/img/menu/home-5.jpg",
      },
      {
        id: 6,
        title: "menu.books_shop",
        link: "/home-books-shop",
        img: "/assets/img/menu/shop.jpg",
      },
      {
        id: 7,
        title: "menu.coming_soon",
        link: "#",
        img: "/assets/img/menu/coming-soon-1.jpg",
      },
      {
        id: 8,
        title: "menu.coming_soon",
        link: "#",
        img: "/assets/img/menu/coming-soon-2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "menu.academics",
    link: "#",
    academic_dropdown: [
      {
        id: 1,
        title: "menu.academics",
        dropdown_menus: [
          { id: 1, title: "menu.overview", link: "/university-about" },
          { id: 2, title: "menu.undergraduate", link: "/university-program" },
          { id: 3, title: "menu.graduate_program", link: "/university-program" },
          { id: 4, title: "menu.off_campus_learning", link: "/course-categories" },
          { id: 5, title: "menu.online_education", link: "/course-categories" },
          { id: 6, title: "menu.schools", link: "/university-program" },
        ],
      },
      {
        id: 2,
        title: "menu.admission",
        dropdown_menus: [
          {
            id: 1,
            title: "menu.admission_overview",
            link: "/university-admission-overview",
          },
          { id: 2, title: "menu.how_to_apply", link: "/university-apply" },
          { id: 3, title: "menu.tuition_fees", link: "/university-tuition-fees" },
          { id: 4, title: "menu.financial_aid", link: "/university-financial" },
          { id: 5, title: "menu.dates_deadlines", link: "/university-deadlines" },
          { id: 6, title: "menu.schedule_tour", link: "/university-schedule" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "menu.courses",
    link: "#",
    course_dropdown: [
      {
        id: 1,
        title: "menu.course_layout",
        dropdown_menus: [
          { id: 1, title: "menu.course_categories", link: "/course-categories" },
          { id: 2, title: "menu.course_with_filter", link: "/course-with-filter" },
          { id: 3, title: "menu.course_open_filter", link: "/course-open-filter" },
          { id: 4, title: "menu.course_with_tab", link: "/course-with-tab" },
          {
            id: 5,
            title: "menu.course_with_tab_list",
            link: "/course-with-tab-list",
          },
          { id: 6, title: "menu.course_column_two", link: "/course-column-2" },
        ],
      },
      {
        id: 2,
        title: "menu.course_layout",
        dropdown_menus: [
          { id: 1, title: "menu.course_with_sidebar", link: "/course-with-sidebar" },
          { id: 2, title: "menu.course_details", link: "/course-details/1" },
          { id: 3, title: "menu.course_details_two", link: "/course-details-2/1" },
          { id: 4, title: "menu.course_lesson", link: "/course-lesson", new: true },
          {
            id: 5,
            title: "menu.create_course",
            link: "/dashboard/create-new-course",
            new: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "menu.dashboard",
    link: "#",
    dashboard_dropdown: [
      {
        id: 1,
        title: "menu.instructor_dashboard",
        link: "#",
        dropdown_menus: [
          {
            id: 1,
            title: "menu.dashboard",
            link: "/dashboard/instructor-dashboard",
          },
          { id: 2, title: "menu.profile", link: "/dashboard/instructor-profile" },
          {
            id: 3,
            title: "menu.enrolled_courses",
            link: "/dashboard/instructor-enroll-course",
          },
          { id: 4, title: "menu.wishlist", link: "/dashboard/instructor-wishlist" },
          { id: 5, title: "menu.reviews", link: "/dashboard/instructor-reviews" },
          {
            id: 6,
            title: "menu.my_quiz_attempts",
            link: "/dashboard/instructor-quiz-attempts",
          },
          {
            id: 7,
            title: "menu.order_history",
            link: "/dashboard/instructor-order",
          },
          {
            id: 8,
            title: "menu.my_course",
            link: "/dashboard/instructor-my-course",
          },
          {
            id: 9,
            title: "menu.announcements",
            link: "/dashboard/instructor-announcements",
          },
          {
            id: 10,
            title: "menu.quiz_attempts",
            link: "/dashboard/instructor-quiz",
          },
          {
            id: 11,
            title: "menu.assignments",
            link: "/dashboard/instructor-assignment",
          },
          {
            id: 12,
            title: "menu.settings",
            link: "/dashboard/instructor-setting-profile",
          },
        ],
      },
      {
        id: 2,
        title: "menu.student_dashboard",
        link: "#",
        dropdown_menus: [
          { id: 1, title: "menu.dashboard", link: "/dashboard/student-dashboard" },
          { id: 2, title: "menu.profile", link: "/dashboard/student-profile" },
          {
            id: 3,
            title: "menu.enrolled_courses",
            link: "/dashboard/student-enroll-course",
          },
          { id: 4, title: "menu.wishlist", link: "/dashboard/student-wishlist" },
          { id: 5, title: "menu.reviews", link: "/dashboard/student-reviews" },
          {
            id: 6,
            title: "menu.my_quiz_attempts",
            link: "/dashboard/student-my-quiz",
          },
          {
            id: 7,
            title: "menu.settings",
            link: "/dashboard/student-setting-profile",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "menu.pages",
    link: "#",
    pages_dropdown: [
      {
        id: 1,
        title: "menu.about",
        dropdown_menus: [
          { id: 1, title: "menu.about_us", link: "/about" },
          { id: 2, title: "menu.university_about", link: "/university-about" },
          { id: 3, title: "menu.campus", link: "/university-campus" },
          { id: 4, title: "menu.mission_values", link: "/university-mission" },
          { id: 5, title: "menu.history", link: "/university-history" },
          { id: 6, title: "menu.our_leadership", link: "/university-leadership" },
        ],
      },
      {
        id: 2,
        title: "menu.get_started",
        dropdown_menus: [
          { id: 1, title: "menu.events", link: "/event" },
          { id: 2, title: "menu.event_details", link: "/event-details/1" },
          { id: 3, title: "menu.instructor", link: "/instructor" },
          { id: 4, title: "menu.profile", link: "/my-profile" },
          { id: 5, title: "menu.become_instructor", link: "/become-instructor" },
          { id: 6, title: "menu.maintenance", link: "/up-coming" },
          { id: 7, title: "menu.contact_us", link: "/contact" },
          { id: 8, title: "menu.membership_plans", link: "/membership-plans" },
          { id: 9, title: "menu.faqs", link: "/faq" },
          { id: 10, title: "menu.privacy_policy", link: "/privacy-policy" },
          { id: 11, title: "menu.404_page", link: "/not-found" },
        ],
      },
      {
        id: 3,
        title: "menu.shop",
        dropdown_menus: [
          { id: 1, title: "menu.shop", link: "/shop-grid" },
          { id: 2, title: "menu.single_product", link: "/shop-details/1" },
          { id: 3, title: "menu.cart_page", link: "/cart" },
          { id: 4, title: "menu.wishlist_page", link: "/wishlist" },
          { id: 5, title: "menu.my_account", link: "/my-account" },
          { id: 6, title: "menu.login_register", link: "/login" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "menu.blog",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "menu.blog_3_column", link: "/blog-stories" },
      { id: 2, title: "menu.blog_grid_sidebar", link: "/blog-stories-sidebar" },
      { id: 3, title: "menu.blog_list_sidebar", link: "/blog-list" },
      { id: 4, title: "menu.blog_standard", link: "/blog-standard" },
      { id: 5, title: "menu.blog_details", link: "/blog-details/1" },
      {
        id: 6,
        title: "menu.blog_details_full_width",
        link: "/blog-details-full-width/1",
      },
    ],
  },
];
