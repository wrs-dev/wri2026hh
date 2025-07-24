import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";
import StoryblokClient from "storyblok-js-client";

// Initialize Storyblok client
const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  region: "us",
});

const SpeakerCard = ({ name, company, imageSrc, topic, bioLink }) => {
  // Ensure imageUrl in Storyblok matches the name of the photo (firstname-lastname.jpg)

  return (
    <div className="group">
      <div className="relative">
        <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 w-11/12 bg-white shadow-md mx-auto left-0 right-0 transform translate-y-1/2">
          <div className="text-center p-4">
            <p className="font-bold text-wri-dark-blue text-lg md:text-xl lg:text-3xl h-8 lg:h-12">
              {name}
            </p>
            <p className="text-gray-600 text-sm md:text-base lg:text-xl h-8 lg:h-10">
              {company}
            </p>
          </div>
        </div>
      </div>
      <div className="flex p-4 mt-12 lg:mt-16 justify-center">
        <Link href={bioLink}>
          <div className="inline-flex text-wri-mid-blue text-sm md:text-xl lg:text-2xl cursor-pointer h-12 lg:h-24">
            {topic}
            <ChevronDoubleRightIcon className="text-wri-blue w-16" />
          </div>
        </Link>
      </div>
      <div className="flex justify-center mx-10 my-6 sm:my-2 mb-6 xl:mt-6">
        <Link href={bioLink}>
          <div className="rounded-md text-center text-xl text-white hover:text-wri-dark-blue hover:shadow-xl bg-wri-blue py-6 px-12 cursor-pointer whitespace-nowrap">
            Bio & Abstract
          </div>
        </Link>
      </div>
    </div>
  );
};

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

const SpeakersRT = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakerCards = async () => {
      try {
        const version = process.env.NEXT_PUBLIC_CONTENT_VERSION || "published"; // Fallback to 'published' if the variable is not set
        const response = await Storyblok.get("cdn/stories", {
          starts_with: "wri-conferences/speaker-cards-rt/",
          version: version,
        });

        setSpeakers(response.data.stories.map((story) => story.content));
      } catch (error) {
        console.error("Error fetching speaker cards:", error);
      }
    };

    {
      /*const fetchSpeakerCards = async () => {
        try {
          const response = await Storyblok.get("cdn/stories", {
            starts_with: "wri-conferences/speaker-cards-rt/",
            version: "published",
          });

          setSpeakers(response.data.stories.map((story) => story.content));
        } catch (error) {
          console.error("Error fetching speaker cards:", error);
        }
      };*/
    }

    fetchSpeakerCards();
  }, []);

  return (
    <section className="bg-white mb-20">
      <div className="container">
        <h2 className="text-center text-5xl font-normal pb-11">
          Meet the{" "}
          <span className="text-wri-blue">
            <b>2024 Rail Transit Seminar</b>
          </span>{" "}
          Speakers
        </h2>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {speakers.map((speaker) => (
              <SpeakerCard
                key={speaker.name}
                {...speaker}
                bioLink={`/rail-transit-seminar-bios-abstracts#bio-${generateSlug(
                  speaker.name
                )}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersRT;
