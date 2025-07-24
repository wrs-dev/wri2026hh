import React from 'react';
import Link from 'next/link';
import Animation from '@/components/animations/anim2025RT';

const Header = () => {
  return (
    <header className="bg-white shadow sm:pb-8">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/*<a
              href="https://www.masstransitmag.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/MassTransit-PresentingSponsor.png"
                width={258}
                height={75}
                alt="Mass Transit Logo"
                style={{ display: 'block' }} // Ensure images don't reformat
              />
            </a>*/}
          </div>
          <div className="flex items-center justify-center flex-grow mt-12">
            <Animation />
          </div>
          <div className="flex items-center">
            {/*<a
              href="https://www.rtands.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/RT&S-PresentingSponsor.png"
                width={217}
                height={75}
                alt="RT&S Logo"
                style={{ display: 'block' }} // Ensure images don't reformat
              />
            </a>*/}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;