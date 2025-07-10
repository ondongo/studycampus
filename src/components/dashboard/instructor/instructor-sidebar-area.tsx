'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DashboardSvg } from "@/components/svg";
import { AnalyticSvg, AnnouncementSvg, AssignmentSvg, BundleSvg, CalenderSvg, CertificateSvg, CourseSvg, EnrolledCourseSvg, LogoutSvg, OrderHistorySvg, ProfileSvg, QuestionAnswerSvg, QuizAttemptsSvg, QuizAttemptsTwoSvg, ReviewSvg, SettingSvg, WishlistSvg, WithdrawalSvg } from "@/components/svg/dashboard-icons";
import user_banner from "@/assets/img/dashboard/icon/menu/menu-shape.png";

// dashboard menu data
const dashboardMenuData = [
	{
		section: "Welcome", items: [
			{ title: "Dashboard", icon: <DashboardSvg />, href: "/dashboard/instructor-dashboard"},
			{ title: "My Profile", icon: <ProfileSvg />, href: "/dashboard/instructor-profile" },
			{ title: "Enrolled Courses", icon: <EnrolledCourseSvg />, href: "/dashboard/instructor-enroll-course" },
			{ title: "Wishlist", icon: <WishlistSvg />, href: "/dashboard/instructor-wishlist" },
			{ title: "Reviews", icon: <ReviewSvg />, href: "/dashboard/instructor-reviews" },
			{ title: "My Quiz Attempts", icon: <QuizAttemptsSvg />, href: "/dashboard/instructor-my-quiz" },
			{ title: "Order History", icon: <OrderHistorySvg />, href: "/dashboard/instructor-order" },
			{ title: "Question & Answer", icon: <QuestionAnswerSvg />, href: "/dashboard/instructor-question-answer" },
			{ title: "Calendar", icon: <CalenderSvg />, href: "/dashboard/instructor-calender" }
		]
	},
	{
		section: "INSTRUCTOR", items: [
			{ title: "My Courses", icon: <CourseSvg />, href: "/dashboard/instructor-my-course" },
			{ title: "My Bundles", icon: <BundleSvg />, href: "/dashboard/instructor-my-bundle" },
			{ title: "Announcements", icon: <AnnouncementSvg />, href: "/dashboard/instructor-announcements" },
			{ title: "Withdrawals", icon: <WithdrawalSvg />, href: "/dashboard/instructor-withdrawal" },
			{ title: "Quiz Attempts", icon: <QuizAttemptsTwoSvg />, href: "/dashboard/instructor-quiz" },
			{ title: "Assignments", icon: <AssignmentSvg />, href: "/dashboard/instructor-assignment" },
			{ title: "Certificate", icon: <CertificateSvg />, href: "/dashboard/instructor-certificate" },
			{ title: "Analytics", icon: <AnalyticSvg />, href: "/dashboard/instructor-analytics-overview" }
		]
	},
	{
		section: "User", items: [
			{ title: "Settings", icon: <SettingSvg />, href: "/dashboard/instructor-setting-profile" },
			{ title: "Logout", icon: <LogoutSvg />, href: "/" }
		]
	}
];

export default function InstructorDashboardSidebar() {
	const pathname = usePathname();
	return (
		<div className="tpd-user-sidebar">
			<div className="tp-user-wrap">
				<div className="tp-user-menu">
					<nav>
						<ul>
							{dashboardMenuData.map((menuSection, i) => (
								<React.Fragment key={i}>
									<li className={`tp-user-menu-title ${i!==0?"space-gap":""}`}>
										{menuSection.section}
									</li>
									<ul>
										{menuSection.items.map((item, index) => (
											<li key={index}>
												<Link className={item.href === pathname ? "active" : ""} href={item.href}>
													<span>{item.icon}</span>
													{item.title}
												</Link>
											</li>
										))}
									</ul>
								</React.Fragment>
							))}
						</ul>
					</nav>
				</div>
				<div className="tp-user-banner d-flex align-items-center">
					<div className="tp-user-banner-text">
						<h4 className="tp-user-banner-title">Online Education</h4>
						<div className="tp-user-banner-btn">
							<a className="tp-btn-course" href="instructor-my-course">View Course</a>
						</div>
					</div>
					<div className="tp-user-banner-shape">
						<Image src={user_banner} alt="user-banner" />
					</div>
				</div>
			</div>
		</div>
	)
}
