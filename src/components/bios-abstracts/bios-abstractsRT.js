import React, { useState, useEffect } from "react";
import Image from "next/image";
import StoryblokClient from "storyblok-js-client";

// Initialize Storyblok client
const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  region: "us",
});

const generateSlug = (fullName) => {
  if (typeof fullName !== "string" || fullName.trim().length === 0) {
    console.warn("generateSlug was called without a valid name");
    return "";
  }

  // Split the name into parts and then take the first letter of the first name
  const parts = fullName.trim().split(/\s+/); // Split on any whitespace
  const firstNameInitial = parts[0][0]; // Get the first character of the first name
  const lastName = parts.length > 1 ? parts[parts.length - 1] : ""; // Safely get the last name

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
      className="flex flex-col lg:flex-row lg:items-start mt-16 mb-0 xl:my-16"
    >
      <div className="w-full md:w-2/5 xl:w-1/6 xl:mx-24 mb-20 lg:mb-8">
        <div className="relative">
          <div className="aspect-w-2 aspect-h-1 xl:w-full overflow-hidden border-t-4 border-wri-blue">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 xl:w-5/6 bg-white shadow-md xl:mx-auto left-0 right-0 transform translate-y-1/2 rounded">
            <div className="text-center p-4">
              <p className="font-bold text-wri-dark-blue lg:text-2xl">{name}</p>
              <p className="text-gray-600">{company}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/5 md:mx-12 xl:mt-8">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
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
    <div className="flex flex-col lg:flex-row lg:items-start mt-16">
      <div className="flex w-full md:w-1/5 lg:mx-24 mb-8 lg:mt-20 justify-center">
        <div classname="flex">
        <figure>
          <Image
            src="/rail-transit-icon-blue.svg"
            width={360}
            height={200}
            alt="Principles icon"
            className="w-full text-wri-blue fill-current"
          />
        </figure>
        <h2 className="text-2xl text-wri-blue mt-4">ABSTRACT</h2>
        </div>
      </div>
      <div className="w-full md:w-4/5 bg-wri-blue/20 p-8">
        <h2 className="font-bold text-wri-blue text-2xl mb-6">{topic}</h2>
        <div className="flex flex-col xl:flex-row gap-8 pb-24">
          <div className="flex-1">
            <p>{abstract1}</p>
          </div>
          <div className="flex-1">
            {abstract2 && <p>{abstract2}</p>}{" "}
            {/* Conditional rendering for abstract2 */}
          </div>
        </div>
      </div>
    </div>
  );
};

// TopicLayout that dynamically renders the SpeakerCards and AbstractSection
const TopicLayout = ({ speakers, topic, abstract1, abstract2 }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
      {speakers.map((speaker) => (
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

// BiosAbstractsRT component
const BiosAbstractsRT = () => {
  const [groupedTopics, setGroupedTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch topics from Storyblok and group them
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const version = process.env.NEXT_PUBLIC_CONTENT_VERSION || 'published'; // Fallback to 'published' if not set
        const response = await Storyblok.get("cdn/stories", {
          starts_with: "wri-conferences/bios-abstract-rt",
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

              // Group speakers by topic
              if (topicsByTitle[story.content.topic]) {
                topicsByTitle[story.content.topic].speakers.push(speakerData);
              } else {
                topicsByTitle[story.content.topic] = {
                  topic: story.content.topic,
                  content1: story.content.abstract1,
                  content2: story.content.abstract2,
                  speakers: [speakerData],
                };
              }
            });

            setGroupedTopics(Object.values(topicsByTitle));
            setLoading(false);
          } catch (error) {
            console.error("Error fetching topics:", error);
            setLoading(false);
          }
        };

        fetchTopics();
      }, []);

  // Scroll to the element after it has been loaded because it's not in place in time for the browser to scroll down on first page load
  useEffect(() => {
    if (!loading) {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
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
    return <p>Loading...</p>;
  }

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-center text-5xl font-normal pb-11 leading-normal">
        <span className="text-wri-blue">
          <b>Rail Transit Seminar</b>
        </span>{" "}
        2024 Speaker Bios/Abstracts
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

export default BiosAbstractsRT;