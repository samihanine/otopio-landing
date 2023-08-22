import { Image } from "@/components/Image";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    headline: "“Highly skilled and professional”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Katy Jackson",
      role: "Designer at Mailgorilla",
      image: "/images/avatars/avatar-1.png",
    },
  },
  {
    headline: "“I highly recommend him”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Sean Murphy",
      role: "Founder of North Agency",
      image: "/images/avatars/avatar-2.png",
    },
  },
  {
    headline: "“I’m so lucky I found John!”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Elaine Foster",
      role: "CEO of Wakatech",
      image: "/images/avatars/avatar-3.png",
    },
  },
  {
    headline: "“I’m really impressed with the quality of his work”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Jeff Bick",
      role: "Developer at Bad Inc.",
      image: "/images/avatars/avatar-4.png",
    },
  },
  {
    headline: "“Seriously awesome!”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Jason Cosmo",
      role: "CEO of Eastern Digital",
      image: "/images/avatars/avatar-5.png",
    },
  },
  {
    headline: "“Highly skilled and professional”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Katy Jackson",
      role: "Designer at Mailgorilla",
      image: "/images/avatars/avatar-1.png",
    },
  },
  {
    headline: "“I highly recommend him”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Sean Murphy",
      role: "Founder of North Agency",
      image: "/images/avatars/avatar-2.png",
    },
  },
  {
    headline: "“I’m so lucky I found John!”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Elaine Foster",
      role: "CEO of Wakatech",
      image: "/images/avatars/avatar-3.png",
    },
  },
  {
    headline: "“I’m really impressed with the quality of his work”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Jeff Bick",
      role: "Developer at Bad Inc.",
      image: "/images/avatars/avatar-4.png",
    },
  },
  {
    headline: "“Seriously awesome!”",
    content:
      "And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
    author: {
      name: "Jason Cosmo",
      role: "CEO of Eastern Digital",
      image: "/images/avatars/avatar-5.png",
    },
  },
];

const companies = [
  { name: "Zendesk", logo: "/images/logos/zendesk.svg" },
  { name: "Intercom", logo: "/images/logos/intercom.svg" },
  { name: "Coursera", logo: "/images/logos/coursera.svg" },
  { name: "Unbounce", logo: "/images/logos/unbounce.svg" },
  { name: "Prismic", logo: "/images/logos/prismic.svg" },
  { name: "Codesee", logo: "/images/logos/codesee.svg" },
  { name: "Booqable", logo: "/images/logos/booqable.svg" },
  { name: "Tapcart", logo: "/images/logos/tapcart.svg" },
  { name: "Mailchimp", logo: "/images/logos/mailchimp.svg" },
  { name: "Instagram", logo: "/images/logos/instagram.svg" },
];

export function Testimonials() {
  let testimonialsCount = parseFloat(testimonials.length.toString());
  let [swiperIndex, setSwiperIndex] = useState(1);
  let [carouselProgress, setCarouselProgress] = useState(15);

  useEffect(() => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 1138) {
      setCarouselProgress(((swiperIndex + 3) / testimonialsCount) * 100);
    }
  }, [swiperIndex]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:pt-32 ">
      <Container className="relative">
        <div className="mx-auto grid max-w-xl gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
              Here’s what past clients are saying about me
            </h2>
            <div className="mt-10 hidden h-[7px] w-full rounded-full bg-slate-200 lg:mt-16 lg:block">
              <div
                className="h-full rounded-full bg-slate-900 duration-200"
                style={{ width: `${carouselProgress}%` }}
              ></div>
            </div>
          </div>
          <div className="lg:ml-auto lg:max-w-sm">
            <p className="text-lg text-slate-700">
              Iced pumpkin ristretto irish trifecta robusta trade froth affogato
              barista con barista cappuccino filter roast.
            </p>
            <div className="mt-14 flex gap-2.5 lg:mt-12">
              <button className="carousel-prev inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm shadow-sky-200/75 ring-1 ring-slate-200/60 duration-200 hover:bg-sky-50/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-sky-700/70"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="carousel-next inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm shadow-sky-200/75 ring-1 ring-slate-200/60 duration-200 hover:bg-sky-50/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-sky-700/70"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="relative mt-8 lg:mt-24">
        <Container className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".carousel-next", prevEl: ".carousel-prev" }}
            scrollbar={{ draggable: true }}
            spaceBetween={0}
            slidesPerView="auto"
            grabCursor={true}
            loop={false}
            centeredSlides={false}
            initialSlide={0}
            onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
            className="!overflow-visible"
          >
            <div className="flex w-full">
              {testimonials.map((testimonial, testimonialIndex) => (
                <SwiperSlide
                  key={`testimonial-${testimonialIndex}`}
                  className="swiper-slide !h-auto !w-auto shrink-0 border-b border-l border-t border-slate-200 p-10 shadow-sm shadow-sky-100/50 first:rounded-l-2xl last:rounded-r-2xl last:border-r"
                >
                  <div className="flex h-full w-full max-w-[272px] flex-1 flex-col">
                    <div className="flex-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((i, n) => (
                          <svg
                            key={`testimonial-${testimonialIndex}-star-${n}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-yellow-400"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <h4 className="mt-7 font-display text-xl font-medium text-slate-900">
                        {testimonial.headline}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {testimonial.content}
                      </p>
                    </div>
                    <div>
                      <hr className="my-6 h-px w-full bg-slate-200" />
                      <div className="flex items-center justify-between">
                        <div className="">
                          <p className="font-display text-md font-medium text-slate-900">
                            {testimonial.author.name}
                          </p>
                          <p className="mt-1.5 text-sm text-slate-600">
                            {testimonial.author.role}
                          </p>
                        </div>
                        <Image
                          src={testimonial.author.image}
                          alt={testimonial.author.name}
                          className="h-14 w-14 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </Container>
        <div className="absolute inset-y-0 right-0 z-10 hidden bg-gradient-to-r from-slate-50/0 to-slate-50/80 2xl:block 2xl:w-64"></div>
      </div>
      <Container className="mt-16 sm:mt-20">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-none">
          <h3 className="relative max-w-xs font-writing text-[27px] tracking-wide text-slate-600">
            These are some <span className="text-sky-700">companies</span> I
            have worked with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="101"
              viewBox="0 0 124 101"
              fill="none"
              className="absolute -right-1 top-0 hidden h-auto w-28 translate-x-full text-slate-600 sm:block"
            >
              <g clipPath="url(#clip0_46_948)">
                <path
                  d="M13.1589 30.5605C25.87 29.4569 33.2606 30.8618 39.6091 42.3857C43.633 49.6899 46.4183 59.3311 46.3238 67.7073C46.2691 72.5626 42.2892 65.9515 41.6704 64.6273C34.5099 49.3076 36.8933 29.794 50.6002 18.9635C59.5333 11.9051 68.6204 16.8471 75.1399 24.5336C85.0823 36.2557 86.6911 53.2905 83.9281 67.8963C83.0089 72.755 81.0734 87.6248 74.4798 88.4661C69.0168 89.1631 70.7054 79.5464 71.3591 76.6577C72.2912 72.5391 74.6187 63.7152 78.7577 61.7025C84.694 58.8161 90.7263 68.0342 92.566 72.2364C96.0595 80.2162 97.0519 90.0519 98.5548 98.5871C98.6653 99.2155 96.1022 96.1168 95.6489 95.5787C94.3499 94.0379 92.4806 93.0934 91.3132 91.4383C90.4471 90.2104 87.3106 82.7634 91.0886 86.4645C92.4201 87.7691 96.7405 98.7863 97.1778 98.7038C98.9644 98.3683 102.67 87.2815 103.339 85.227C104.949 80.2795 94.9776 86.3346 93.782 87.3542"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_46_948">
                  <rect
                    width="106"
                    height="67"
                    fill="white"
                    transform="matrix(0.932551 0.361039 0.361039 -0.932551 0 62.481)"
                  />
                </clipPath>
              </defs>
            </svg>
          </h3>

          <div className="mt-12 grid grid-cols-2  gap-2.5 sm:mt-14 lg:mt-20  lg:grid-cols-5">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center rounded-xl border border-slate-200/90 py-7 shadow-sm shadow-sky-100/50"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  unoptimized
                  className="h-auto w-32 sm:w-36"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
