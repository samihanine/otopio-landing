import Head from "next/head";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { WorkExperience } from "@/components/WorkExperience";
import { Workstation } from "@/components/Workstation";
import { Stack } from "@/components/Stack";
import { Awards } from "@/components/Awards";
import { Press } from "@/components/Press";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Otopio</title>
        <meta
          name="description"
          content="Hi, I'm Jane Doe, a passionate developer, entrepreneur, and general technology enthusiast living in San Francisco."
        />
      </Head>
      <Header />
      <AboutHero />
      <WorkExperience />
      <Workstation />
      <Stack />
      <Footer />
    </>
  );
}
