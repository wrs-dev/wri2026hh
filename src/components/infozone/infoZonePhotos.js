import React from 'react';

const files = [
  {
    title: 'InfoZone Photo',
    size: 'WRI 2023',
    source: '/InfoZone-1.jpg',
  },
  {
    title: 'InfoZone Photo',
    size: 'WRI 2023',
    source: '/InfoZone-2.jpg',
  },
  {
    title: 'InfoZone Photo',
    size: 'WRI 2023',
    source: '/InfoZone-3.jpg',
  },
  {
    title: 'InfoZone Photo',
    size: 'WRI 2023',
    source: '/InfoZone-4.jpg',
  },
  {
    title: 'InfoZone Photo',
    size: 'WRI 2023',
    source: '/InfoZone-5.jpg',
  },
  {
    title: 'InfoZone Photo',
    size: 'WRI 2023',
    source: '/InfoZone-6.jpg',
  },
  {
    title: 'InfoZone Photo',
    size: 'WRI 2023',
    source: '/InfoZone-7.jpg',
  },
  {
    title: 'InfoZone Photo',
    size: 'WRI 2023',
    source: '/InfoZone-8.jpg',
  },
  // More files...
];

export default function InfoZonePhotos() {
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {files.map(file => (
          <li key={file.source} className="relative">
            <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={file.source}
                alt=""
                className="object-cover pointer-events-none group-hover:opacity-75"
              />
            </div>
            {/*<p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
              {file.title}
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              {file.size}
            </p>*/}
          </li>
        ))}
      </ul>
    </>
  );
}
