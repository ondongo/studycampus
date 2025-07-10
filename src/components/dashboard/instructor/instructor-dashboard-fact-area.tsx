import Image from "next/image";
import icon_1 from '@/assets/img/dashboard/icon/fact/teacher.svg';
import icon_2 from '@/assets/img/dashboard/icon/fact/enroll-icon.svg';
import icon_3 from '@/assets/img/dashboard/icon/fact/cup.svg';
import icon_4 from '@/assets/img/dashboard/icon/fact/students.svg';
import icon_5 from '@/assets/img/dashboard/icon/fact/course-total.svg';
import icon_6 from '@/assets/img/dashboard/icon/fact/card-pos.svg';


const factData = [
  {
    count: 20,
    label: 'Active Courses',
    icon: icon_1,
    className:'',
  },
  {
    count: 84,
    label: 'Enrolled Courses',
    icon: icon_2,
    className: 'common-pale-yellow',
  },
  {
    count: 42,
    label: 'Completed Courses',
    icon: icon_3,
    className: 'common-pale-pacific',
  },
  {
    count: 145,
    label: 'Total Students',
    icon: icon_4,
    className: 'common-pale-green',
  },
  {
    count: 65,
    label: 'Total Courses',
    icon: icon_5,
    className: 'common-pale-blue',
  },
  {
    count: 26,
    label: 'Total Earnings',
    icon: icon_6,
    className: 'common-pale-purple',
  },
];

export default function InstructorDashboardFacts() {
  return (
    <section className="tp-fact-wrapper">
      <div className="row">
        <div className="col-lg-6">
          <div className="tp-dashboard-section">
            <h2 className="tp-dashboard-title">Dashboard</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {factData.map((fact, index) => (
          <div key={index} className="col-lg-4">
            <div className="tp-fact-item d-flex align-items-center justify-content-between">
              <div className="tp-fact-content">
                <h4 className="tp-fact-count">{fact.count}</h4>
                <span>{fact.label}</span>
              </div>
              <div className="tp-fact-icon">
                <span className={fact.className || ''}>
                  <Image src={fact.icon} alt="fact-icon" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
