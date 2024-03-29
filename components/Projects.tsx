import { Image } from "@/components/Image";
import clsx from "clsx";
import { Container } from "./Container";
import { Tabs } from "./Tabs";
import { Project } from "@/data/projects";
import { getI18n } from "@/locale/server";

export async function Projects({
  projects,
  tags,
}: {
  projects: Project[];
  tags: string[];
}) {
  const t = await getI18n();
  return (
    <section className="overflow-hidden bg-white py-16 sm:pt-24 lg:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="font-display text-5xl font-semibold text-slate-900 sm:text-6xl lg:leading-none">
              {t("projects.title")}
            </h2>

            <p className="text-lg text-slate-700 lg:ml-auto lg:max-w-lg">
              {t("projects.subtitle")}
            </p>
          </div>
          <div
            className={clsx(
              "mx-auto mt-12 grid max-w-xl gap-12 sm:mt-16 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-2 lg:gap-10 xl:gap-24",
              projects.length % 2 === 0 && "lg:pb-32"
            )}
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={clsx(
                  "flex flex-col gap-12 rounded-3xl bg-slate-100 px-7 py-12 sm:gap-14 sm:p-8 xl:gap-10",
                  index % 2 === 0
                    ? "rounded-tl-[64px]"
                    : "transform rounded-br-[64px] lg:translate-y-24 xl:translate-y-32"
                )}
              >
                <a
                  href={`${project.link}`}
                  target="_blank"
                  rel="noreferrer"
                  className={clsx(
                    "group aspect-w-16 aspect-h-9 relative block w-full overflow-hidden rounded-xl md:aspect-w-3 md:aspect-h-2",
                    index % 2 === 0 ? "order-1" : "order-2"
                  )}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full border border-slate-200 rounded-xl bg-slate-100 object-cover object-top transition duration-300 group-hover:scale-105"
                  />
                </a>
                <div
                  className={clsx(
                    "flex flex-col items-center",
                    index % 2 === 0 ? "order-2" : "order-1"
                  )}
                >
                  <h3 className="text-center font-display text-[28px] font-medium text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-center text-base leading-8 text-slate-700">
                    {project.description}
                  </p>
                  <a
                    rel={"noreferrer"}
                    target={"_blank"}
                    href={project.link}
                    className="group mt-12 inline-flex items-center justify-center gap-2 rounded-full bg-white py-3 px-9 text-md font-medium text-sky-900 shadow-sm shadow-sky-100/50 ring-1 ring-slate-100/90 transition duration-300 hover:bg-white/60 hover:text-sky-700 hover:shadow-md hover:shadow-sky-100"
                  >
                    {t("projects.view")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-sky-800 duration-300 ease-in-out group-hover:text-sky-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
