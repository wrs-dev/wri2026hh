import { useState } from 'react';
import Navigation from '@/components/navigation';
import Banner25HH from '@/components/banner/wri25HH';
import IconsHH from '@/components/icons/iconsHH';
import SpeakersPCPreview from '@/components/speakers/speakersPC-bio-only';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';
import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2025 HH | Principles Course Speakers',
      description:
        'Meet the Principles Course Speakers for the 30th Annual Wheel/Rail Interaction Conference (WRI)',
      socialImage: '/wri2025-hh-social.png',
    },
  };
}

const PrinciplesCoursePage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="bg-white">
      <Navigation />
      <Banner25HH />
      <IconsHH />
      <div className="section">
        <div className="mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 mx-auto mb-24 max-w-7xl">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 mb-6 lg:w-4/6 lg:pr-24">
                  <h2 className="text-5xl font-normal leading-normal text-center">
                    <span className="text-wri-green">
                      <b>2025 Principles Course</b>
                    </span>
                  </h2>
                  <h3 className="text-3xl font-normal leading-normal text-center pb-11">
                    June 10, 2025
                  </h3>

                  {/* First paragraph */}
                  <p className="pt-2 pb-6">
                    <span className="font-bold text-wri-green">
                      The Principles of Wheel/Rail Interaction course
                    </span>{' '}
                    has been revitalized and reimagined with a tighter focus on
                    the practical aspects of wheel/rail and vehicle/track
                    interaction for 2025. The course will begin with a case
                    study — an examination of an actual wheel/rail
                    interaction-related derailment. Presenters will cover the
                    fundamental aspects of track, vehicle suspension systems,
                    damage mechanisms, measurements systems — all the topics we
                    have traditionally covered — but will also connect the dots
                    between theory and what actually happens in the field. A
                    wrap-up session will review the causes attributed to the
                    case study derailment in light of the Principles examined
                    throughout the course. We’ll also look at approaches that
                    can be taken to mitigate wheel/rail- and
                    vehicle/track-related derailments in the future.
                  </p>

                  {/* New NURail CoE paragraph & logo */}
                  <p className="pt-2 pb-4">
                    Wheel Rail Seminars is proud to announce that the FRA-funded
                    National University Rail Center for Excellence (NURail CoE)
                    is the Presenting Sponsor for the 2025 Principles of
                    Wheel/Rail Interaction Course. You can find more information
                    on the NURail CoE's mission to develop solutions that will
                    lead to a safer, more efficient, sustainable, equitable, and
                    reliable rail transportation system in the United States by{' '}
                    <a
                      href="https://nurailcoe.railtec.illinois.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      clicking here
                    </a>
                    .
                  </p>
                  <div className="flex justify-center mb-6">
                    <a
                      href="https://nurailcoe.railtec.illinois.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/NuRail_Presenting_Sponsor_2025.png"
                        alt="NURail CoE Presenting Sponsor 2025"
                        width={500}
                        height={120}
                      />
                    </a>
                  </div>

                  <h2 className="mt-16 seminar-discount-header">
                    WRI 2025 Discount Programs:
                  </h2>
                  <p className="pt-2 pb-6">
                    Wheel Rail Seminars offers various discount programs,
                    including Multi-Event Discounts and Special Employee
                    Discounts for railroad, transit & government employees.
                  </p>
                  <p className="pt-2 pb-6">
                    <a
                      href="https://wheel-rail-seminars.com/#reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Attendees praise the high-quality presenters & topics, and
                      inclusive approach to dining and networking.
                    </a>
                  </p>
                  <p>
                    NOTE: Attendance at Rail Transit or Heavy Haul seminars is
                    NOT required to register for the Principles Course.
                  </p>
                </div>

                <div className="w-full p-8 border-l-2 lg:w-2/6 bg-wri-green/20 border-wri-green">
                  <h2 className="pt-0 pb-4 seminar-header text-wri-green/90">
                    YOUR REGISTRATION INCLUDES:
                  </h2>
                  <ul className="pl-5 list-disc seminar-list">
                    <li>Welcome Reception</li>
                    <li>Continental Breakfast</li>
                    <li>Mid-morning Coffee and Refreshment Break</li>
                    <li>Luncheon served in the ExpoZone</li>
                    <li>Full Line-up of Presentations</li>
                    <li>Afternoon Coffee and Refreshment Break</li>
                    <li>
                      Exclusive Presentation Download Page access following the
                      event
                    </li>
                  </ul>
                  <h2 className="pt-6 pb-4 leading-tight seminar-header text-wri-green/90">
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
        <span className="text-wri-green">
          <b>2025 Principles Course</b>
        </span>{' '}
        Speakers
      </h2>
      <SpeakersPCPreview />
      <Registration />
      <SponsorsCloud />
    </main>
  );
};

export default PrinciplesCoursePage;
