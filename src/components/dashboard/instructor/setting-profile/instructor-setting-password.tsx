

export default function InstructorSettingPassword() {
    return (
        <div className="tpd-course-area">
            <div className="tpd-setting-box">
                <div className="tpd-setting-password-content">
                    <div className="col-lg-8">
                        <div className="tpd-input">
                            <label>Current Password</label>
                            <input type="text" placeholder="Current Password" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tpd-input">
                            <label>New Password</label>
                            <input type="text" placeholder="New Password" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tpd-input">
                            <label>Re-type New Password</label>
                            <input type="text" placeholder="Re-type New Password" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tpd-setting-btn">
                            <button>Set New Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
