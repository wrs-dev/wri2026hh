import React from 'react';
import Link from 'next/link';
import Animation from '@/components/animations/anim2026HH';

const Header = () => {
  return (
    <header className="pb-8 bg-white shadow sm:pb-8 sm:pt-8"> {/* force padding on mobile too */}
      <div className="container px-4 mx-auto">

        {/* 1) Desktop/Tablet layout (≥ sm): single row, hidden on mobile */}
        <div className="items-end justify-between hidden sm:flex">
          
          {/* Left sponsor 
          <div className="flex items-end">
            <a
              href="https://nurailcoe.railtec.illinois.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/NuRail_Presenting_Sponsor_2025.png"
                alt="NuRail Logo"
                style={{ display: 'block' }}
                className="
                  h-auto
                  sm:w-[160px]
                  md:w-[175px]
                  lg:w-[258px]
                "
              />
            </a>
          </div>*/}

          {/* Center animation */}
          <div className="flex items-end justify-center flex-grow">
            <Animation />
          </div>

          {/* Right sponsor 
          <div className="flex items-end">
            <a
              href="https://www.rtands.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/RTS_Presenting_Sponsor_2025.png"
                alt="RT&S Logo"
                style={{ display: 'block' }}
                className="
                  h-auto
                  sm:w-[140px]
                  md:w-[150px]
                  lg:w-[217px]
                "
              />
            </a>
          </div>*/}
        </div>

        {/* 2) Mobile layout (< sm): unchanged */}
        <div className="flex flex-col items-center w-full sm:hidden">
          {/* Animation on its own line */}
          <div className="flex justify-center w-full mt-4">
            <Animation />
          </div>

          {/* Two logos side by side, bottom-aligned */}
          <div className="flex items-end justify-around w-full mt-4">
            <a
              href="https://www.nurailcenter.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/NuRail_Presenting_Sponsor_2025.png"
                alt="NuRail Logo"
                style={{ display: 'block' }}
                className="w-[140px] h-auto"
              />
            </a>
            <a
              href="https://www.rtands.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative top-[-1px]"
            >
              <img
                src="/RTS_Presenting_Sponsor_2025.png"
                alt="RT&S Logo"
                style={{ display: 'block' }}
                className="w-[115px] h-auto"
              />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;