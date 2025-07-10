import Image from "next/image";

const recentReviewsData = [
   {
      id: 1,
      studentName: "Joss Sticks",
      studentImg: "/assets/img/dashboard/profile/reviews-profile-1.png",
      date: "August 27, 2024",
      time: "8:31 am",
      rating: 5,
      feedback: "Nice Course",
      courseTitle: "Design Masterclass",
   },
   {
      id: 2,
      studentName: "Benjamin Evalent",
      studentImg: "/assets/img/dashboard/profile/reviews-profile-2.png",
      date: "January 30, 2024",
      time: "10:21 am",
      rating: 5,
      feedback: "Is Great Course!",
      courseTitle: "3D Motion Design",
   },
   {
      id: 3,
      studentName: "Hanson Deck",
      studentImg: "/assets/img/dashboard/profile/reviews-profile-3.png",
      date: "April 20, 2024",
      time: "1:05 pm",
      rating: 5,
      feedback: "Awesome",
      courseTitle: "Graphic Design Masterclass",
   },
   {
      id: 4,
      studentName: "Hanson Violet",
      studentImg: "/assets/img/dashboard/profile/reviews-profile-4.png",
      date: "August 27, 2024",
      time: "10:21 am",
      rating: 5,
      feedback: "Is Great Course!",
      courseTitle: "Graphic Design Masterclass",
   },
   {
      id: 5,
      studentName: "Indigo Violet",
      studentImg: "/assets/img/dashboard/profile/reviews-profile-5.png",
      date: "January 30, 2024",
      time: "10:21 am",
      rating: 5,
      feedback: "Awesome",
      courseTitle: "Design System in Figma",
   },
];


export default function InstructorAnalyticsRecentReviews() {
   return (
      <section className="tp-dashboard-course-wrapper">
         <div className="tp-dashboard-section">
            <h2 className="tp-dashboard-title">Recent Reviews</h2>
         </div>
         <div className="tpd-table mb-25">
            <ul>
               <li className="tpd-table-head">
                  <div className="tpd-table-row">
                     <div className="tpd-reviews-student">
                        <h4 className="tpd-table-title">Student</h4>
                     </div>
                     <div className="tpd-reviews-date">
                        <h4 className="tpd-table-title">Date</h4>
                     </div>
                     <div className="tpd-reviews-feedback">
                        <h4 className="tpd-table-title">Rating</h4>
                     </div>
                  </div>
               </li>

               {recentReviewsData.map((review, index) => (
                  <li key={index}>
                     <div className="tpd-table-row">
                        <div className="tpd-reviews-student">
                           <div className="tpd-reviews-profile d-flex align-items-center">
                              <div className="tpd-reviews-thumb">
                                 <Image src={review.studentImg} alt={review.studentName} width={38} height={38} />
                              </div>
                              <h4 className="tpd-reviews-thumb-title">{review.studentName}</h4>
                           </div>
                        </div>
                        <div className="tpd-reviews-date">
                           <span>{review.date}</span>
                           <p>{review.time}</p>
                        </div>
                        <div className="tpd-reviews-feedback">
                           <div className="tp-instructor-rating">
                              {[...Array(5)].map((star, i) => (
                                 <i
                                    key={i}
                                    className={`fa-solid fa-star ${i < review.rating ? "" : "fa-light"
                                       }`}
                                 ></i>
                              ))}
                           </div>
                           <span className="span">{review.feedback}</span>
                           <div className="tpd-course-wrap">
                              <span className="tpd-course-name">Course:</span>
                              <span className="tpd-course-title">{review.courseTitle}</span>
                           </div>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </section>

   )
}
