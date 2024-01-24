import Experience from "@/components/Experience";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { StackIconsRow } from "@/components/StackIconsRow";
import { Testimonials } from "@/components/Testimonials";
import { getProjects } from "@/data/projects";
import { getTestimonials } from "@/data/testimonials";

export default async function Home() {
  const projects = await getProjects();
  const testimonials = await getTestimonials();

  return (
    <>
      <Hero />
      <Experience />
      <StackIconsRow />
      <FeaturedWork projects={projects} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}
