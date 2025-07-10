'use client';
import { useState } from "react";


// Data for the nav items (tabs)
const navItemData = [
   { id: 'home', title: 'Bank Transfer', subTitle: 'Min withdraw $20.00' },
   { id: 'profile', title: 'E-Check', subTitle: 'Min withdraw $40.00' },
   { id: 'contact', title: 'PayPal', subTitle: 'Min withdraw $30.00' }
];

// Data for the tab content
const tabContentData = [
   {
      id: 'home',
      formFields: [
         { label: 'Account Name', placeholder: 'Account Name' },
         { label: 'Account Number', placeholder: 'ES19  1234  5678  9087  6543' },
         { label: 'Bank Name', placeholder: 'Bank of America' },
         { label: 'IBAN', placeholder: '1234  5678  9087  6543' },
         { label: 'BIC / SWIFT', placeholder: 'BIC / SWIFT' }
      ]
   },
   {
      id: 'profile',
      formFields: [
         { label: 'Account Name 2', placeholder: 'Account Name' },
         { label: 'Account Number', placeholder: 'ES19  1234  5678  9087  6543' },
         { label: 'Bank Name', placeholder: 'Bank of America' },
         { label: 'IBAN', placeholder: '1234  5678  9087  6543' },
         { label: 'BIC / SWIFT', placeholder: 'BIC / SWIFT' }
      ]
   },
   {
      id: 'contact',
      formFields: [
         { label: 'Account Name 3', placeholder: 'Account Name' },
         { label: 'Account Number', placeholder: 'ES19  1234  5678  9087  6543' },
         { label: 'Bank Name', placeholder: 'Bank of America' },
         { label: 'IBAN', placeholder: '1234  5678  9087  6543' },
         { label: 'BIC / SWIFT', placeholder: 'BIC / SWIFT' }
      ]
   }
];


export default function InstructorSettingProfileWithdraw() {
   const [activeTab, setActiveTab] = useState('home'); 
   return (
      <div className="tpd-course-area">
         <div className="tpd-setting-box withdraw">
            <div className="tpd-setting-withdraw-content tpd-redio-style">
               <h5 className="tpd-setting-withdraw-title">Select a withdraw method</h5>

               <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {navItemData.map((item) => (
                     <li className="nav-item" role="presentation" key={item.id}>
                        <button
                           className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                           id={`${item.id}-tab`}
                           data-bs-toggle="tab"
                           type="button"
                           role="tab"
                           aria-controls={item.id}
                           aria-selected={activeTab === item.id}
                           onClick={() => setActiveTab(item.id)}
                           tabIndex={activeTab === item.id ? 0 : -1}
                        >
                           <span className="tpd-setting-withdraw-content-box-title">{item.title}</span>
                           <span className="tpd-setting-withdraw-content-box-sub">{item.subTitle}</span>
                           <span className="tpd-redio-style-span"></span>
                        </button>
                     </li>
                  ))}
               </ul>

               <div className="tab-content" id="myTabContent">
                  {tabContentData.map((tab) => (
                     <div
                        key={tab.id}
                        className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                        id={tab.id}
                        role="tabpanel"
                        aria-labelledby={`${tab.id}-tab`}
                     >
                        <div className="tpd-setting-from">
                           <div className="row">
                              {tab.formFields.map((field, index) => (
                                 <div className={`col-lg-${index % 2 === 0 ? '6' : '12'}`} key={field.label}>
                                    <div className="tpd-input">
                                       <label>{field.label}</label>
                                       <input type="text" placeholder={field.placeholder} />
                                    </div>
                                 </div>
                              ))}
                              <div className="col-lg-12">
                                 <div className="tpd-setting-cartificate-btn">
                                    <button>Save Withdrawal Account</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         );
      </div>
   )
}
