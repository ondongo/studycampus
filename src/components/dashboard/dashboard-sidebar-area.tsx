'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardSvg } from "@/components/svg";
import {  AnnouncementSvg, AssignmentSvg, BundleSvg, CalenderSvg, CertificateSvg, CourseSvg, EnrolledCourseSvg, LogoutSvg, OrderHistorySvg, ProfileSvg, QuestionAnswerSvg, QuizAttemptsSvg, QuizAttemptsTwoSvg, ReviewSvg, SettingSvg, WishlistSvg, WithdrawalSvg } from "@/components/svg/dashboard-icons";

// dashboard menu data
const dashboardMenuData = [
	{
		section: "Bienvenue", items: [
			{ title: "Tableau de bord", icon: <DashboardSvg />, href: "/admin/dashboard"},
			{ title: "Mon Profil", icon: <ProfileSvg />, href: "/admin/dashboard/instructor-profile" },
			{ title: "Questions & Réponses", icon: <QuestionAnswerSvg />, href: "/admin/dashboard/instructor-question-answer" },
			{ title: "Calendrier des événements", icon: <CalenderSvg />, href: "/admin/dashboard/instructor-calender" }
		]
	},
	{
		section: "Gestion des candidatures", items: [
			{ title: "Dossiers des nouveaux bacheliers", icon: <EnrolledCourseSvg />, href: "/admin/dashboard/instructor-candidates" },
			{ title: "Annonces", icon: <AnnouncementSvg />, href: "/admin/dashboard/instructor-announcements" },
		]
	},
	{
		section: "Utilisateur", items: [
		
			{ title: "Déconnexion", icon: <LogoutSvg />, href: "/" }
		]
	}
];

export default function DashboardSidebar() {
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
	
			</div>
		</div>
	)
}
