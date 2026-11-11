import Image from "next/image";

export default function Hero4() {
  return (
    <section className="py-8 md:py-12">
      <div className="global-container">
        <div className="grid items-center gap-6 rounded-[24px] bg-[#874451] px-6 py-10 min-[992px]:grid-cols-2 min-[992px]:rounded-[32px] min-[992px]:py-16 min-[992px]:pr-16 min-[992px]:pl-0">

          {/* Left Image */}
          <div className="mx-auto flex aspect-square w-full max-w-[400px] items-center justify-center">
            <Image
              src="/hero4/Flywheel-Vera-callout-Icertis-logo-vera%201.svg"
              alt="The Vera Flywheel - Analyze, Engage, Operate"
              width={400}
              height={400}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="flex min-w-0 flex-col gap-8 m-0 p-0">

          <h2 className="font-lora text-[40px] font-medium leading-[50px] tracking-normal text-white sm:text-[50px] sm:leading-[60px] min-[992px]:text-[64px] min-[992px]:leading-[76px]">
            The Vera Flywheel. Intelligence That Compounds
          </h2>

            <p className="max-w-[500px] font-source-sans text-[18px] font-normal leading-[30px] tracking-normal text-white/90">
              Each stage feeds the next, creating a continuous learning loop that
              makes Vera smarter with every contract.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}