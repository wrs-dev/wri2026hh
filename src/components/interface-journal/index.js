import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import useSWR from 'swr';

// Define animation variants for the icon
const iconVariants = {
  hover: {
    x: [0, 5, 0],
    transition: { repeat: Infinity, duration: 1 },
  },
};

// Fetcher function to get the RSS feed data from the serverless function
const fetcher = (url) => fetch(url).then((res) => res.text());

// Parse the RSS feed data
const parseRSS = (rss) => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(rss, "application/xml");
  const items = Array.from(xml.querySelectorAll("item")).map((item) => ({
    title: item.querySelector("title")?.textContent || '',
    link: item.querySelector("link")?.textContent || '',
    description: item.querySelector("description")?.textContent || '',
    pubDate: item.querySelector("pubDate")?.textContent || '',
    imageURL: item.querySelector("enclosure")?.getAttribute('url') || '', // Check for image in enclosure
  }));
  return items;
};

// Sanitize HTML
const sanitizeHTML = (html) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || '';
};

// Function to extract image URL from article
const extractImageURL = (article) => {
  // Check for custom image URL field first
  if (article.imageURL) {
    console.log('Custom Image URL:', article.imageURL);
    return article.imageURL;
  }
  // Fallback to extracting from description
  console.log('Description:', article.description);
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = article.description;
  const imgTag = tempDiv.querySelector('img');
  const srcAttr = imgTag ? imgTag.getAttribute('src') : '';
  console.log('Extracted src:', srcAttr);
  return srcAttr ? srcAttr : '/default-image.webp'; // Fallback to a default image if no image is found
};

export default function InterfaceJournal() {
  const { data, error } = useSWR('/.netlify/functions/fetch-rss', fetcher);
  const [articleImage, setArticleImage] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (data) {
      const parsedArticles = parseRSS(data);
      console.log('Parsed Articles:', parsedArticles);
      setArticles(parsedArticles);
    }
  }, [data]);

  useEffect(() => {
    if (articles.length > 0) {
      const newImageURL = extractImageURL(articles[0]);
      console.log('Extracted Image URL:', newImageURL);
      setArticleImage(newImageURL);
    }
  }, [articles]);

  if (error) return <div>Failed to load articles</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-white">
      <h1 className="relative inline-block capitalize text-xl md:text-2xl font-bold text-black after:absolute after:bg-wri-yellow after:bottom-0 after:left-0 after:h-0.5 after:w-full">
        EXPERT COVERAGE OF WRI
      </h1>
      <div className="flex mt-10 justify-left">
        <figure className="pr-0 md:pr-20">
          <Image
            src="/ij-logo.png"
            alt="Interface Journal"
            width={225}
            height={78}
            sizes="(max-width: 300px) 100vw, 300px"
            loading="lazy"
            className="w-auto h-auto"
          />
        </figure>
      </div>
      <div className="mt-6 text-gray-800">
        <p>
          Interface journal is devoted to examining issues associated with
          wheel/rail interaction and ways in which technology is being used to
          resolve them on railroads and transit systems around the world.
        </p>
      </div>
      {articles.length > 0 && (
        <>
          <h1 className="mt-10 text-2xl font-bold text-wri-mid-blue">
            {articles[0].title}
          </h1>
          <div className="flex flex-col mt-8 xl:flex-row xl:items-start">
            <div className="w-full xl:w-[270px] mb-6 xl:mb-0">
              <Image
                src={articleImage}
                alt="Interface Journal Post"
                width={640}
                height={395}
                sizes="(max-width: 400px) 100vw, 500px"
                loading="lazy"
                className="w-auto h-auto"
              />
            </div>
            <div className="xl:w-[calc(100%-300px)] xl:pl-6">
              <p className="text-gray-800">
                {sanitizeHTML(articles[0].description)}{' '}
                <a
                  className="text-wri-red"
                  href={articles[0].link}
                >
                  <span className="text-sm">[continued]</span>
                </a>
              </p>
            </div>
          </div>
        </>
      )}
      <div className="flex items-center mt-6">
        <a
          href="https://interfacejournal.com/"
          className="flex items-center text-1xl text-wri-green group"
        >
          Visit Interface Journal for this and other wheel/rail articles
          <motion.div
            className="inline-block pl-2"
            variants={iconVariants}
            whileHover="hover"
          >
            <ChevronDoubleRightIcon className="w-6 h-6" />
          </motion.div>
        </a>
      </div>
    </div>
  );
}