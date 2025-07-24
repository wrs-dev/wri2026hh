import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeatureSpeaker() {
  return (

    <div className="pt-24 pb-16 bg-white sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="pb-20 bg-gray-900 sm:pb-24 xl:pb-0">
        <div className="flex flex-col items-center px-6 mx-auto max-w-7xl gap-x-8 gap-y-10 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="w-full max-w-2xl -mt-8 xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 object-cover w-full h-full bg-gray-800 shadow-2xl rounded-2xl"
                src="/grassie-feature.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
          <p className="text-xl mb-18 text-sky-300 sm:text-1xl">Featured Speaker</p>
            <figure className="relative pt-6 isolate sm:pt-12">
              
            <div className="text-xl font-semibold leading-8 text-wri-dark-blue sm:text-2xl sm:leading-9">
                <h2 className="mb-4 text-3xl text-wri-yellow sm:text-4xl">
                  Stuart Grassie
                </h2>

                <p className="leading-10 text-white text-normal">
                We are thrilled to have Stuart Grassie headline the Rail Transit Seminar. Stuart was instrumental in publisheding the European standard on reprofiling after bringing attention to Rolling Contact Fatigue (RCF) on European Rail. 
                </p>
              </div>
              <div className="flex mt-auto">
                <Link href="rail-transit-seminar-bios-abstracts#bio-s-grassie">
                  <div className="px-12 py-6 mt-4 text-xl text-center text-white border-2 rounded-md cursor-pointer hover:text-wri-yellow hover:shadow-xl bg-wri-blue whitespace-nowrap border-wri-dark-blue hover:border-wri-yellow">
                    Bio & Abstract
                  </div>
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
 