import Head from "next/head";
import { Header } from "@/components/Header";
import { CaseStudies } from "@/components/CaseStudies";
import { getAllCaseStudies, getFeaturedTags } from "@/lib/caseStudies";
import { Footer } from "@/components/Footer";
import { CaseStudy } from "@/types";

export default function Work({
  caseStudies,
  tags,
}: {
  caseStudies: CaseStudy[];
  tags: string[];
}) {
  return (
    <>
      <Head>
        <title>Work - Otopio</title>
        <meta
          name="description"
          content="Explore an impressive collection of case studies showcasing a my diverse skill set, innovative solutions, and successful projects."
        />
      </Head>
      <Header />
      <CaseStudies caseStudies={caseStudies} tags={tags} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      caseStudies: await getAllCaseStudies(),
      tags: await getFeaturedTags(),
    },
  };
}
