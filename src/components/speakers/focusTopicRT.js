import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const people = [
  {
    name: 'Shankar Rajaram',
    company: 'Sound Transit',
    imageUrl: '/shankar-rajaram-feature.jpg',
    topic:
      'Developing WRIS Requirements for a new Light Rail Vehicle Contract in North America',
    bioLink: '/rail-transit-seminar-bios-abstracts#bio-s-rajaram',
  },
  {
    name: 'Kevin McClain',
    company: 'Siemens/Graz',
    imageUrl: '/kevin-mcclain-feature.jpg',
    topic: 'Vehicle Design — Simulation Methods Using Measured Track Datasets',
    bioLink: '/rail-transit-seminar-bios-abstracts#bio-k-mcclain',
  },
  {
    name: 'Beñat Sarasola',
    company: 'CAF Spain',
    imageUrl: '/benat-sarasola-feature.jpg',
    topic:
      'In-service Monitoring of Wheel Wear to Determine Critical Factors and Optimize Maintenance Strategies',
    bioLink: '/rail-transit-seminar-bios-abstracts#bio-b-sarasola',
  },
  {
    name: 'Sergio Perez',
    company: 'Stadler Valencia',
    imageUrl: '/sergio-perez-feature.jpg',
    topic: 'A Case Study: Analysis of Ground Vibrations produced by LRVs',
    bioLink: '/rail-transit-seminar-bios-abstracts#bio-s-perez',
  },
  // More people...
];

export default function FocusTopicRT() {
  return (
    <div className="pt-12 pb-24 bg-white sm:pb-32 sm:pt-16" id="rt-focus-topic">
      <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl tracking-tight text-wri-blue sm:text-4xl">
            2024 Rail Transit Focus Topic
          </h2>
          <h3 className="mt-12 text-6xl font-bold text-wri-gray">
            Wheel/Rail Interaction & Vehicle Design
          </h3>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none xl:grid-cols-4 lg:gap-8"
        >
          {people.map(person => (
            <li
              key={person.name}
              className="flex flex-col justify-between h-full px-8 py-10 border-4 border-wri-yellow bg-wri-gray rounded-3xl"
            >
              <div className="flex flex-col items-center">
                <img
                  className="w-48 h-48 mx-auto rounded-xl md:h-55 w-55"
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
                  <div className="px-12 py-6 mt-auto text-xl text-center text-white cursor-pointer rounded-xl hover:text-wri-dark-blue hover:text-white hover:shadow-xl bg-wri-blue hover:bg-wri-yellow whitespace-nowrap">
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
