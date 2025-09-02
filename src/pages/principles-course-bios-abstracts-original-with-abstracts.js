import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Banner26HH from '@/components/banner/wri26HH';
import IconsHH from '@/components/icons/iconsHH';
import BiosAbstractsPC from '@/components/bios-abstracts/bios-abstractsPC';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2026 | Principles Course Speaker Bios & Abstracts',
      description:
        'Speaker Bios & Abstracts for the 31st Annual Wheel/Rail Interaction Conference (WRI)',
      socialImage: '/wri2026-hh-social.png',
    },
  };
}

const BiosAbstractsPCPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner26HH />
      <IconsHH />
      <div className="seminar-about-text"></div>
      <BiosAbstractsPC />
      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default BiosAbstractsPCPage;
