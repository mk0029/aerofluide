import React from "react";
import Icons from "../common/Icons";
import Image from "next/image";
import InfoBlock from "../common/InfoBlock";

const Hero = () => {
  const aboutUs = () => [
    " We go beyond testing, inspecting and certifying products; we are a            Total Quality Assurance provider to industries worldwide. Through            our global network of state-of-the-art facilities and            industry-leading technical expertise we provide innovative and            bespoke Assurance, Testing, Inspection and Certification services to customers.",
    " We go beyond testing, inspecting and certifying products; we are a            Total Quality Assurance provider to industries worldwide. Through            our global network of state-of-the-art facilities and            industry-leading technical expertise we provide innovative and            bespoke Assurance, Testing, Inspection and Certification services to customers.",
    " We go beyond testing, inspecting and certifying products; we are a            Total Quality Assurance provider to industries worldwide.",
  ];
  return (
    <div className="container  pb-13 sm:pb-18 md:pb-22 lg:pb-30">
      <InfoBlock>
        <span className="font-light text-2xl md:text-3xl lg:text-[33px] mb-3 md:mb-4 leading-[120%] text-center">
          Welcome We Are Here to&nbsp;
          <span className="font-bold">Serve you</span>
        </span>
      </InfoBlock>
      <div className="flex max-lg:flex-col max-sm:gap-y-6 max-lg:gap-y-8 flex-wrap -mx-5.5  max-lg:items-center">
        <div className="w-full lg:w-6/12 px-5.5  relative h-auto rounded-xl overflow-hidden">
          <Image
            src="/assets/img/webp/lab.webp"
            alt="lab"
            width={565}
            height={469}
            className="object-cover object-center max-lg:w-full lg:absolute top-0 left-0 h-full w-full"
          />
        </div>
        <div className="w-full lg:w-6/12 px-5.5 max-lg:text-center space-y-4 py-3">
          {aboutUs().map((text, index) => (
            <p
              key={index}
              className="text-base opacity-80  max-lg:mx-auto lg:max-w-11/12">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
