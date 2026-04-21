"use client";
import { useEffect, useState } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  useEffect(() => {
    const hasSeenIntro = window.localStorage.getItem("hasSeenIntroAnimation");

    if (hasSeenIntro === "true") {
      document.body.style.overflowY = "auto";
      setShouldShowLoader(false);
      return;
    }

    document.body.style.overflowY = "hidden";
    setShouldShowLoader(true);
    const timeline = preLoaderAnim();
    const fallbackId = window.setTimeout(() => {
      setShouldShowLoader(false);
      document.body.style.overflowY = "auto";
    }, 5600);
    window.localStorage.setItem("hasSeenIntroAnimation", "true");

    return () => {
      window.clearTimeout(fallbackId);
      timeline?.kill();
      document.body.style.overflowY = "auto";
    };
  }, []);

  if (!shouldShowLoader) {
    return null;
  }

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>Developer,</span>
        <span>Designer,</span>
        <span>Music ethusiast.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
