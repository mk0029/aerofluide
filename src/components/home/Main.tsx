import React from "react";
import Hero from "./Hero";
import InfoBlock from "../common/InfoBlock";
import Welcome from "./Welcome";
import OurMisson from "./OurMisson";
import OurService from "./OurService";
import GetInTouch from "../common/GetInTouch";

const Main = () => {
  return (
    <div>
      <Hero />
      <InfoBlock>
        <span className="font-bold">
          &quot; Aerofluid Dynamics Engineering &quot;
        </span>{" "}
        is a complete analytical solution provider offering{" "}
        <br className="max-lg:hidden" /> world class services related to
        material, water, food, cosmetic and chemical testing services.
      </InfoBlock>
      <Welcome />
      <OurMisson />
      <OurService />
      <GetInTouch />
    </div>
  );
};

export default Main;
