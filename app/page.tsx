"use client";
import Hero from "./hero-section/Hero";
import { useEffect } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import NavBar from "./navbar/NavBar";

import dynamic from "next/dynamic";
const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));
const Blog = dynamic(() => import("./blog-section/BlogGrid"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      if (window.location.hash === "#work") {
        requestAnimationFrame(() => {
          const workSection = document.getElementById("work");
          workSection?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }

      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader />

      <NavBar />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        <About />
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
