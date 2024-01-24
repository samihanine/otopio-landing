import { Header } from "@/components/Header";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/Footer";
import { getLinks } from "@/data/links";
import Providers from "@/components/Providers";
import { getI18n } from "@/locale/server";
import NextTopLoader from "nextjs-toploader";

export async function generateMetadata(_: { params: { lang: string } }) {
  const t = await getI18n();
  return {
    title: t("home.metaTitle"),
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const links = await getLinks();

  return (
    <html lang={params.locale || "en"}>
      <body className={GeistSans.className}>
        <Providers locale={params.locale}>
          <>
            <NextTopLoader color="#000000" />
            <Header links={links} />

            <main>{children}</main>
            <Footer links={links} />
          </>
        </Providers>
      </body>
    </html>
  );
}
