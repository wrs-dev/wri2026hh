import { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // function to determine if a link is active
  const isActive = (paths) => {
    paths = Array.isArray(paths) ? paths : [paths]; // Ensure paths is always an array
    return paths.some((path) => {
      if (path === '/') {
        return router.pathname === path; // Exact match for the root path
      }
      return router.pathname.startsWith(path); // Prefix match for other paths
    });
  };

  const links = [
    {
      name: 'Principles Course',
      description: 'Preview speakers',
      href: '/principles-course#icons',
      icon: 'principles-icon.svg',
      background: 'bg-wri-green',
      isExternal: false,
    },
    {
      name: 'Heavy Haul Seminar',
      description: 'Preview Speakers',
      href: '/heavy-haul-seminar#icons',
      icon: 'heavy-haul-icon.svg',
      background: 'bg-wri-red',
      isExternal: false,
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md lg:pb-4 lg:pt-4">
      <nav
        className="flex items-center justify-center w-full px-4 mx-auto bg-white lg:px-8 md:px-10"
        aria-label="Global"
      >
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          {!mobileMenuOpen && (
            <button
              type="button"
              className="inline-flex items-center justify-right rounded-md p-2.5 text-wri-blue"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Open main menu</span>
            </button>
          )}
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {/* Home Link */}
          <a
            href="/"
            className={`text-sm leading-6 nav-link lg:text-xl ${
              isActive('/') ? 'text-wri-red' : 'text-wri-blue'
            }`}
          >
            Home
          </a>

          {/* WRI Seminars Popover */}
          <Popover className="relative hidden md:flex">
            <Popover.Button
              className={`flex items-center text-sm leading-6 nav-link lg:text-xl ${
                isActive([
                  '/principles-course',
                  '/principles-course-bios-abstracts',
                  '/heavy-haul-seminar',
                  '/heavy-haul-seminar-bios-abstracts',
                ])
                  ? 'text-wri-red'
                  : 'text-wri-blue'
              }`}
            >
              WRI Seminars
              <ChevronDownIcon
                className="w-5 h-5 text-wri-blue"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5">
                <div className="p-4">
                  {/* Seminar Links */}
                  {links.map((item) => (
                    <div
                      key={item.name}
                      className="relative flex items-center p-4 text-sm rounded-lg group gap-x-6 hover:bg-sky-100"
                    >
                      <div
                        className={`flex items-center justify-center flex-none rounded-lg h-11 w-11 ${item.background}`}
                      >
                        <img
                          src={`/${item.icon}`}
                          className="w-8 h-8"
                          alt={`${item.name} icon`}
                        />
                      </div>
                      <div className="flex-auto">
                        <p className="block text-sm lg:text-xl text-wri-blue">
                          {item.name}
                        </p>
                        <p className="text-wri-blue">To be announced</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-col">
                    {/* WRI26RT Icon Link */}
                    <div className="relative flex items-center p-4 text-sm rounded-lg group gap-x-6 hover:bg-sky-100">
                      <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11">
                        <img
                          src="/WRI26RT-rounded-icon.png"
                          alt="WRI26RT Icon"
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="https://wri2026rt.wheel-rail-seminars.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm lg:text-xl text-wri-blue hover:text-wri-green focus:outline-none focus:ring-0"
                        >
                          Visit WRI2026 Rail Transit
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>

                    {/* WRI25RT Icon Link */}
                    <div className="relative flex items-center p-4 text-sm rounded-lg group gap-x-6 hover:bg-sky-100">
                      <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11">
                        <img
                          src="/WRI25RT-icon.png"
                          alt="WRI25RT Icon"
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="https://wri2025rt.wheel-rail-seminars.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm lg:text-xl text-wri-blue hover:text-wri-green focus:outline-none focus:ring-0"
                        >
                          Visit WRI2025 Rail Transit
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>

                    {/* WRI25HH Icon Link */}
                    <div className="relative flex items-center p-4 text-sm rounded-lg group gap-x-6 hover:bg-sky-100">
                      <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11">
                        <img
                          src="/WRI25HH-icon.png"
                          alt="WRI25HH Icon"
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="https://wri2025hh.wheel-rail-seminars.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm lg:text-xl text-wri-blue hover:text-wri-green focus:outline-none focus:ring-0"
                        >
                          Visit WRI2025 Heavy Haul
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>

                    {/* WRI Seminar Archives */}
                    <div className="relative flex items-center p-4 text-sm rounded-lg group gap-x-6 hover:bg-sky-100">
                      <a
                        href="http://archive.wheel-rail-seminars.com/us/downloads.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm lg:text-xl text-wri-blue hover:text-wri-green"
                      >
                        WRI Seminar Archives
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* NEW: Photo Gallery link in main nav (after WRI Seminars) */}
          <a
            href="https://wri-gallery.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm leading-6 nav-link lg:text-xl text-wri-blue ${
              isActive('/photo-gallery') ? 'text-wri-red' : 'text-wri-blue'
            }`}
          >
            Photo Gallery
          </a>

          {/* Remaining Main Nav Links */}
          <a
            href="/#register"
            className={`text-sm leading-6 nav-link lg:text-xl ${
              isActive('/#register') ? 'text-wri-red' : 'text-wri-blue'
            }`}
          >
            Pricing
          </a>
          {/* <a
            href="/sponsors#icons"
            className={`text-sm leading-6 nav-link lg:text-xl ${
              isActive('/sponsors') ? 'text-wri-red' : 'text-wri-blue'
            }`}
          >
            Sponsors
          </a> */}
          <a
            href="/infozone#icons"
            className={`text-sm leading-6 nav-link lg:text-xl ${
              isActive('/infozone') ? 'text-wri-red' : 'text-wri-blue'
            }`}
          >
            InfoZone
          </a>
          <a
            href="/#hotel"
            className={`text-sm leading-6 nav-link lg:text-xl ${
              isActive('#hotel') ? 'text-wri-red' : 'text-wri-blue'
            }`}
          >
            Hotel
          </a>
          <a
            href="/faq#icons"
            className={`text-sm leading-6 nav-link lg:text-xl ${
              isActive('/faq') ? 'text-wri-red' : 'text-wri-blue'
            }`}
          >
            FAQ
          </a>
          <a
            href="http://wheel-rail-seminars.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm leading-6 nav-link lg:text-xl text-wri-blue"
          >
            Wheel Rail Seminars
          </a>
          <a
            href="http://www.interfacejournal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm leading-6 nav-link min-w-8 min-h-8 lg:text-xl"
          >
            <img
              src="/ij-icon.svg"
              className="w-8 h-8 pr-2"
              alt="Interface Journal"
            />
            IJ
          </a>
        </Popover.Group>

        {/* Mobile Menu */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm p-6 overflow-y-auto bg-white sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {/* Mobile Links */}
                  <a
                    href="/"
                    className="block py-2 text-sm font-semibold leading-7 lg:text-xl text-wri-blue hover:bg-gray-50"
                  >
                    Home
                  </a>
                  {/* <a
                    href="/#register"
                    className="block py-2 text-sm font-semibold leading-7 lg:text-xl text-wri-blue hover:bg-gray-50"
                  >
                    Pricing
                  </a> */}
                  {/* <a
                    href="/sponsors#sponsor"
                    className="block py-2 text-sm font-semibold leading-7 lg:text-xl text-wri-blue hover:bg-gray-50"
                  >
                    Sponsors
                  </a> */}
                  <a
                    href="/infozone#icons"
                    className="block py-2 text-sm font-semibold leading-7 lg:text-xl text-wri-blue hover:bg-gray-50"
                  >
                    InfoZone
                  </a>
                  {/* <a
                    href="/#hotel"
                    className="block py-2 text-sm font-semibold leading-7 lg:text-xl text-wri-blue hover:bg-gray-50"
                  >
                    Hotel
                  </a> */}
                  <a
                    href="/faq#icons"
                    className="block py-2 text-sm font-semibold leading-7 lg:text-xl text-wri-blue hover:bg-gray-50"
                  >
                    FAQ
                  </a>
                  <a
                    href="http://wheel-rail-seminars.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm font-semibold leading-7 lg:text-xl text-wri-blue hover:bg-gray-50"
                  >
                    Wheel Rail Seminars
                  </a>
                  <a
                    href="http://www.interfacejournal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm font-semibold leading-7 lg:text-xl text-wri-blue hover:bg-gray-50"
                  >
                    Interface Journal
                  </a>
                  {/* Photo Gallery in Mobile Menu */}
                  <a
                    href="https://wri-gallery.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm font-semibold leading-7 lg:text-xl text-wri-blue hover:bg-gray-50"
                  >
                    Photo Gallery
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </div>
  );
}