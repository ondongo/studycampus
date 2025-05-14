'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import ErrMsg from '../err-msg';


type Inputs = {
  name: string;
  email: string;
  message: string;
  comments: string;
  remember: boolean;
}
export default function BlogReplyForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    reset();
  }
  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-contact-input-form">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>Your Name</label>
              <input type="text" {...register("name", { required: "Name is required" })} />
              {errors.name?.message && <ErrMsg msg={errors.name.message} />}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>Email Address</label>
              <input type="email" {...register("email", { required: "Email is required" })} />
              {errors.email?.message && <ErrMsg msg={errors.email.message} />}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-input p-relative">
              <label>Your comment</label>
              <textarea {...register("comments", { required: "Comment is required" })}></textarea>
              {errors.comments?.message && <ErrMsg msg={errors.comments.message} />}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-input-remeber">
              <input id="remember" type="checkbox" {...register("remember",{required:false})} />
              <label htmlFor="remember">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div>
          <div className="tp-contact-btn">
            <button type='submit' className="tp-btn-inner">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}
