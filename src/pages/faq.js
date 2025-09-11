import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from "next/link";
import Navigation from '@/components/navigation'
import IconsHH from "@/components/icons/iconsHH-nolink"
import Registration from '@/components/registration';
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Banner26HH from '@/components/banner/wri26HH';

const faqs = [
  {
    question: 'What is the "Principles Course?"',
    answer: [
      'Designed for both Rail Transit and Heavy Haul Conference attendees, the "Principles of Wheel/Rail Interaction" Course is an intensive, full-day course providing in-depth examination of the primary aspects of wheel/rail and vehicle/track interaction.',
      "Drawing from both theory and practical application, the course covers many important issues related to wheel/rail interaction. Past Courses have explored wheel truing strategy, rail metallurgy, ultrasonic testing, thermal rail stresses and much more. The course is designed to promote a more complete understanding of vehicle/track dynamics and wheel/rail interaction. Seminar attendance is not required to attend the course.",
      'Whether you are a novice railroader or an industry veteran, the "Principles of Wheel/Rail Interaction" course will provide a valuable cross-disciplinary perspective on the fundamental aspects of this dynamic area of railroading.',
    ],
  },
  {
    question: "Who should attend WRI Conferences?",
    answer: [
      "The Wheel/Rail Interaction Conference is truly multi-disciplinary, featuring three individual events (the Rail Transit seminar, the Principles Course and the Heavy Haul seminar) held back-to-back at the Hotel.", "Many facets of wheel/rail interaction are explored. Professionals from a variety of related fields, from front-line supervisors to top-level managers, will benefit from attending. Each event offers a wealth of valuable insight, face-to-face interaction and exploration of the cutting-edge technologies. You won't find this unique combination of in-depth content and networking opportunity anywhere else.",
    ],
  },
  {
    question: "What is included in my registration fee?",
    answer: [
      "Each unique event is priced individually or as a discounted multi-event package (i.e. Principles Course combined with the Heavy Haul seminar). Your registration fee includes all sessions for that particular event and a complete library of presentations available for download following the event. In addition, all social and networking opportunities are included in each event's registration fee. There is no shortage of good food, company and conversation.",
    ],
  },
  {
    question: "What sponsorship opportunities are available?",
    answer: [
      "Several sponsorship packages are available or we can create a custom sponsorship package tailored to fit your company's needs and goals.",
    ],
  },
  {
    question: "How do I register and pay for the conference?",
    answer: [
      'ONLINE Registration: Click on the "Package Pricing" link in the menu bar at the top of this page and select the package appropriate for you. Then click the Register Now button to navigate to the registration form. There, you will be able to enter your information and securely pay for your event package. Shortly afterward, Wheel Rail Seminars will confirm your registration via email.',
    ],
  },
  {
    question: "How do I reserve my hotel room?",
    answer: [
      "ONLINE Reservation: Click on the Hotel Reservations link at the top of this page, then click on the Reservations button and complete the online reservation form. You will be able to reserve your hotel room and securely enter your credit card information to guarantee your reservation. The Hotel will confirm your reservation. Note that room availability is limited.",
    ],
  },
  {
    question: "Are attendees eligible for C.E. / P.D. Credits?",
    answer: [
      "Yes. Please request a sign up sheet at the registration desk when checking in.",
    ],
  },
  // More questions...
];

export async function getStaticProps() {
  return {
    props: {
      title: "WRI Wheel Rail Interaction Conference | FAQ - Frequently Asked Questions about WRI",
      description: "Frequently Asked Questions for the 31st Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2026-hh-social.png" 
    }
  };
}

const faq = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner26HH />
      <IconsHH />
      <div className="seminar-about-text" id="faqs">
        <div className="px-12 mx-auto">
          <h2 className="text-6xl font-normal leading-normal text-center pt-11">
            Frequently Asked Questions
          </h2>
        </div>
      </div>
        <div className="max-w-4xl px-4 pb-24 mx-auto divide-y divide-gray-900/10">
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="flex items-center ml-6 h-7">
                          {open ? (
                            <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
  {faq.answer.map((paragraph, index) => (
    <p key={index} className="mb-2 text-base leading-7 text-gray-600">
      {paragraph}
    </p>
  ))}
</Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
    </main>
  );
};

export default faq;
