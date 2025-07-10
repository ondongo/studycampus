

const profileData = [
  { label: 'Registration Date', value: 'October 06, 2024 8:30 am' },
  { label: 'First Name', value: 'Indigo' },
  { label: 'Last Name', value: 'Violet' },
  { label: 'Username', value: 'Instructor' },
  { label: 'Email', value: 'example@gmail.com' },
  { label: 'Phone Number', value: '+670 413 90 762' },
  { label: 'Skill/Occupation', value: 'Full Stack Developer' },
  {
    label: 'Biography',
    value: 'I have a degree in Journalism with over 15 years of work experience in the field. Throughout the years, I have worked in several well-known institutions and published several books on that are available.',
  },
];

export default function InstructorProfileArea() {

  return (
    <div className="tp-profile-wrapper">
      <div className="row">
        <div className="col-lg-6">
          <div className="tp-dashboard-section">
            <h2 className="tp-dashboard-title">Mon Profil</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="tp-profile-box">
            <div className="tp-profile-wrap">
              <ul>
                {profileData.map((item, index) => (
                  <li key={index}>
                    <div className="tp-profile-info d-flex">
                      <div className="tp-profile-info-tag">
                        <span>{item.label}</span>
                      </div>
                      <div className="tp-profile-info-details">
                        <span className={item.label === 'Biography' ? 'details-zone' : ''}>
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
