import Image from 'next/image';
import RegisterButton from '@/components/buttons/register-button';

const Banner2025RT = () => {
  return (
    <section className="relative w-full min-h-[350px] sm:min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/kansas-city-skyline.webp"
          alt="home-banner"
          layout="fill"
          className="object-cover w-full h-full"
          quality={100}
        />
      </div>

      {/* 30th Anniversary Logo positioned in the top-right corner */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8">
        <Image
          src="/30th-anniversary-logo-blk-250.png"
          alt="30th Anniversary Logo"
          width={250}
          height={306}
          className="w-24 h-auto sm:w-24 md:w-36 lg:w-48"
          priority
        />
      </div>

      {/* Centered Headings (and RegisterButton if needed) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-1 text-4xl text-center text-white sm:text-6xl text-shadow-outline">
            Kansas City, MO
          </h1>
          <h1 className="mb-8 text-4xl text-center text-white sm:text-6xl text-shadow-outline">
            June 10-12, 2025
          </h1>
          {/* Uncomment if you'd like to place the RegisterButton here:
          <RegisterButton />
          */}
        </div>
      </div>
    </section>
  );
};

export default Banner2025RT;