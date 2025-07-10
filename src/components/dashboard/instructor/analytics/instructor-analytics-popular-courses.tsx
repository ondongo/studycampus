
const popularCoursesData = [
    {
        id: 1,
        name: 'Product Design',
        enroll: 45,
        rating: 5,
    },
    {
        id: 2,
        name: 'Graphic Design Masterclass',
        enroll: 12,
        rating: 3,
    },
    {
        id: 3,
        name: 'Fundamentals of Business Analysis',
        enroll: 22,
        rating: 2,
    },
    {
        id: 4,
        name: 'Design System in Figma',
        enroll: 30,
        rating: 5,
    },
    {
        id: 5,
        name: '3D Motion Design',
        enroll: 8,
        rating: 5,
    },
];

export default function InstructorAnalyticsPopularCourses() {
    return (
        <section className="tp-dashboard-course-wrapper">
            <div className="tp-dashboard-section">
                <h2 className="tp-dashboard-title">Most Popular Courses</h2>
            </div>
            <div className="tp-dashboard-course-list">
                <ul>
                    {popularCoursesData.map((course, index) => (
                        <li key={course.id} className={index === 0 ? 'active' : ''}>
                            <div className="tp-dashboard-course-item">
                                <div className="tp-dashboard-course-name">
                                    <h5 className="tp-dashboard-course-name-title">{course.name}</h5>
                                </div>
                                <div className="tp-dashboard-course-enroll">
                                    <span>{course.enroll}</span>
                                </div>
                                <div className="tp-dashboard-course-rating">
                                    {/* Render stars based on the course rating */}
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={i < course.rating ? 'fa-solid fa-star' : 'fa-light fa-star'}
                                        />
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
