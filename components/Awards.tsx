import { Image } from "@/components/Image";
import { Container } from "./Container";

const awards = [
  "/images/logos/awards/awwwards.svg",
  "/images/logos/awards/css-design-awards.svg",
  "/images/logos/awards/adobe.svg",
  "/images/logos/awards/behance.svg",
  "/images/logos/awards/dribbble.svg",
  "/images/logos/awards/logoipsum-1.svg",
  "/images/logos/awards/logoipsum-2.svg",
  "/images/logos/awards/logoipsum-3.svg",
  "/images/logos/awards/logoipsum-4.svg",
  "/images/logos/awards/logoipsum-5.svg",
  "/images/logos/awards/logoipsum-6.svg",
  "/images/logos/awards/logoipsum-7.svg",
];

export function Awards() {
  return (
    <section className="overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            My awards and acknowledgements
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-slate-50">
            Recognitions are like tattoos, you only show them off to people you
            want to impress.
          </p>
        </div>
        <div className="relative mt-14 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {awards.map((award, index) => (
              <div
                key={`award-border-${index}`}
                className="flex h-40 w-full shrink-0 items-center justify-center border border-sky-100 sm:h-48 lg:h-52"
              >
                <Image
                  src={award}
                  alt=""
                  className="relative z-10 shrink-0 scale-[.7] sm:scale-75 md:scale-90 lg:scale-75 xl:scale-100"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 overflow-hidden bg-gradient-radial from-slate-900/25 via-slate-900/95 to-slate-900"></div>
        </div>
      </Container>
    </section>
  );
}
