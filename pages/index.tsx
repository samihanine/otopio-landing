import Head from "next/head";
import { Experience } from "@/components/Experience";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StackIconsRow } from "@/components/StackIconsRow";
import { Testimonials } from "@/components/Testimonials";
import { getAllCaseStudies } from "@/lib/caseStudies";
import { CaseStudy } from "@/types";

export default function Home({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <>
      <Head>
        <title>Sami - Full Stack Developer, Entrepreneur, and Technology</title>
        <meta
          name="description"
          content="I'm a passionate developer, entrepreneur, and general technology enthusiast living in Montréal."
        />
      </Head>
      <Header />
      <Hero />
      <Experience />
      <StackIconsRow />
      <FeaturedWork caseStudies={caseStudies} />
      <Testimonials />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      caseStudies: await getAllCaseStudies(),
    },
  };
}
