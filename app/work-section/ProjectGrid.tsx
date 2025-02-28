import ProjectCard from "./ProjectCard";
import { devProjects, designProjects, ProjectProps } from "./projectDetails";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectGrid = () => {
  const [activeTab, setActiveTab] = useState<"dev" | "design">("dev");

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16 lg:mb-20">
        <button
          className={`text-[16px] transition-colors duration-300 md:text-[20px] lg:text-[24px] ${
            activeTab === "dev" ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setActiveTab("dev")}
        >
          Development
        </button>
        <button
          className={`text-[16px] transition-colors duration-300 md:text-[20px] lg:text-[24px] ${
            activeTab === "design" ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setActiveTab("design")}
        >
          Design
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={tabVariants}
          transition={{ duration: 0.5 }}
          className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1"
        >
          {(activeTab === "dev" ? devProjects : designProjects).map(
            (project: ProjectProps) => (
              <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
                image={project.image}
                available={project.available}
              />
            )
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectGrid;
