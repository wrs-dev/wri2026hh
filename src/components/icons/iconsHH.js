import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

const IconLinksHH = () => {
  const router = useRouter();

  // Principles Course: active with link (except on main PC page)
  // Heavy Haul: inactive (no link, always grayed out until speakers added)
  const onPrinciplesCourseMain = router.pathname === '/principles-course';
  const principlesCourseActive = !onPrinciplesCourseMain;

  // PC is green, with hover effect when clickable
  // HH is always gray (inactive until speakers added)
  const pcBgColor = principlesCourseActive
    ? 'bg-wri-green hover:border-wri-yellow'
    : 'bg-wri-green';
  const hhBgColor = 'bg-wri-neutral'; // Always inactive

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {/* Principles Course - Active with link */}
          {principlesCourseActive ? (
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

          {/* Heavy Haul - Inactive (no link, grayed out) */}
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
        </ul>
      </div>
    </div>
  );
};

export default IconLinksHH;
