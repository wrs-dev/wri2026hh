import Link from 'next/link';
import Image from 'next/image';

const IconLinksHH = () => {
  // Principles Course: active with link (green)
  // Heavy Haul: inactive (no link, grayed out until speakers added)

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {/* Principles Course - Active with link */}
          <Link href="/principles-course">
            <li className="border-2 border-white shadow-lg bg-wri-green hover:border-wri-yellow">
              <figure>
                <Image
                  src="/principles-icon.svg"
                  width={180}
                  height={100}
                  alt="principles course"
                  className="w-full"
                />
              </figure>
              <div className="text">
                <h4 className="text-2xl font-bold text-white">
                  Principles Course
                </h4>
                <p className="text-2xl font-normal text-white">April 22, 2026</p>
              </div>
            </li>
          </Link>

          {/* Heavy Haul - Inactive (no link, grayed out) */}
          <li className="border-2 border-white shadow-lg bg-wri-neutral">
            <figure>
              <Image
                src="/heavy-haul-icon.svg"
                width={180}
                height={100}
                alt="heavy haul seminar"
                className="w-full"
              />
            </figure>
            <div className="text">
              <h4 className="text-2xl font-bold text-white">
                Heavy Haul Seminar
              </h4>
              <p className="text-2xl font-normal text-white">April 23-24, 2026</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconLinksHH;