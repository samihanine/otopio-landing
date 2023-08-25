import { CaseStudy } from "@/types";

export async function getAllCaseStudies() {
  return [
    {
      link: "https://www.obeobiogas.com",
      title: "Obeo Biogas",
      date: "2023-03-01",
      tags: ["ReactJs"],
      thumbnail: "/images/work/obeobiogas.png",
      description:
        "Obeo Biogas is a startup that produces biogas from organic waste. They needed a landing page to showcase their product and services.",
    },
    {
      link: "https://www.obeobiogas.com",
      title: "Topscale",
      date: "2023-03-01",
      tags: ["ReactJs"],
      thumbnail: "/images/work/obeobiogas.png",
      description:
        "Obeo Biogas is a startup that produces biogas from organic waste. They needed a landing page to showcase their product and services.",
    },
    {
      link: "https://www.obeobiogas.com",
      title: "ALED",
      date: "2023-03-01",
      tags: ["ReactJs"],
      thumbnail: "/images/work/obeobiogas.png",
      description:
        "Obeo Biogas is a startup that produces biogas from organic waste. They needed a landing page to showcase their product and services.",
    },
    {
      link: "https://www.obeobiogas.com",
      title: "Cabinet Latif",
      date: "2023-03-01",
      tags: ["ReactJs"],
      thumbnail: "/images/work/obeobiogas.png",
      description:
        "Obeo Biogas is a startup that produces biogas from organic waste. They needed a landing page to showcase their product and services.",
    },
  ] as CaseStudy[];
}

export async function getAllTags() {
  let caseStudies = await getAllCaseStudies();
  let repeatingTags = caseStudies.map((caseStudy) => caseStudy.tags).flat();

  const tagCount = new Map();

  repeatingTags.forEach((tag) => {
    if (tagCount.has(tag)) {
      tagCount.set(tag, tagCount.get(tag) + 1);
    } else {
      tagCount.set(tag, 1); // Map to capture Count of elements
    }
  });

  const uniqueTags = Array.from(new Set(repeatingTags));

  const tags = uniqueTags.sort((tag1, tag2) => {
    let freq1 = tagCount.get(tag1);
    let freq2 = tagCount.get(tag2);

    return freq2 - freq1;
  });

  return tags.slice(0, 4);
}

export async function getFeaturedTags() {
  const tags = await getAllTags();

  return tags.slice(0, 4);
}

export async function getCaseStudiesWithTag(tag: string) {
  const caseStudies = await getAllCaseStudies();

  const caseStudiesWithTag = caseStudies.filter((caseStudy) => {
    return caseStudy.tags.some((t) => {
      console.log(tag);
      return t === tag;
    });
  });

  return caseStudiesWithTag;
}
