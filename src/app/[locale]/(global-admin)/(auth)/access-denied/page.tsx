import { Metadata } from "next";
import AccessDeniedBanner from "./_components/access-denied-banner";
import AccessDeniedContent from "./_components/access-denied-content";

export const metadata: Metadata = {
  title: "Accès Refusé",
};

export default function AccessDeniedPage() {
  return (
    <main>
      {/* access denied area start */}
      <section className="tp-login-area">
        <div className="tp-login-register-box d-flex align-items-center">
          <AccessDeniedBanner />
          <div className="tp-login-register-wrapper d-flex justify-content-center align-items-center">
            <div className="tp-login-from-box">
              {/* access denied content start */}
              <AccessDeniedContent />
              {/* access denied content end */}
            </div>
          </div>
        </div>
      </section>
      {/* access denied area end */}
    </main>
  );
} 