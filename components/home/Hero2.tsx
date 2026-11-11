
import { ChevronRight } from "lucide-react";

const features = [
  {
    title: "AI-Native Foundation",
    background: "bg-[#D1DCE0] bg-[url('/hero2/cardcss1.svg')]",
    description: (
      <>
        Agent-first architecture and contract-grade AI, powered by the{" "}
        <strong className="font-semibold">
          world’s largest contract data lake.
        </strong>
      </>
    ),
  },
  {
    title: "Enterprise Strength",
    background: "bg-[#E7DADC] bg-[url('/hero2/cardcss2.svg')]",
    description: (
      <>
        Trusted by one-third of the Fortune 100, deeply embedded{" "}
        <strong className="font-semibold">
          within SAP, Microsoft &amp; Salesforce.
        </strong>
      </>
    ),
  },
  {
    title: "Co-innovation with SAP",
    background: "bg-[#E7DADC] bg-[url('/hero2/cardcss3.svg')]",
    description: (
      <>
        An SAP solution extension,{" "}
        <strong className="font-semibold">
          Icertis connects contracts directly to SAP Ariba,
        </strong>{" "}
        enabling real-time visibility and control across source-to-pay.
      </>
    ),
  },
  {
    title: "Industry Depth",
    background: "bg-[#D1DCE0] bg-[url('/hero2/cardcss4.svg')]",
    description: (
      <>
        <strong className="font-semibold">Pre-configured solutions</strong>{" "}
        designed to handle contracts across departments, industries, and complex
        enterprise environments.
      </>
    ),
  },
];

export default function Hero2() {
  return (
    <section className="py-10 md:py-16">
      <div className="global-container">
        <div className="grid gap-10 lg:mx-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
          {/* Introduction */}
          <div className="flex flex-col items-start">
            <h2 className="max-w-[390px] font-lora text-[36px] font-medium leading-[46px] tracking-normal md:text-[52px] md:leading-[62px]">
              Contracts are data-rich but inaccessible at{" "}
              <span className="text-primary">decision speed.</span>
            </h2>

            <p className="mt-10 max-w-[330px] font-inter text-base font-normal leading-8 lg:mt-16">
              Faster, smarter contracting needs more than a generic AI tool - it
              needs architecture, context, and depth.
            </p>

            {/* Learn More */}
            <span className="mt-8 inline-flex h-12 w-44 items-center justify-center gap-2.5 rounded-lg bg-[#241610] px-[30px] py-3 font-inter text-base font-semibold leading-6 text-white transition-colors duration-300 hover:bg-white hover:text-[#241610] lg:mt-16">
              Learn More
              <ChevronRight size={16} aria-hidden="true" />
            </span>
          </div>

          {/* Feature cards */}
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                  className={`relative flex min-h-[270px] items-center overflow-hidden rounded-lg bg-cover bg-top-right bg-no-repeat p-4 pt-60 text-[#241610] transition-all duration-300 hover:-translate-y-1 md:px-[30px] md:pt-[60px] ${feature.background}`}              >
                <div className="relative z-10">
                  <h3 className="font-lora text-[28px] font-medium italic leading-[38px] tracking-normal">
                    {feature.title}
                  </h3>

                  <div className="my-4 h-px w-10 bg-current" />

                  <p className="font-inter text-base font-normal leading-[22px]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
