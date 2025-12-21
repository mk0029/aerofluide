import React, { ReactNode } from "react";

const InfoBlock = ({
  children,
  classname = "",
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <div className="container pt-10 pb-16 sm:py-16 md:py-20 lg:py-25">
      <h2
        className={
          classname +
          " text-lg md:text-2xl lg:text-[25px] leading-normal font-light text-center relative"
        }
      >
        {children}
        <span className="absolute  left-1/2 -translate-x-1/2 -bottom-7 md:-bottom-10 w-[116px] h-0.5 bg-white"></span>
      </h2>
    </div>
  );
};

export default InfoBlock;
