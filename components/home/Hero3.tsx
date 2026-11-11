
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const stories = [
  {
    company: "Wilson Sonsini",
    logo: "/hero3/willson.svg",
    width: 68,
    height: 26,
    metric: "90% +",
    description: "Accuracy in contract review",
    background: "bg-[#F2F2F0]",
  },
  {
    company: "Mercedes-Benz",
    logo: "/hero3/mercedes.svg",
    width: 124,
    height: 32,
    metric: "83% +",
    description: "Reduction in contract turnaround time",
    background: "bg-[#F2F2F0]",
  },
  {
    company: "ALPLA",
    logo: "/hero3/alpha.svg",
    width: 94,
    height: 18,
    metric: "60%",
    description: "Reduction in external legal spend",
    background: "bg-[#F2F2F0]",
  },
  {
    company: "Ferring Pharmaceuticals",
    logo: "/hero3/ferring.svg",
    width: 77,
    height: 36,
    metric: "50% +",
    description: "Agreements created via self-service",
    background: "bg-[#F2F2F0]",
  },
];

export default function Hero3() {
  return (
    <section className="py-12 md:py-20">
      <div className="global-container">
        <div className="mx-auto max-w-[1600px] md:px-25">
          <div className="flex flex-col items-start justify-between gap-6 xl:flex-row xl:items-center">
            <h2 className="font-lora text-[36px] font-medium leading-[46px] tracking-normal text-[#333333] md:text-[48px] md:leading-[60px]">
              Real outcomes.{" "}
              <span className="text-[#914858]">Proven at scale.</span>
            </h2>

          <span className="inline-flex h-12 w-[260px] max-w-full shrink-0 items-center justify-center rounded-md border-2 border-[#914858] bg-transparent px-5 py-2 text-center font-inter text-base font-medium leading-6 text-[#914858] transition-colors duration-300 hover:bg-[#914858] hover:text-white">
            See Their Success Stories
          </span>
          </div>

          {/* Cards */}
          <div className="mt-10 flex gap-6 overflow-x-auto lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible">
            {stories.map((story) => (
              <article
                key={story.company}
                  className={`flex h-[280px] w-[280px] shrink-0 flex-col rounded-[24px] border border-[#E0E0E0] bg-[#F2F2F0] p-6 text-[#333333] transition-colors duration-300 hover:bg-[#F1EEE7] lg:w-auto`}              >
                <div className="flex h-9 shrink-0 items-center">
                  <Image
                    src={story.logo}
                    alt={story.company}
                    width={story.width}
                    height={story.height}
                    className="h-auto max-h-9 max-w-full object-contain"
                  />
                </div>

                <p className="mt-6 font-lora text-[42px] font-medium italic leading-9 tracking-normal text-[#914858]">
                  {story.metric}
                </p>

                <p className="mt-4 font-source-sans text-[18px] font-semibold leading-[26px]">
                  {story.description}
                </p>

                <div className="mt-auto border-t border-[#E0E0E0] pt-4">
                  <span className="inline-flex items-center gap-4 font-source-sans text-base font-semibold leading-6 text-[#914858]">
                    Read Full Story
                    <ChevronRight
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
