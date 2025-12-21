import React from "react";

const OurMisson = () => {
  const sections = [
    {
      id: "mission-vision",
      title: "Mission & Vision",
      points: [
        "To exceed our customers’ expectations with innovative and bespoke Assurance, Testing, Inspection and Certification services for their operations and supply chain globally 24/7.",
        "To be the world’s most trusted partner for Quality Assurance.",
      ],
    },
    {
      id: "our-values",
      title: "Our Values",
      points: [
        "We always do the right thing. With precision, pace and passion.",
        "We trust each other and have fun winning together.",
        "We create sustainable growth for All.",
      ],
    },
  ];
  return (
    <div className="bg-yellow/5 pb-12 sm:pb-15 md:pb-18 lg:pb-21 pt-12 md:pt-14.5 mt-14 sm:mt-18 md:mt-22 lg:mt-30">
      <div className="container">
        <h2 className="text-center font-bold text-[26px] sm:text-3xl lg:text-[33px] leading-[120%]">
          OUR MISSION, VISION AND VALUES
        </h2>
        <div className="flex flex-wrap -mx-5 mt-6 sm:mt-10 md:mt-14 lg:mt-17.5 gap-y-6">
          {sections.map((section, index) => (
            <div className="px-5 md:w-6/12 w-full" key={index}>
              {" "}
              <div className="border-l-2 border-blue rounded-[20px] px-6 py-3.5 border-solid bg-blue/10 h-full">
                <h2 className="text-lg font-bold mb-2">{section.title}</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {section.points.map((obj, indx) => (
                    <li
                      key={indx}
                      className="text-sm font-light leading-normal opacity-80"
                    >
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMisson;
