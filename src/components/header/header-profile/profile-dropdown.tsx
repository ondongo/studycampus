'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  DashboardSvg,
  EnrollmentSvg,
  LogoutSvg,
  OrderSvg,
  QuestionSvg,
  QuizSvg,
  ReviewSvg,
  SettingSvg,
  UserSvg,
  UserSvgThree,
  WishlistSvg,
} from "@/components/svg";
import user_img from '@/assets/img/event/user.jpg';

type ListItem =
  | { link: string; icon: JSX.Element; label: string; isDivider?: false }
  | { isDivider: true };

const listData: ListItem[] = [
  { link: "/dashboard/instructor-dashboard", icon: <DashboardSvg />, label: "My Dashboard" },
  { link: "/dashboard/instructor-profile", icon: <UserSvg />, label: "My Profile" },
  { link: "/dashboard/instructor-enroll-course", icon: <EnrollmentSvg />, label: "Enrolled Courses" },
  { link: "/dashboard/instructor-wishlist", icon: <WishlistSvg />, label: "Wishlist" },
  { link: "/dashboard/instructor-reviews", icon: <ReviewSvg />, label: "Reviews" },
  { link: "/dashboard/instructor-quiz-attempts", icon: <QuizSvg />, label: "My Quiz Attempts" },
  { link: "/dashboard/instructor-order", icon: <OrderSvg />, label: "Order History" },
  { link: "/dashboard/instructor-announcements", icon: <QuestionSvg />, label: "Question & Answer" },
  { isDivider: true },
  { link: "/dashboard/instructor-setting-profile", icon: <SettingSvg />, label: "Settings" },
  { link: "/login", icon: <LogoutSvg />, label: "Logout" },
];

type IProps = {
  top_cls?: string;
  user_icon?:boolean;
}

export default function ProfileDropdown({top_cls="tp-header-inner-login",user_icon}: IProps) {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className={`${top_cls} tp-header-user-hover ${openDropdown ? "active" : ""}`}>
      <button onClick={() => setOpenDropdown(!openDropdown)}>
        {user_icon ? <span><UserSvgThree/></span> : <Image src={user_img} alt="user" />}
      </button>
      <div className="tp-header-user-box">
        <div className="tp-header-user-content">
          <div className="tp-header-user-profile d-flex align-items-center">
            <div className="tp-header-user-profile-thumb">
              <Image src={user_img} alt="user" />
            </div>
            <div className="tp-header-user-profile-content">
              <h4>Floyd Miles</h4>
              <span>Founder</span>
            </div>
          </div>

          <div className="tp-header-user-list">
            <ul>
              {listData.map((item, index) => (
                item.isDivider ? (
                  <li key={`divider-${index}`} className="hr-border"></li>
                ) : (
                  <li key={index}>
                    <Link href={item.link}>
                      <span>{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
