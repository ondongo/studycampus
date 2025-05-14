"use client";
import React from "react";
import VideoPopup from "../modal/popup-video";
import ModalProvider from "../modal/modal-provider";

type IProps = {
  cls?: string;
  children: React.ReactNode;
  videoId?: string;
  vimeoPlayer?: boolean;
}

export default function VideoProvider({cls='',children,videoId,vimeoPlayer }: IProps) {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  return (
    <>
      <a
        onClick={() => setIsVideoOpen(true)}
        className={`${cls} popup-video pointer`}
      >
        {children}
      </a>

      <ModalProvider>
        <VideoPopup
            isVideoOpen={isVideoOpen}
            onHide={() => setIsVideoOpen(false)}
            videoId={`${videoId?videoId:'LlCwHnp3kL4'}`}
            vimeoPlayer={vimeoPlayer}
          />
      </ModalProvider>
    </>
  );
}
