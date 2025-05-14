import React from "react";
import { HandCheck } from "../svg";
import Link from "next/link";

const requirements = [
  "You can be admitted at any time during the academic year.",
  "If English is not your first language, you will need to demonstrate English <br> language proficiency equivalent to with a minimum of 5.5 in each <br> band and 6.0 in speaking.",
  "Contact information for one teacher (or two, maximum) who will complete <br> the Teacher Evaluation form.",
  "Open to students 18 years and over at course commencement.",
  "Spiritual Formation Program Requirements",
];

const deadlinesData = [
  {
    category: "General",
    date: "October 15",
    decision: "Early decision |",
  },
  {
    category: "On Campus",
    date: "November 1",
    decision: "Early decision ||",
  },
  {
    category: "Online/Hybrid",
    date: "January 15",
    decision: "Regular Decision",
  },
  {
    category: "Current Continuing",
    date: "March 1",
    decision: "All continuing",
  },
];

export default function ApplyRequirement  () {
  return (
    <section className="tp-apply-requirement-area tp-apply-requirement-bg pt-110 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-apply-requirement-box">
              <h3 className="tp-apply-process-title">
                The Application Process
              </h3>
              <span>You will need:</span>
              <div className="tp-apply-requirement-bullet mb-55">
                {requirements.map((requirement, index) => (
                  <p key={index}>
                    <span>
                      <HandCheck />
                    </span>
                    <i dangerouslySetInnerHTML={{ __html: requirement }}></i>
                  </p>
                ))}
              </div>
              <div className="tp-apply-requirement-btn">
                <Link className="tp-btn" href="/university-campus">Request a campus tour</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tp-apply-dedline-box">
              <h4 className="tp-apply-dedline-wrap-title">
                Application Deadlines
              </h4>
              <div className="tp-apply-dedline-wrapper">
                {deadlinesData.map((deadline, index) => (
                  <div
                    className={`tp-apply-dedline-wrap d-flex align-items-center justify-content-between ${
                      index === deadlinesData.length - 1 ? "b-none" : ""
                    }`}
                    key={index}
                  >
                    <div className="tp-apply-dedline-content">
                      <span>{deadline.category}</span>
                      <p>{deadline.date}</p>
                    </div>
                    <div className="tp-apply-dedline-date">
                      <p>{deadline.decision}</p>
                    </div>
                  </div>
                ))}
                <div className="tp-apply-btn">
                  <Link className="tp-btn" href="/university-financial">
                    Visit Financial Aid
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

