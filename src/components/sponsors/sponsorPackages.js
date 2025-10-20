import React from 'react';
import Image from 'next/image';
import SponsorRegisterButtonSilver from '@/components/buttons/sponsor-register-button-silver';
import SponsorRegisterButtonDoubleSilver from '@/components/buttons/sponsor-register-button-double-silver';
import SponsorRegisterButtonGold from '@/components/buttons/sponsor-register-button-gold';
import SponsorRegisterButtonDoubleGold from '@/components/buttons/sponsor-register-button-double-gold';
import SponsorRegisterButtonPlatinum from '@/components/buttons/sponsor-register-button-platinum';
import SponsorRegisterButtonDoublePlatinum from '@/components/buttons/sponsor-register-button-double-platinum';
import SponsorRegisterButtonInfoZone from '@/components/buttons/sponsor-register-button-infozone';
import SponsorRegisterButtonDoubleInfoZone from '@/components/buttons/sponsor-register-button-double-infozone';
import SponsorCtaPdf from '@/components/sponsors/sponsor-cta-pdf';

export default function SponsorPackages() {
  return (
    <div className="pb-24 bg-white sm:pt-12">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <section className="mb-24">
          <p className="text-base leading-7">
            <strong>Sponsor Attendee Registration:</strong> When you sign up for sponsorship,
            the person completing the registration will automatically be registered as an
            attendee. Name changes can be made later. Depending on your chosen sponsorship level, you will be able to register
            additional Sponsor Attendees. If you know who these attendees are, please enter
            their information now. If not, you can contact{' '}
            <a
              href="mailto:erica@wheel-rail-seminars.com"
              className="underline hover:text-blue-600"
            >
              erica@wheel-rail-seminars.com
            </a>{' '}
            to have us add them later.
          </p>
        </section>

        {/* Heavy Haul Bronze Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-amber-800 sm:text-3xl">
                Heavy Haul
                <br />
                Bronze Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$1,100.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Acknowledgement on select printed Heavy Haul Seminar and Principles Course
                  materials
                </li>
                <li>
                  Logo placement on the Heavy Haul and Principles Course website with link to
                  your website
                </li>
                <li>
                On-screen logo presence in General Session Room
                </li>
                <li>
                Recognition on sponsor signage in Heavy Haul & Principles registration area
                </li>
              </ul>
              <div className="mt-4">
                Contact{' '}
                <a
                  href="mailto:erica@wheel-rail-seminars.com"
                  className="underline hover:text-blue-600"
                >
                  erica@wheel-rail-seminars.com
                </a>{' '}
                to sign up to be a Bronze Sponsor.
              </div>
            </div>
          </div>
        </section>

        {/* * Double Bronze Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-amber-800 sm:text-3xl">
                Double
                <br />
                Bronze Sponsorship *
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$1,900.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Includes Bronze level Sponsorship for both conferences (Heavy Haul &amp; Rail
                  Transit)
                </li>
              </ul>
              <div className="mt-4">
                Contact{' '}
                <a
                  href="mailto:erica@wheel-rail-seminars.com"
                  className="underline hover:text-blue-600"
                >
                  erica@wheel-rail-seminars.com
                </a>{' '}
                to sign up to be a Double Bronze Sponsor.
              </div>
            </div>
          </div>
        </section>

        {/* Heavy Haul Silver Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-slate-500 sm:text-3xl">
                Heavy Haul
                <br />
                Silver Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$3,750.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Bronze Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) Complimentary registration for the WRI 2026 Heavy Haul Seminar,
                  Principles Course and related social events
                </li>
                <li>6’ Display table in ExpoZone/Refreshment Area</li>
                <li>Dedicated Sponsor web page with company logo and links to your site</li>
                <li>Social media recognition</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonSilver />
              </div>
            </div>
          </div>
        </section>

        {/* * Double Silver Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-slate-500 sm:text-3xl">
                Double
                <br />
                Silver Sponsorship *
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$6,825.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Includes Silver Level Sponsorship for both conferences (Rail Transit &amp; Heavy
                  Haul)
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonDoubleSilver />
              </div>
            </div>
          </div>
        </section>

        {/* Heavy Haul Gold Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-yellow-600 sm:text-3xl">
                Heavy Haul
                <br />
                Gold Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$4,400.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Silver Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) additional complimentary registration for a total of two (2)
                  complimentary registrations to the Heavy Haul, Principles Course and related
                  social events
                </li>
                <li>6’ Display Table in the Heavy Haul Welcome Reception</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonGold />
              </div>
            </div>
          </div>
        </section>

        {/* * Double Gold Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-yellow-600 sm:text-3xl">
                Double
                <br />
                Gold Sponsorship *
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$8,000.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Includes Gold Level Sponsorship for both conferences (Rail Transit &amp; Heavy
                  Haul)
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonDoubleGold />
              </div>
            </div>
          </div>
        </section>

        {/* Heavy Haul Platinum Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-violet-400 sm:text-3xl">
                Heavy Haul
                <br />
                Platinum Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$6,000.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1 font-semibold">Includes all Gold Level Benefits PLUS:</p>
              <ul className="ml-6 list-disc">
                <li>
                  One (1) additional complimentary registration for a total of three (3)
                  complimentary registrations
                </li>
                <li>
                  “Sponsor Bio Page” with company info, logos and links to your site, plus special
                  recognition on site
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonPlatinum />
              </div>
            </div>
          </div>
        </section>

        {/* * Double Platinum Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-violet-400 sm:text-3xl">
                Double
                <br />
                Platinum Sponsorship *
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$10,750.00</p>
            </div>
            <div className="col-span-2">
              <ul className="ml-6 list-disc">
                <li>
                  Includes Platinum Level Sponsorship for both conferences (Rail Transit &amp;
                  Heavy Haul)
                </li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonDoublePlatinum />
              </div>
            </div>
          </div>
        </section>

        {/* InfoZone Sponsorship */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-wri-blue sm:text-3xl">
                Rail Transit
                <br />
                InfoZone Sponsorship
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$7,000.00 Early Bird</p>
            </div>
            <div className="col-span-2">
              <p className="mb-4">
                The InfoZone is an interactive learning environment that is
                designed to augment the information presented at the annual WRI
                Conference.
              </p>
              <p className="mb-4">
                Our InfoZone partners offer high-quality technical information
                on the aspects of wheel/rail interaction that they know best.
                These sessions, which are built into the Heavy Haul & Rail
                Transit Seminar program, are designed to provide small groups of
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

        {/* * Double InfoZone Sponsorship */}
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

        {/* InfoZone Partner
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-yellow-500 sm:text-3xl">
                InfoZone
                <br />
                Partner
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">
                $7,000.00
              </p>
            </div>
            <div className="col-span-2">
              <p className="mb-1">
                The InfoZone is an interactive learning environment that is designed to
                augment the information presented at the annual WRI Conference. Our
                InfoZone partners offer high-quality technical information on aspects of
                wheel/rail interaction that they know best, providing small groups of
                approximately 30-40 delegates insight into the product or service that is
                the specialty of the presenting company.
              </p>
              <p>
                The goal is to promote a better understanding of the dynamic interaction
                between vehicles and track. This innovative concept has consistently
                received great reviews from participants and InfoZone Partners alike.
              </p>

              <p className="mt-4 font-semibold">Your Organization will receive:</p>
              <ul className="ml-6 list-disc">
                <li className="mb-2">
                  <strong>Pre-Event:</strong>
                  <ul className="ml-6 list-disc">
                    <li>Logo and link on the Wheel Rail Seminars dedicated InfoZone web page</li>
                    <li>Email campaign to over 15,000 subscribers</li>
                    <li>
                      Ad in <em>RT&amp;S</em> magazine for the Heavy Haul Conference and <em>Mass Transit</em> 
                      magazine for the Rail Transit Conference
                    </li>
                    <li>Social media campaign promoting InfoZone Partners</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <strong>At-The-Event:</strong>
                  <ul className="ml-6 list-disc">
                    <li>
                      Two Complimentary attendee registrations for Principles Course and 
                      the Heavy Haul Seminar or the Rail Transit Seminar
                    </li>
                    <li>InfoZone Partner appreciation signs</li>
                    <li>
                      Company logo in the Heavy Haul and Rail Transit Seminar Pocket Agendas
                    </li>
                    <li>
                      Opportunity to address all Heavy Haul and Rail Transit attendees in your Zone
                    </li>
                    <li>On-screen marketing during breaks with a 3-slide sequence</li>
                    <li>Sponsorship recognition for the "Ticket to Knowledge" drawing</li>
                    <li>ExpoZone marketing opportunities</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <strong>Post-Event:</strong>
                  <ul className="ml-6 list-disc">
                    <li>Follow-up email recognition</li>
                    <li>Thank-you campaign on social media</li>
                  </ul>
                </li>
              </ul>

              <div className="mt-4">
                <SponsorRegisterButtonInfoZone />
              </div>
            </div>
          </div>
        </section>
        /*}

        {/* * Double InfoZone Partner 
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-yellow-500 sm:text-3xl">
                Double
                <br />
                InfoZone Partner *
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$13,000.00</p>
            </div>
            <div className="col-span-2">
              <p className="mb-1">
                For the first time, in 2025 we are offering InfoZone Partnerships for both the
                WRI 2025 Heavy Haul Conference AND WRI 2025 Rail Transit Conference. The “Double InfoZone
                Partnership" provides exposure at both WRI 2025 events this year for one low
                price!
              </p>
              <p>
                Our InfoZone partners offer high-quality technical information on the aspects
                of wheel/rail interaction that they know best. These sessions, which are built
                into the Heavy Haul &amp; Rail Transit Seminar program, are designed to provide
                small groups of approximately 30-40 delegates insight into the product or
                service that is the specialty of the presenting company.
              </p>
              <ul className="mt-3 ml-6 list-disc">
                <li>Showcase your expertise at two WRI 2025 events</li>
                <li>Engage with both Heavy Haul and Rail Transit audiences</li>
                <li>Elevate brand recognition with a single partnership</li>
                <li>Proven track record of participant satisfaction</li>
              </ul>
              <div className="mt-4">
                <SponsorRegisterButtonDoubleInfoZone />
              </div>
            </div>
          </div>
        </section>*/}
        {/* Interface Journal Add-On */}
        <section className="mt-16 mb-32">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
            {/* Logo column */}
            <div className="flex items-center justify-left">
              {/* Using next/image */}
              <Image
                src="/ij-logo.webp"
                alt="Interface Journal Logo"
                width={250}
                height={100}
              />
            </div>

            {/* Text column */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold leading-tight text-blue-900 sm:text-3xl">
                Interface Journal Sponsor Add-On
              </h3>
              <p className="mt-2 text-xl font-semibold text-wri-dark-blue">$3,500.00</p>
              <p className="mt-4">
                Add on to <strong>any sponsorship level</strong> a One Year Sponsorship in{' '}
                <em>Interface Journal (The Journal of Wheel/Rail Interaction)</em> including a
                prominent spot with your logo and hot link to your website &mdash; 
                <strong>$3,500.00</strong> 
                &nbsp;(a $1,500 discount to the normal yearly sponsorship price).
              </p>
              <p className="mt-4">
                Learn more about Interface Journal at:{' '}
                <a
                  href="https://interfacejournal.com/"
                  className="underline hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  interfacejournal.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Star Note at the Bottom */}
        <p className="mt-4 text-2xl leading-7">
          *All “Double” Sponsorship levels will give your organization the same level sponsorship at the Rail Transit Conference being held in Boston, September 1-3, 2026.
        </p>
        {/*<SponsorCtaPdf/>*/}
      </div>
    </div>
  );
}