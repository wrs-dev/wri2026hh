import Navigation from '@/components/navigation';
import Banner26HH from '@/components/banner/wri26HH';
import IconsHH from '@/components/icons/iconsHH-nolink';
// import AgendaButton from '@/components/buttons/agenda-download-button';
import SponsorCTAButton from '@/components/buttons/sponsor-cta-button';
import Intro from '@/components/intro';
import CallForPapers from '@/components/call-for-papers';
import Registration from '@/components/registration';
import SponsorCTA2 from '@/components/sponsors/sponsor-cta-2';
import Reviews from '@/components/reviews';
import InfoZoneSection from '@/components/infozone/infoZoneSection';
import InterfaceJournal from '@/components/interface-journal';
import WRIAnnouncements from '@/components/announcements';
import SponsorsCloud from '@/components/sponsors';
import Hotel from '@/components/hotel';

export async function getStaticProps() {
  return {
    props: {
      title:
        'WRI 2026 HH | WRI Heavy Haul Conference - Dallas, TX || Home',
      description:
        'Welcome to the WRI 2026 Heavy Haul Conference in Dallas, Texas. Join us for an exciting event focusing on the unique challenges and advancements in the heavy haul (freight) sector.',
      socialImage: '/wri2026-hh-social.png',
    },
  };
}

export default function Home({ title, description, socialImage }) {
  return (
    <main className="bg-white">
      <Navigation />
        <Banner26HH />
        <h3 className="mt-12 mb-6 text-xl font-light text-center sm:text-4xl font-wri">
        Principles Course speakers now available! Click below.
        </h3>
      <IconsHH />
      <div className="flex justify-center mb-12">
        <SponsorCTAButton />
      </div>
      <div className="pb-40 about-container font-wri" id="about">
        <h1 className="mt-2 mb-2 text-2xl font-extrabold text-center sm:text-5xl font-wri">
          Welcome to WRI <span className="font-light font-wri">2026</span> HH{' '}
        </h1>
        <h2 className="mb-6 text-3xl font-light text-center sm:text-5xl font-wri text-wri-red">
          Heavy Haul Conference
        </h2>
        <p className="mb-6 justify-left">
          Welcome to the 31st annual Wheel Rail Interaction Conference. The{' '}
          <span className="font-extrabold font-wri text-wri-red">
            WRI 2026 Heavy Haul Conference
          </span>{' '}
          is specifically tailored for the heavy haul (freight) sector, focusing on the challenges and advancements unique to the wheel/rail interface on heavy haul freight and shared-track passenger systems. The WRI 2026 Heavy Haul Conference will be held in{' '}
          <span className="font-extrabold font-wri">
            Dallas, TX from April 22-24, 2026
          </span>
          , and will focus on practical applications. Attendees will be from class 1 railroads, shortlines, suppliers, contractors, government regulators, researchers and consultants.
        </p>
      </div>
      <Intro />
      <CallForPapers />
      <Registration />
      <InfoZoneSection />
      <SponsorCTA2 />
      <Reviews />
      <section className="mt-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
            <InterfaceJournal />
            <WRIAnnouncements />
          </div>
        </div>
      </section>
      <Hotel />
      <SponsorsCloud />
    </main>
  );
}
