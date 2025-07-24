import Image from 'next/image';
import RegisterButton from '@/components/buttons/register-button';

const Banner2025RT = () => {
  return (
    <section className="relative w-full h-[500px]"> {/* Set a fixed height for the banner */}
      <div className="relative w-full h-full">
        <Image
          src="/seattle-skyline.webp"
          alt="home-banner"
          layout="fill" // This makes the image cover the entire div
          className="object-cover w-full h-full" // Tailwind classes for responsiveness and coverage
          quality={100}
        />
      </div>
      {/* Absolute positioning for text, centered both horizontally and vertically */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
        <h1 className="mb-1 text-5xl text-center text-white sm:text-6xl text-shadow-outline">
            Seattle, WA
          </h1>
          <h1 className="text-5xl text-center text-white sm:text-6xl text-shadow-outline">
            Fall 2025
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner2025RT;
