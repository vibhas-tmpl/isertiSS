import React from "react";
import { ArrowRight } from "lucide-react";
import PlatformDiagram from "./PlatformDiagram";

export default function Hero1() {
  return (
    <section>
      <div className="global-container my-10">
        <div className="min-h-[400px] rounded-xl bg-secondary bg-[url('/hero1/Hero1.svg')] bg-[length:100%_auto] bg-top bg-no-repeat ">

          {/* AI Platform Button */}
          <div className="flex justify-center pt-12">
            <button className="rounded-3xl border-2 border-primary bg-transparent px-8 py-2 font-inter text-[14px] font-medium text-primary">
              Icertis AI Platform
            </button>
          </div>

          {/* Hero Content */}
          <div className="mt-16 flex flex-col items-center gap-6 px-5 text-center">

            {/* Heading */}
            <div>
              <h1 className="font-lora text-[56px] font-medium leading-tight">
                AI-Native{" "}
                <span className="text-primary">Contract Intelligence</span>
            </h1>
            </div>

            {/* Subheading */}
            <div >
              <p className="font-inter text-[18px] font-normal">
                Agents execute + humans govern.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-9 pb-16">
            <button className="flex h-[54px] w-[190px] items-center justify-center gap-2 rounded-lg bg-black font-inter text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black">
                Get a Demo
                <ArrowRight size={12} />
            </button>

            <button className="flex h-[54px] w-[190px] items-center justify-center rounded-lg border-2 border-gray-200 bg-white font-inter text-[16px] font-semibold text-black transition-colors duration-300 hover:bg-black hover:text-white">
                Contact Us
            </button>
            </div>
            <div>
                    <PlatformDiagram />
            </div>
          </div>
          <div>


          </div>
        </div>
      </div>
    </section>
  );
}