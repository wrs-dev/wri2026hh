import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Banner25HH from '@/components/banner/wri25HH';
import IconsHH from '@/components/icons/iconsHH';
import BiosAbstractsPC from '@/components/bios-abstracts/bios-abstractsPC-no-abstracts';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2025 | Principles Course Speaker Bios & Abstracts",
      description: "Speaker Bios & Abstracts for the 30th Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2025-social.png" 
    }
  };
}

const BiosAbstractsPCPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner25HH />
      <IconsHH />
      <div className="seminar-about-text"></div>
      <BiosAbstractsPC />
      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default BiosAbstractsPCPage;
