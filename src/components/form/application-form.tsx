'use client';
import React, { useState } from 'react'
import { CalenderSvg, RightArrowSeven } from '../svg'
import DatePicker from '../ui/date-picker';
import NiceSelect from '../ui/nice-select';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrMsg from '../err-msg';


type Inputs = {
    fname: string;
    lname: string;
    email: string;
    zipcode: string;
    phone: string;
    school: string;
    yearCompletion: string;
    qualification: string;
}

export default function ApplicationForm() {
    const [date, setDate] = useState(new Date());
    const {register,handleSubmit,formState: { errors },reset} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        reset();
    }
    function handleStatus(item: { value: string; label: string }) {
        console.log(item);
    }
    function handleDegree(item: { value: string; label: string }) {
        console.log(item);
    }
    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-contact-input-form application">
                <h4 className="tp-application-from-title">Applicant Details</h4>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>First name</label>
                            <input type="text" {...register("fname", { required: "First name is required" })} id='fname' />
                            {errors.fname?.message && <ErrMsg msg={errors.fname.message} />}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Last name</label>
                            <input type="text" {...register("lname", { required: "Last name is required" })} />
                            {errors.lname?.message && <ErrMsg msg={errors.lname.message} />}
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Email address</label>
                            <input type="email" {...register("email", { required: "Email is required" })} />
                            {errors.email?.message && <ErrMsg msg={errors.email.message} />}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Zip code</label>
                            <input type="text" {...register("zipcode", { required: "Zip code is required" })} />
                            {errors.zipcode?.message && <ErrMsg msg={errors.zipcode.message} />}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Phone number</label>
                            <input type="text" {...register("phone", { required: "Phone number is required" })} />
                            {errors.phone?.message && <ErrMsg msg={errors.phone.message} />}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Date of birth</label>
                            <DatePicker date={date} setDate={setDate} />
                            <span className="icon"><CalenderSvg /></span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Student type</label>
                            <div className="tp-application-select">
                                <NiceSelect
                                    cls="wide"
                                    options={[
                                        { value: "csc", label: "Csc" },
                                        { value: "architecture", label: "Architecture" },
                                        { value: "eee", label: "Eee" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={(item) => handleDegree(item)}
                                    name="Degree"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-contact-input-form application">
                <h4 className="tp-application-from-title">Education Records</h4>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>School</label>
                            <input type="text" {...register("school", { required: "School is required" })} />
                            {errors.school?.message && <ErrMsg msg={errors.school.message} />}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Year of completion</label>
                            <input type="text" {...register("yearCompletion", { required: "Year of completion is required" })} />
                            {errors.yearCompletion?.message && <ErrMsg msg={errors.yearCompletion.message} />}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Highest qualification</label>
                            <input type="text" {...register("qualification", { required: "Highest qualification is required" })} />
                            {errors.qualification?.message && <ErrMsg msg={errors.qualification.message} />}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Current status</label>
                            <div className="tp-application-select">
                                <NiceSelect
                                    cls="wide"
                                    options={[
                                        { value: "new", label: "New" },
                                        { value: "old", label: "Old" },
                                        { value: "new", label: "Newst" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={(item) => handleStatus(item)}
                                    name="Status"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-contact-input-form application">
                <h4 className="tp-application-from-title">Education Details</h4>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Select area of study</label>
                            <div className="tp-application-select">
                                  <NiceSelect
                                        cls="wide"
                                        options={[
                                            { value: "new", label: "New" },
                                            { value: "old", label: "Old" },
                                            { value: "new", label: "Newst" },
                                        ]}
                                        defaultCurrent={0}
                                        onChange={(item) => handleStatus(item)}
                                        name="Status"
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Degree level</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-contact-input-form application">
                <h4 className="tp-application-from-title">Documentation</h4>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Upload passport or birth documentation</label>
                            <input type="text" />
                            <input id="cv" type="file" hidden />
                            <label className="hide" htmlFor="cv">
                                <span>Choose File</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Upload Curriculum Vitae (CV) or Resume</label>
                            <input type="text" />
                            <input id="cvi" type="file" hidden />
                            <label className="hide" htmlFor="cvi">
                                <span>Choose File</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-contact-input-form">
                <h4 className="tp-application-from-title">Additional Details</h4>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Application full name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="tp-contact-input schedule p-relative">
                            <label>Additional information</label>
                            <textarea ></textarea>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="tp-contact-input-remeber schedule">
                            <input id="remeber" type="checkbox" />
                            <label htmlFor="remeber">By submitting this form, you agree to the Acadia University privacy notice.</label>
                        </div>
                    </div>
                    <div className="tp-schedule-btn">
                        <button type='submit' className="tp-btn">Submit Aplication
                            <span><RightArrowSeven /></span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
