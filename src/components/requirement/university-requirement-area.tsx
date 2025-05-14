import Image from "next/image";
import { Email, HandCheck, TelSvg, Worksheet } from "../svg";
import course_contact_bg from '@/assets/img/history/undergraduate/course-contact-bg.png';
import Link from "next/link";


export default function UniversityRequirementArea() {
  return (
    <section className="tp-course-requrement-area grey-bg pt-100 pb-80">
        <div className="container">
        <div className="row">
            <div className="col-lg-9">
                <div className="tp-course-requrement-wrapper">
                    <div className="tp-course-requrement-heading">
                    <h3 className="tp-course-requrement-title">Degree Requirements</h3>
                    <p>The B.Sc. Program in Computer Science & Engineering (CSE) is designed to produce skilled graduates in the field to satisfy the growing demands of computer engineering graduates in the home and abroad. It provides the students an opportunity to obtain the broad knowledge of Computer Science, Computer Engineering with the freedom to tailor the program according to the students individual needs. Students are responsible for reading course descriptions when choosing classes for their self-designed major. If they choose a class that requires permissionbecause of prerequisites and/or is a course at another college within Acadia University</p>
                    <p>any of the graduate programs, they must seek permission using the proper procedures. Requesting permission is not a guarantee of being granted permission</p>
                    </div>
                    <div className="tp-course-requrement-heading-2">
                    <h3 className="tp-course-requrement-title">Major Requirements (32 units)</h3>
                    <div className="tp-course-requrement-bulet">
                        <h5 className="tp-course-requrement-bulet-title">Microeconomic Foundations (4 units)</h5>
                        <p>Students must take at least four units of coursework in this category. </p>
                        <div className="tp-course-requrement-bulet-content">
                            <p><span><HandCheck/></span> CSE-112 – Software Engineering (Theory)</p>
                            <p><span><HandCheck/></span> CSE-113 – Programming and Problem Solving (Theory & lab)</p>
                            <p><span><HandCheck/></span> CSE-114 – Data Communication (Theory)</p>
                        </div>
                    </div>
                    <div className="tp-course-requrement-bulet">
                        <h5 className="tp-course-requrement-bulet-title">Microeconomic Foundations (4 units)</h5>
                        <p>Students must take at least four units of coursework in this category. </p>
                        <div className="tp-course-requrement-bulet-content">
                            <p><span><HandCheck/></span> CSE-112 – Software Engineering (Theory)</p>
                            <p><span><HandCheck/></span> CSE-113 – Programming and Problem Solving (Theory & lab)</p>
                            <p><span><HandCheck/></span> CSE-114 – Data Communication (Theory)</p>
                        </div>
                    </div>
                    <h3 className="tp-course-requrement-title">Program Worksheets</h3>
                    <p>Here you can review useful information about Communications Studies:</p>
                    <div className="tp-course-requrement-bulet">
                        <div className="tp-course-requrement-bulet-content">
                            <p><span><Worksheet/></span> 2023 - 24 Computer Science Worksheet</p>
                            <p><span><Worksheet/></span> 2022 - 23 Computer Science Worksheet</p>
                            <p><span><Worksheet/></span> Program worksheet</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="tp-course-requrement-widget-box">
                    <div className="tp-course-requrement-widget mb-30">
                    <div className="tp-course-requrement-widget-content">
                        <Link href="/university-requirements">Degree Requirements</Link>
                        <Link href="/university-apply">How to Apply</Link>
                        <Link href="/university-leadership">Faculty & Staff</Link>
                        <Link href="/university-financial">Financial Add</Link>
                    </div>
                    </div>
                    <div className="tp-course-requrement-widget-btn mb-30">
                    <Link className="tp-btn btn-1 w-100 text-center" href="/university-request-info">Request information</Link>
                    <Link className="tp-btn btn-2 w-100 text-center" href="/university-apply">Apply Now</Link>
                    </div>
                    <div className="tp-course-requrement-widget-contact mb-30">
                    <h4 className="tp-course-requrement-widget-contact-title">Contact Us</h4>
                    <p>1810 Campus Way NEBothell,<br/>
                        WA 98011-8246</p>
                    <a href="mailto:acadia@gmail.com"><span><Email/></span> acadia@gmail.com</a>
                    <a href="tel:90762"><span><TelSvg/></span> +670 413 90 762</a>
                    </div>
                    <div className="tp-course-requrement-widget-faq">
                    <h4 className="tp-course-requrement-widget-faq-title">Do you have <br/>
                        more questions?</h4>
                    <p>Read our <Link href="/faq">FAQ</Link></p>
                    <div className="tp-course-requrement-widget-faq-thumb">
                        <Image src={course_contact_bg} alt="course_contact_bg" style={{height:'auto'}}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
