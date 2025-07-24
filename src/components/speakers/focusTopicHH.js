import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const people = [
  {
    name: 'Brad Kerchof',
    company: 'Advanced Rail Management/Global Rail Group',
    imageUrl: '/brad-kerchof.jpg',
    topic:
      'Case Study: A Derailment Investigation — Was the Right Cause Found?',
    bioLink: '/heavy-haul-seminar-bios-abstracts#bio-b-kerchof',
  },
  {
    name: 'Gary Wolf',
    company: 'Wolf Railway Consulting, LLC',
    imageUrl: '/gary-wolf.jpg',
    topic:
      'Current Status and Trends in Track Caused Derailments with Emphasis on Causes Related to the Wheel/Rail Interface',
    bioLink: '/heavy-haul-seminar-bios-abstracts#bio-g-wolf',
  },
  {
    name: 'George Fowler',
    company: 'Transportation Safety Board of Canada (retired)',
    imageUrl: '/george-fowler.jpg',
    topic:
      'Examining the Role of Wheel/Rail Interaction in a Unit Train Derailment',
    bioLink: '/heavy-haul-seminar-bios-abstracts#bio-g-fowler',
  },
  // More people...
];

export default function FocusTopicHH() {
  return (
    <div className="pt-12 pb-24 bg-white sm:pb-32 sm:pt-16" id="hh-focus-topic">
      <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl tracking-tight text-wri-red sm:text-4xl">
            2024 Heavy Haul Focus Topic
          </h2>
          <h3 className="mt-12 text-5xl font-bold text-wri-gray">
            Lessons Learned from Derailment Investigations
          </h3>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-10 sm:grid-cols-3 lg:mx-0 lg:max-w-none xl:grid-cols-3 lg:gap-8"
        >
          {people.map(person => (
            <li
              key={person.name}
              className="flex flex-col justify-between h-full px-8 py-10 border-4 border-wri-yellow bg-wri-gray rounded-3xl"
            >
              <div className="flex flex-col items-center">
                <img
                  className="mx-auto h-72 w-72 rounded-xl md:h-55 w-55"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-wri-yellow">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                  {person.company}
                </p>
                <h3 className="my-6 text-xl leading-7 tracking-tight text-white">
                  {person.topic}
                </h3>
              </div>
              <div className="mt-auto">
                <Link href={person.bioLink}>
                  <div className="px-12 py-6 mt-auto text-xl text-center text-white cursor-pointer rounded-xl hover:text-wri-dark-blue hover:text-white hover:shadow-xl bg-wri-red hover:bg-wri-yellow whitespace-nowrap">
                    Bio & Abstract
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
