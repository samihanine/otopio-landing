import { Image } from "@/components/Image";
import clsx from "clsx";
import { Container } from "./Container";
import { Mr_Dafoe } from "next/font/google";
import { getI18n } from "@/locale/server";

const mrDafoe = Mr_Dafoe({
  subsets: ["latin"],
  variable: "--font-mr-dafoe",
  weight: "400",
});

export async function AboutHero() {
  const t = await getI18n();
  return (
    <section className="relative bg-slate-50/50">
      <svg
        width={1068}
        height={897}
        viewBox="0 0 1068 897"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full object-cover object-left lg:w-2/3"
      >
        <rect width={1068} height={897} />
        <g opacity="0.3" filter="url(#filter0_f_783_180)">
          <path
            d="M195.029 897H386V437.865L-69.895 741.675L195.029 897Z"
            fill="#60A5FA"
            fillOpacity="0.75"
          />
          <path
            d="M386 437.865V327H29.6H-208L-69.895 741.675L386 437.865Z"
            fill="#7DD3FC"
            fillOpacity="0.8"
          />
          <path
            d="M-208 897H195.029L-69.895 741.675L-208 327V897Z"
            fill="#F0FDFA"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_783_180"
            x={-808}
            y={-273}
            width={1794}
            height={1770}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={300}
              result="effect1_foregroundBlur_783_180"
            />
          </filter>
        </defs>
      </svg>

      <Container className="relative py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:mx-0 lg:w-2/3 lg:max-w-none lg:px-8 lg:pr-16">
          <h1 className="font-display text-5xl font-semibold text-slate-900 sm:text-6xl">
            {t("about.hero.startTitle")}{" "}
            <span className="relative whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="249"
                height="22"
                viewBox="0 0 249 22"
                fill="currentColor"
                className="absolute left-0 top-2/3 h-[0.6em] w-full fill-sky-200/75"
              >
                <path d="M247.564 18.5807C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97395 208.996 8.57031 200.846 7.46093C186.542 5.51302 172.169 4.08854 157.79 3.01562C126.033 0.645827 94.0929 0.0338481 62.3387 2.36979C42.1785 3.85416 22.008 5.90885 2.32917 10.8463C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7083C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0807 99.2274 10.6719 118.484 10.9557C142.604 11.3125 166.719 12.8333 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0807 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5807Z" />
              </svg>
              <span className="relative">{t("about.hero.endTitle")}</span>
            </span>{" "}
          </h1>
          <p className="mt-8 text-lg leading-8 text-slate-700">
            {t("about.hero.paragraph1")}
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            {t("about.hero.paragraph2")}
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            {t("about.hero.paragraph3")}
          </p>
          <p
            className={clsx("mt-16 text-3xl text-slate-700", mrDafoe.className)}
          >
            Otopio
          </p>
        </div>
      </Container>
      <div className="bg-picton-blue-25 relative h-96 w-full md:h-[600px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/3">
        <Image
          src={"/images/about-hero.jpg"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <svg
          width="229"
          height="40"
          viewBox="0 0 229 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-16 left-0 mt-14 h-8 w-auto -translate-x-1/2 sm:mt-20 sm:h-10"
        >
          <g clipPath="url(#clip0_204_150)">
            <path
              d="M1 19L29.4 39L57.7 19L86.1 39L114.5 19L142.8 39L171.2 19L199.6 39L228 19"
              stroke="#0369A1"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 19L29.4 39L57.7 19L86.1 39L114.5 19L142.8 39L171.2 19L199.6 39L228 19"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L29.4 21L57.7 1L86.1 21L114.5 1L142.8 21L171.2 1L199.6 21L228 1"
              stroke="#BAE6FD"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_204_150">
              <rect width="229" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}
