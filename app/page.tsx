"use client";
import Hero from "./hero-section/Hero";
import { useEffect, useLayoutEffect, useState } from "react";
import PreLoader from "./animations/PreLoader/PreLoader";
import NavBar from "./navbar/NavBar";
import { motion } from "framer-motion";
import { usePageTransition } from "./context/PageTransitionContext";
import {
  pageStaggerContainer,
  pageStaggerItem,
} from "./animations/pageTransitionVariants";

import dynamic from "next/dynamic";
const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  const { isExiting } = usePageTransition();
  const [animateEntry, setAnimateEntry] = useState(false);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem("portfolioEnter") === "home") {
        sessionStorage.removeItem("portfolioEnter");
        setAnimateEntry(true);
      }
    } catch {
      // ignore
    }
  }, []);

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

      <motion.div
        key={animateEntry ? "enter" : "base"}
        className="w-full"
        variants={pageStaggerContainer}
        initial={animateEntry ? "initial" : false}
        animate={isExiting ? "exit" : "visible"}
      >
        <motion.div className="w-full" variants={pageStaggerItem}>
          <NavBar />
        </motion.div>

        <main className="flex w-full flex-col items-stretch">
          <motion.div className="w-full" variants={pageStaggerItem}>
            <Hero />
          </motion.div>
          <motion.div className="w-full" variants={pageStaggerItem}>
            <Work />
          </motion.div>
          <motion.div className="w-full" variants={pageStaggerItem}>
            <About />
          </motion.div>
          <motion.div className="w-full" variants={pageStaggerItem}>
            <Contact />
          </motion.div>
          <motion.div className="w-full" variants={pageStaggerItem}>
            <Footer />
          </motion.div>
        </main>
      </motion.div>
    </>
  );
}
