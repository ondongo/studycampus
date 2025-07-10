import Image from "next/image";
import icon_1 from '@/assets/img/dashboard/icon/fact/teacher.svg';
import icon_2 from '@/assets/img/dashboard/icon/fact/enroll-icon.svg';
import icon_3 from '@/assets/img/dashboard/icon/fact/cup.svg';
import icon_4 from '@/assets/img/dashboard/icon/fact/students.svg';
import icon_5 from '@/assets/img/dashboard/icon/fact/course-total.svg';
import icon_6 from '@/assets/img/dashboard/icon/fact/card-pos.svg';

const factItemData = [
   {
      id: 1,
      count: 20,
      label: 'Active Courses',
      iconSrc: icon_1,
      iconAlt: 'Active Courses Icon',
   },
   {
      id: 2,
      count: 84,
      label: 'Enrolled Courses',
      iconSrc: icon_2,
      iconAlt: 'Enrolled Courses Icon',
      iconClass: 'common-pale-yellow',
   },
   {
      id: 3,
      count: 42,
      label: 'Completed Courses',
      iconSrc: icon_3,
      iconAlt: 'Completed Courses Icon',
      iconClass: 'common-pale-pacific',
   },
   {
      id: 4,
      count: 145,
      label: 'Total Students',
      iconSrc: icon_4,
      iconAlt: 'Total Students Icon',
      iconClass: 'common-pale-green',
   },
   {
      id: 5,
      count: 65,
      label: 'Total Courses',
      iconSrc: icon_5,
      iconAlt: 'Total Courses Icon',
      iconClass: 'common-pale-blue',
   },
   {
      id: 6,
      count: 26,
      label: 'Total Earnings',
      iconSrc: icon_6,
      iconAlt: 'Total Earnings Icon',
      iconClass: 'common-pale-purple',
   },
];

export default function InstructorAnalyticsEarningArea() {
   return (
      <div className="dashboader-area mb-25">
         <div className="row">
            {factItemData.map(({ id, count, label, iconSrc, iconAlt, iconClass }) => (
               <div key={id} className="col-lg-4">
                  <div className="tp-fact-item d-flex align-items-center justify-content-between">
                     <div className="tp-fact-content">
                        <h4 className="tp-fact-count">{count}</h4>
                        <span>{label}</span>
                     </div>
                     <div className="tp-fact-icon">
                        <span className={iconClass ? iconClass : ''}>
                           <Image src={iconSrc} alt={iconAlt} />
                        </span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}
