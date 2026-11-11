import { ChevronRight } from "lucide-react";

export default function Hero8() {
  return (
    <section className="py-12 md:py-30">
      <div className="global-container">
        <div className="relative overflow-hidden rounded-[24px] bg-[#874451] px-8 py-12 md:rounded-[32px] md:px-14 md:py-16 lg:px-20 lg:py-20">
          {/* Decorative rings stay behind the content. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-[480px] h-[720px] w-[720px] rounded-full bg-[repeating-radial-gradient(circle,transparent_0px,transparent_32px,rgba(255,255,255,0.04)_33px,rgba(255,255,255,0.04)_40px)]"
          />

          <div className="relative flex flex-col items-start gap-8 min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:justify-between">
            <div className="min-w-0">
              <h2 className="font-lora text-[32px] font-normal leading-[44px] tracking-normal text-white md:text-[40px] md:leading-[60px]">
                Ready to see AI-native
                <br />
                contracting in action?
              </h2>
              <p className="mt-4 font-inter text-[18px] font-normal leading-7 tracking-normal text-white/90 min-[1440px]:whitespace-nowrap">
                See how Engage, Operate, and Analyze work together - powered by
                Vera AI.
              </p>
            </div>

            {/* Replace these labels with links when CTA destinations are available. */}
            <div className="flex max-w-full shrink-0 flex-wrap items-center gap-4 sm:flex-nowrap">
              <span className="inline-flex h-12 w-[215px] max-w-full items-center justify-center gap-2 rounded-lg bg-[#221410] px-[30px] py-3 font-inter text-base font-semibold leading-6 text-white transition-colors duration-300 hover:bg-white hover:text-[#221410]">
                Talk to an expert
                <ChevronRight size={16} aria-hidden="true" />
              </span>
              <span className="inline-flex h-12 w-[185px] max-w-full items-center justify-center rounded-lg border border-transparent bg-white px-5 py-3 font-inter text-base font-semibold leading-6 text-primary transition-colors duration-300 hover:bg-black hover:text-white">
                Request a demo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
