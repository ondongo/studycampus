import Image from "next/image";
import enroll_icon from '@/assets/img/dashboard/icon/fact/enroll-icon.svg';
import student_icon from '@/assets/img/dashboard/icon/fact/students.svg';
import star_icon from '@/assets/img/dashboard/icon/fact/star.svg';

// Fact data
const factData = [
   { id: 1, count: 84, label: 'Enrolled Courses', icon: enroll_icon, colorClass: 'common-pale-yellow' },
   { id: 2, count: 145, label: 'Total Students', icon: student_icon, colorClass: 'common-pale-green' },
   { id: 3, count: 26, label: 'Total Review', icon: star_icon, colorClass: 'common-pale-purple' },
];

export default function InstructorAnalyticsTopArea() {
   return (
      <div className="dashboader-area mb-25">
         <div className="row">
            {factData.map((fact) => (
               <div className="col-lg-4" key={fact.id}>
                  <div className="tp-fact-item d-flex align-items-center justify-content-between">
                     <div className="tp-fact-content">
                        <h4 className="tp-fact-count">{fact.count}</h4>
                        <span>{fact.label}</span>
                     </div>
                     <div className="tp-fact-icon">
                        <span className={fact.colorClass}>
                           <Image src={fact.icon} alt="fact-icon" />
                        </span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
