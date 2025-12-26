import React from "react";
import HeroSec from "./Hero";
import Faq from "./Faq";
import Hero from "../home/Hero";
import OurTeam from "./OurTeam";

const Main = () => {
  return (
    <div>
      <Hero imgUrl="/assets/img/webp/hero-v2.webp" />
      <HeroSec />
      <OurTeam />
      <Faq />
    </div>
  );
};

export default Main;
