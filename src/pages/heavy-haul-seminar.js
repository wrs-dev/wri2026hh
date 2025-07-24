import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation'
import Banner25HH from '@/components/banner/wri25HH';
import IconsHH from '@/components/icons/iconsHH';
import FocusTopicHH from '@/components/speakers/focusTopicHH';
import SpeakersHH from '@/components/speakers/speakersHH';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2025 HH | Heavy Haul Seminar Speakers",
      description: "Meet the Heavy Haul speakers for the 30th Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: '/wri2025-hh-social.png',
    }
  };
}

const HeavyHaulSeminarPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner25HH />
      <IconsHH />
      
      <div className="section">
        <div className="px-12 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full mx-auto mb-24 max-w-7xl">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 mb-6 lg:w-4/6 lg:pr-24">
                <h2 className="text-5xl font-normal leading-normal text-center">
                    <span className="text-wri-red">
                      <b>2025 Heavy Haul Seminar</b>
                    </span>
                  </h2>
                  <h3 className="text-3xl font-normal leading-normal text-center pb-11">
                    June 11-12, 2025
                  </h3>
                  <p className="pt-2 pb-6">
                    <span className="font-bold text-wri-red">
                      The Heavy Haul Seminar
                    </span>{' '}
                    is devoted to examining wheel/rail and vehicle/track
                    interaction on heavy haul freight and shared-track passenger
                    systems. The latest information on new and existing
                    technology, and the ways in which it is being used to
                    improve wheel/rail interaction on freight and passenger
                    railways will be presented. Information is disseminated
                    through a combination of seminar sessions, dedicated Q&A
                    periods and “InfoZone” sessions.
                  </p>
                  <p>
                    Since 1994, the Heavy Haul Seminar has been bringing
                    together track and mechanical users, government regulators,
                    researchers and suppliers in a positive, educational setting
                    like none other in the industry.
                  </p>

                  <h2 className="mt-16 seminar-discount-header">
                    WRI 2025 Discount Programs:
                  </h2>
                  <p className="pt-2 pb-6">
                    Wheel Rail Seminars offers various discount programs,
                    including Multi-Event Discounts and Special Employee
                    Discounts for railroad, transit & government employees.
                  </p>
                  <p>
                    <a
                      href="https://wheel-rail-seminars.com/#reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {' '}
                      Attendees praise the high-quality presenters & topics, and
                      inclusive approach to dining and networking.
                    </a>
                  </p>
                </div>
                <div className="w-full p-8 border-l-2 lg:w-2/6 bg-wri-red/20 border-wri-red">
                  <h2 className="pt-0 pb-4 seminar-header text-wri-red/90">
                    YOUR REGISTRATION INCLUDES:
                  </h2>
                  <ul className="pl-5 list-disc seminar-list">
                    <li>Welcome Reception</li>
                    <li>Continental Breakfast each morning</li>
                    <li>Full line-up of presentations</li>
                    <li>Mid-morning Coffee and Refreshment Breaks</li>
                    <li>Luncheon served in the ExpoZone</li>
                    <li>Afternoon Coffee and Refreshment Breaks</li>
                    <li>
                    Special “Grand Buffet” Reception on Wednesday, June 11, 2025
                    </li>
                    <li>
                      Exclusive Presentation Download Page access following the
                      event
                    </li>
                  </ul>

                  <h2 className="pt-6 pb-4 leading-tight seminar-header text-wri-red/90">
                    Attendees are also eligible to receive:
                  </h2>
                  <ul className="pl-5 list-disc seminar-list">
                    <li>
                      Continuing education/professional development credits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <h2 className="text-5xl font-normal text-center pb-11">
          Meet the{' '}
          <span className="text-wri-red">
            <b>2025 Heavy Haul Seminar</b>
          </span>{' '}
          Speakers
        </h2>
          {/*<FocusTopicHH />*/}
          <SpeakersHH />

      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default HeavyHaulSeminarPage;
