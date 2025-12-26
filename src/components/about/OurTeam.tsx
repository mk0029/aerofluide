"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OurTeam = () => {
  const aboutUs = () => [
    {
      name: "John Doe",
      gander: "male",

      role: "Chief Engineer",
      description:
        "With over 20 years of experience in structural engineering, Mr. Doe leads our team with expertise and dedication to quality assurance.",
      profile: "",
    },
    {
      name: "Jane Smith",
      gander: "female",
      role: "Senior Lab Technician",
      description:
        "Ms. Smith oversees all laboratory operations, ensuring that our testing procedures meet the highest industry standards.",
      profile: "",
    },
    {
      name: "Dr. Emily Johnson",
      gander: "female",
      role: "Materials Scientist",
      description:
        "Dr. Johnson specializes in the analysis and development of construction materials, contributing to innovative solutions for our clients.",
      profile: "",
    },
  ];

  const TeamCard = ({ data, index }: { data: any; index: number }) => (
    <div
      className={`flex max-lg:flex-col max-sm:gap-y-6 flex-wrap -mx-5.5  max-lg:items-center ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}>
      <div className="px-5.5 h-auto w-full lg:w-6/12">
        <div
          className={` relative h-auto rounded-xl overflow-hidden min-h-50 max-h-80 md:max-h-99 lg:min-h-75 ${
            index % 2 === 0 ? "lg:order-1" : ""
          }`}>
          <Image
            src="/assets/img/webp/amit-profileimage.webp"
            alt="lab"
            width={565}
            height={469}
            className="object-cover object-top max-lg:w-full lg:absolute top-0 left-0 h-full w-full"
          />
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-5.5 max-lg:text-center space-y-1 py-3">
        <h3 className="text-2xl capitalize leading-[120%]">
          {!/[^a-zA-Z\s]/.test(data.name)
            ? data.gander === "male"
              ? "Mr. "
              : "Ms. "
            : ""}
          {data.name}
        </h3>
        <h4 className="font-semibold mb-2">{data.role}</h4>
        <p className="text-base opacity-80  max-lg:mx-auto lg:max-w-11/12">
          {data.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-yellow/5">
      <div className="container max-w-5xl!  py-13 sm:py-18 md:py-22">
        <h2 className="font-light text-2xl md:text-3xl lg:text-[33px] leading-[120%] text-center mb-7 md:mb-15">
          Meet Our Highly&nbsp;
          <span className="font-bold">Skilled Team</span>
        </h2>

        {/* Desktop View */}
        <div className="hidden lg:block md:space-y-16">
          {aboutUs().map((data, index) => (
            <TeamCard key={index} data={data} index={index} />
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="pb-12!"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
            }}>
            {aboutUs().map((data, index) => (
              <SwiperSlide key={index}>
                <TeamCard data={data} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
