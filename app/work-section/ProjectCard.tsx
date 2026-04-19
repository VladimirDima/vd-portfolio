import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import TransitionLink from "../components/TransitionLink";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = ProjectProps & {
  sourceTab: "dev" | "design" | "apps";
};

const ProjectCard = ({
  slug,
  name,
  description,
  technologies,
  demo,
  image,
  cardImage,
  sourceTab,
}: ProjectCardProps) => {
  const caseStudyHref = `/projects/${slug}?fromTab=${sourceTab}`;
  const coverImage = cardImage ?? image;
  const hasDemo = typeof demo === "string" && demo.trim().length > 0;

  return (
    <motion.div
      style={
        {
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      className="group relative z-10 mx-auto h-[560px] w-full max-w-[1300px] overflow-hidden rounded-3xl bg-center sm:h-[640px] lg:h-[720px]"
      initial="initial"
      animate="animate"
    >
      <Image
        src={coverImage}
        alt={name}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0E1016]/100 via-[#0E1016]/82 to-[#0E1016]/84 transition-opacity duration-300 group-hover:opacity-90" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-[0.38]"
        aria-hidden
      />
      <div
        className="absolute top-6 right-6 z-20 flex items-center justify-center gap-4 text-[#0E1016] lg:top-8 lg:right-8"
      >
        <TransitionLink
          href={caseStudyHref}
          className="rounded-xl bg-white px-4 py-2 text-[14px] font-semibold md:px-5 md:py-3 md:text-[16px] lg:px-6 lg:py-4 lg:text-[18px]"
          aria-label={`Open case study for ${name}`}
        >
          Case Study
        </TransitionLink>

        {hasDemo ? (
          <Link href={demo} target="_blank" aria-label="Open Live Demo">
            <FontAwesomeIcon
              icon={faLink}
              className="w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
              data-blobity
              data-blobity-radius="38"
              data-blobity-offset-x="4"
              data-blobity-offset-y="4"
              data-blobity-magnetic="true"
            />
          </Link>
        ) : null}
      </div>
      <div
        className="absolute right-0 bottom-0 left-0 z-20 p-8 text-white sm:p-10 lg:p-12"
      >
        <div>
          <h3 className="max-w-[90%] text-[40px] leading-none text-white md:text-[44px] lg:max-w-[420px] lg:text-[48px]">
            {name}
          </h3>
          <p
            className="mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#d6d6d6] transition-all duration-300 ease-out md:mt-0 md:max-h-0 md:translate-y-2 md:overflow-hidden md:opacity-0 md:group-hover:mt-4 md:group-hover:max-h-[220px] md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            {description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
          {technologies.map((tech, id) => (
              <span
                key={id}
                className="text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px]"
              >
                {tech}
              </span>
          ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
