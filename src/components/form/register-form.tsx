'use client';
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CloseEye, GoogleSvg, OpenEye } from '../svg';
import ErrMsg from "../err-msg";

type Inputs = {
  name: string;
  email: string;
  password: string;
  conformPassword: string;
  remember: boolean;
}


export default function RegisterForm() {
  const [showPass, setShowPass] = useState(false);
  const [showConformPass, setShowConformPass] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch,reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  }
  return (
    <form className="tp-login-input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>Full Name</label>
            <input type="text" placeholder="Type your name" {...register("name", { required: "Name is required" })} />
            {errors.name?.message && <ErrMsg msg={errors.name.message} />}
          </div>
        </div>
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>Email or Phone</label>
            <input type="text" placeholder="Type your email or phone number" {...register("email", { required: "Email is required" })} />
            {errors.email?.message && <ErrMsg msg={errors.email.message} />}
          </div>
        </div>
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>Password</label>
            <div className="password-input p-relative">
              <input type={showPass ? "text" : "password"} placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} name="password" />
              <div className="tp-login-input-eye password-show-toggle">
                <span className={`${showPass ? "open-eye open-eye-icon" : "open-close close-eye-icon"}`} onClick={() => setShowPass(!showPass)}>
                  {showPass ? <OpenEye /> : <CloseEye />}
                </span>
              </div>
            </div>
            {errors.password?.message && <ErrMsg msg={errors.password.message} />}
          </div>
        </div>
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>Conform Password </label>
            <div className="password-input p-relative">
              <input type={showConformPass ? "text" : "password"} placeholder="Conform Password" {...register("conformPassword", { required: true, validate: (val: string) => { if (watch('password') != val) { return "Your passwords do no match" } } })} />
              <div className="tp-login-input-eye password-show-toggle">
                <span className={`${showConformPass ? "open-eye open-eye-icon" : "open-close close-eye-icon"}`} onClick={() => setShowConformPass(!showPass)}>
                  {showConformPass ? <OpenEye /> : <CloseEye />}
                </span>
              </div>
            </div>
            {errors.conformPassword?.message && <ErrMsg msg={errors.conformPassword.message} />}
          </div>
        </div>
        <div className="col-12">
          <div className="tp-login-from-remeber">
            <div className="row">
              <div className="col-12">
                <div className="tp-contact-input-remeber login">
                  <input id="remember" type="checkbox" {...register("remember",{ required: false})} />
                  <label htmlFor="remember">Save account</label>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-login-from-btn">
            <button type="submit" className="tp-btn-inner w-100 text-center">Register</button>
          </div>
          <div className="tp-login-from-subtitle-heading">
            <h5 className="tp-login-from-subtitle">Or Sign In with email</h5>
          </div>
          <div className="tp-login-from-google-btn">
            <a className="w-100" href="#">
              <GoogleSvg />
              Continue with Google
            </a>
          </div>
        </div>
      </div>
    </form>
  )
}
