import Image from "next/image";

const footerColumns = [
  {
    title: "Products",
    links: ["Engage", "Operate", "Analyze", "Vera Copilot"],
  },
  {
    title: "Solutions",
    links: ["Department", "Financial Services", "Healthcare & Life Sciences", "Industrial", "Public Sector", "Retail and Consumer Goods", "TMT and Consulting"],
  },
  {
    title: "Resources",
    links: ["Analyst Reports", "Customer Stories", "eBooks", "Blog", "Learn About CLM", "Contracting Basics"],
  },
  {
    title: "Company",
    links: ["Company", "News", "Careers", "Events"],
  },
  {
    title: "Learn",
    links: ["What is Contract Management?", "What is Contract Intelligence?", "What is Contract Lifecycle Management?", "What is a Contractual Obligation?", "What is Contract Performance?", "What is Contract Compliance?", "Generative AI in Contract Management"],
  },
];

const legalLinks = ["Cookie Policy", "Privacy Statement", "Disclaimer", "Trust Center"];

function FooterText({ children }: { children: string }) {
  return (
    <span className="w-fit max-w-full text-sm font-normal leading-[1.45] text-[#a59c9d]">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#20161b] font-inter text-white">
      <div className="global-container">
        <div className="mx-auto grid max-w-[1760px] gap-x-10 gap-y-8 py-8 sm:py-10 lg:grid-cols-[1.3fr_repeat(5,minmax(0,1fr))] lg:py-12">
          <div className="flex flex-col items-start gap-3 border-b border-[#615457] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <Image
              src="/hero1/Icertislogo.svg"
              alt="Icertis"
              width={160}
              height={54}
              className="h-[50px] w-[150px] brightness-0 invert"
            />
            <p className="text-sm font-normal text-[#a59c9d]">
              © 2026 Icertis. All rights reserved.
            </p>
            <div className="flex flex-col items-start gap-3">
              {legalLinks.map((label) => <FooterText key={label}>{label}</FooterText>)}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col items-start gap-3">
              <h2 className="mb-0.5 text-base font-semibold text-[#f3f0ef]">
                {column.title}
              </h2>
              <div className="flex flex-col items-start gap-3">
                {column.links.map((label) => <FooterText key={label}>{label}</FooterText>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
