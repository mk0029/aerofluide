"use client";
import Icons from "../common/Icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OurService = () => {
  const services = [
    {
      id: "soil-testing",
      title: "Soil Testing",
      description:
        "Comprehensive soil analysis to evaluate strength, stability, and load-bearing capacity, ensuring safe and reliable foundations for construction projects.",
      image: "/assets/img/webp/SoilTesting.webp",
      link: "/services/soil-testing",
    },
    {
      id: "steel-testing",
      title: "Steel Testing",
      description:
        "Accurate testing of steel materials to verify tensile strength, ductility, and compliance with industry standards for structural safety.",
      image: "/assets/img/webp/Steel Testing.webp",
      link: "/services/steel-testing",
    },
    {
      id: "bitumen-testing",
      title: "Bitumen Testing",
      description:
        "Quality assessment of bitumen for road and pavement works, including viscosity, penetration, and durability performance checks.",
      image: "/assets/img/webp/Bitumen Testing.webp",
      link: "/services/bitumen-testing",
    },
    {
      id: "aggregate-testing",
      title: "Aggregate Testing",
      description:
        "Detailed testing of aggregates to determine gradation, strength, and durability, ensuring long-lasting concrete and road structures.",
      image: "/assets/img/webp/aggregate testing.webp",
      link: "/services/aggregate-testing",
    },
    {
      id: "concrete-testing",
      title: "Concrete Testing",
      description:
        "Evaluation of concrete quality through strength, workability, and durability tests to meet safety and performance requirements.",
      image: "/assets/img/webp/concreat-testing.webp",
      link: "/services/concrete-testing",
    },
    {
      id: "ndt",
      title: "Non-Destructive Testing",
      description:
        "Advanced non-destructive testing methods to inspect structures without damage, identifying defects while maintaining structural integrity.",
      image: "/assets/img/webp/ndt-testing.webp",
      link: "/services/non-destructive-testing",
    },
    {
      id: "cement-testing",
      title: "Cement Testing",
      description:
        "Precision testing of cement to ensure consistency, strength, and setting properties that comply with national and international standards.",
      image: "/assets/img/webp/cement-testing.webp",
      link: "/services/cement-testing",
    },
  ];

  return (
    <div className="container  py-13 sm:py-18 md:py-22 lg:py-30">
      <h2 className="text-center font-bold text-[26px] sm:text-3xl lg:text-[33px] leading-[120%] mb-2 md:mb-3.5">
        Our Services{" "}
      </h2>
      <p className="text-sm sm:text-base opacity-80 font-normal text-center">
        we provide best services
      </p>
      <div className="mt-5 pt-5 border-t border-solid border-white/30">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className="pb-10! md:pb-12! h-full"
          loop
          autoHeight={false} // 👈 IMPORTANT
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="h-auto!">
              <div className="h-full flex flex-col p-3 md:p-5 border border-solid border-white/30 hover:border-white/50 group rounded-[16px] cursor-pointer">
                <div className="relative aspect-[322.67/265] border border-solid border-white/20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    fill
                    src={service.image}
                    alt={service.title}
                    className="transition-all! ease-linear! duration-300! group-hover:scale-105 object-cover"
                  />
                </div>
                <h2 className="text-lg font-bold mt-4 mb-1.5">
                  {service.title}
                </h2>
                <p className="text-base leading-[160%] opacity-80 font-light">
                  {service.description}
                </p>
                <button className="inline-flex w-fit items-center gap-2 mt-3.5 pos-underline cursor-pointer">
                  <span>Read More</span>
                  <Icons
                    className="transition-all! ease-linear! duration-300! group-hover:translate-x-1"
                    name="arrow"
                  />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurService;
