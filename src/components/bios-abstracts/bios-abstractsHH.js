import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { biosAbstractsHH2026 } from '@/data/bios-abstracts-hh-2026';

const generateSlug = fullName => {
  if (typeof fullName !== 'string' || fullName.trim().length === 0) {
    console.warn('generateSlug was called without a valid name');
    return '';
  }

  // Split the name into parts and then take the first letter of the first name
  const parts = fullName.trim().split(/\s+/); // Split on any whitespace
  const firstNameInitial = parts[0][0]; // Get the first character of the first name
  const lastName = parts.length > 1 ? parts[parts.length - 1] : ''; // Safely get the last name

  // Combine the first name initial with the last name, both in lowercase
  const slug = `${firstNameInitial.toLowerCase()}-${lastName.toLowerCase()}`;

  return slug;
};

// Speaker card component
const SpeakerCard = ({ name, company, imageSrc, title, bio1, bio2 }) => {
  // Ensure that the slug is generated in the desired format: 'firstname-lastname'
  const slug = generateSlug(name);

  return (
    <div
      id={`bio-${slug}`} // The id is 'bios-firstname-lastname'
      className="flex flex-col mt-16 mb-0 lg:flex-row lg:items-start xl:my-16"
    >
      <div className="w-full mb-20 md:w-2/5 xl:w-1/6 xl:mx-24 lg:mb-8">
        <div className="relative">
          <div className="overflow-hidden border-t-4 aspect-w-2 aspect-h-1 xl:w-full border-wri-red">
            <img
              src={imageSrc}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute left-0 right-0 transform translate-y-1/2 bg-white rounded shadow-md -bottom-5 xl:w-5/6 xl:mx-auto">
            <div className="p-4 text-center">
              <p className="font-bold text-wri-dark-blue lg:text-2xl">{name}</p>
              <p className="text-gray-600">{company}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/5 md:mx-12 xl:mt-8">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <div className="flex flex-col gap-8 lg:mr-20">
          <p>{bio1}</p>
          <p>{bio2}</p>
        </div>
      </div>
    </div>
  );
};

// AbstractSection component
const AbstractSection = ({ topic, abstract1, abstract2 }) => {
  return (
    <div className="flex flex-col mt-16 lg:flex-row lg:items-start">
      <div className="flex justify-center w-full mb-8 md:w-1/5 lg:mx-24 lg:mt-20">
        <div classname="flex">
          <figure>
            <Image
              src="/heavy-haul-icon-red.svg"
              width={360}
              height={200}
              alt="Principles icon"
              className="w-full fill-current text-wri-red"
            />
          </figure>
          <h2 className="mt-4 text-2xl text-wri-red">ABSTRACT</h2>
        </div>
      </div>
      <div className="w-full p-8 md:w-4/5 bg-wri-red/10">
        <h2 className="mb-6 text-2xl font-bold text-wri-red">{topic}</h2>
        <div className="flex flex-col gap-8 pb-24 lg:flex-row">
          <div className="flex-1">
            <p>{abstract1}</p>
          </div>
          <div className="flex-1">
            {abstract2 && <p>{abstract2}</p>} {/* Conditional rendering */}
          </div>
        </div>
      </div>
    </div>
  );
};

// TopicLayout that dynamically renders the SpeakerCards and AbstractSection
const TopicLayout = ({ speakers, topic, abstract1, abstract2 }) => {
  return (
    <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-md">
      {speakers.map(speaker => (
        <SpeakerCard key={generateSlug(speaker.name)} {...speaker} />
      ))}
      <AbstractSection
        topic={topic}
        abstract1={abstract1}
        abstract2={abstract2}
      />
    </div>
  );
};

// BiosAbstractsHH component
const BiosAbstractsHH = () => {
  const [groupedTopics, setGroupedTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load static data and group them
  useEffect(() => {
    const loadTopics = () => {
      try {
        // Process static data to group by shared topics
        let topicsByTitle = {};
        biosAbstractsHH2026.forEach(item => {
          let speakerData = {
            name: item.name,
            company: item.company,
            imageSrc: item.imageSrc,
            title: item.title,
            bio1: item.bio1,
            bio2: item.bio2,
          };

          // Group speakers by topic
          if (topicsByTitle[item.topic]) {
            topicsByTitle[item.topic].speakers.push(speakerData);
            if (item.abstract1) {
              topicsByTitle[item.topic].content1 = item.abstract1;
            }
            if (item.abstract2) {
              topicsByTitle[item.topic].content2 = item.abstract2;
            }
          } else {
            topicsByTitle[item.topic] = {
              topic: item.topic,
              content1: item.abstract1 || '',
              content2: item.abstract2 || '',
              speakers: [speakerData],
            };
          }
        });

        setGroupedTopics(Object.values(topicsByTitle));
        setLoading(false);
      } catch (error) {
        console.error('Error loading topics:', error);
        setLoading(false);
      }
    };

    loadTopics();
  }, []);

  // Scroll to the element after it has been loaded because it's not in place in time for the browser to scroll down on first page load
  useEffect(() => {
    if (!loading) {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView();
          }, 0);
        }
      }
    }
  }, [loading]); // This effect should depend on the loading state

  if (loading) {
    return <p>Loading...</p>; // Add a spinner here when time allows.
  }

  return (
    <section className="container p-4 mx-auto">
      <h2 className="text-5xl font-normal leading-normal text-center pb-11">
        <span className="text-wri-red">
          <b>Heavy Haul Seminar</b>
        </span>{' '}
        2026 Speaker Bios/Abstracts
      </h2>
      {groupedTopics.length > 0 ? (
        groupedTopics.map((topicGroup, index) => (
          <TopicLayout
            key={index}
            speakers={topicGroup.speakers}
            topic={topicGroup.topic}
            abstract1={topicGroup.content1}
            abstract2={topicGroup.content2}
          />
        ))
      ) : (
        <p>No bios data available.</p>
      )}
    </section>
  );
};

export default BiosAbstractsHH;
