'use client';
import { Email, LocationFive, TelSvgThree, UserSvgFive } from "../svg";
import NiceSelect from "../ui/nice-select";


export default function ProfileInfoUpdateForm() {
    function handleGender (item: { value: string; label: string }) {
        console.log(item);
    }
    return (
        <form action="#">
            <div className="row">
                <div className="col-xxl-6 col-md-6">
                    <div className="profile__input-box">
                        <div className="profile__input">
                            <input type="text" placeholder="Enter your username" defaultValue="Pranta" />
                            <span>
                                <UserSvgFive/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-6 col-md-6">
                    <div className="profile__input-box">
                        <div className="profile__input">
                            <input type="email" placeholder="Enter your email" defaultValue="example@mail.com" />
                            <span>
                                <Email/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                    <div className="profile__input-box">
                        <div className="profile__input">
                            <input type="text" placeholder="Enter username" defaultValue="name" />
                            <span>
                                <i className="fa-brands fa-facebook-f"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                    <div className="profile__input-box">
                        <div className="profile__input">
                            <input type="text" placeholder="Enter username" defaultValue="name" />
                            <span><i className="fa-brands fa-twitter"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                    <div className="profile__input-box">
                        <div className="profile__input">
                            <input type="text" placeholder="Enter your number" defaultValue="0123 456 7889" />
                            <span>
                                <TelSvgThree/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-md-6">
                    <div className="profile__input-box">
                        <div className="profile__input">
                            <NiceSelect
                                options={[
                                    { value: "", label: "Select Gender" },
                                    { value: "male", label: "Male" },
                                    { value: "female", label: "Female" },
                                    { value: "others", label: "Others" },
                                ]}
                                defaultCurrent={0}
                                onChange={(item) => handleGender(item)}
                                name="Gender"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-xxl-12">
                    <div className="profile__input-box">
                        <div className="profile__input">
                            <input type="text" placeholder="Enter your address" defaultValue="3304 Randall Drive" />
                            <span>
                                <LocationFive/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-12">
                    <div className="profile__input-box">
                        <div className="profile__input">
                            <textarea placeholder="Enter your bio" defaultValue={"Hi there, this is my bio..."}></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-12">
                    <div className="profile__btn">
                        <button type="submit" className="tp-btn">Update Profile</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
