import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

const IconLinksRT = () => {
  const router = useRouter();

  const icons = useMemo(
    () => [
      {
        href: '/principles-course#icons',
        src: '/principles-icon.svg',
        title: 'Principles Course',
        date: 'Fall 2025',
        hoverBorderColor: 'hover:border-wri-yellow',
        hoverBgColor: 'hover:bg-wri-green',
      },
      {
        href: '/rail-transit-seminar#icons',
        src: '/rail-transit.svg',
        title: 'Rail Transit Seminar',
        date: 'Fall 2025',
        hoverBorderColor: 'hover:border-wri-red',
        hoverBgColor: 'hover:bg-wri-blue',
      },
    ],
    [],
  );

  const getRestingBackgroundColor = useMemo(() => {
    const backgrounds = ['bg-wri-green', 'bg-wri-blue', 'bg-wri-red'];
    if (router.pathname.includes('rail-transit')) {
      backgrounds[1] = backgrounds[2] = 'bg-wri-neutral';
    } else if (router.pathname.includes('principles-course')) {
      backgrounds[0] = backgrounds[2] = 'bg-wri-neutral';
    } else if (router.pathname.includes('heavy-haul')) {
      backgrounds[0] = backgrounds[1] = 'bg-wri-neutral';
    }
    return backgrounds;
  }, [router.pathname]);

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {icons.map((icon, index) => (
            <Link href={icon.href} key={icon.href}>
              <li
                className={`border-2 border-white shadow-lg ${getRestingBackgroundColor[index]} ${icon.hoverBorderColor} ${icon.hoverBgColor}`}
              >
                <figure>
                  <Image
                    src={icon.src}
                    width={180}
                    height={100}
                    alt={icon.title.toLowerCase()}
                    className="w-full"
                  />
                </figure>
                <div className="text">
                  <h4 className="text-2xl font-bold text-white">
                    {icon.title}
                  </h4>
                  <p className="text-2xl font-normal text-white">{icon.date}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconLinksRT;
