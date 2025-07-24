import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Speaker card is photo and name, company box
const SpeakerCard = ({ name, company, imageSrc, title, bio1, bio2 }) => (
  <div className="flex flex-col md:flex-row md:items-start my-16">
    <div className="w-full md:w-1/5 lg:mx-24 mb-20 lg:mb-8">
      <div className="relative">
        <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 w-11/12 bg-white shadow-md mx-auto left-0 right-0 transform translate-y-1/2 rounded">
          <div className="text-center p-4">
            <p className="font-bold text-wri-dark-blue text-2xl">{name}</p>
            <p className="text-gray-600">{company}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-4/5">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <div className="flex flex-col gap-8 mr-20">
        <p>{bio1}</p>
        <p>{bio2}</p>
      </div>
    </div>
  </div>
);
// AbstractSection is the box for the presentation title and abstract content
const AbstractSection = ({ topic, content1, content2 }) => (
  <div className="flex flex-col lg:flex-row lg:items-start">
    <div className="flex w-full md:w-1/5 lg:mx-24 mb-8 lg:mt-20 justify-center">
      <div>
        <figure>
          <Image
            src="/principles-icon-green.svg"
            width={360}
            height={200}
            alt="principles-icon"
            className="w-full text-wri-green fill-current"
          />
        </figure>
        <h2 className="text-2xl text-wri-green">ABSTRACT</h2>
      </div>
    </div>
    <div className="w-full md:w-4/5 bg-gray-200 p-8">
      <h2 className="font-bold text-wri-dark-blue text-2xl mb-6 mr-20">
        {topic}
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 mr-20">
        <div className="flex-1">
          <p>{content1}</p>
        </div>
        <div className="flex-1">
          <p>{content2}</p>
        </div>
      </div>
    </div>
  </div>
);
// TopicLayout that dynamically renders the SpeakerCards and AbstractSection
const TopicLayout = ({ speakers }) => {
  // Use the first speaker's topic and content for the abstract section
  const { topic, content1, content2 } = speakers[0];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
      {speakers.map((speaker, index) => (
        <SpeakerCard key={index} {...speaker} />
      ))}
      <AbstractSection topic={topic} content1={content1} content2={content2} />
    </div>
  );
};
const BiosAbstractsPC = () => {
  // Data for speakers
  const topics = [
    {
      speakers: [
        {
          name: 'Matt Dick',
          company: 'ENSCO',
          imageSrc: '/matt-dick.jpg',
          title: 'Rail Division Manager',
          bio1: `Matthew Dick is the Chief of Strategy and Development at ENSCO. Matthew held previous roles during his thirteen years at ENSCO including Rail Division Manager. In the current role, Matthew is leading ENSCO’s development of expanded service and solution offerings. Matthew Dick received his B.S.M.E and M.S.M.E. from the University of Nebraska – Lincoln and has his professional engineering license. `,
          bio2: `He has been involved with railroad research and technology for over 20 years in areas of vehicle/track interaction, derailments, and inspection technology. Matthew is Chair Emeritus of AREMA Committee Two “Track Measurement and Assessment Systems” and is Chair Emeritus of the ASME Rail Transportation Division.`,
          topic:
            'Development and Implementation of a Water-Based Friction Modifier Train-Borne Dispensing System for Transit',

          content1: `This presentation will provide an overview of automated inspection system types and underlying technologies used to monitor various aspects of vehicles, track, and vehicle-track interaction. A range of vehicle-mounted and track-mounted systems are provided as working examples. Coverage of fundamental measurement technologies includes location determination, imaging and machine vision, laser profiling, LIDAR, and ultrasonic flaw detection.`,

          content2: `This presentation will provide an overview of automated inspection system types and underlying technologies used to monitor various aspects of vehicles, track, and vehicle-track interaction. A range of vehicle-mounted and track-mounted systems are provided as working examples. Coverage of fundamental measurement technologies includes location determination, imaging and machine vision, laser profiling, LIDAR, and ultrasonic flaw detection.`,
        },
      ],
    },
    {
      speakers: [
        {
          name: 'Kevin Oldknow',
          company: 'Simon Fraser University',
          title: 'Associate Professor',
          imageSrc: '/kevin-oldknow.jpg',
          title: 'Rail Division Manager',
          bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, fermentum nisi in, dapibus leo.',
          bio2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, fermentum nisi in, dapibus leo.',
          topic: 'Vehicle Track Interaction',
          content1:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          content2:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
          name: 'Eric Magel',
          company: 'ENSCO-TTC',

          imageSrc: '/eric-magel.jpg',
          title: 'Rail Division Manager',
          bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, fermentum nisi in, dapibus leo.',
          bio2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, fermentum nisi in, dapibus leo.',
          topic: 'Vehicle Track Interaction',
          content1:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          content2:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
      ],
    },
    // Add more topics with one, two, or three speakers as needed
  ];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-center text-5xl font-normal pb-11">
        <span className="text-wri-green">
          <b>Principles Course</b>
        </span>{' '}
        2024 Speaker Bios/Abstracts
      </h2>
      {topics.map((topic, index) => (
        <TopicLayout key={index} {...topic} />
      ))}
    </section>
  );
};

export default BiosAbstractsPC;
