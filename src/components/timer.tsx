"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <ul>
      <li>
        <span data-days>{days}</span> Days
      </li>
      <li>
        <span data-hours>{hours}</span> Hours
      </li>
      <li>
        <span data-minutes>{minutes}</span> Mins
      </li>
      <li>
        <span data-seconds>{seconds}</span> Secs
      </li>
    </ul>
  );
}

export default dynamic(() => Promise.resolve(Timer), { ssr: false });
