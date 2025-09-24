import Image from 'next/image';
import Link from 'next/link';

export default function CallForPapers() {
  return (
    <div className="bg-white">
      <div className="max-w-5xl py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
        <div className="relative px-4 py-16 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-10">
          <Image
            src="/rail-bridge-bg.jpg"
            alt="Background image of a railroad bridge"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0 blur-sm brightness-50"
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'radial-gradient(circle, rgba(180,83,9,0.3) 0%, rgba(153,27,27,0.4) 50%, rgba(120,20,20,0.5) 100%)',
            }}
          ></div>
          <div className="relative z-20">
            <h2 className="max-w-2xl mx-auto text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Call for Papers
              <br />
              WRI 2026 Heavy Haul Conference
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-sm leading-6 text-gray-100 sm:text-base sm:leading-7">
              Wheel Rail Seminars is looking for candidates to present at the
              April 22-24 Wheel/Rail Interaction Heavy Haul Conference (WRI 2026
              HH) that will be held in Dallas, Texas. If you are interested in
              being considered for presenting at the conference, please fill out
              the form using the link below.
            </p>
            <div className="flex items-center justify-center mt-8">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdDymhq6szo8p-OSBoZwSBdyEnzaPfTO8ZugSha5VjFuDtn0w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-semibold transition-colors duration-200 transform bg-white border-2 border-white shadow-sm rounded-xl text-wri-red hover:bg-wri-red hover:text-white hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
