import { PlaySvg } from "../svg";
import VideoProvider from "../video/video-provider";

export default function CampusVideoArea() {
  return (
    <div
      className="tp-video-5-area tp-video-hover tp-video-inner-bg"
      style={{ backgroundImage: `url(/assets/img/campus/campus/video-bg.jpg)` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="tp-video-5-btn tp-video-button">
              <VideoProvider videoId="554609715" vimeoPlayer={true}>
                <span className="tp-m-play-inner campus">
                  <svg
                    className="tp-circle-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="152"
                    height="152"
                    viewBox="0 0 152 152"
                  >
                    <path
                      id="tp-cicle-path-934"
                      fill="#FFFFFF"
                      d="M18,76a58,58,0,1,1,58,58A58,58,0,0,1,18,76"
                    ></path>
                    <text className="tp-circle-text">
                      <textPath xlinkHref="#tp-cicle-path-934">
                        STOP WISHING • START DOING
                      </textPath>
                    </text>
                  </svg>
                  <PlaySvg />
                </span>
              </VideoProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
