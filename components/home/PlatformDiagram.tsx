import Image from "next/image";

type DiagramItem = {
  title: string;
  description?: string;
  image?: string;
};

export type PlatformDiagramData = {
  industryTitle: string;
  industries: DiagramItem[];
  audienceTitle: string;
  audiences: DiagramItem[];
  engage: DiagramItem[];
  analyze: DiagramItem[];
  operate: DiagramItem[];
  foundation: { title: string; capabilities: string[] };
  cloud: { title: string; options: string[] };
  integrations: {
    title: string;
    description: string;
    partners: { name: string; image: string }[];
  };
  interoperability: {
    title: string;
    description: string;
    partners: { name: string; image: string }[];
  };
};

export const defaultPlatformDiagramData: PlatformDiagramData = {
  industryTitle: "Industry Solutions",

  industries: [
    { title: "Healthcare", image: "/hero1/hospital.png" },
    { title: "Manufacturing", image: "/hero1/factory.svg" },
    { title: "Life sciences", image: "/hero1/lab-flask.svg" },
    { title: "Financial services", image: "/hero1/graph.svg" },
    { title: "Public sector", image: "/hero1/bulding.svg" },
  ],

  audienceTitle: "Suppliers, Customers",

  audiences: [
    {
      title: "Suppliers",
      image: "/hero1/delivery-truck--streamline-ultimate%202.svg",
    },
    {
      title: "Customers",
      image: "/hero1/single-neutral-actions-cart--streamline-ultimate%202.svg",
    },
  ],

  engage: [
    {
      title: "Vera Engage",
      description: "AI-Native experience for pre-signature",
      image: "/hero1/engageicon.svg",
    },
  ],

  analyze: [
    {
      title: "Vera Analytics - Standard",
      description: "Contract risk and insights",
      image: "/hero1/analyse.svg",
    },
    {
      title: "Vera Analytics - Advanced",
      description: "Decision support & risk exposure",
    },
  ],

  operate: [
    {
      title: "Vera Copilot",
      description: "Natural language search & execution",
      image: "/hero1/operate.svg",
    },
    {
      title: "Contract Management Platform",
      description: "Contract lifecycle, workflows, reporting",
    },
    {
      title: "Vera Obligations",
      description: "Track and fulfill obligations",
    },
  ],

  foundation: {
    title: "Vera Foundation",
    capabilities: [
      "Data Lake",
      "Agentic platform",
      "Knowledge Graph",
      "Embeddings",
      "Precompute",
      "Multi-model Gateway",
      "Security and more",
    ],
  },

  cloud: {
    title: "Cloud",
    options: ["Public", "Private"],
  },

  integrations: {
    title: "Enterprise Integrations",
    description: "Connect with enterprise systems",
    partners: [
      { name: "Microsoft", image: "/hero1/Microsoft-Logo-PNG-Photos 1.svg" },
      { name: "SAP", image: "/hero1/SAP_BIG-323a7da5 1.svg" },
      { name: "Salesforce", image: "/hero1/salesforce 2.svg" },
      { name: "Workday", image: "/hero1/workday.svg" },
    ],
  },

  interoperability: {
    title: "Agent Interoperability",
    description: "Connect with agent ecosystems",
    partners: [
      { name: "Anthropic", image: "/hero1/claude.svg" },
      { name: "OpenAI", image: "/hero1/chatgpt.svg" },
      { name: "Copilot", image: "/hero1/copilot-color 1.svg" },
      { name: "Gemini", image: "/hero1/diamond.svg" },
    ],
  },
};

const iconClass = "h-12 w-12 shrink-0 object-contain";
const productIconClass = "h-11 w-11 shrink-0 object-contain";

function ItemImage({
  src,
  className,
  alt = "",
}: {
  src?: string;
  className: string;
  alt?: string;
}) {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className={className}
    />
  );
}

function SideLabel({ children }: { children: string }) {
  return (
    <div className="flex w-[46px] shrink-0 items-center justify-center rounded-l-[14px] bg-primary px-2 py-3 text-lg font-semibold text-white [writing-mode:vertical-rl] rotate-180 md:rounded-l-none md:rounded-r-[14px]">
      {children}
    </div>
  );
}

function DiagramItems({ items }: { items: DiagramItem[] }) {
  return (
    <div
      className="grid min-w-0 flex-1"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
      }}
    >
      {items.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className={`flex min-w-0 items-center gap-3 px-4 py-3 text-left md:gap-4 md:px-6 ${
            index > 0
              ? "border-t border-primary/70 md:border-l md:border-t-0"
              : ""
          }`}
        >
          <ItemImage
            src={item.image}
            className={productIconClass}
          />

          <div className="min-w-0">
            <h3 className="text-left font-source-sans text-base font-semibold text-primary md:text-lg">
              {item.title}
            </h3>

            {item.description && (
              <p className="mt-1 text-left font-source-sans text-sm leading-6 text-foreground/90 md:text-base">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductRow({
  title,
  items,
}: {
  title: string;
  items: DiagramItem[];
}) {
  return (
    <div className="group flex overflow-hidden rounded-[18px] border-2 border-[#d5d0c8] bg-white transition-colors duration-300 hover:border-[#874451]">
      <SideLabel>{title}</SideLabel>
      <DiagramItems items={items} />
    </div>
  );
}

export default function PlatformDiagram({
  data = defaultPlatformDiagramData,
}: {
  data?: PlatformDiagramData;
}) {
  return (
    <section
      aria-label="Icertis contract intelligence platform"
      className="global-container pb-12 font-source-sans"
    >
      <div className="relative mx-auto max-w-[1580px] px-0 py-4 md:px-10 md:py-6">
        <div className="pointer-events-none absolute inset-x-0 top-16 bottom-16 hidden rounded-[20px] border border-[#493c38] md:block" />

        <div className="relative space-y-4 md:space-y-5">

          {/* Industry Solutions and Audience */}
          <div className="grid items-center gap-5 rounded-[18px] border-2 border-[#d5d4c7] bg-white px-5 py-3 transition-colors duration-300 hover:border-[#874451] md:grid-cols-[1.4fr_1fr] md:px-10 md:py-4">
            <div className="flex flex-wrap items-center justify-start gap-x-8 gap-y-4 md:gap-x-14">
              <h2 className="whitespace-nowrap text-lg font-semibold text-[#333] md:text-[21px]">
                {data.industryTitle}
              </h2>

              <div className="flex flex-wrap items-center justify-start gap-4 text-black md:gap-6">
                {data.industries.map((item, index) => (
                  <ItemImage
                    key={`${item.title}-${index}`}
                    src={item.image}
                    alt={item.title}
                    className={iconClass}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-5 border-t border-primary/70 pt-3 md:my-3 md:justify-around md:self-stretch md:border-l md:border-t-0 md:py-0 md:pl-7 md:pt-0">
              <h2 className="text-lg font-semibold text-[#333] md:text-[21px]">
                {data.audienceTitle}
              </h2>

              <div className="flex flex-wrap items-center justify-start gap-5 text-black">
                {data.audiences.map((item, index) => (
                  <ItemImage
                    key={`${item.title}-${index}`}
                    src={item.image}
                    alt={item.title}
                    className={iconClass}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Engage and Analyze */}
          <div className="grid gap-4 md:grid-cols-[0.95fr_1.8fr]">
            <ProductRow title="Engage" items={data.engage} />
            <ProductRow title="Analyze" items={data.analyze} />
          </div>

          {/* Operate */}
          <ProductRow title="Operate" items={data.operate} />

          {/* Foundation */}
          <div className="rounded-[18px] border-2 border-[#d5d4c7] bg-white px-5 py-3 text-center md:py-4">
            <h3 className="text-center text-lg font-semibold text-primary">
              {data.foundation.title}
            </h3>

            <p className="mt-1 text-center text-sm leading-6 text-foreground/90 md:text-base">
              {data.foundation.capabilities.join(", ")}
            </p>
          </div>

          {/* Cloud, Integrations and Interoperability */}
          <div className="grid gap-4 px-0 md:grid-cols-[0.65fr_1.8fr_1.8fr] md:px-12">

            {/* Cloud */}
            <div className="flex flex-col items-center justify-center rounded-[18px] border border-[#d5d4c7] bg-white px-4 py-3 text-center">
              <h3 className="font-semibold text-[#333]">
                {data.cloud.title}
              </h3>

              <p className="mt-1 text-sm text-foreground/90 md:text-base">
                {data.cloud.options.join(", ")}
              </p>
            </div>

            {/* Integrations and Interoperability */}
            {[data.integrations, data.interoperability].map((group) => (
              <div
                key={group.title}
                className="grid items-center gap-x-3 gap-y-2 rounded-[18px] border border-[#d5d4c7] bg-white px-4 py-3 sm:grid-cols-[minmax(0,1fr)_auto] md:px-5"
              >
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#333]">
                    {group.title}
                  </h3>

                  <p className="mt-1 text-sm text-foreground/90 md:text-base">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-nowrap items-center gap-2 whitespace-nowrap sm:justify-self-end md:gap-3">
                  {group.partners.map((partner) => (
                    <Image
                      key={partner.name}
                      src={partner.image}
                      alt={partner.name}
                      width={70}
                      height={32}
                      className="h-7 w-auto max-w-[64px] object-contain"
                    />
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
