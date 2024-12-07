import { Image } from "@/components/Image";
import { Container } from "./Container";
import { Project } from "@/data/projects";
import { getI18n } from "@/locale/server";
import Link from "next/link";

export async function FeaturedWork({ projects }: { projects: Project[] }) {
  const t = await getI18n();

  return (
    <section className="overflow-x-clip bg-white pb-16 pt-8 sm:pb-24 sm:pt-12 md:pt-16">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            {t("home.work.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-slate-700 sm:mt-5">
            {t("home.work.subtitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 grid flex-col grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2">
          {projects.slice(0, 6).map((project) => (
            <div
              key={project.title}
              className="flex flex-col items-center gap-8 overflow-hidden rounded-2xl bg-slate-50 pt-4 shadow-sm shadow-sky-100/50 ring-1 ring-slate-100 sm:gap-6 justify-between"
            >
              <div className="relative order-2 px-10 pt-10">
                <div className="inline-flex items-center gap-2.5  text-sm font-medium leading-[16px] text-sky-900/80 sm:text-md">
                  {project.tags[1] || project.tags[0]}
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-slate-900 sm:mt-6 sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-md leading-8 text-slate-700 sm:mt-4 sm:text-base sm:leading-8">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 flex items-center gap-2 text-sm font-medium text-sky-600 duration-200 ease-in-out hover:text-sky-700 sm:text-md"
                >
                  {t("home.work.view")}
                </a>
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex h-fit w-full rounded-2xl ring-1 ring-slate-100/75 lg:order-2  lg:rounded-l-none lg:rounded-r-none xl:rounded-tl-2xl"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full aspect-video object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
