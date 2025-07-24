import Image from 'next/image';
import Link from 'next/link';

const infoZoneSponsors = [
  {
    name: 'Amsted Rail',
    description:
      'Amsted Rail is the world’s leading manufacturer of railcar bogie systems, railway wheelsets, and end-of car components for heavy haul freight railcars, passenger railcars and locomotives. With facilities spanning more than 40 locations across 10 countries and 6 continents, Amsted Rail delivers design excellence and reliability as we are the only component supplier designing complete performance systems. Our company culture for more than a century has been to provide the most innovative components and integrated bogie systems. Amsted Digital Solutions™, delivered by Amsted Rail, is the only telematics solution designed by a company that understands freight rail operations and a truly harsh operating environment.',
    imagePath: '/gold-amstead-rail.png',
    url: 'https://www.ensco.com/rail',
    bullets: [
      'Bogie Systems',
      'Brake Systems',
      'End-Of-Car',
      'Freight Car and Locomotive Components',
      'Integrated Systems',
      'Freight Railcar Fleet Management',
      // ... other bullets
    ],
  },
  {
    name: 'Loram',
    description:
      'The LORAM Maintenance of Way InfoZone will share a case study for Class 1 railroads working to improve turnout grinding standards. Many railroads treat turnouts like tangent rail, but the case study shows significant cost savings and life extension could be achieved on the turnouts from more frequent grinding cycles and improved rail profiles. Digital twin technology, economic data, turnout inspection data, and traffic data were used to simulate different grinding strategies to help quantify the benefits and recommend improved strategy. The attendees will learn how they can use their data to help compare the business case of different strategies and present this to their finance and executive leadership. We look forward to seeing you in the LORAM InfoZone!',
    imagePath: '/platinum-loram.svg',
    url: 'https://loram.com/',
    bullets: [
      // ... add bullets if needed
    ],
  },
  {
    name: 'Plasser American',
    description:
      'The Federal Railroad Administration (FRA) creates and enforces rail safety regulations, administers rail funding, and researches rail improvement strategies and technologies. The National Transportation Safety Board (NTSB) is an independent federal agency charged by Congress to conduct independent accident investigations and advocate for safety improvements in all modes of transportation, including rail.Representatives from the FRA and NTSB will discuss each agency’s mission and how they work with other industry players to drive safety improvements. In addition to addressing questions from attendees, topics discussed will include how the two organizations are structured, a quick overview of FRA’s grant funding opportunities in research and safety, what to expect during an NTSB investigation, and a review of the two agencies’ complementary roles in rail safety.',
    imagePath: '/platinum-plasser-american.svg',
    url: 'https://www.plasseramerican.com/en/home/start',
    bullets: [
      // ... add bullets if needed
    ],
  },
];

export default function InfoZonePage() {
  return (
    <div className="py-12 bg-white">
      {/* InfoZone Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-4 mb-12 md:grid-cols-5">
          {/* Image column */}
          <div className="flex justify-center md:col-span-1 md:justify-start">
            <Image
              src="/infozone-icon.png"
              alt="InfoZone Icon"
              width={200}
              height={100}
            />
          </div>
          {/* Text column */}
          <div className="md:col-span-4">
            <p className="mt-4 text-lg">
              The InfoZone is an interactive learning environment that is
              designed to augment the information presented at the annual Heavy
              Haul Seminar.
            </p>
            <p className="mt-4 text-lg">
              Our InfoZone partners offer high-quality technical information on
              the aspects of wheel/rail interaction that they know best. These
              sessions, which are built into the Heavy Haul Seminar program, are
              designed to provide small groups of approximately 30 delegates
              insight into the product or service that is the specialty of the
              presenting company. The goal is to promote a better understanding
              of the dynamic interaction between vehicles and track. This
              innovative concept has consistently received great reviews from
              participants and InfoZone Partners alike.
            </p>
          </div>
        </div>
      </section>

      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="mb-16 text-6xl font-normal leading-normal text-center pt-11">
            <span className="text-wri-red">Meet Your</span> InfoZone Partners
          </h2>
        </div>
      </div>

      {/* Sponsors Section */}
      <section>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          {infoZoneSponsors.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className={`grid grid-cols-1 lg:grid-cols-3 mb-24 ${
                index < infoZoneSponsors.length - 1
                  ? 'pb-8 lg:pb-0 border-b lg:border-b-0'
                  : ''
              }`}
            >
              {/* Logo column */}
              <div className="pr-24 mb-4 lg:col-span-1 lg:mb-0">
                <img
                  src={sponsor.imagePath}
                  alt={sponsor.name}
                  className="max-w-full mx-auto lg:mx-0"
                />
              </div>
              {/* Text column */}
              <div className="lg:col-span-2">
                <p className="mt-1 mb-4 text-base leading-7">
                  {sponsor.description}
                </p>
                {sponsor.bullets && sponsor.bullets.length > 0 && (
                  <div className="mb-4">
                    {sponsor.bullets.map((bullet, index) => (
                      <p className="py-1 pl-6" key={index}>
                        &#8226; {bullet}
                      </p>
                    ))}
                  </div>
                )}
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline"
                >
                  Visit the {sponsor.name} website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
