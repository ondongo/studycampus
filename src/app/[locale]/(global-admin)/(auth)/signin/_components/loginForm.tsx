"use client";

import { CloseEye, GoogleSvg, OpenEye } from "@/components/svg";

import { signIn } from "next-auth/react";
export function LoginForm() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="tp-login-from-google-btn">
            <button
              className="w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => signIn("google")}
              style={{
                border: "1px solid #d1d5db",
                background: "#fff",
                color: "#222",
                borderRadius: "50px",
                padding: "10px 0",
                fontWeight: 500,
                fontSize: "16px",
                boxShadow: "0 1px 2px rgba(60,60,60,0.04)",
                transition: "background 0.2s, border 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "#f3f4f6";
                (e.currentTarget as HTMLButtonElement).style.border = "1px solid #bdbdbd";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "#fff";
                (e.currentTarget as HTMLButtonElement).style.border = "1px solid #d1d5db";
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <GoogleSvg />
              </span>
              <span>Continuer avec Google</span>
            </button>
          </div>
          <div className="tp-login-from-autor text-center">
            <p>
              <span>Instruction:</span> Seul les administrateurs peuvent se
              connecter
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
