import { StaticImageData } from "next/image";

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  timeToRead: number;
  image: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  thumbnail: string;
  description: string;
};

export type Company = {
  name: string;
  logo: string;
  dates: string;
  description: string;
};
