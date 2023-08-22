import Head from "next/head";

import { Header } from "@/components/Header";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudyDetails } from "@/components/CaseStudyDetails";
import { CaseStudyGallery } from "@/components/CaseStudyGallery";
import { CaseStudyTestimonial } from "@/components/CaseStudyTestimonial";
import { CaseStudyNavigation } from "@/components/CaseStudyNavigation";
import { Footer } from "@/components/Footer";
import React from "react";

export function CaseStudyLayout({
  data,
  children,
}: {
  data: any;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{`${data.title} - Otopio`}</title>
        <meta name="description" content={data.description} />
      </Head>
      <Header />
      <CaseStudyHero
        title={data.title}
        subtitle={data.subtitle}
        tags={data.tags}
        coverImage={data.coverImage}
      />
      <CaseStudyDetails
        client={data.client}
        description={data.description}
        projectDuration={data.projectDuration}
        projectURL={data.projectURL}
      >
        {children}
      </CaseStudyDetails>
      <CaseStudyGallery images={data.images} />
      <CaseStudyTestimonial
        clientName={data.client.name}
        testimonial={data.testimonial}
      />
      <CaseStudyNavigation navigation={data.navigation} />
      <Footer newsletter={false} />
    </>
  );
}
