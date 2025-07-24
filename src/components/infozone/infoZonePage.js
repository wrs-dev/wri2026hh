import Image from 'next/image';
import InfoZonePhotos from '@/components/infozone/infoZonePhotos';

const infoZoneSponsors = [
  {
    name: 'Loram',
    url: 'https://loram.com/',
    logo: '/platinum-loram.svg',
    alt: 'Loram logo',
    heightClass: 'h-16',
  },
  {
    name: 'Linsinger',
    url: '#linsinger',
    logo: '/silver-linsinger.png',
    alt: 'Linsinger logo',
    heightClass: 'h-24',
  },
  {
    name: 'KONUX',
    url: '#konux',
    logo: '/konux.png',
    alt: 'KONUX logo',
    heightClass: 'h-36',
  },
  {
    name: 'BossPac Technologies',
    url: '#bosspac',
    logo: '/bosspac-logo.svg',
    alt: 'BossPac Technologies logo',
    heightClass: 'h-12',
  },
  {
    name: 'Plasser American',
    url: '#plasser-american',
    logo: '/platinum-plasser-american.svg',
    alt: 'Plasser American logo',
    heightClass: 'h-12',
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
              The InfoZone is an interactive learning environment designed to augment the information presented at the annual Heavy Haul Seminar.
            </p>
            <p className="mt-4 text-lg">
              Our InfoZone partners offer high-quality technical information on the aspects of wheel/rail interaction that they know best. These sessions, built into the Heavy Haul Seminar program, provide small groups of approximately 30 delegates with insight into the product or service that is the specialty of the presenting company. The goal is to promote a better understanding of the dynamic interaction between vehicles and track. This innovative concept has consistently received great reviews from participants and InfoZone Partners alike.
            </p>
          </div>
        </div>
      </section>

      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="mb-16 text-6xl font-normal leading-normal text-center pt-11">
            Meet Your InfoZone Partners
          </h2>
        </div>
      </div>

      {/* Sponsors Section */}
      <section>
        <div className="px-6 mx-auto mb-48 max-w-7xl lg:px-8">
          <div className="flex justify-center gap-12 mb-24">
            <div className="flex items-center justify-center w-1/3">
              <a href={infoZoneSponsors[0].url} target="_blank" rel="noopener noreferrer">
                <img
                  src={infoZoneSponsors[0].logo}
                  alt={infoZoneSponsors[0].alt}
                  className={`max-w-full object-contain ${infoZoneSponsors[0].heightClass}`}
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-1/3">
              <a href={infoZoneSponsors[1].url}>
                <img
                  src={infoZoneSponsors[1].logo}
                  alt={infoZoneSponsors[1].alt}
                  className={`max-w-full object-contain ${infoZoneSponsors[1].heightClass}`}
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-1/3">
              <a href={infoZoneSponsors[2].url}>
                <img
                  src={infoZoneSponsors[2].logo}
                  alt={infoZoneSponsors[2].alt}
                  className={`max-w-full object-contain ${infoZoneSponsors[2].heightClass}`}
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-24">
            {infoZoneSponsors.slice(3).map(({ name, url, logo, alt, heightClass }) => (
              <div key={name} className="flex items-center justify-center w-1/2">
                <a href={url} {...(url.startsWith('https://') ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <img
                    src={logo}
                    alt={alt}
                    className={`object-contain ${heightClass}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* InfoZone Photos Section */}
      <section>
        <div className="flex items-center justify-center px-6 mx-auto mb-48 max-w-7xl lg:px-8">
          <InfoZonePhotos />
        </div>
      </section>

      {/* Abstracts Section Header */}
      <div className="px-12 mx-auto">
        <h3 className="mb-8 text-4xl font-normal leading-normal text-center pt-11">
          Review the InfoZone Abstracts
        </h3>
      </div>

      {/* Linsinger Abstract Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div id="linsinger" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          <div className="hidden md:block md:col-span-1"></div>
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">Linsinger Abstract</h3>
          </div>
          <div className="flex items-start justify-center hidden mt-4 ml-4 md:justify-start md:block md:col-span-1">
            <a href="https://www.linsinger.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/linsinger-trans.png"
                alt="Linsinger Logo"
                width={180}
                height={90}
              />
            </a>
          </div>
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg font-semibold">Title: Rail Maintenance Strategies in North America.</p>
            <p className="mt-4 text-lg">
              Different strategies for maintenance of the rails are discussed in this presentation. It concerns questions like: Is it possible to improve todays widely used strategy with cyclic preventive grinding? Is Magic Wear Rate realistic to define efficiently or is it too complex? Could cyclic monitoring of the rails and condition-based reprofiling be beneficial? When is grinding beneficial over milling and vice versa?
            </p>
            <p className="mt-4 text-lg">
              The presentation will be focusing on when, where and how to benefit from monitoring and reprofiling of rails. Data about the rail conditions is important for these decisions and for this different monitoring methods exist.
            </p>
            <p className="pb-4 mt-4 text-lg">
              The presentation is based on more than 25 years experiences by the presenter in the field of condition-based maintenance of rails.
            </p>
          </div>
        </div>
      </section>

      {/* KONUX Abstract Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div id="konux" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          <div className="hidden md:block md:col-span-1"></div>
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">KONUX Abstract</h3>
          </div>
          <div className="flex items-start justify-center hidden mt-4 ml-4 md:justify-start md:block md:col-span-1">
            <a href="https://www.konux.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/konux.png"
                alt="KONUX Logo"
                width={200}
                height={100}
              />
            </a>
          </div>
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              KONUX delivers data-driven solutions that transform railway asset management. By combining IoT data with advanced analytics, our solution continuously monitors track and turnout conditions, detecting degradation before failures occur. This enables infrastructure managers to optimise maintenance strategies, extend asset lifetime, and reduce unplanned downtime. Our solutions provide actionable insights that enhance network reliability, safety, and efficiency - helping railways meet growing capacity demands while lowering maintenance costs. With a focus on predictive maintenance, KONUX empowers operators to move from reactive fixes to proactive decision-making, ensuring long-term infrastructure resilience and operational excellence in an increasingly complex railway environment.
            </p>
          </div>
        </div>
      </section>

      {/* BOSSPAC Abstract Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div id="bosspac" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          {/* Top-left block: empty */}
          <div className="hidden md:block md:col-span-1"></div>
          {/* Top-right block: heading */}
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">BOSSPAC Abstract</h3>
          </div>
          {/* Bottom-left block: logo */}
          <div className="flex items-start justify-center hidden mt-4 ml-4 md:justify-start md:block md:col-span-1">
            <a href="https://bosspac.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/bosspac-logo.svg"
                alt="Bosspac Logo"
                width={200}
                height={100}
              />
            </a>
          </div>
          {/* Bottom-right block: paragraphs */}
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              North American Railroads need advanced, low-cost, yet reliable track and car monitoring solutions for their dark rail networks. IOT sensor technologies mounted wayside can provide cost effective monitoring solutions such as broken rail, loose joints, train presence, car bearing and wheel components, etc. Today's advancements in low-power wireless mesh network systems now offer these reliable sensor solutions, and we invite you to delve into the conversation about how today's technologies can supplant traditional hard-wired solutions, leading to reliable data acquisition/transmission, less maintenance, fewer delays, and enhanced safety from better track integrity and car reliability.
            </p>
          </div>
        </div>
      </section>
    {/* Plasser American Abstract Section */}
    <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
      <div id="plasser-american" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
        {/* Top-left block: empty */}
        <div className="hidden md:block md:col-span-1"></div>
        {/* Top-right block: heading */}
        <div className="md:col-span-4">
          <h3 className="mt-4 text-2xl font-bold">Plasser American Abstract</h3>
        </div>
        {/* Bottom-left block: logo */}
        <div className="flex items-start justify-center hidden mt-4 ml-4 md:justify-start md:block md:col-span-1">
          <a href="https://www.plasseramerican.com/en/home/start" target="_blank" rel="noopener noreferrer">
            <Image
              src="/platinum-plasser-american.svg"
              alt="Plasser American Logo"
              width={200}
              height={100}
            />
          </a>
        </div>
        {/* Bottom-right block: paragraphs */}
        <div className="pb-4 pr-4 md:col-span-4">
          <p className="text-lg font-semibold">From Contact Patches to Network Health</p>
          <p className="mt-4 text-lg">
            To achieve the important task of Rail Network Health, it is necessary to counter the effects of wheel/rail contact (patches) though suitable rail maintenance approaches.
            This Infozone will analyze how different rail degradation signatures will not simply require “a grinding train” but call for an integrated machine design with optimized machine components from the grinding stones up to the machine exhaust.
          </p>
          <p className="mt-4 text-lg">
            This task also requires smart and seamless integration of such an optimized grinding machine into the rail life optimization loop. This is achieved through an integrated process with advanced measurement technology, real time data handling and analysis capabilities, smart work execution and transparent documentation/QC.
          </p>
          <p className="pb-4 mt-4 text-lg">
            Only then it is possible to provide defined and well documented rail conditions in both mainline track and special trackwork.
          </p>
        </div>
      </div>
    </section>
  </div>
  );
}
