import Navigation from '@/components/navigation';
import Banner25HH from '@/components/banner/wri25HH';
import IconsHH from '@/components/icons/iconsHH';
import AgendaButton from '@/components/buttons/agenda-download-button';
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
        'WRI 2025 HH | WRI Heavy Haul Conference - Kansas City, MO || Home',
      description:
        'Welcome to the WRI 2025 Heavy Haul Conference in Kansas City. Join us for an exciting event focusing on the unique challenges and advancements in the heavy haul (freight) sector.',
      socialImage: '/wri2025-hh-social.png',
    },
  };
}

export default function Home({ title, description, socialImage }) {
  return (
    <main className="bg-white">
      <Navigation />
        <Banner25HH />
        <h3 className="mt-12 mb-6 text-xl font-light text-center sm:text-4xl font-wri">
        Click on the buttons below to review speakers, topics and abstracts for each seminar!
        </h3>
      <IconsHH />
      <div className="flex justify-center mb-12">
        <AgendaButton />
      </div>
      <div className="pb-40 about-container font-wri" id="about">
        <h1 className="mt-2 mb-2 text-2xl font-extrabold text-center sm:text-5xl font-wri">
          Welcome to WRI <span className="font-light font-wri">2025</span> HH{' '}
        </h1>
        <h2 className="mb-6 text-3xl font-light text-center sm:text-5xl font-wri text-wri-red">
          Heavy Haul Conference
        </h2>
        <p className="mb-6 justify-left">
          Welcome to the 30th Anniversary of the Wheel Rail Interaction
          Conference.{' '}
          <span className="font-extrabold font-wri text-wri-red">
            WRI 2025 Heavy Haul Conference
          </span>{' '}
          is specifically tailored for the heavy haul (freight) sector, focusing
          on the unique challenges and advancements in this area of the railroad
          industry. WRI 2025 Heavy Haul Conference will be held in{' '}
          <span className="font-extrabold font-wri">
            Kansas City, MO from June 10-12, 2025
          </span>
          , and will focus on practical applications. Attendees will be from
          railroads including all the class 1 railroads, contractors, government
          regulators, researchers and consultants.
        </p>
      </div>
      <Intro />
      {/*<CallForPapers />*/}
      <Registration />
      <InfoZoneSection />
      <SponsorCTA2 />
      <Reviews />
      <section className="my-12">
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
