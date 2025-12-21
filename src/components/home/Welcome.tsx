import React from "react";
import Icons from "../common/Icons";
import Image from "next/image";

const Welcome = () => {
  const features = [
    {
      id: 1,
      title: "Lab Technicians",
      subtitle: "Powerful & Skilled",
      icon: "stethoscope", // or whatever icon key/component you’re using
    },
    {
      id: 2,
      title: "Low Cost",
      subtitle: "Low cost testing & research",
      icon: "wallet",
    },
    {
      id: 3,
      title: "Notifications",
      subtitle: "Instant Email Alerts",
      icon: "mail",
    },
  ];

  return (
    <div className="container">
      <div className="flex max-lg:flex-col-reverse max-sm:gap-y-6 max-lg:gap-y-8 flex-wrap -mx-5.5 items-center mb-8 sm:mb-10">
        <div className="w-full lg:w-6/12 px-5.5">
          <Image
            src="/assets/img/webp/lab.webp"
            alt="lab"
            width={565}
            height={469}
            className="object-cover object-center max-lg:w-full"
          />
        </div>
        <div className="w-full lg:w-6/12 px-5.5 max-lg:text-center">
          <h2 className="font-light text-2xl md:text-3xl lg:text-[33px] mb-3 md:mb-4 leading-[120%]">
            Welcome to{" "}
            <span className="font-bold">
              Aerofluid Dynamics Engineering Solution
            </span>
          </h2>

          <p className="text-base opacity-80  max-lg:mx-auto lg:max-w-11/12">
            We go beyond testing, inspecting and certifying products; we are a
            Total Quality Assurance provider to industries worldwide. Through
            our global network of state-of-the-art facilities and
            industry-leading technical expertise we provide innovative and
            bespoke Assurance, Testing, Inspection and Certification services to
            customers.
          </p>
          <button className="flex items-center max-lg:justify-center max-lg:mx-auto gap-2 mt-3gtih md:mt-6 lg:mt-8 bold cursor-pointer group pos-underline">
            More About Us
            <Icons
              name="arrow"
              className="group-hover:translate-x-1 transition-all! ease-linear! duration-300!"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 gap-y-3  sm:gap-y-6 justify-center">
        {features.map((obj, index) => {
          return (
            <div
              className="px-3 w-full sm:w-6/12 w-[976pox]:w-4/12 lg:w-[28%]"
              key={index}
            >
              <div className="p-3 md:p-5 rounded-xl border border-solid border-white/10 flex items-center gap-3 sm:gap-4 lg:gap-5">
                <Icons name={obj.icon} className="max-md:scale-75" />{" "}
                <div className="">
                  <h2 className="text-base font-bold leading-[120%]!">
                    {obj.title}
                  </h2>
                  <p className="text-sm opacity-80 mt-0.5 sm:mt-1.5 leading-normal">
                    {obj.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Welcome;
