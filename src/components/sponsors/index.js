import React from "react";
import Marquee from "./marquee"; // Import the LogoRow component

const SponsorsCloud = () => {
  return (
    <section className="pt-24 pb-48">
      <div className="container mx-auto">
        <h2 className="pb-24 text-5xl font-normal text-center">
          <strong className="text-wri-blue">Thank you</strong> to our 2026 sponsors
        </h2>
        <Marquee />
      </div>
    </section>
  );
};

export default SponsorsCloud;
