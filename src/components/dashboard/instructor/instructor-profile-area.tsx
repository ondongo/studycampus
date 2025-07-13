"use client"
import { useSession } from "next-auth/react";

export default function InstructorProfileArea() {
  const { data: session } = useSession();

  // Format the creation date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get profile data from session
  const getProfileData = () => {
    if (!session?.user) return [];

    return [
      { label: 'Nom d\'utilisateur', value: session.user.name || 'Non disponible' },
      { label: 'Email', value: session.user.email || 'Non disponible' },
      { label: 'Numéro de téléphone', value: '+(33) 7 53 27 52 53' },
      { label: 'Dernière connexion', value: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) },
    ];
  };

  const profileData = getProfileData();

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
