import Image from 'next/image';
import RegisterButton from '@/components/buttons/register-button';

const Banner2026HHnobutton = () => {
  return (
    <section className="relative w-full min-h-[350px] sm:min-h-[500px]">
      {/* 1. Hero background image */}
      <Image
        src="/dallas-skyline.webp"
        alt="home-banner"
        fill
        className="object-cover"
        quality={90} // Adjust if needed
      />

      {/* 2. 30th Anniversary Logo - now 250x306 px and larger defaults 
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8">
        <Image
          src="/30th-anniversary-logo-blk-250.png"
          alt="30th Anniversary Logo"
          width={250}
          height={306}
          className="w-24 h-auto sm:w-24 md:w-36 lg:w-48"
          priority
        />
      </div>*/}

      {/* 3. Centered text & button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white sm:text-6xl text-shadow-outline">
          Dallas, Texas
        </h1>
        <h2 className="text-3xl font-bold text-white sm:text-6xl text-shadow-outline">
          April 22-24, 2026
        </h2>
        <div className="mt-4">
          {/*<RegisterButton />*/}
        </div>
      </div>
    </section>
  );
};

export default Banner2026HHnobutton;
