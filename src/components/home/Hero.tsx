import Image from "next/image";
import React from "react";
import Button from "../common/Cta";

const Hero = () => {
  return (
    <div className="min-h-[80vh] md:min-h-dvh relative lg:h-180 flex flex-col">
      <Image
        src="/assets/img/webp/hero-bg.webp"
        alt="Hero Background"
        fill
        preload
        property="100"
        quality={100}
        sizes="100vw"
        className="object-cover absolute top-0 left-0 object-center pointer-events-none"
      />
      <div className="container relative z-20 h-full flex flex-col justify-center max-sm:pt-30 sm:grow">
        <h1 className="font-extralight leading-[140%]! text-[32px] md:text-4xl lg:text-5xl max-w-122.25">
          Aerofluid Dynamics
          <span className="font-bold"> Engineering Solution</span>
        </h1>
        <p className="text-base fort-normal opacity-90 sm:opacity-80  max-w-122.25 mt-4 mb-6 md:mb-10">
          A House of Building Road and Railway Material Testing Laboratory
        </p>
        <Button variant="outline" className="w-fit">
          Test Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
