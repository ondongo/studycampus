import Image from "next/image";
import profile_img from "@/assets/img/dashboard/profile/dashboard-profile.jpg";
import student_img from "@/assets/img/dashboard/profile/dashboard-profile-2.jpg";
import Certificate_img from "@/assets/img/dashboard/bg/certificate-2.png";
import { CameraSvg, CameraTwoSvg, UploadSvg } from "@/components/svg";

type IProps = {
  studentProfile?: boolean;
}

export default function InstructorSettingProfileArea({studentProfile}: IProps) {
  return (
    <div className="tpd-course-area">
      <div className="row">
        <div className="col-12">
          <div className="tpd-setting-box profile">
            <div className="tp-dashboard-banner-bg profile mb-100" style={{ backgroundImage: "url(/assets/img/dashboard/bg/dashboard-bg-1.jpg)" }}>
              <div className="tp-instructor-wrap d-flex justify-content-between">
                <div className="tp-instructor-info d-flex">
                  <div className="tp-instructor-avatar p-relative profile">
                    <Image src={studentProfile?student_img:profile_img} alt="profile-img" />
                    <span><CameraSvg /></span>
                  </div>
                </div>
                <div className="tp-instructor-course-btn profile">
                  <a className="tp-btn-add-course profile" href="#"><span><CameraTwoSvg /></span> Edit Cover Photo</a>
                </div>
              </div>
            </div>
            <div className="tpd-setting-from">
              <div className="row">
                <div className="col-lg-6">
                  <div className="tpd-input">
                    <label>First Name</label>
                    <input type="text" placeholder="Hasan" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tpd-input">
                    <label>Last Name</label>
                    <input type="text" placeholder="Caster" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tpd-input">
                    <label>User Name</label>
                    <input type="text" placeholder="Instructor" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tpd-input">
                    <label>Phone Number</label>
                    <input type="text" placeholder="(+44) 433 962 004" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tpd-input">
                    <label>Skill/Occupation</label>
                    <input type="text" placeholder="Full Stack Developer" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tpd-input">
                    <label>Display name publicly as</label>
                    <input type="text" placeholder="Instructor" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="tpd-input">
                    <label>About me</label>
                    <textarea placeholder="I'm the Front-End Developer for London, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="tpd-setting-cartificate">
              <h5 className="tpd-setting-cartificate-title">Certificate Signature</h5>
              <div className="tpd-setting-cartificate-upload d-flex align-items-center">
                <div className="tpd-setting-cartificate-thumb">
                  <Image src={Certificate_img} alt="certificate-img" />
                </div>
                <div className="tpd-setting-cartificate-content">
                  <p>Size: 700x430 pixels</p>
                  <span className="upload-btn">
                    <input id="tpd-setting-cartificate-input" type="file" accept="image/png, image/jpeg" />
                    <label htmlFor="tpd-setting-cartificate-input"><span><UploadSvg /></span> Upload Image</label>
                  </span>
                </div>
              </div>
              <div className="tpd-setting-cartificate-btn">
                <button>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
