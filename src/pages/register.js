import Head from 'next/head';
import Navigation from '@/components/navigation';
import Banner25HH from '@/components/banner/wri25HH-no-button';
import Registration from '@/components/registration';
import CventWidget from '@/components/CventWidget';
import Banner2 from '@/components/banner2';

export async function getStaticProps() {
  return {
    props: {
      title:
        'WRI 2025 HH | WRI Heavy Haul Conference - Kansas City, MO || Home',
      description:
        'Welcome to the WRI 2025 Heavy Haul Conference in Kansas City. Join us for an exciting event focusing on the unique challenges and advancements in the heavy haul (freight) sector.',
      socialImage: '/wri2025-hh-social.png',
    },
  };
}

export default function Register() {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner25HH />
      <CventWidget className="cvt-embed" />
    </main>
  );
}
