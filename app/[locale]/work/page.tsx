import { Projects } from "@/components/Projects";
import { getProjects, getTags } from "@/data/projects";
import { getI18n } from "@/locale/server";

export async function generateMetadata(_: { params: { lang: string } }) {
  const t = await getI18n();
  return {
    title: t("projects.metaTitle"),
    description: t("common.description"),
    twitter: {
      card: "summary_large_image",
      title: t("common.title"),
      description: t("common.description"),
    },
    metadataBase: process.env.NEXT_PUBLIC_BASE_URL || "",
  };
}

export default async function Page() {
  const projects = await getProjects();
  const tags = await getTags();

  return <Projects projects={projects} tags={tags} />;
}
