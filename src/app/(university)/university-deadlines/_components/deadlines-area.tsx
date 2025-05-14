import {
  ArtDesignSvg,
  BusinessSvg,
  ComputerScienceSvg,
  EconomicsSvg,
} from "@/components/svg";

const deadlines_data = [
  {
    id: 1,
    icon: <BusinessSvg />,
    title: "Business & Administration",
    date: "January 2024",
    scheduleData: [
      {
        id: 1,
        title: "Accommodation Check In",
        date: "Wednesday, 30 January",
      },
      {
        id: 2,
        title: "New Student Orientation",
        date: "Thursday, 1 – Thursday 2 January",
      },
      {
        id: 3,
        title: "Term Start",
        date: "Monday, 5 January",
      },
      {
        id: 4,
        title: "Term End",
        date: "Friday, 18 March",
      },
      {
        id: 5,
        title: "Recess",
        date: "Monday 20 April – Friday 1 May",
        isLast: true,
      },
    ],
  },
  {
    id: 2,
    icon: <ComputerScienceSvg />,
    title: "Computer Science &amp; A.I.",
    date: "October 2024",
    scheduleData: [
      {
        id: 1,
        title: "Accommodation Check In",
        date: "Wednesday, 30 January",
      },
      {
        id: 2,
        title: "New Student Orientation",
        date: "Thursday, 1 – Thursday 2 January",
      },
      {
        id: 3,
        title: "Term Start",
        date: "Monday, 5 January",
      },
      {
        id: 4,
        title: "Term End",
        date: "Friday, 18 March",
      },
      {
        id: 5,
        title: "Recess",
        date: "Monday 20 April – Friday 1 May",
        isLast: true,
      },
    ],
  },
  {
    id: 3,
    icon: <ArtDesignSvg />,
    title: "Art &amp; Design",
    date: "August 2024",
    scheduleData: [
      {
        id: 1,
        title: "Accommodation Check In",
        date: "Wednesday, 30 January",
      },
      {
        id: 2,
        title: "New Student Orientation",
        date: "Thursday, 1 – Thursday 2 January",
      },
      {
        id: 3,
        title: "Term Start",
        date: "Monday, 5 January",
      },
      {
        id: 4,
        title: "Term End",
        date: "Friday, 18 March",
      },
      {
        id: 5,
        title: "Recess",
        date: "Monday 20 April – Friday 1 May",
        isLast: true,
      },
    ],
  },
  {
    id: 4,
    icon: <EconomicsSvg />,
    title: "Economics",
    date: "September 2024",
    scheduleData: [
      {
        id: 1,
        title: "Accommodation Check In",
        date: "Wednesday, 30 January",
      },
      {
        id: 2,
        title: "New Student Orientation",
        date: "Thursday, 1 – Thursday 2 January",
      },
      {
        id: 3,
        title: "Term Start",
        date: "Monday, 5 January",
      },
      {
        id: 4,
        title: "Term End",
        date: "Friday, 18 March",
      },
      {
        id: 5,
        title: "Recess",
        date: "Monday 20 April – Friday 1 May",
        isLast: true,
      },
    ],
  },
];

export default function DeadlinesArea() {
  return (
    <section className="tp-tution-area grey-bg pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {deadlines_data.map((item) => (
              <div key={item.id} className="tp-dates-box mb-20">
                <div className="tp-tution-table tp-dates-table">
                  <h3 className="tp-dates-title">
                    <span>{item.icon}</span>
                    {item.title}
                  </h3>
                  <ul>
                    <li className="tp-tution-table-head">
                      <div className="tp-course-table-row">
                        <div className="tp-dates-month">
                          <h4 className="tp-tution-table-title">{item.date}</h4>
                        </div>
                        <div className="tp-dates-date">
                          <h4 className="tp-tution-table-title">Date</h4>
                        </div>
                      </div>
                    </li>
                    {item.scheduleData.map((sd) => (
                      <li
                        key={sd.id}
                        className={`tp-tution-table-inner ${
                          sd.isLast ? "none" : ""
                        }`}
                      >
                        <div className="tp-course-table-row">
                          <div className="tp-dates-month">
                            <h4 className="tp-tution-inner">{sd.title}</h4>
                          </div>
                          <div className="tp-dates-date">
                            <h4 className="tp-tution-inner">{sd.date}</h4>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
