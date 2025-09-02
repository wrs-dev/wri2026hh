import Head from 'next/head';
import Navigation from '@/components/navigation';
import Banner26HH from '@/components/banner/wri26HH-no-button';
import Registration from '@/components/registration';
import CventWidget from '@/components/CventWidget';
import Banner2 from '@/components/banner2';

export async function getStaticProps() {
  return {
    props: {
      title:
        'WRI 2026 HH | WRI Heavy Haul Conference - Dallas, TX || Home',
      description:
        'Welcome to the WRI 20226 Heavy Haul Conference in Dallas. Join us for an exciting event focusing on the unique challenges and advancements in the heavy haul (freight) sector.',
      socialImage: '/wri2026-hh-social.png',
    },
  };
}

export default function Register() {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner26HH />
      <CventWidget className="cvt-embed" />
    </main>
  );
}
