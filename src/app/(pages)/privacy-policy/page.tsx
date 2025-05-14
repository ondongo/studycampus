import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Privacy Policy - Acadia",
};

export default function PrivacyPolicyPage() {
  return (
    <main>

      {/* privacy policy area start */}
      <section className="tp-privacy-area pt-120 pb-120" style={{ backgroundColor: "#EAECF3" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tp-privacy-heading">
                <h3 className="tp-privacy-title">Privacy Policy </h3>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="tp-privacy-box">
                <div className="tp-privacy-content">
                  <h4 className="tp-privacy-content-title">Introduction</h4>
                  <p>At Acadia, we value your privacy and are committed to protecting your personal information. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your data. By using our website or services, you consent to the practices described in this policy.</p>
                </div>
                <div className="tp-privacy-content">
                  <h4 className="tp-privacy-content-title">Information We Collect</h4>
                  <p>We may collect various types of information from you, including:</p>
                  <ul>
                    <li>Personal Information: Name, email address, contact details.</li>
                    <li>Billing Information: Payment card details, billing address.</li>
                    <li>Usage Data: Information about how you use our website.</li>
                    <li>Cookies and Tracking Data: Data collected through cookies, web beacons, and similar technologies.</li>
                  </ul>
                </div>
                <div className="tp-privacy-content">
                  <h4 className="tp-privacy-content-title">How We Use Your Information</h4>
                  <p>We use your information for the following purposes:</p>
                  <ul>
                    <li>To provide, maintain, and improve our services.</li>
                    <li>To process transactions and send transaction notifications.</li>
                    <li>To respond to your requests, comments, or questions.</li>
                    <li>To personalize your user experience.</li>
                    <li>To send you important information and updates.</li>
                  </ul>
                </div>
                <div className="tp-privacy-content">
                  <h4 className="tp-privacy-content-title"> Information Sharing</h4>
                  <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your information with trusted third parties who assist us in operating our website and services, as long as they agree to keep this information confidential. </p>
                </div>
                <div className="tp-privacy-content">
                  <h4 className="tp-privacy-content-title">Data Security</h4>
                  <p>We implement a variety of security measures to protect your personal information. We use encryption, secure socket layer technology, and regular security audits to safeguard your data.</p>
                </div>
                <div className="tp-privacy-content">
                  <h4 className="tp-privacy-content-title">Cookies and Tracking Technologies</h4>
                  <p>We use cookies and similar tracking technologies to enhance your user experience. You can choose to disable cookies through your browser settings; however, this may affect your ability to use our website.</p>
                </div>
                <div className="tp-privacy-content">
                  <h4 className="tp-privacy-content-title">Your Choices</h4>
                  <p>You can choose not to provide certain information; however, this may limit your access to some features of our website.</p>
                </div>
                <div className="tp-privacy-content">
                  <h4 className="tp-privacy-content-title">Changes to this Privacy Policy</h4>
                  <p>We reserve the right to update or change this Privacy Policy at any time. When we do, we will revise the {"Effective Date"} at the beginning of this policy. We encourage you to periodically review this page for the latest information on our privacy practices.</p>
                </div>
                <div className="tp-privacy-content">
                  <h4 className="tp-privacy-content-title">Contact Us</h4>
                  <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at support@acadia.net</p>
                </div>
                <div className="tp-privacy-content-bottom mt-30">
                  <p>Last updated on October 15, 2023. ThemePure reserves the right to change or modify the above contents at any time without any prior notice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* privacy policy area end */}
    </main>
  );
}
