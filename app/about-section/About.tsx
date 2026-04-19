import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 lg:pt-20"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "Crafting digital experiences with a focus on clarity, performance, and detail."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I build modern web interfaces that balance aesthetics and functionality. Most of my work sits at the intersection of frontend development, design systems, and product thinking — turning ideas into scalable and maintainable digital products."
              }
            />
            <AnimatedBody
              text={
                "My passion lies in crafting captivating user experiences through code. From responsive designs to smooth animations, I ensure that websites are both visually appealing and user-friendly on any device. My goal is to make your online presence shine, providing a seamless and enjoyable experience for your visitors."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "Outside of development, I’m involved in Copenhagen’s arts and culture scene, where I help organize exhibitions, concerts, and events. That environment influences how I think about experience, atmosphere, and interaction."
              }
            />
            <AnimatedBody
              text={
                "Lately, I’ve also been exploring sound and hardware — building electronic music and experimenting with synthesis."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), TypeScript, React, Vue, Angular, Next.js, HTML5, Component-based architecture, Responsive design, Accessibility, JavaScript (ES6+), TypeScript, React, Vue, Angular, Next.js, HTML5, Component-based architecture, Responsive design, Accessibility,CSS, SCSS, Tailwind CSS, Material UI, Bootstrap, Design systems, UI component libraries, Animations (GSAP, Framer Motion), Three.js, WebGL, Sanity CMS, Umbraco, WordPress (custom themes), Headless CMS architecture, Content modeling, Monorepos (Nx / Turborepo), Node.js, npm, Git, Build tools, Performance optimization, SEO, Modular architecture"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "CSS3/SCSS/SASS, Tailwind CSS, Material UI, Bootstrap, Chart.js."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, FigJam, Adobe XD, ProtoPie, Adobe Photoshop, UX Research, UI Design, Prototyping, Sketch"
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          {/* <SongCarousel /> */}
          {/* <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
