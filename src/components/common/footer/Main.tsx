import Image from "next/image";
import Link from "next/link";
import React from "react";

const Main = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        {
          label: "Building Material Testing",
          href: "/services/building-material-testing",
        },
        {
          label: "Mechanical Testing",
          href: "/services/mechanical-testing",
        },
        {
          label: "Food & Herbs Testing",
          href: "/services/food-herbs-testing",
        },
      ],
    },
    {
      title: "Navigation",
      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About",
          href: "/about",
        },
        {
          label: "Services",
          href: "/services",
        },
        {
          label: "Gallery",
          href: "/gallery",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="bg-yellow/5 pt-11 md:pt-13 lg:pt-15">
      <div className="container">
        <div className="flex max-md:justify-center max-md:flex-col justify-between pb-14 sm:pb-16 md:pb-18 lg:pb-20 gap-y-12">
          <div className="w-fit max-md:max-w-[80%] md:max-w-[330px] lg:max-w-[383px]">
            {" "}
            <Link href="/" className="py-2 md:py-4">
              <Image
                preload
                property="100"
                height={89}
                width={57}
                quality={100}
                src="/assets/img/png/page-logo.png"
                alt="Logo"
                sizes="100vw"
                className={`h-auto transition-all! ease-linear! duration-300! w-24 sm:w-26.5 2xl:w-24`}
              />
            </Link>
            <p className="pt-5 opacity-90 font-light">
              <span className="font-bold">
                Aerofluid Dynamics Engineering Solution
              </span>{" "}
              is a best service provider related to water, chemical, building
              material & cosmetic testing.
            </p>
          </div>

          <div className="flex md:justify-end grow gap-10 lg:gap-30 xl:gap-40">
            {footerLinks.map((obj, index) => (
              <div key={index} className={`w-fit`}>
                <h2
                  className={`font-bold text-xl md:text-2xl mb-3 sm:mb-4.5 lg:mb-6`}
                >
                  {obj.title}
                </h2>
                <ul className="space-y-1.5">
                  {obj.links.map((links, indx) => (
                    <li key={indx}>
                      <Link
                        href={links.href}
                        className="text-sm md:text-base font-normal pos-underline opacity-80 hover:opacity-100"
                      >
                        {links.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-3 sm:py-5 px-5 border-t border-solid border-white/30">
        <p className="text-center opacity-70">
          © Copyright 2019
          <span className="font-bold">
            {" "}
            Aerofluid Dynamics Engineering Solution
          </span>{" "}
          All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Main;
