import { IMenu, IMenuDT2 } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    title: "Accueil",
    link: "#",
  },
  {
    id: 2,
    title: "Bourses",
    link: "#",
  },
  {
    id: 3,
    title: "Admissions",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "Comment postuler", link: "/university-apply" },
      { id: 2, title: "Dates et délais", link: "/university-deadlines" },
      { id: 3, title: "Lancer l'accompagnement", link: "/university-application-form" },
    ],
  },
];

export default menu_data;

// menu data 2
export const menu_data_2: IMenuDT2[] = [
  {
    id: 1,
    title: "Home",
    link: "#",
    home_dropdown: [
      {
        id: 1,
        title: "University Classic",
        link: "/",
        img: "/assets/img/menu/home-1.jpg",
      },
      {
        id: 2,
        title: "Online Course",
        link: "/home-online-course",
        img: "/assets/img/menu/home-2.jpg",
      },
      {
        id: 3,
        title: "Kids Education",
        link: "/home-kids-education",
        img: "/assets/img/menu/home-3.jpg",
      },
      {
        id: 4,
        title: "Gym Coaching",
        link: "/home-gym-coaching",
        img: "/assets/img/menu/home-4.jpg",
      },
      {
        id: 5,
        title: "High School",
        link: "/home-high-school",
        img: "/assets/img/menu/home-5.jpg",
      },
      {
        id: 6,
        title: "Books Shop",
        link: "/home-books-shop",
        img: "/assets/img/menu/shop.jpg",
      },
      {
        id: 7,
        title: "Coming Soon",
        link: "#",
        img: "/assets/img/menu/coming-soon-1.jpg",
      },
      {
        id: 8,
        title: "Coming Soon",
        link: "#",
        img: "/assets/img/menu/coming-soon-2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Academics",
    link: "#",
    academic_dropdown: [
      {
        id: 1,
        title: "Academics",
        dropdown_menus: [
          { id: 1, title: "Overview", link: "/university-about" },
          { id: 2, title: "Undergraduate", link: "/university-program" },
          { id: 3, title: "Graduate Program", link: "/university-program" },
          { id: 4, title: "Off-campus learning", link: "/course-categories" },
          { id: 5, title: "Online Education", link: "/course-categories" },
          { id: 6, title: "Schools", link: "/university-program" },
        ],
      },
      {
        id: 2,
        title: "Admission",
        dropdown_menus: [
          {
            id: 1,
            title: "Admission Overview",
            link: "/university-admission-overview",
          },
          { id: 2, title: "How to Apply", link: "/university-apply" },
          { id: 3, title: "Tuition & Fees", link: "/university-tuition-fees" },
          { id: 4, title: "Financial Aid", link: "/university-financial" },
          { id: 5, title: "Dates & Deadlines", link: "/university-deadlines" },
          { id: 6, title: "Schedule a Tour", link: "/university-schedule" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Courses",
    link: "#",
    course_dropdown: [
      {
        id: 1,
        title: "Course Layout",
        dropdown_menus: [
          { id: 1, title: "Course Categories", link: "/course-categories" },
          { id: 2, title: "Course With Filter", link: "/course-with-filter" },
          { id: 3, title: "Course Open Filter", link: "/course-open-filter" },
          { id: 4, title: "Course with Tab", link: "/course-with-tab" },
          {
            id: 5,
            title: "Course with Tab List",
            link: "/course-with-tab-list",
          },
          { id: 6, title: "Course Column Two", link: "/course-column-2" },
        ],
      },
      {
        id: 2,
        title: "Course Layout",
        dropdown_menus: [
          { id: 1, title: "Course With Sidebar", link: "/course-with-sidebar" },
          { id: 2, title: "Course Details", link: "/course-details/1" },
          { id: 3, title: "Course Details Two", link: "/course-details-2/1" },
          { id: 4, title: "Course Lesson", link: "/course-lesson", new: true },
          {
            id: 5,
            title: "Create Course",
            link: "/dashboard/create-new-course",
            new: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Dashboard",
    link: "#",
    dashboard_dropdown: [
      {
        id: 1,
        title: "Instructor Dashboard",
        link: "#",
        dropdown_menus: [
          {
            id: 1,
            title: "Dashboard",
            link: "/dashboard/instructor-dashboard",
          },
          { id: 2, title: "Profile", link: "/dashboard/instructor-profile" },
          {
            id: 3,
            title: "Enrolled Courses",
            link: "/dashboard/instructor-enroll-course",
          },
          { id: 4, title: "Wishlist", link: "/dashboard/instructor-wishlist" },
          { id: 5, title: "Reviews", link: "/dashboard/instructor-reviews" },
          {
            id: 6,
            title: "My Quiz Attempts",
            link: "/dashboard/instructor-quiz-attempts",
          },
          {
            id: 7,
            title: "Order History",
            link: "/dashboard/instructor-order",
          },
          {
            id: 8,
            title: "My Course",
            link: "/dashboard/instructor-my-course",
          },
          {
            id: 9,
            title: "Announcements",
            link: "/dashboard/instructor-announcements",
          },
          {
            id: 10,
            title: "Quiz Attempts",
            link: "/dashboard/instructor-quiz",
          },
          {
            id: 11,
            title: "Assignments",
            link: "/dashboard/instructor-assignment",
          },
          {
            id: 12,
            title: "Settings",
            link: "/dashboard/instructor-setting-profile",
          },
        ],
      },
      {
        id: 2,
        title: "Student Dashboard",
        link: "#",
        dropdown_menus: [
          { id: 1, title: "Dashboard", link: "/dashboard/student-dashboard" },
          { id: 2, title: "Profile", link: "/dashboard/student-profile" },
          {
            id: 3,
            title: "Enrolled Courses",
            link: "/dashboard/student-enroll-course",
          },
          { id: 4, title: "Wishlist", link: "/dashboard/student-wishlist" },
          { id: 5, title: "Reviews", link: "/dashboard/student-reviews" },
          {
            id: 6,
            title: "My Quiz Attempts",
            link: "/dashboard/student-my-quiz",
          },
          {
            id: 7,
            title: "Settings",
            link: "/dashboard/student-setting-profile",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Pages",
    link: "#",
    pages_dropdown: [
      {
        id: 1,
        title: "About",
        dropdown_menus: [
          { id: 1, title: "About Us", link: "/about" },
          { id: 2, title: "University About", link: "/university-about" },
          { id: 3, title: "Campus", link: "/university-campus" },
          { id: 4, title: "Mission & Values", link: "/university-mission" },
          { id: 5, title: "History", link: "/university-history" },
          { id: 6, title: "Our Leadership", link: "/university-leadership" },
        ],
      },
      {
        id: 2,
        title: "Get Started",
        dropdown_menus: [
          { id: 1, title: "Events", link: "/event" },
          { id: 2, title: "Event Details", link: "/event-details/1" },
          { id: 3, title: "Instructor", link: "/instructor" },
          { id: 4, title: "Profile", link: "/my-profile" },
          { id: 5, title: "Become a Instructor", link: "/become-instructor" },
          { id: 6, title: "Maintenance", link: "/up-coming" },
          { id: 7, title: "Contact Us", link: "/contact" },
          { id: 8, title: "Membership plans", link: "/membership-plans" },
          { id: 9, title: "FAQs", link: "/faq" },
          { id: 10, title: "Privacy Policy", link: "/privacy-policy" },
          { id: 11, title: "404 Page", link: "/not-found" },
        ],
      },
      {
        id: 3,
        title: "Shop",
        dropdown_menus: [
          { id: 1, title: "Shop", link: "/shop-grid" },
          { id: 2, title: "Single Product", link: "/shop-details/1" },
          { id: 3, title: "Cart Page", link: "/cart" },
          { id: 4, title: "Wishlist page", link: "/wishlist" },
          { id: 5, title: "My Account", link: "/my-account" },
          { id: 6, title: "Login & Register", link: "/login" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Blog",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "Blog 3 Column", link: "/blog-stories" },
      { id: 2, title: "Blog Grid Sidebar", link: "/blog-stories-sidebar" },
      { id: 3, title: "Blog List Sidebar", link: "/blog-list" },
      { id: 4, title: "Blog Standard", link: "/blog-standard" },
      { id: 5, title: "Blog Details", link: "/blog-details/1" },
      {
        id: 6,
        title: "Blog Details Full Width",
        link: "/blog-details-full-width/1",
      },
    ],
  },
];
