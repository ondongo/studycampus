import type { Metadata } from "next";
import "./globals.scss";
import {Outfit,Jost,Crimson_Pro} from 'next/font/google';


const outfit_bold = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-body'
});
const outfit_heading = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-heading'
});
const outfit_p = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-p'
});
const jost_primary = Jost({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-primary'
});
const crismon_secondary = Crimson_Pro({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-secondary'
});


export const metadata: Metadata = {
  title: "Acadia - University & Online Course Next js Template",
  description: "Acadia – template is perfect for a variety of educational needs, including e-Learning, Course Schools, Online Schools, Kindergartens, Classic LMS setups, University Status pages, Instructor Portfolios, Language Academies, Gym Coaching, Online Courses, Single Courses, marketplaces, University Classics, Elegant Homepages, Technology-focused Homepages, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit_bold.variable} ${outfit_heading.variable} ${outfit_p.variable} ${jost_primary.variable} ${crismon_secondary.variable}`}>
        {children}
      </body>
    </html>
  );
}
