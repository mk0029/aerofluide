import Link from "next/link";
import React from "react";
import Icons from "../Icons";

const Topbar = () => {
  const topbarlist = [
    {
      title: "9650534573",
      url: "tel:9650534573",
      icon: "whatsapp",
    },
    {
      title: "9650534573",
      url: "tel:9650534573",
      icon: "phone",
    },
    {
      title: "+911204170383",
      url: "tel:+911204170383",
      icon: "call",
    },
    {
      title: "shreeramtestinglab@yahoo.com",
      url: "mailto:shreeramtestinglab@yahoo.com",
      icon: "email",
    },
  ];
  return (
    <div className="bg-blue hidden md:block" id="topbar">
      {" "}
      <div className="container py-4 flex w-full justify-between ">
        <div className="flex gap-5 md:gap-7.5">
          {" "}
          {topbarlist.slice(0, topbarlist.length - 1).map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="flex items-center gap-x-1.5 group pos-underline text-base"
            >
              <Icons name={item.icon} className=" xl:scale-125" />
              <span className="opacity-80 group-hover:opacity-100">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <Link
          href={topbarlist[3].url}
          className="flex items-center gap-x-1.5 group pos-underline text-base"
        >
          <Icons name={topbarlist[3].icon} className=" xl:scale-125" />
          <span className="opacity-80 group-hover:opacity-100">
            {topbarlist[3].title}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
