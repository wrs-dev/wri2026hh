import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Banner26HH from '@/components/banner/wri26HH-no-button';
import Navigation from '@/components/navigation';
import IconLinks from '@/components/icons';
import SponsorCta from '@/components/sponsors/sponsor-cta';
import SponsorsPackages from '@/components/sponsors/sponsorPackages';

const sponsorPackages = () => {
  return (
    <main className="bg-white">
      <Head>
        <title>WRI 2025 Sponsorships</title>
      </Head>
      <Navigation />
      <Banner26HH />
      <div className="seminar-about-text" id="sponsor">
        <div className="pt-12 mx-auto">
        {/* Main Headline */}
          <h2 className="text-6xl font-bold leading-normal text-center pt-11">
          WRI 2026 Sponsorships
          </h2>
        </div>
      </div>
      <SponsorsPackages />
    </main>
  );
};

export default sponsorPackages;