import Image from 'next/image';

const BannerComp = () => {
  return (
    <section className="relative">
      <div className="relative w-full h-auto">
        {' '}
        {/* Adjust width and height as needed */}
        {/* Div to control image size and responsiveness */}
        <div className="w-full h-full overflow-hidden">
          {' '}
          {/* Ensures image covers the full area */}
          <Image
            src="/chicago-cityscape.webp"
            alt="home-banner"
            width={1466} // Original aspect ratio of your image
            height={620}
            className="object-cover w-full h-auto" // Tailwind classes for responsiveness and coverage
            quality={100}
          />
        </div>
      </div>
      {/* Absolute positioning for text, pushed to the bottom with padding */}
      <div className="absolute bottom-0 w-full pb-6 md:pb-30">
        <div className="text-center">
          <h1 className="mb-8 text-2xl text-white lg:text-6xl text-shadow-outline">
            CHICAGO - May 21-24, 2024
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BannerComp;
