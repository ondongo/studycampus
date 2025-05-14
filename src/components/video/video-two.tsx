import React from "react";
import VideoProvider from "./video-provider";
import { CircleSvg, PlaySvg } from "../svg";

export default function VideoTwo() {
  return (
    <div
      className="tp-video-5-area tp-video-hover tp-video-5-bg"
      style={{ backgroundImage: `url(/assets/img/bg/video-5-bg-1.jpg)` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="tp-video-5-btn tp-video-button">
              <VideoProvider>
                <span className="tp-m-play-inner">
                  <CircleSvg/>
                  <PlaySvg/>
                </span>
              </VideoProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
