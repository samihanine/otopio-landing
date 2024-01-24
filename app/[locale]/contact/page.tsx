import Contact from "@/components/Contact";
import { getI18n } from "@/locale/server";

export async function generateMetadata(_: { params: { lang: string } }) {
  const t = await getI18n();
  return {
    title: t("contact.metaTitle"),
    description: t("common.description"),
    twitter: {
      card: "summary_large_image",
      title: t("common.title"),
      description: t("common.description"),
      creator: "@_sam0411",
    },
    metadataBase: process.env.NEXT_PUBLIC_BASE_URL || "",
  };
}

export default async function Page() {
  return <Contact />;
}
