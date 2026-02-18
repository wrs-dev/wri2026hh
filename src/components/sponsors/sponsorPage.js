import Image from 'next/image';
import Link from 'next/link';

const goldSponsors = [
  {
    name: 'ESI',
    description: '',
    imagePath: '/esi-logo.png',
    url: 'https://www.engsys.com/industries/transportation/rail/',
  },
  {
    name: 'ENSCO',
    description: '',
    imagePath: '/platinum-ensco-nospace.jpg',
    url: 'https://www.ensco.com/rail',
    extraClass: 'mb-4',
  },
  {
    name: 'Holland',
    description: '',
    imagePath: '/gold-holland.png',
    url: 'https://www.hollandco.com/',
  },
  {
    name: 'Scout Robotics',
    description: '',
    imagePath: '/scout-robotics.png',
    url: 'https://www.scoutrobotics.com/',
  },
];

const silverSponsors = [
  {
    name: 'Getzner',
    description: '',
    imagePath: '/getzner-logo.png',
    url: 'https://www.getzner.com/en',
  },
];

const bronzeSponsors = [
  {
    name: 'Steel Dynamics, Inc. (SDI)',
    description: '',
    imagePath: '/bronze-steel-dynamics.png',
    url: 'https://www.steeldynamics.com/',
  },
];

export default function SponsorPage() {
  return (
    <div className="pt-12 pb-24 bg-white sm:py-32">

      {/* Gold Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-yellow-600">GOLD</span> sponsors
            </h2>
            <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
              {goldSponsors.map((sponsor) => (
                <div key={sponsor.name}>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-22">
                      <img
                        src={sponsor.imagePath}
                        alt={sponsor.name}
                        className={`img-fill-contain ${
                          sponsor.name === 'Holland' ? 'h-24' :
                          sponsor.name === 'ENSCO' ? 'h-20' :
                          'max-h-20'
                        }`}
                      />
                    </div>
                  </dt>
                  <dd className="mt-1 text-base leading-7">
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Visit the {sponsor.name} website
                    </a>
                    {sponsor.description && <p>{sponsor.description}</p>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      {/* Silver Sponsor Section */}
      <section>
        <div className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-slate-500">SILVER</span> sponsors
            </h2>
            <div className="col-span-2">
              <dl className="grid items-end grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
                {silverSponsors.map((sponsor) => (
                  <div key={sponsor.name}>
                    <dt className="text-base font-semibold leading-7 text-black">
                      <div className="flex items-center h-24">
                        <img
                          src={sponsor.imagePath}
                          alt={sponsor.name}
                          className="img-fill-contain max-h-14"
                        />
                      </div>
                    </dt>
                    <dd className="mt-1 text-base leading-7">
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                      >
                        Visit the {sponsor.name} website
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Bronze Sponsor Section */}
      <section>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              <span className="text-amber-800">BRONZE</span> sponsors
            </h2>
            <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2 place-items-start">
              {bronzeSponsors.map((sponsor) => (
                <div key={sponsor.name}>
                  <dt className="text-base font-semibold leading-7 text-black">
                    <div className="flex items-center h-20">
                      <img
                        src={sponsor.imagePath}
                        alt={sponsor.name}
                        className="img-fill-contain max-h-20"
                      />
                    </div>
                  </dt>
                  <dd className="mt-4 text-base leading-7">
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      Visit the {sponsor.name} website
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
