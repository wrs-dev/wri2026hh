import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function InfoZoneSection() {
  return (
    <section className="expo-zone" id="zones">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="grid row">
          <div className="col">
            <ul className="grid">
              <li>
                <div className="pt-8 text-4xl text-wri-blue">ExpoZone</div>
                <span className="block pb-10 text-wri-blue">
                  {/* removed text but kept yellow underline - temporary */}
                </span>
                <p>
                  The ExpoZone is a strategically designed space within the WRI
                  conference venue that serves as a prime location for sponsors
                  to showcase their brands to a highly engaged and diverse
                  audience.{' '}
                </p>
                <Link
                  className="pt-4 underline text-wri-red"
                  href="https://wri2025hh.wheel-rail-seminars.com/sponsor-packages"
                >
                  Join the 2025 ExpoZone!
                </Link>
              </li>
              <li>
                <figure className="relative w-full h-0 pb-[95.31%]">
                  <Image
                    src="/expo-zone.webp"
                    alt="classes-image"
                    layout="fill"
                    className="object-cover"
                    quality={100}
                    loading="lazy"
                  />
                </figure>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="grid">
              <li>
                <div className="pt-8 text-4xl text-wri-blue">InfoZone</div>
                <span className="block pb-10 text-wri-blue">
                  {/* removed text but kept yellow underline - temporary */}
                </span>
                <p>
                  Our InfoZone partners offer high-quality technical information
                  on wheel/rail interaction. These sessions are built into the
                  program and designed for small group interaction.{' '}
                </p>
                <Link
                  className="pt-4 underline text-wri-green"
                  href="https://wri2025hh.wheel-rail-seminars.com/sponsor-packages"
                >
                  Get into the InfoZone!
                </Link>
              </li>
              <li>
                <figure className="relative w-full h-0 pb-[95.31%]">
                  <Image
                    src="/info-zone.webp"
                    alt="info-zone"
                    layout="fill"
                    className="object-cover"
                    quality={100}
                    loading="lazy"
                  />
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
