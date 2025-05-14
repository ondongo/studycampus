'use client';
import { SubmitHandler, useForm } from "react-hook-form";
import ErrMsg from "../err-msg";

type Inputs = {
  name: string;
  phone: string;
  email: string;
  childName: string;
  age: number;
  message: string;
}
export default function CtaForm() {
  const { register, handleSubmit, formState: { errors },reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <div className="tp-cta-3-form-input">
            <input type="text" placeholder="Gurdian Name" {...register("name", { required: "Name is required" })} />
            {errors.name?.message && <ErrMsg msg={errors.name.message} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="tp-cta-3-form-input">
            <input type="text" placeholder="Phone No" {...register("phone", { required: "Phone is required" })} />
            {errors.phone?.message && <ErrMsg msg={errors.phone.message} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="tp-cta-3-form-input">
            <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} />
            {errors.email?.message && <ErrMsg msg={errors.email.message} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="tp-cta-3-form-input">
            <input type="text" placeholder="Child Name" {...register("childName", { required: "Name is required" })} />
            {errors.childName?.message && <ErrMsg msg={errors.childName.message} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="tp-cta-3-form-input">
            <input type="text" placeholder="Age of Child" {...register("age", { required: "Age is required" })} />
            {errors.age?.message && <ErrMsg msg={errors.age.message} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="tp-cta-3-form-input">
            <textarea placeholder="Message...." {...register("message", { required: "Message is required" })} name="message"></textarea>
            {errors.message?.message && <ErrMsg msg={errors.message.message} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="tp-cta-3-btn">
            <button type="submit">Submit my information</button>
          </div>
        </div>
      </div>
    </form>
  );
}
