import React from 'react';
import Link from 'next/link';

export default function FeatureSpeaker() {
  return (
    <>
      <div className="px-6 mx-auto mt-8 text-center max-w-7xl lg:px-8">
        <h2 className="text-3xl tracking-tight text-wri-blue sm:text-4xl">
          Featured Speaker
        </h2>
      </div>
      <section className="px-6 overflow-hidden bg-white lg:px-8">
        <div className="relative max-w-6xl py-8 mx-auto sm:py-16">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-8">
              <img
                className="rounded-xl"
                src="/stuart-grassie.jpg"
                alt="Stuart Grassie"
                style={{ width: '350px', height: '350px' }} // Adjust size as necessary
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-4xl font-bold text-wri-dark-blue">
                Stuart Grassie
              </h2>
              <p className="mt-2 text-xl text-normal">
                We are thrilled to have Stuart Grassie headline the Rail
                Transit Seminar. Stuart was instrumental in publishing the
                European standard on reprofiling after bringing attention to
                Rolling Contact Fatigue (RCF) on European Rail.
              </p>
              <div className="mt-4">
                <Link href="rail-transit-seminar-bios-abstracts#bio-s-grassie">
                  <div className="inline-block px-6 py-2 text-xl text-center text-white border-2 rounded-md cursor-pointer bg-wri-blue border-wri-dark-blue hover:text-wri-dark-blue hover:shadow-xl whitespace-nowrap">
                    Bio & Abstract
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
