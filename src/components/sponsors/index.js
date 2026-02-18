import React from "react";
import Link from "next/link";
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
      <div
        className="container mx-auto text-center"
        style={{ marginTop: "5rem" }}
      >
        <Link
          href="/sponsors"
          className="pt-4 pb-4 pl-8 pr-8 rounded-2xl bg-wri-blue px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-wri-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wri-green"
        >
          Visit the WRI 2026 HH Sponsor Page
        </Link>
      </div>
    </section>
  );
};

export default SponsorsCloud;
