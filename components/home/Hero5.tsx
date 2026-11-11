import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";

const features = [
  {
    id: "engage",
    label: "Engage",
    headingStart: "",
    highlight: "Agent-driven drafting",
    headingEnd: ", redlining and playbook creation",
    image: "/hero5/engage.svg",
    imagePosition: "right",
    bullets: [
      {
        title: "Built for your teams:",
        text: "Legal, sales, and procurement teams that collaborate on contracts at speed.",
      },
      {
        title: "Across the contract lifecycle:",
        text: "Agent-driven contract drafting, review, and negotiation, with embedded legal intelligence.",
      },
      {
        title: "Delivering better outcomes:",
        text: "AI agents guide decisions by applying playbooks, flagging risk, and auto-enforcing legal standards.",
      },
    ],
  },
  {
    id: "operate",
    label: "Operate",
    headingStart: "A ",
    highlight: "structured system",
    headingEnd: " that makes contracts actionable",
    image: "/hero5/operate.svg",
    imagePosition: "left",
    bullets: [
      {
        title: "Built for your teams:",
        text: "Legal, Procurement, Sales, and contract owners managing agreements and commitments.",
      },
      {
        title: "Across the contract lifecycle:",
        text: "Contracts centralization—including ingestion, discovery, obligations management, and fulfillment tracking.",
      },
      {
        title: "Delivering better outcomes:",
        text: "Turns unstructured contracts into structured records, tracked obligations, and measurable outcomes.",
      },
    ],
  },
  {
    id: "analyze",
    label: "Analyze",
    headingStart: "",
    highlight: "Continuous intelligence",
    headingEnd: " for your contracts",
    image: "/hero5/analyse.svg",
    imagePosition: "right",
    bullets: [
      {
        title: "Built for your teams:",
        text: "Finance, procurement, and legal teams seeking enterprise-wide contract intelligence across their business.",
      },
      {
        title: "Across the contract lifecycle:",
        text: "AI-powered summaries, natural-language Q&A, and insights across contracts, systems, and data sources.",
      },
      {
        title: "Delivering better outcomes:",
        text: "Transforms contracts into intelligence that continuously surfaces risk exposure, obligations, and revenue opportunities.",
      },
    ],
  },
];

export default function Hero5() {
  return (
    <section className="py-12 md:py-20">
      <div className="global-container">
        <div className="mx-auto max-w-[1600px] space-y-12 md:px-14 lg:space-y-16">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={feature.imagePosition === "left" ? "lg:order-2" : ""}>
                <p className="font-inter text-[18px] font-medium leading-[22px]">
                  {feature.label}
                </p>
                <h2 className="mt-5 max-w-[560px] font-lora text-[28px] font-medium leading-9 tracking-normal text-[#333333] md:text-[34px] md:leading-[42px]">
                  {feature.headingStart}
                  <span className="text-[#914858]">{feature.highlight}</span>
                  {feature.headingEnd}
                </h2>

                <ul className="mt-8 space-y-5">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet.title} className="flex items-start gap-5">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <p className="font-inter text-base font-normal leading-7 text-[#333333]">
                        <strong className="font-semibold">{bullet.title}</strong>{" "}
                        {bullet.text}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Add a link when the product destination is available. */}
                <span className="mt-8 ml-10 inline-flex items-center gap-2 font-inter text-sm font-medium leading-6 text-primary">
                  Learn More
                  <ChevronRight size={14} aria-hidden="true" />
                </span>
              </div>

              <div
                className={`flex aspect-[500/480] w-full max-w-[500px] items-center justify-center justify-self-center overflow-hidden rounded-[24px] bg-[#F2F2EF] ${
                  feature.imagePosition === "left"
                    ? "lg:order-1 lg:justify-self-start"
                    : "lg:justify-self-end"
                }`}
              >
                <Image
                  src={feature.image}
                  alt={`Vera contract intelligence platform highlighting ${feature.label}`}
                  width={400}
                  height={400}
                  className="h-auto w-full max-w-[400px] object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
