import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

const IconLinksHH = () => {
  const router = useRouter();

  // Determine which seminar section we're on
  const onPrinciplesSection = router.pathname.startsWith('/principles-course');
  const onHeavyHaulSection = router.pathname.startsWith('/heavy-haul-seminar');

  // On own section = no link (colored), on other section = link (grayed), elsewhere = link (colored)
  const pcHasLink = !onPrinciplesSection;
  const hhHasLink = !onHeavyHaulSection;

  // Colors: on other seminar = grayed (no hover), on own page = colored no hover, elsewhere = colored with hover
  const pcBgColor = onHeavyHaulSection
    ? 'bg-wri-neutral'
    : pcHasLink
      ? 'bg-wri-green hover:border-wri-yellow'
      : 'bg-wri-green';
  const hhBgColor = onPrinciplesSection
    ? 'bg-wri-neutral'
    : hhHasLink
      ? 'bg-wri-red hover:border-wri-blue'
      : 'bg-wri-red';

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {/* Principles Course - Link except when on PC pages */}
          {pcHasLink ? (
            <Link href="/principles-course">
              <li className={`border-2 border-white shadow-lg ${pcBgColor}`}>
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
          ) : (
            <li className={`border-2 border-white shadow-lg ${pcBgColor}`}>
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
          )}

          {/* Heavy Haul - Link except when on HH pages */}
          {hhHasLink ? (
            <Link href="/heavy-haul-seminar">
              <li className={`border-2 border-white shadow-lg ${hhBgColor}`}>
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
            </Link>
          ) : (
            <li className={`border-2 border-white shadow-lg ${hhBgColor}`}>
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
          )}
        </ul>
      </div>
    </div>
  );
};

export default IconLinksHH;
