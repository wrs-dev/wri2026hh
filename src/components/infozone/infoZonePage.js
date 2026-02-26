import Image from 'next/image';
import InfoZonePhotos from '@/components/infozone/infoZonePhotos';

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

      {/* Meet Your InfoZone Partners */}
      <div className="seminar-about-text" id="sponsor">
        <div className="px-12 mx-auto">
          <h2 className="mb-16 text-6xl font-normal leading-normal text-center pt-11">
            Meet Your InfoZone Partners
          </h2>
        </div>
      </div>

      {/* Sponsors Section */}
      <section>
        <div className="px-6 mx-auto mb-24 space-y-12 max-w-7xl lg:px-8">
          {/* Row 1 — Loram, Hexagon */}
          <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
            <a href="https://loram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-36">
              <img src="/platinum-loram.png" alt="Loram logo" className="object-contain h-16" />
            </a>
            <a href="https://hexagon.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-36">
              <img src="/hexagon-2026.png" alt="Hexagon logo" className="object-contain h-20" />
            </a>
          </div>

          {/* Row 2 — Linsinger, Plasser American */}
          <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
            <a href="https://www.linsinger.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-36">
              <img src="/silver-linsinger.png" alt="Linsinger logo" className="object-contain h-24" />
            </a>
            <a href="https://www.plasseramerican.com/en/home/start" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-36">
              <img src="/platinum-plasser-american.svg" alt="Plasser American logo" className="object-contain h-14" />
            </a>
          </div>

          {/* Row 3 — Athena */}
          <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8">
            <a href="#athena" className="flex items-center justify-center h-36">
              <img src="/silver-athena.png" alt="Athena Industrial logo" className="object-contain h-16" />
            </a>
          </div>
        </div>
      </section>

      {/* InfoZone Photos Section */}
      <section>
        <div className="flex items-center justify-center px-6 mx-auto mb-24 max-w-7xl lg:px-8">
          <InfoZonePhotos />
        </div>
      </section>

      {/* Abstracts Section Header */}
      <div className="px-12 mx-auto">
        <h3 className="mb-8 text-4xl font-normal leading-normal text-center pt-11">
          Review the InfoZone Abstracts
        </h3>
      </div>

      {/* Athena Industrial Abstract Section */}
      <section className="px-6 mx-auto mb-24 max-w-7xl lg:px-8">
        <div id="athena" className="grid grid-cols-1 gap-4 p-4 mb-12 md:grid-cols-5 bg-wri-yellow/20 rounded-xl">
          <div className="hidden md:block md:col-span-1"></div>
          <div className="md:col-span-4">
            <h3 className="mt-4 text-2xl font-bold">Athena Industrial Abstract</h3>
          </div>
          <div className="flex items-start justify-center hidden mt-4 ml-4 md:justify-start md:block md:col-span-1">
            <a href="https://www.athenaindustrialservices.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/silver-athena.png"
                alt="Athena Industrial Logo"
                width={200}
                height={100}
              />
            </a>
          </div>
          <div className="pb-4 pr-4 md:col-span-4">
            <p className="text-lg">
              Athena Industrial is redefining rail safety with cutting-edge inspection and monitoring technologies that give railroads unprecedented visibility and control. With Athena&apos;s product platform, railroads significantly elevate safety and reliability, while reducing maintenance costs, and improving long term performance.
            </p>
            <p className="mt-4 text-lg">
              Our inspection and monitoring solutions streamline operations by transforming complex safety challenges into fast, data driven decisions that increase operational efficiency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
