


const quizList = [
   {
      id: 1,
      date: 'March 26, 2024',
      title: "What is design thinking's",
      student: 'Benjamin Evalent',
      questions: 2,
      totalMarks: 1,
      correctAnswers: 0,
      result: 'Fail',
   },
   {
      id: 2,
      date: 'December 26, 2023',
      title: 'Quiz Test 01',
      student: 'Benjamin Evalent',
      questions: 1,
      totalMarks: 0,
      correctAnswers: 1,
      result: 'Pass',
   },
   {
      id: 3,
      date: 'March 26, 2024',
      title: 'Quiz Test 02',
      student: 'Benjamin Evalent',
      questions: 2,
      totalMarks: 0,
      correctAnswers: 1,
      result: 'Pass',
   },
   {
      id: 4,
      date: 'August 23, 2023',
      title: 'Knowledge Check',
      student: 'Benjamin Evalent',
      questions: 1,
      totalMarks: 1,
      correctAnswers: 1,
      result: 'Pass',
   },
   {
      id: 5,
      date: 'March 26, 2024',
      title: 'Quiz Test 03',
      student: 'Benjamin Evalent',
      questions: 1,
      totalMarks: 0,
      correctAnswers: 0,
      result: 'Fail',
   },
   {
      id: 6,
      date: 'January 30, 2024',
      title: "What is design thinking's",
      student: 'Benjamin Evalent',
      questions: 2,
      totalMarks: 1,
      correctAnswers: 0,
      result: 'Pass',
   },
];

export default function InstructorQuizListArea() {
   return (
      <>

         {/* section-area-start */}
         <div className="section-area">
            <div className="tp-dashboard-section">
               <h2 className="tp-dashboard-title">My quiz Attempts</h2>
            </div>
         </div>
         {/* section-area-end */}


         {/* quiz list area start */}
         <div className="tpd-course-area">
            <div className="tpd-table mb-25">
               <ul>
                  <li className="tpd-table-head">
                     <div className="tpd-table-row">
                        <div className="tpd-quiz-info-sub">
                           <h4 className="tpd-table-title">Quiz Info</h4>
                        </div>
                        <div className="tpd-quiz-ques">
                           <h4 className="tpd-table-title">Qus</h4>
                        </div>
                        <div className="tpd-quiz-tm">
                           <h4 className="tpd-table-title">TM</h4>
                        </div>
                        <div className="tpd-quiz-ca-sub">
                           <h4 className="tpd-table-title">CA</h4>
                        </div>
                        <div className="tpd-quiz-result-sub">
                           <h4 className="tpd-table-title">Result</h4>
                        </div>
                        <div className="tpd-quiz-details">
                           <h4 className="tpd-table-title">Details</h4>
                        </div>
                     </div>
                  </li>

                  {quizList.map((quiz) => (
                     <li key={quiz.id}>
                        <div className="tpd-table-row">
                           <div className="tpd-quiz-info-sub">
                              <span className="tpd-common-date">{quiz.date}</span>
                              <h4 className="tpd-quiz-title">{quiz.title}</h4>
                              <div className="tpd-student-info">
                                 <p>
                                    <span>Student: </span> {quiz.student}
                                 </p>
                              </div>
                           </div>
                           <div className="tpd-quiz-ques">
                              <span className="tpd-common-text">{quiz.questions}</span>
                           </div>
                           <div className="tpd-quiz-tm">
                              <h4 className="tpd-table-title">{quiz.totalMarks}</h4>
                           </div>
                           <div className="tpd-quiz-ca-sub">
                              <h4 className="tpd-table-title">{quiz.correctAnswers}</h4>
                           </div>
                           <div className="tpd-quiz-result-sub">
                              <div className="tpd-badge-item">
                                 <span
                                    className={`tpd-badge ${quiz.result === 'Pass' ? 'sucess' : 'danger'
                                       }`}
                                 >
                                    {quiz.result}
                                 </span>
                              </div>
                           </div>
                           <div className="tpd-quiz-details">
                              <div className="tpd-quiz-details-btn">
                                 <a className="tpd-border-btn" href="#">
                                    Details
                                 </a>
                              </div>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         {/* quiz list area end */}
      </>
   )
}
