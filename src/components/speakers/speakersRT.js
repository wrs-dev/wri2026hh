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
        <div className="w-full overflow-hidden border-t-4 aspect-w-2 aspect-h-1 border-wri-blue">
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
      <div className="flex justify-center w-full p-4 mt-12 lg:mt-16 h-18 sm:h-36">
        <Link href={bioLink}>
          <div className="inline-flex h-12 text-sm cursor-pointer text-wri-mid-blue md:text-xl lg:text-2xl lg:h-24">
            <div className="text-sm text-wri-mid-blue md:text-xl lg:text-2xl">
              {topic}
            </div>
            <div className="flex-shrink-0">
              <ChevronDoubleRightIcon className="w-8 h-full text-wri-blue lg:w-16" />{" "}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center mx-10 my-6 mb-6 sm:my-2 xl:mt-6">
        <Link href={bioLink}>
          <div className="px-12 py-6 text-xl text-center text-white cursor-pointer rounded-xl hover:text-wri-dark-blue hover:shadow-xl bg-wri-blue whitespace-nowrap">
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
          const version =
            process.env.NEXT_PUBLIC_CONTENT_VERSION || "published"; // Fallback to 'published' if the variable is not set
          const response = await Storyblok.get("cdn/stories", {
            starts_with: "wri-conferences/speaker-cards-rt/",
            version: version,
          });

          setSpeakers(response.data.stories.map((story) => story.content));
        } catch (error) {
          console.error("Error fetching speaker cards:", error);
        }
      };

      {/*const fetchSpeakerCards = async () => {
        try {
          const response = await Storyblok.get("cdn/stories", {
            starts_with: "wri-conferences/speaker-cards-rt/",
            version: "published",
          });

          setSpeakers(response.data.stories.map((story) => story.content));
        } catch (error) {
          console.error("Error fetching speaker cards:", error);
        }
      };*/}

      fetchSpeakerCards();
    }, []);

  return (
    <section className="mb-20 bg-white">
      <div className="container">
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
