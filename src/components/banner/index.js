import Image from 'next/image';
import RegisterButton from '@/components/buttons/register-button';

const BannerComp = () => {
  return (
    <section className="relative w-full h-auto">
      <div className="relative w-full h-0 pb-[42.29%]"> {/* 620 / 1466 ≈ 42.29% */}
        <Image
          src="/chicago-cityscape.webp"
          alt="home-banner"
          layout="fill"
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="absolute w-full bottom-6 lg:pb-12 md:pb-18">
        <div className="text-center">
          <h1 className="mb-8 text-2xl text-white lg:mb-12 sm:text-6xl text-shadow-outline xl:mb-8">
            CHICAGO - May 21-24, 2024
          </h1>
          <RegisterButton />
        </div>
      </div>
    </section>
  );
};

export default BannerComp;
