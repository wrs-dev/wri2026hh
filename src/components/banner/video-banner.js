import RegisterButton from "@/components/buttons/register-button";
import { TwicVideo } from '@twicpics/components/react'

const VideoBanner = () => {
  return (
    <section className="relative">
      <div className="relative w-full h-auto">
        <div className="w-full h-full overflow-hidden">
          <video
            data-twic-src="chicago-skyline-1280x544-optimized_pe0nil.mp4"
            data-twic-intrinsic="1280x544"
            autoPlay
            loop
            muted
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-full pb-8 lg:pb-16 md:pb-20">
        <div className="text-center">
          <h1 className="mb-12 text-2xl text-white sm:text-6xl text-shadow-outline lg:mb-56 xl:mb-8">
            CHICAGO - May 21-24, 2024
          </h1>
          <RegisterButton />
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
