import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug } from "../../work-section/projectDetails";

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
    "Frontend development",
    "UI implementation",
    "API integration",
    "Performance improvements",
  ];
  const roleSummary = `I shaped the frontend experience for ${project.caseStudy.client}, turning product requirements into polished interfaces, reusable components, and clear user flows.`;

  const outcome = `A smoother and more intuitive experience for users, supported by a scalable frontend foundation for ${project.caseStudy.client}.`;

  return (
    <main className="min-h-screen bg-[#0E1016] px-6 py-16 text-[#e4ded7] md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <Link
          href={backToProjectsHref}
          className="mb-10 inline-flex text-sm uppercase tracking-wider text-[#e4ded7]/70 transition-colors hover:text-[#e4ded7]"
        >
          Back to projects
        </Link>

        <header className="pb-18 md:pb-24">
          <p className="text-sm uppercase tracking-[0.25em] text-[#e4ded7]/60">
            Frontend Case Study
          </p>
          <h1 className="mt-6 max-w-6xl text-[44px] font-extrabold leading-[0.95] md:text-[72px] lg:text-[100px]">
            {project.name}
          </h1>
          <p className="mt-8 max-w-5xl text-xl leading-9 text-[#e4ded7]/80 md:text-[30px] md:leading-[1.55]">
            {project.caseStudy.intro}
          </p>
        </header>

        <section className="pb-12 md:pb-20">
          <div className="relative h-[320px] overflow-hidden rounded-[28px] bg-[#212531] md:h-[560px]">
            <Image
              src={project.image}
              alt={`${project.name} hero image`}
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="py-12 md:py-20">
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
                  <li key={service} className="flex gap-4 font-light foi" data-no-blobity>
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
        </section>

        <section className="pb-12 md:py-20">
          <div className="relative h-[320px] overflow-hidden rounded-[28px] bg-[#212531] md:h-[560px]">
            <Image
              src={project.image}
              alt={`${project.name} hero image`}
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="py-12 text-center md:py-20">
          <h2 className="text-[34px] font-extrabold leading-tight md:text-[56px]">
            Tech
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl bg-white text-black px-4 py-2 text-[14px] font-semibold md:px-5 md:py-3 md:text-[16px] lg:px-6 lg:py-4 lg:text-[18px]"
                >
                  {tech}
                </div>
              ))}
          </div>
        </section>

        <section className="grid gap-14 py-12 md:grid-cols-2 md:items-center md:gap-20 md:py-20">
          <div className="order-1 grid gap-6 md:order-1 md:pr-6 lg:pr-10">
            <div className="relative h-[240px] overflow-hidden rounded-[28px] bg-[#212531] md:h-[250px]">
              <Image
                src={project.image}
                alt={`${project.name} preview one`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[240px] overflow-hidden rounded-[28px] bg-[#212531] md:h-[250px]">
              <Image
                src={project.image}
                alt={`${project.name} preview two`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-2 md:order-2">
            <p className="text-sm uppercase tracking-[0.25em] text-[#e4ded7]/50">
              Outcome
            </p>
            
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#e4ded7]/85 md:text-[28px] md:leading-[1.55]">
              {outcome}
            </p>
          </div>

        </section>

      </div>
    </main>
  );
};

export default ProjectCaseStudyPage;
