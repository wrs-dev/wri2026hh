import { useRouter } from 'next/router';
import Image from 'next/image';
import { useMemo } from 'react';

const IconLinksHH = () => {
  const router = useRouter();

  const icons = useMemo(
    () => [
      {
        src: '/principles-icon.svg',
        title: 'Principles Course',
        date: 'April 22, 2026',
      },
      {
        src: '/heavy-haul-icon.svg',
        title: 'Heavy Haul Seminar',
        date: 'April 23-24, 2026',
      },
    ],
    [],
  );

  const getRestingBackgroundColor = useMemo(() => {
    if (router.pathname.includes('principles-course')) {
      return ['bg-wri-green', 'bg-wri-neutral'];
    } else if (router.pathname.includes('heavy-haul')) {
      return ['bg-wri-neutral', 'bg-wri-red'];
    }

    // Default for ALL other routes (including '/')
    return ['bg-wri-green', 'bg-wri-red'];
  }, [router.pathname]);

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {icons.map((icon, index) => (
            <li
              key={icon.title}
              className={`border-2 border-white shadow-lg ${getRestingBackgroundColor[index]}`}
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconLinksHH;
