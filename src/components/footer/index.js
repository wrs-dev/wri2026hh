import { useState } from 'react';
import NavigationSection from './NavigationSection';
import SocialLinks from './SocialLinks';
import SubscribeForm from './SubscribeForm';

const navigation = {
  solutions: [
    { name: 'Home', href: '/', target: '_self' },
    { name: 'About WRI', href: '/#about', target: '_self' },
    { name: 'Visit Wheel Rail Seminars', href: 'https://wheel-rail-seminars.com', target: '_blank' },
    { name: 'Visit Interface Journal', href: 'https://interfacejournal.com/', target: '_blank' },
    { name: "Visit WRI '24 Sponsors", href: 'https://wri.wheel-rail-seminars.com/sponsors#icons', target: '_blank' },
  ],
  support: [
    { name: 'WRI 2024 Chicago', href: 'https://wri.wheel-rail-seminars.com', target: '_blank' },
    { name: 'WRI 2025 HH Kansas City', href: '/', target: '_self' },
    { name: 'WRI 2025 RT Seattle', href: 'https://wri2025rt.wheel-rail-seminars.com', target: '_blank' },
    { name: 'Info Zone/Expo Zone', href: '/#zones', target: '_self' },
    { name: 'Become a Sponsor', href: '/sponsor-packages', target: '_self' },
  ],
  company: [
    { name: 'Register Now', href: '/register', target: '_blank' },
    { name: 'Seminar Pricing Packages', href: '/#register', target: '_self' },
    { name: 'Hotel Reservations', href: '/#hotel', target: '_self' },
    { name: 'FAQ', href: '/faq#icons', target: '_self' },
    { name: 'Seminar Archive', href: 'http://archive.wheel-rail-seminars.com/us/downloads.php', target: '_blank' },
  ],
  legal: [
    { name: 'Terms', href: '/terms', target: '_self' },
    { name: 'Privacy', href: '/legal', target: '_self' },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wri-dark-blue" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="px-6 pt-20 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <NavigationSection title="WRI Conference Home" items={navigation.solutions} />
              <NavigationSection title="WRI Conferences" items={navigation.support} />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <NavigationSection title="Registration & More" items={navigation.company} />
              <div>
                <NavigationSection title="Legal" items={navigation.legal} />
                <ContactInfo />
              </div>
            </div>
          </div>
          <SubscribeForm />
        </div>
        <div className="pt-8 mt-16 border-t border-white/10 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <SocialLinks />
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {currentYear} Wheel Rail Seminars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const ContactInfo = () => (
  <>
    <span className="block mt-2 text-sm leading-6 text-gray-300">Contact Us:</span>
    <div className="flex mt-2 space-y-4">
      <a href="tel:847-808-1818" className="text-sm leading-6 text-gray-300 hover:text-wri-yellow">
        +1 847-808-1818
      </a>
    </div>
    <div className="flex mt-2 space-y-4">
      <a href="mailto:brandon@wheel-rail-seminars.com" className="text-sm leading-6 text-gray-300 hover:text-wri-yellow">
        Email Link
      </a>
    </div>
  </>
);

export default Footer;