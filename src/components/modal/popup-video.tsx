"use client";
import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// prop type
type IPropType = {
  isVideoOpen: boolean;
  onHide: () => void;
  videoId: string;
  vimeoPlayer?: boolean;
};

const VideoPopup = ({
  isVideoOpen,
  onHide,
  videoId = "TYYf8zYjP5k",
  vimeoPlayer,
}: IPropType) => {
  console.log(videoId, vimeoPlayer);
  return (
    <ModalVideo
      channel={vimeoPlayer ? "vimeo" : "youtube"}
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={onHide}
      vimeo={vimeoPlayer ? { autoplay: true } : undefined}
    />
  );
};

export default VideoPopup;
