import { ChevronRight, Star } from "lucide-react";

const innovations = [
  {
    title: "Meet Vera Agents",
    description:
      "Take control of your contracting process. Let Vera AI agents execute while you govern.",
    theme: "bg-[#EAF0F2] text-[#4C7383]",
    artwork: "bg-[url('/hero8/card1.svg')] bg-left-bottom",
  },
  {
    title: "Icertis and Dioptra Announce Partnership",
    description:
      "Enabling customers with best-in-class AI capabilities for surgical redlining in contracts.",
    theme: "bg-[#F4EFEA] text-[#AB5C3E]",
    artwork: "bg-[url('/hero8/card2.svg')] bg-bottom",
  },
  {
    title: "Introducing Vera, by Icertis",
    description:
      "Smarter AI built for contracts, delivering automation and insight at enterprise scale.",
    theme: "bg-[#F3ECEE] text-[#874451]",
    artwork: "bg-[url('/hero8/card3.svg')] bg-right-bottom",
  },
  {
    title: "Vera Copilot for Your Contracts",
    description: "Use natural language to search your contracts.",
    theme: "bg-[#EAF0F2] text-[#4C7383]",
    artwork: "bg-[url('/hero8/card1.svg')] bg-left-bottom",
  },
    {
    title: "Vera Copilot for Your Contracts",
    description: "Use natural language to search your contracts.",
    theme: "bg-[#EAF0F2] text-[#4C7383]",
    artwork: "bg-[url('/hero8/card1.svg')] bg-left-bottom",
  },
    {
    title: "Icertis and Dioptra Announce Partnership",
    description:
      "Enabling customers with best-in-class AI capabilities for surgical redlining in contracts.",
    theme: "bg-[#F4EFEA] text-[#AB5C3E]",
    artwork: "bg-[url('/hero8/card2.svg')] bg-bottom",
  },
];

export default function Hero9() {
  return (
    <section className="py-16 md:py-24">
      <div className="global-container">
        <p className="flex items-center gap-2 font-inter text-[12.39px] font-semibold uppercase leading-[21.23px] text-[#5B524D]">
          <Star size={14} aria-hidden="true" />
          Latest innovations
        </p>

        <div className="mt-5 flex flex-col items-start justify-between gap-6 xl:flex-row xl:items-center">
          <h2 className="font-lora text-[32px] font-medium leading-[44px] text-[#303030] md:text-[40px] md:leading-[56px] lg:text-[48px] lg:leading-[70px]">
            <span className="text-primary">Everything</span> that powers contract
            intelligence
          </h2>
          {/* Replace the label with a link when the library URL is available. */}
          <span className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gray-300 px-5 py-2 font-inter text-sm font-medium leading-6 text-[#303030]">
            Browse Library
            <ChevronRight size={16} aria-hidden="true" />
          </span>
        </div>

        {/* Negative right margin lets cards scroll to the viewport edge. */}
        <div
          role="region"
          aria-label="Latest innovations"
          tabIndex={0}
          className="mt-10 -mr-[10px] overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 md:mt-14 md:-mr-[50px] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex w-max flex-nowrap gap-6 pr-[10px] md:pr-[50px]">
            {innovations.map((innovation) => (
              <li key={innovation.title} className="w-[354px] shrink-0">
                <article
                  className={`relative h-[300px] overflow-hidden rounded-[10.62px] border border-black/[0.06] bg-no-repeat p-7 ${innovation.theme} ${innovation.artwork}`}
                >
                  <h3 className="font-lora text-xl font-medium leading-[30px]">
                    {innovation.title}
                  </h3>
                  <p className="mt-2.5 font-inter text-[12.39px] font-normal leading-[17.69px] text-[#555555]">
                    {innovation.description}
                  </p>
                  {/* Add the article URL when it is available. */}
                  <span className="mt-5 inline-flex items-center gap-2 font-source-sans text-sm font-semibold leading-5">
                    Learn More
                    <ChevronRight size={14} aria-hidden="true" />
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
