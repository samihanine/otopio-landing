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
          content="Hi, we are Otopio, a web agency of passioned developers, entrepreneurs, designers and general technology enthusiasts living in Montréal."
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
