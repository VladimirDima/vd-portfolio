"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import TransitionLink from "../../components/TransitionLink";
import { usePageTransition } from "../../context/PageTransitionContext";
import {
  pageStaggerContainer,
  pageStaggerItem,
} from "../../animations/pageTransitionVariants";

export type ProjectCaseStudyClientProps = {
  backToProjectsHref: string;
  slug: string;
  name: string;
  technologies: string[];
  intro: string;
  roleSummary: string;
  outcome: string;
  providedServices: string[];
  firstPageImage: string | import("next/image").StaticImageData;
  remainingPageImages: (string | import("next/image").StaticImageData)[];
};

const ProjectCaseStudyClient = ({
  backToProjectsHref,
  slug,
  name,
  technologies,
  intro,
  roleSummary,
  outcome,
  providedServices,
  firstPageImage,
  remainingPageImages,
}: ProjectCaseStudyClientProps) => {
  const { isExiting } = usePageTransition();
  const [animateEntry, setAnimateEntry] = useState(false);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem("portfolioEnter") === "project") {
        sessionStorage.removeItem("portfolioEnter");
        setAnimateEntry(true);
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0E1016] px-6 py-16 text-[#e4ded7] md:px-12 lg:px-20">
      <motion.div
        key={animateEntry ? "enter" : "base"}
        className="mx-auto w-full max-w-7xl"
        variants={pageStaggerContainer}
        initial={animateEntry ? "initial" : false}
        animate={isExiting ? "exit" : "visible"}
      >
        <motion.div
          variants={pageStaggerItem}
          className="fixed right-5 top-5 z-50 md:right-10 md:top-8 lg:right-16 lg:top-10"
        >
          <TransitionLink
            href={backToProjectsHref}
            aria-label="Back to projects"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e4ded7]/25 bg-[#0E1016]/90 text-[26px] font-light leading-none text-[#e4ded7] shadow-lg backdrop-blur-sm transition-colors hover:border-[#e4ded7]/55 hover:bg-[#212531] md:h-12 md:w-12 md:text-[28px]"
          >
            <span aria-hidden className="-mt-0.5 block">
              ×
            </span>
          </TransitionLink>
        </motion.div>

        <motion.header variants={pageStaggerItem} className="pb-18 md:pb-24">
          <p className="text-sm uppercase tracking-[0.25em] text-[#e4ded7]/60">
            Frontend Case Study
          </p>
          <h1 className="mt-6 max-w-6xl text-[44px] font-extrabold leading-[0.95] md:text-[72px] lg:text-[100px]">
            {name}
          </h1>
          <p className="mt-8 max-w-5xl text-xl leading-9 text-[#e4ded7]/80 md:text-[30px] md:leading-[1.55]">
            {intro}
          </p>
          <div className="mt-10 flex flex-wrap justify-start gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-xl bg-white px-4 py-2 text-[14px] font-semibold text-black md:px-5 md:py-3 md:text-[16px] lg:px-6 lg:py-4 lg:text-[18px]"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.header>

        <motion.section variants={pageStaggerItem} className="pb-12 md:pb-20">
          <div className="relative h-[320px] overflow-hidden rounded-[22px] bg-[#212531] md:h-[760px] md:rounded-[26px]">
            <div className="absolute inset-3 overflow-hidden rounded-[14px] md:inset-5 md:rounded-[18px] lg:inset-6 lg:rounded-[20px]">
              <Image
                src={firstPageImage}
                alt={`${name} image 1`}
                fill
                sizes="(max-width: 768px) 100vw, min(1280px, 90vw)"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.section>

        <motion.section variants={pageStaggerItem} className="py-12 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="text-[28px] font-bold leading-none md:text-[40px]">
                Services
              </h2>
              <ul
                className="mt-8 space-y-2 text-md font-light leading-2 text-[#e4ded7]/75 md:text-[24px] md:leading-[1.5]"
                data-no-blobity
              >
                {providedServices.map((service) => (
                  <li
                    key={service}
                    className="flex gap-4 font-light foi"
                    data-no-blobity
                  >
                    <span
                      className="mt-3 h-2.5 w-2.5 rounded-full bg-[#e4ded7]"
                      data-no-blobity
                    />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:pl-6 lg:pl-10">
              <p className="max-w-3xl text-[20px] font-bold leading-[1.08] text-[#e4ded7] md:text-[30px]">
                {roleSummary}
              </p>
            </div>
          </div>
        </motion.section>

        {remainingPageImages.map((pageImage, index) => (
          <motion.section
            key={`${slug}-image-${index + 2}`}
            variants={pageStaggerItem}
            className="pb-12 md:py-20"
          >
            <div className="relative h-[320px] overflow-hidden rounded-[22px] bg-[#212531] md:h-[760px] md:rounded-[26px]">
              <div className="absolute inset-3 overflow-hidden rounded-[14px] md:inset-5 md:rounded-[18px] lg:inset-6 lg:rounded-[20px]">
                <Image
                  src={pageImage}
                  alt={`${name} image ${index + 2}`}
                  fill
                  sizes="(max-width: 768px) 100vw, min(1280px, 90vw)"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.section>
        ))}

        <motion.section
          variants={pageStaggerItem}
          className="flex flex-col gap-14 py-12 md:gap-20 md:py-20"
        >
          <div className="order-2 md:order-2">
            <p className="text-sm uppercase tracking-[0.25em] text-[#e4ded7]/50">
              Outcome
            </p>

            <p className="mt-8 text-xl leading-9 text-[#e4ded7]/85 md:text-[28px] md:leading-[1.55]">
              {outcome}
            </p>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
};

export default ProjectCaseStudyClient;
