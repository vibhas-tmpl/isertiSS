import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Hero7() {
  return (
    <section className="bg-[#F1EFE8] py-2 md:py-4">
      <div className="global-container">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 md:px-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-6 inline-flex h-[38px] w-[120px] items-center justify-center rounded-full border border-primary font-inter text-sm font-medium text-primary">
              Vera AI
            </span>

            <h2 className="font-lora text-[32px] font-medium leading-[42px] tracking-normal text-[#303030] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[60px]">
              The foundation of
              <span className="block text-primary">contract intelligence</span>
            </h2>

            <p className="mt-5 max-w-[540px] font-inter text-base font-normal leading-7 text-[#303030]">
              Vera enables you to engage, operate, and analyze contracts with
              intelligence - trained on the largest data lake in the industry,
              with enterprise-grade data privacy
            </p>

            {/* Replace with a link when the Learn More destination is available. */}
            <span className="mt-8 inline-flex h-12 w-44 items-center justify-center gap-2 rounded-lg bg-primary font-inter text-base font-semibold leading-6 text-white transition-colors duration-300 hover:bg-white hover:text-primary">
              Learn More
              <ChevronRight size={16} aria-hidden="true" />
            </span>
          </div>

          <div className="flex items-center mt-12 justify-center lg:col-span-5 lg:justify-end">
            <Image
              src="/hero4/Flywheel-Vera-callout-Icertis-logo-vera%201.svg"
              alt="The Vera Flywheel - Analyze, Engage, Operate"
              width={400}
              height={400}
              className="h-auto w-full max-w-[460px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
