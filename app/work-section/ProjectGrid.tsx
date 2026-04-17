import ProjectCard from "./ProjectCard";
import { devProjects, designProjects, ProjectProps } from "./projectDetails";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectGrid = () => {
  const [activeTab, setActiveTab] = useState<"dev" | "design" | "apps">("dev");
  const tabToHash = {
    dev: "#work-development",
    design: "#work-design",
    apps: "#work-apps",
  } as const;

  useEffect(() => {
    const { hash, search } = window.location;
    const tabFromQuery = new URLSearchParams(search).get("workTab");

    if (tabFromQuery === "design") {
      setActiveTab("design");
      return;
    }

    if (tabFromQuery === "apps") {
      setActiveTab("apps");
      return;
    }

    if (tabFromQuery === "dev") {
      setActiveTab("dev");
      return;
    }

    if (hash === tabToHash.design) {
      setActiveTab("design");
      return;
    }

    if (hash === tabToHash.apps) {
      setActiveTab("apps");
      return;
    }

    if (hash === tabToHash.dev) {
      setActiveTab("dev");
    }
  }, []);

  const handleTabChange = (tab: "dev" | "design" | "apps") => {
    setActiveTab(tab);
    window.history.replaceState(null, "", tabToHash[tab]);
  };

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
          onClick={() => handleTabChange("dev")}
        >
          Websites
        </button>
        <button
          className={`text-[16px] transition-colors duration-300 md:text-[20px] lg:text-[24px] ${
            activeTab === "design" ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => handleTabChange("design")}
        >
          Web Design
        </button>
        <button
          className={`text-[16px] transition-colors duration-300 md:text-[20px] lg:text-[24px] ${
            activeTab === "apps" ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => handleTabChange("apps")}
        >
          Web Apps
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
          {(
            activeTab === "design"
              ? designProjects
              : devProjects
          ).map(
            (project: ProjectProps) => (
              <ProjectCard
                key={project.id}
                {...project}
                sourceTab={activeTab}
              />
            )
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectGrid;
