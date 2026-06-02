import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/navigation';
import SponsorPage from '@/components/sponsors/sponsorPage';

export async function getStaticProps() {
  return {
    props: {
      title: 'WRI 2026 HH | Recap - Thank You',
      description:
        'Thank you for joining us at the WRI 2026 Heavy Haul Conference in Dallas, TX, April 22-24, 2026. Browse photos and revisit our sponsors and InfoZone partners.',
      socialImage: '/wri2026-hh-social.png',
    },
  };
}

const presentingSponsors = [
  {
    name: 'NuRail',
    src: '/NuRail_Presenting_Sponsor_2025.png',
    url: 'https://nurailproducts.com/',
    width: 320,
    height: 96,
  },
  {
    name: 'RT&S',
    src: '/RTS_Presenting_Sponsor_2025.png',
    url: 'https://www.rtands.com/',
    width: 320,
    height: 96,
  },
];

const infoZonePartners = [
  {
    name: 'Loram',
    src: '/platinum-loram.png',
    url: 'https://loram.com/',
    className: 'h-16',
  },
  {
    name: 'Hexagon',
    src: '/hexagon-2026.png',
    url: 'https://hexagon.com/',
    className: 'h-20',
  },
  {
    name: 'Linsinger',
    src: '/silver-linsinger.png',
    url: 'https://www.linsinger.com/',
    className: 'h-24',
  },
  {
    name: 'Plasser American',
    src: '/platinum-plasser-american.svg',
    url: 'https://www.plasseramerican.com/en/home/start',
    className: 'h-14',
  },
  {
    name: 'Athena Industrial',
    src: '/silver-athena.png',
    url: 'https://www.athenaindustrialservices.com/',
    className: 'h-16',
  },
];

const galleryImages = Array.from({ length: 50 }, (_, i) => ({
  src: `/26-gallery/2026HH-gallery-${i + 1}.webp`,
  alt: `WRI 2026 Heavy Haul Conference photo ${i + 1}`,
}));

export default function Recap() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isOpen = lightboxIndex !== null;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };
    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeLightbox, showPrev, showNext]);

  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero */}
      <section className="px-6 pt-16 pb-12 mx-auto text-center max-w-7xl lg:px-8 sm:pt-24 sm:pb-16">
        <h1 className="text-5xl font-extrabold tracking-tight font-wri text-wri-blue sm:text-7xl">
          Thank You
        </h1>
        <h2 className="mt-4 text-2xl font-light font-wri text-wri-red sm:text-4xl">
          WRI 2026 Heavy Haul Conference
        </h2>
        <p className="mt-6 text-lg text-gray-700 sm:text-xl">
          Dallas, Texas &middot; April 22&ndash;24, 2026
        </p>
        <p className="max-w-3xl mx-auto mt-6 text-base text-gray-600 sm:text-lg">
          To everyone who joined us in Dallas&mdash;attendees, speakers,
          sponsors, and InfoZone partners&mdash;thank you for making the 31st
          Annual Wheel/Rail Interaction Conference a tremendous success.
        </p>
      </section>

      {/* Presenting Sponsors */}
      <section className="px-6 py-12 mx-auto max-w-7xl lg:px-8">
        <h3 className="mb-10 text-3xl font-bold tracking-tight text-center text-black sm:text-4xl">
          <span className="text-wri-blue">Presenting</span> Sponsors
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 sm:gap-x-24">
          {presentingSponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={sponsor.src}
                alt={`${sponsor.name} Presenting Sponsor`}
                width={sponsor.width}
                height={sponsor.height}
                className="object-contain w-auto h-20 sm:h-24"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Sponsors (tiered) */}
      <section>
        <div className="seminar-about-text">
          <div className="px-12 mx-auto">
            <h3 className="text-5xl font-normal leading-normal text-center pt-11 sm:text-6xl">
              Thank you to our <b>WRI 2026 HH</b> Sponsors
            </h3>
          </div>
        </div>
        <SponsorPage />
      </section>

      {/* InfoZone Partners */}
      <section className="px-6 pt-8 pb-24 mx-auto max-w-7xl lg:px-8">
        <h3 className="mb-10 text-4xl font-normal leading-normal text-center text-black sm:text-5xl">
          Our InfoZone Partners
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 sm:gap-x-24">
          {infoZonePartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-28"
            >
              <img
                src={partner.src}
                alt={`${partner.name} InfoZone Partner`}
                className={`object-contain ${partner.className}`}
              />
            </a>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="px-6 py-16 mx-auto bg-gray-50 max-w-screen-2xl lg:px-8">
        <h3 className="mb-4 text-4xl font-normal leading-normal text-center text-black sm:text-5xl">
          Conference Highlights
        </h3>
        <p className="mb-12 text-center text-gray-600">
          A look back at WRI 2026 HH in Dallas.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              key={image.src}
              onClick={() => setLightboxIndex(index)}
              className="relative overflow-hidden bg-gray-200 rounded-lg cursor-pointer aspect-square group focus:outline-none focus:ring-2 focus:ring-wri-blue focus:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close"
            className="absolute z-10 p-2 text-white rounded-full top-4 right-4 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <XMarkIcon className="w-8 h-8" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute z-10 p-2 text-white -translate-y-1/2 rounded-full left-2 sm:left-4 top-1/2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronLeftIcon className="w-10 h-10" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute z-10 p-2 text-white -translate-y-1/2 rounded-full right-2 sm:right-4 top-1/2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronRightIcon className="w-10 h-10" aria-hidden="true" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-full h-full px-4 py-16 sm:px-16"
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="object-contain max-w-full max-h-full select-none"
            />
          </div>

          <p className="absolute text-sm text-white bottom-4 left-1/2 -translate-x-1/2 bg-black/40 px-3 py-1 rounded">
            {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </main>
  );
}
