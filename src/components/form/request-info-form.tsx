'use client';
import { useState } from "react";
import { CalenderSvg, RightArrowSeven } from "../svg";
import NiceSelect from "../ui/nice-select";
import DatePicker from "../ui/date-picker";

export default function RequestInfoForm() {
   const [date, setDate] = useState(new Date());
   function handleCountry(item: { value: string; label: string }) {
      console.log(item);
   }
   function handleDegree(item: { value: string; label: string }) {
      console.log(item);
   }
   return (
      <form id="contact-form">
         <div className="tp-contact-input-form request">
            <h4 className="tp-application-from-title">Personal Information</h4>
            <div className="row">
               <div className="col-xl-6 col-lg-6">
                  <div className="tp-contact-input schedule p-relative">
                     <label>First name</label>
                     <input type="text" />
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6">
                  <div className="tp-contact-input schedule p-relative">
                     <label>Last name</label>
                     <input type="text" />
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6">
                  <div className="tp-contact-input schedule p-relative">
                     <label>Email address</label>
                     <input type="email" />
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6">
                  <div className="tp-contact-input schedule p-relative">
                     <label>Date of birth</label>
                     <DatePicker date={date} setDate={setDate} />
                     <span className="icon">
                        <CalenderSvg />
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div className="tp-contact-input-form request">
            <h4 className="tp-application-from-title">Adress Information</h4>
            <div className="row">
               <div className="col-xl-6 col-lg-6">
                  <div className="tp-contact-input schedule p-relative">
                     <label>Country</label>
                     <div className="tp-application-select">
                        <NiceSelect
                           cls="wide"
                           options={[
                              { value: "", label: "Country" },
                              { value: "bd", label: "Bangladesh" },
                              { value: "usa", label: "USA" },
                              { value: "afganistan", label: "Afghanistan" },
                              { value: "canada", label: "Canada" },
                           ]}
                           defaultCurrent={0}
                           onChange={(item) => handleCountry(item)}
                           name="Country"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6">
                  <div className="tp-contact-input schedule p-relative">
                     <label>Postal Code </label>
                     <input type="text" />
                  </div>
               </div>
               <div className="col-xl-12 col-lg-12">
                  <div className="tp-contact-input schedule p-relative">
                     <label>Address</label>
                     <input type="text" />
                  </div>
               </div>
            </div>
         </div>
         <div className="tp-contact-input-form">
            <h4 className="tp-application-from-title">Other</h4>
            <div className="row">
               <div className="col-xl-6 col-lg-6">
                  <div className="tp-contact-input schedule p-relative">
                     <label> Academic Level </label>
                     <div className="tp-application-select">
                        <NiceSelect
                          cls="wide"
                           options={[
                              { value: "bachelor", label: "Bachelor’s Degrees" },
                              { value: "master", label: "Master’s Degrees" },
                              { value: "undergraduate", label: "Undergraduate Degrees" },
                           ]}
                           defaultCurrent={0}
                           onChange={(item) => handleDegree(item)}
                           name="Degree"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6">
                  <div className="tp-contact-input schedule p-relative">
                     <label> Mobile Number </label>
                     <input type="text" />
                  </div>
               </div>
               <div className="col-xl-12">
                  <div className="tp-contact-input-remeber schedule request">
                     <input id="remeber" type="checkbox" />
                     <label htmlFor="remeber">I authorize The Estuidar University to contact me via email about academic programs and services.</label>
                  </div>
               </div>
               <div className="tp-schedule-btn">
                  <button className="tp-btn">
                     Submit Request <span> <RightArrowSeven/></span>
                  </button>
               </div>
            </div>
         </div>
      </form>
   )
}
