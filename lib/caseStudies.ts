import { CaseStudy } from "@/types";

export async function getAllCaseStudies() {
  return [
    {
      link: "https://www.topscale.ai/",
      title: "Topscale",
      date: "2023-08-15",
      tags: ["Web App"],
      thumbnail: "/images/work/topscale.png",
      description:
        "TopScale is an AI-powered tool that streamlines social media management. We designed a landing page highlighting its key features, inviting users to join the waitlist.",
    },
    {
      link: "https://emergenceentreprise.com/",
      title: "Emergence Entreprise",
      date: "2023-08-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/emergence.png",
      description:
        "Emergence Entreprise is a consulting firm that helps companies grow. We designed a landing page to showcase their services and attract new clients.",
    },
    {
      link: "https://book-store-olive.vercel.app",
      title: "Light DPH",
      date: "2023-09-01",
      tags: ["Landing Pages", "Web App"],
      thumbnail: "/images/work/light.png",
      description:
        "Light DPH is a web application that allows you to upload documents on the blockchain. You can also consult the documents uploaded by other users.",
    },
    {
      link: "https://www.youtube.com/watch?v=4WxEdc81LhU",
      title: "ALED",
      date: "2023-03-01",
      tags: ["Web App"],
      thumbnail: "/images/work/aled.png",
      description:
        "ALED is a platform for students. It allows the users to exchange documents and ask questions in a forum. It also gives the possibility to consult one's timetable, one's grades and to discuss with other students.",
    },
    {
      link: "https://cabinetlatif.fr/",
      title: "Cabinet Latif",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/cabinetlatif.png",
      description:
        "This is a showcase site that I created for an accounting firm based in Nantes, Cabinet Latif. I created the visuals and the code based on the client's feedback.",
    },
    {
      link: "https://samihanine.github.io/tuto/",
      title: "React Tutorials",
      date: "2023-03-01",
      tags: ["Web App"],
      thumbnail: "/images/work/tutorials.png",
      description:
        "I created these tutorials with the aim of helping fellow students learn Javascript. Recently, I also wrote a tutorial on React.js. In the future, I plan to cover PHP and SQL.",
    },
    {
      link: "https://www.leapyearlearning.ai/",
      title: "Leap Year Learning",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/lyl.png",
      description:
        "Leap Year Learning offers premier online courses tailored for large organizations. Our curriculum focuses on enhancing efficiency and creativity, empowering employees to adeptly navigate and utilize AI tools.",
    },
    {
      link: "https://welcome.senzu.app/fr_fr/",
      title: "Senzu Printer",
      date: "2023-03-01",
      tags: ["Web App"],
      thumbnail: "/images/work/printer.png",
      description:
        "Senzu Printer is a web application that allows printing of shipping labels for connected products. It is created using Electron and React, and is designed for use by printing partners of the company.",
    },
    {
      link: "https://samihanine.github.io/practices/",
      title: "Practice",
      date: "2023-03-01",
      tags: ["Landing Pages"],
      thumbnail: "/images/work/practice.png",
      description:
        "I designed this site as part of a tender for a human resources company : Practice. The challenge was to meet the specifications in terms of visuals.",
    },
    {
      link: "https://www.emergenceentreprise.com/", //a voir car pas accessible
      title: "Doc Share",
      date: "2023-03-01",
      tags: ["Web App"],
      thumbnail: "/images/work/docshare.png",
      description:
        "I developed a document sharing application for the consulting firm Emergence Entreprise. It allows customers to consult, download and send documents. The challenge of this application was related to data security.",
    },
    {
      link: "https://samihanine.github.io/red-dimension/",
      title: "Red Dimension",
      date: "2023-03-01",
      tags: ["Games"],
      thumbnail: "/images/work/reddimension.png",
      description:
        "I've made more than a dozen video games directly integrated in the browser. Red Dimension is my biggest javascript game project to date. I loved the creative process that came out of this project.",
    },
    {
      link: "https://www.obeobiogas.com",
      title: "Obeo Biogas",
      date: "2023-03-01",
      tags: ["Landing Pages"],
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
