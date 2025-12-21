"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Icons from "../Icons";

// Mobile menu is inlined inside Header to keep code compact

const Header = () => {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "Our Services", url: "/our-services" },
    { title: "Gallery", url: "/gallery" },
    { title: "Contact Us", url: "/contact-us" },
    { title: "Certificates", url: "/certificates" },
  ];
  const [open, setOpen] = useState(false);
  const [topPosition, setTopPosition] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topbar = document.getElementById("topbar");
      const height = topbar?.offsetHeight || 0;
      const scrollY = window.scrollY;
      const newTop = Math.max(height - scrollY, 0);
      setTopPosition(newTop);
      setScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Run once on the next animation frame to avoid calling setState synchronously in the effect body.
    const raf = requestAnimationFrame(handleScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{ top: `${topPosition}px` }}
        id="header-main"
        className="backdrop-blur-2xl border-b border-white/10 border-solid overflow-x-clip fixed left-0 w-full z-10 transition-all ease-linear duration-300"
      >
        <div className=" container">
          <div className="flex justify-between ">
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
                className={`h-auto transition-all! ease-linear! duration-300! ${
                  scrolled
                    ? "w-20 sm:w-22.5 2xl:w-20"
                    : "w-24 sm:w-26.5 2xl:w-24"
                }`}
              />
            </Link>

            {/* Hamburger - small screens */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/5 focus:outline-none scale-125"
            >
              <Icons name="menu" />
            </button>

            {/* Backdrop overlay - closes menu when clicking outside (mobile only) */}
            <div
              onClick={() => setOpen(false)}
              className={
                "fixed inset-0 bg-black/90 z-0  transition-opacity duration-300 md:hidden h-dvh w-screen " +
                (open
                  ? "opacity-100 pointer-events-auto backdrop-blur-2xl"
                  : "opacity-0 pointer-events-none")
              }
            />

            {/* Nav - inline on md+, slides/fades from right on small screens */}
            <nav
              className={
                "items-center  gap-x-1 xl:gap-x-3.5 md:flex transition-all! duration-300! ease-linear! rounded-lg p-4 pt-5 md:p-0 w-64 md:w-auto max-h-[70vh] overflow-auto " +
                (open
                  ? " translate-x-0 opacity-100 pointer-events-auto backdrop-blur-2xl"
                  : " opacity-0 translate-x-full pointer-events-none") +
                " fixed top-21 right-4 z-50 md:static md:translate-x-0 md:opacity-100 md:pointer-events-auto bg-white/5 md:bg-transparent border border-white/20 md:border-0 md:rounded-none"
              }
            >
              {/* Close button (mobile only) */}
              <div className="flex justify-end md:hidden absolute z-50 top-2 right-2">
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <Icons name="close" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-x-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className="text-bold capitalize md:opacity-80 hover:opacity-100 md:px-3 py-1 sm:py-2 md:py-4 pos-underline h-full flex items-center"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </nav>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Header;
