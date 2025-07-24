import React, { useState, useEffect } from 'react';
import StoryblokClient from 'storyblok-js-client';

// Initialize Storyblok client
const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  region: 'us',
});

const SpeakerCard = ({ name, company, imageSrc, topic }) => {
  return (
    <div className="group">
      <div className="relative">
        <div className="w-full overflow-hidden border-t-4 aspect-w-2 aspect-h-1 border-wri-green">
          <img
            src={imageSrc}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-11/12 mx-auto transform translate-y-1/2 bg-white shadow-md">
          <div className="p-4 text-center">
            <p className="h-8 text-lg font-bold text-wri-dark-blue md:text-xl lg:text-3xl lg:h-12">
              {name}
            </p>
            <p className="h-8 text-sm text-gray-600 md:text-base lg:text-xl lg:h-10">
              {company}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full p-4 mt-12 lg:mt-16">
        <p className="text-sm text-wri-mid-blue md:text-xl lg:text-2xl">
          <strong>Topic:</strong> {topic}
        </p>
      </div>
    </div>
  );
};

const SpeakersPC = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakerCards = async () => {
      try {
        const version = process.env.NEXT_PUBLIC_CONTENT_VERSION || 'published';
        const response = await Storyblok.get('cdn/stories', {
          starts_with: 'wri-conferences/speaker-cards-pc/',
          version: version,
        });

        setSpeakers(response.data.stories.map(story => story.content));
      } catch (error) {
        console.error('Error fetching speaker cards:', error);
      }
    };

    fetchSpeakerCards();
  }, []);

  return (
    <section className="mb-20 bg-white">
      <div className="container">
        <div className="container p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {speakers.map(speaker => (
              <SpeakerCard
                key={speaker.name}
                {...speaker}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersPC;