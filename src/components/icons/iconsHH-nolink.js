import { useRouter } from 'next/router';
import Link from 'next/link';
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

  // Always make the Principles Course button green, Heavy Haul stays neutral
  const getRestingBackgroundColor = useMemo(() => {
    return ['bg-wri-green', 'bg-wri-red']; 
  }, []);

  return (
    <div className="btn_wrapper" data-aos="fade-up" id="icons">
      <div className="container">
        <ul className="flex flex-wrap">
          {icons.map((icon, index) => (
            icon.href ? (
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
            ) : (
              <li
                key={index}
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
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IconLinksHH;