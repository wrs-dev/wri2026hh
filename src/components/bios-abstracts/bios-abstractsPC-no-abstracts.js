import React, { useState, useEffect } from 'react';
import StoryblokClient from 'storyblok-js-client';

// Initialize Storyblok client
const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  region: 'us',
});

const generateSlug = (fullName) => {
  if (typeof fullName !== 'string' || fullName.trim().length === 0) {
    console.warn('generateSlug was called without a valid name');
    return '';
  }

  const parts = fullName.trim().split(/\s+/);
  const firstNameInitial = parts[0][0];
  const lastName = parts.length > 1 ? parts[parts.length - 1] : '';

  const slug = `${firstNameInitial.toLowerCase()}-${lastName.toLowerCase()}`;
  return slug;
};

// Speaker card component (removed the 'title' prop and references to keep only picture, name/company, and bio)
const SpeakerCard = ({ name, company, imageSrc, title, bio1, bio2 }) => {
  const slug = generateSlug(name);

  return (
    <div
      id={`bio-${slug}`}
      className="flex flex-col mt-16 mb-0 lg:flex-row lg:items-start xl:my-16"
    >
      <div className="w-full mb-20 md:w-2/5 xl:w-1/6 xl:mx-24 lg:mb-8">
        <div className="relative">
          <div className="overflow-hidden border-t-4 aspect-w-2 aspect-h-1 xl:w-full border-wri-green">
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

// Removed AbstractSection component entirely

// Simplified TopicLayout to only render speakers
const TopicLayout = ({ speakers }) => {
  return (
    <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-md">
      {speakers.map((speaker) => (
        <SpeakerCard key={generateSlug(speaker.name)} {...speaker} />
      ))}
    </div>
  );
};

const BiosAbstractsPC = () => {
  const [groupedTopics, setGroupedTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const version = process.env.NEXT_PUBLIC_CONTENT_VERSION || 'published';
        const response = await Storyblok.get('cdn/stories', {
          starts_with: 'wri-conferences/bios-abstract-pc',
          version: version,
        });

        // Process fetched topics to group by shared topics
        let topicsByTitle = {};
        response.data.stories.forEach((story) => {
          let speakerData = {
            name: story.content.name,
            company: story.content.company,
            imageSrc: story.content.imageSrc,
            title: story.content.title,
            bio1: story.content.bio1,
            bio2: story.content.bio2,
          };

          // Group speakers by topic (we keep this logic if you still want them grouped)
          if (topicsByTitle[story.content.topic]) {
            topicsByTitle[story.content.topic].speakers.push(speakerData);
          } else {
            topicsByTitle[story.content.topic] = {
              // We’re not using the topic or abstracts in the UI anymore,
              // but keeping them as grouping keys.
              topic: story.content.topic,
              speakers: [speakerData],
            };
          }
        });

        setGroupedTopics(Object.values(topicsByTitle));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching topics:', error);
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  // Scroll logic remains unchanged
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
  }, [loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container p-4 mx-auto">
      <h2 className="text-5xl font-normal text-center pb-11">
        <span className="text-wri-green">
          <b>Principles Course</b>
        </span>{' '}
        2025 Speaker Bios
      </h2>
      {groupedTopics.length > 0 ? (
        groupedTopics.map((topicGroup, index) => (
          <TopicLayout key={index} speakers={topicGroup.speakers} />
        ))
      ) : (
        <p>No bios data available.</p>
      )}
    </section>
  );
};

export default BiosAbstractsPC;