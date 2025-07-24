import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Banner25HH from '@/components/banner/wri25HH';
import IconsHH from '@/components/icons/iconsHH';
import BiosAbstractsHH from '@/components/bios-abstracts/bios-abstractsHH';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2025 | Heavy Haul Seminar Speaker Bios & Abstracts",
      description: "Speaker Bios & Abstracts for the 30th Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2025-social.png" 
    }
  };
}

const BiosAbstractsHHPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner25HH />
      <IconsHH />
      <div className="seminar-about-text"></div>
      <BiosAbstractsHH />
      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default BiosAbstractsHHPage;
