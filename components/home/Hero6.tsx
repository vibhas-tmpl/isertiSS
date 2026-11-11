import Image from "next/image";

export default function Hero6() {
  return (
    <section className="py-16 md:py-24">
      <div className="global-container">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-lora text-[32px] font-medium leading-[42px] tracking-normal text-[#303030] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[60px]">
            <span className="text-primary">Contract</span> from where you work
          </h2>

          <p className="mt-4 max-w-2xl font-inter text-base font-normal leading-7 tracking-normal text-[#303030]">
            Work within the tools you use everyday while contracts stay{" "}
            <br className="hidden sm:inline" />
            connected, accurate, and aligned.
          </p>

          <Image
            src="/hero6/Integration%20Design.svg"
            alt="Icertis integrations connecting contracts with enterprise tools across procurement, finance, sales, and collaboration"
            width={1169}
            height={640}
            className="mx-auto mt-10 h-auto w-full max-w-6xl object-contain md:mt-14"
          />
        </div>
      </div>
    </section>
  );
}
