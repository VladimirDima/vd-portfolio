import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug } from "../../work-section/projectDetails";
import ProjectCaseStudyClient from "./ProjectCaseStudyClient";

type ProjectPageProps = {
  params: {
    slug: string;
  };
  searchParams: {
    fromTab?: string;
  };
};

export const generateStaticParams = () =>
  allProjects.map((project) => ({
    slug: project.slug,
  }));

const ProjectCaseStudyPage = ({ params, searchParams }: ProjectPageProps) => {
  const project = getProjectBySlug(params.slug);
  const fromTab = searchParams.fromTab;
  const backTab =
    fromTab === "design" || fromTab === "apps" || fromTab === "dev"
      ? fromTab
      : "dev";
  const backToProjectsHref = `/?workTab=${backTab}#work`;

  if (!project) {
    notFound();
  }

  const providedServices = [
    ...(project.caseStudy.providedServices ?? [
      "Frontend development",
      "UI implementation",
      "API integration",
      "Performance improvements",
    ]),
  ];
  const roleSummary =
    project.caseStudy.roleSummary ??
    `I shaped the frontend experience for ${project.caseStudy.client}, turning product requirements into polished interfaces, reusable components, and clear user flows.`;

  const outcome =
    project.caseStudy.outcome ??
    `A smoother and more intuitive experience for users, supported by a scalable frontend foundation for ${project.caseStudy.client}.`;
  const pageImages =
    project.pageImages && project.pageImages.length > 0
      ? project.pageImages
      : [
          project.pageIntroImage ?? project.image,
          project.pageSecondaryImage ?? project.pageIntroImage ?? project.image,
        ];
  const [firstPageImage, ...remainingPageImages] = pageImages;

  return (
    <ProjectCaseStudyClient
      backToProjectsHref={backToProjectsHref}
      slug={project.slug}
      name={project.name}
      technologies={project.technologies}
      intro={project.caseStudy.intro}
      roleSummary={roleSummary}
      outcome={outcome}
      providedServices={providedServices}
      firstPageImage={firstPageImage}
      remainingPageImages={remainingPageImages}
    />
  );
};

export default ProjectCaseStudyPage;
