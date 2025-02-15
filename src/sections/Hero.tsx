import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroBg } from "@/components/hero-bg";
import { HeroRings } from "@/components/hero-rings";

export const Hero = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
      <HeroRings />
      <HeroBg />
    </div>
    <div className="container ">
      <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="Memoji" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
          </div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
      </div>
      <div className="max-w-xl mx-auto">
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">Building Exceptional User Experiences</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">We specialize in transforming designs into functional and user-friendly web applications. Let's work together to bring your ideas to life!</p>
      </div>
      <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore Our Work</span>
          <ArrowDown className="size-4"/>
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span >👋</span>
          <span className="font-semibold">Contact Us</span>
        </button>
      </div>
    </div>
  </div>
  );
};
