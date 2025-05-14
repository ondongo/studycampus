'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import { RightArrowSeven } from "../svg";
import ErrMsg from "../err-msg";

// input type 
type Inputs = {
  userName: string;
  phone: string;
  email: string;
  password: string;
  bio: string;
}
export default function InstructorApplyForm() {
  const {register,handleSubmit,formState: { errors },reset} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-instructor-apply-heading">
        <h3 className="tp-instructor-apply-title">Become an Instructor!</h3>
        <p className="tp-instructor-apply-desc">Discover a supportive community of online instructors.</p>
      </div>

      <div className="tp-instructor-apply-form-wrapper">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-instructor-apply-input">
              <label>User name</label>
              <input type="text" {...register("userName", { required: "User name is required" })} />
              {errors.userName?.message && <ErrMsg msg={errors.userName.message} />}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-instructor-apply-input">
              <label>Phone number</label>
              <input type="text" {...register("phone", { required: "Phone number is required" })} />
              {errors.phone?.message && <ErrMsg msg={errors.phone.message} />}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-instructor-apply-input">
              <label>Email address</label>
              <input type="email" {...register("email", { required: "Email address is required" })} />
              {errors.email?.message && <ErrMsg msg={errors.email.message} />}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-instructor-apply-input">
              <label>Password</label>
              <input type="password" {...register("password", { required: "Password is required" })} />
              {errors.password?.message && <ErrMsg msg={errors.password.message} />}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-instructor-apply-input">
              <label>Bio</label>
              <textarea {...register("bio", { required: "Bio is required" })}></textarea>
              {errors.bio?.message && <ErrMsg msg={errors.bio.message} />}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-instructor-apply-input-btn">
              <button className="tp-btn-inner" type="submit">Become a Instructor <span><RightArrowSeven /> </span></button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
