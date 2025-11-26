import Image from 'next/image';
import InfoZonePhotos from '@/components/infozone/infoZonePhotos';
import SponsorRegisterButtonInfoZone from '@/components/buttons/sponsor-register-button-infozone';
import SponsorRegisterButtonDoubleInfoZone from '@/components/buttons/sponsor-register-button-double-infozone';

export default function InfoZonePageSponsorship() {
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

      {/* InfoZone Partnership Opportunities Section */}
      <div className="seminar-about-text" id="infozone-sponsorship">
        <div className="px-12 mx-auto">
          <h2 className="mb-16 text-6xl font-normal leading-normal text-center pt-11">
            InfoZone Partnership Opportunities
          </h2>
        </div>
      </div>

      {/* Sponsorship Packages Section */}
      <section className="pb-24 bg-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          {/* Heavy Haul InfoZone Sponsorship */}
          <section className="mb-16">
            <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
              <div>
                <h3 className="text-2xl font-bold leading-tight text-wri-blue sm:text-3xl">
                  Heavy Haul
                  <br />
                  InfoZone Sponsorship
                </h3>
                <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$7,000.00 Early Bird</p>
              </div>
              <div className="col-span-2">
                <p className="mb-4">
                  The InfoZone is an interactive learning environment that is
                  designed to augment the information presented at the annual WRI
                  Conference. Our InfoZone partners offer high-quality technical information
                  on aspects of wheel/rail interaction that they know best, providing small groups of
                  approximately 30-40 delegates insight into the product or
                  service that is the specialty of the presenting company. The
                  goal is to promote a better understanding of the dynamic
                  interaction between vehicles and track. This innovative concept
                  has consistently received great reviews from participants and
                  InfoZone Partners alike.
                </p>
                <div className="mt-4">
                  <SponsorRegisterButtonInfoZone />
                </div>
              </div>
            </div>
          </section>

          {/* Double InfoZone Sponsorship */}
          <section className="mb-16">
            <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
              <div>
                <h3 className="text-2xl font-bold leading-tight text-wri-blue sm:text-3xl">
                  Double
                  <br />
                  InfoZone Sponsorship *
                </h3>
                <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$13,000.00</p>
              </div>
              <div className="col-span-2">
                <ul className="ml-6 list-disc">
                  <li>
                    Includes InfoZone Sponsorship for both conferences (Rail Transit &amp; Heavy
                    Haul)
                  </li>
                </ul>
                <div className="mt-4">
                  <SponsorRegisterButtonDoubleInfoZone />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* InfoZone Photos Section */}
      <section>
        <div className="flex items-center justify-center px-6 mx-auto mb-48 max-w-7xl lg:px-8">
          <InfoZonePhotos />
        </div>
      </section>
    </div>
  );
}
