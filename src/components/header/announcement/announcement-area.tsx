"use client";
import { CloseSvg } from "@/components/svg";
import Link from "next/link";
import { useState } from "react";

export default function AnnouncementArea() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  return (
    showAnnouncement && (
      <div
        className="tp-announcement-area p-relative"
        style={{ backgroundImage: `url(/assets/img/shop/shop-bg.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-announcement-wrap text-center">
                <div className="tp-announcement-content d-flex justify-content-center">
                  <p>
                    Price of $15 (<span>35% off</span>) for a limited time only,
                    back up to $39 soon.
                  </p>
                  <Link className="tp-announcement-btn" href="/shop-grid">
                    Shop Now
                  </Link>
                </div>
                <div className="tp-announcement-close">
                  <button
                    onClick={() => setShowAnnouncement(false)}
                    className="hide-button"
                  >
                    <CloseSvg />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
