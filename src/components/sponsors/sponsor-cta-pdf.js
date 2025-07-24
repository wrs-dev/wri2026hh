import React from 'react';
import Link from 'next/link';

export default function sponsorCta() {
  return (
    <main className="bg-white">
      <div className="py-24 mx-auto max-w-7xl sm:py-32">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Become a Sponsor Today.
          <br />
          <span className="text-xl">
            Don't delay - Learn more about sponsorship opportunities.
          </span>
        </h2>
        <div className="flex items-center mt-10 gap-x-6">
          <Link
            href="/WRI-2025-Sponsorship-Kit.pdf"
            className="rounded-md bg-wri-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-wri-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wri-green"
          >
            Download Sponsorship Kit
          </Link>
        </div>
      </div>
    </main>
  );
}
