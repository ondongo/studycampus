import { Metadata } from "next";
import LoginRegisterBanner from "./_components/login-register-banner";

import Link from "next/link";
import { LoginForm } from "./_components/loginForm";

export const metadata: Metadata = {
  title: "Login - Blessings Travels",
};

export default function LoginPage() {
  return (
    <main>
      {/* login area start */}
      <section className="tp-login-area">
        <div className="tp-login-register-box d-flex align-items-center">
          <LoginRegisterBanner />
          <div className="tp-login-register-wrapper d-flex justify-content-center align-items-center">
            <div className="tp-login-from-box">
           
              {/* login form start */}
              <LoginForm />
              {/* login form end */}
            </div>
          </div>
        </div>
      </section>
      {/* login area end */}
    </main>
  );
}
