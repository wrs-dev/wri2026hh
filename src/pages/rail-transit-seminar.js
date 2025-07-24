import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '@/components/banner';
import IconLinks from '@/components/icons';
import Navigation from '@/components/navigation';
import FeatureSpeaker from '@/components/speakers/featureSpeaker';
import FocusTopicRT from '@/components/speakers/focusTopicRT';
import SpeakersRT from '@/components/speakers/speakersRT';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI 2024 | Rail Transit Seminar Speakers",
      description: "Speakers for the 29th Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2024-social.png" 
    }
  };
}

const RailTransitSeminarPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner />
      <IconLinks />
      <div className="section">
        <div className="mx-auto">
          <h2 className="text-5xl font-normal text-center pb-11">
            Meet the{' '}
            <span className="text-wri-blue">
              <b>2024 Rail Transit Seminar</b>
            </span>{' '}
            Speakers
          </h2>
          <FeatureSpeaker />
          <FocusTopicRT />
          <SpeakersRT />
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 mx-auto mb-24 max-w-7xl">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 mb-6 lg:w-4/6 lg:pr-24">
                  <h2 className="text-5xl font-normal leading-normal text-center">
                    <span className="text-wri-blue">
                      <b>2024 Rail Transit Seminar</b>
                    </span>
                  </h2>
                  <h3 className="text-3xl font-normal leading-normal text-center pb-11">
                    May 21, 2024
                  </h3>
                  <p className="pt-2 pb-6">
                    <span className="font-bold text-wri-blue">
                      The Rail Transit Seminar
                    </span>{' '}
                    is devoted to examining wheel/rail and vehicle/track
                    interaction on light rail and subway operations.
                  </p>
                  <p>
                    Some examples of Cross-disciplinary sessions that have been
                    covered in the past include vehicle/track dynamics, noise &
                    vibration, wheel/rail profile design & maintenance, and
                    friction management. Join transit professionals, government
                    regulators, researchers, suppliers and consultants for
                    presentations and discussions in order to gain a better
                    understanding of the complex interaction unique to the rail
                    transit wheel/rail interface.
                  </p>
                  <h2 className="mt-16 seminar-discount-header">
                    WRI 2024 Discount Programs:
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
                <div className="w-full p-8 border-l-2 lg:w-2/6 bg-wri-blue/20 border-wri-blue">
                  <h2 className="pt-0 pb-4 seminar-header text-wri-blue/90">
                    YOUR REGISTRATION INCLUDES:
                  </h2>
                  <ul className="pl-5 list-disc seminar-list">
                    <li>Continental Breakfast</li>
                    <li>Mid-morning Coffee and Refreshment Break</li>
                    <li>Luncheon served in the ExpoZone</li>
                    <li>Full Line-up of Presentations</li>
                    <li>Afternoon Coffee and Refreshment Break</li>
                    <li>Reception following the Seminar</li>
                    <li>
                      Exclusive Presentation Download Page access following the
                      event
                    </li>
                  </ul>

                  <h2 className="pt-6 pb-4 leading-tight seminar-header text-wri-blue/90">
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
      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default RailTransitSeminarPage;
