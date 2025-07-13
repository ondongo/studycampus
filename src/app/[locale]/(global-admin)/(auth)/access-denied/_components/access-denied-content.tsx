"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AccessDeniedContent() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push("/");
  };

  const handleSignout = async () => {
    // Sign out logic here
    await signOut({ callbackUrl: "/signin" });
  };

  return (
    <div className="tp-login-form-box">
      <div className="tp-login-form-box-content">
        <div className="tp-login-form-box-header text-center">
          <div className="access-denied-icon mb-4">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 21H5V3H13V9H19V21Z"
                fill="#dc3545"
              />
              <path
                d="M12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14ZM12 20C12.55 20 13 19.55 13 19C13 18.45 12.55 18 12 18C11.45 18 11 18.45 11 19C11 19.55 11.45 20 12 20Z"
                fill="#dc3545"
              />
            </svg>
          </div>
          <h3 className="tp-login-form-box-title mb-3">
            Accès Refusé
          </h3>
          <p className="tp-login-form-box-subtitle mb-4">
            Désolé, vous n'avez pas les autorisations nécessaires pour accéder à cette page.
          </p>
        </div>

        <div className="tp-login-form-box-body">
          <div className="access-denied-message mb-4">
            <p className="text-center text-muted">
              Si vous pensez qu'il s'agit d'une erreur, veuillez contacter l'administrateur du système.
            </p>
          </div>

          <div className="tp-login-form-box-action">
            <div className="row g-3">
              <div className="col-12">
                <button
                  onClick={handleSignout}
                  className="tp-btn tp-btn-2 w-100"
                  style={{
                    backgroundColor: "#6c757d",
                    borderColor: "#6c757d",
                    color: "white",
                  }}
                >
                  <span>Retour</span>
                </button>
              </div>
           
            </div>
          </div>

          <div className="tp-login-form-box-footer text-center mt-4">
            <p className="mb-0">
              <Link href="/signin" className="text-primary">
                Se connecter avec un autre compte
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .access-denied-icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .tp-login-form-box {
          background: white;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
        }
        
        .tp-login-form-box-title {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin-bottom: 16px;
        }
        
        .tp-login-form-box-subtitle {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
        }
        
        .access-denied-message p {
          font-size: 14px;
          color: #888;
        }
        
        .tp-btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .tp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .tp-login-form-box-footer a {
          text-decoration: none;
          font-weight: 500;
        }
        
        .tp-login-form-box-footer a:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 767px) {
          .tp-login-form-box {
            padding: 24px;
            margin: 16px;
          }
          
          .tp-login-form-box-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
} 