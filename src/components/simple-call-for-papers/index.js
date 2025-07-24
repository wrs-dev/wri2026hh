import Link from 'next/link';

export default function OutlinedCallForPapers() {
  return (
    <div className="p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative px-6 py-16 overflow-hidden text-center bg-white border-2 shadow-sm isolate rounded-3xl border-wri-red">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Call for Papers
            <br />
            WRI 2025 Heavy Haul Conference
          </h2>
          <p className="max-w-xl mx-auto mb-10 text-lg leading-8 text-gray-600">
            Wheel Rail Seminars is looking for candidates to present at the June 10-12 Wheel/Rail Interaction Heavy Haul Conference (WRI 2025 HH) that will be held in Kansas City, MO. If you are interested in being considered for presenting at the conference, please fill out the form using the link below.
          </p>
          <div className="flex items-center justify-center">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfM5zSSU6PkupRrACyp8EIhpahhtADraVBlKRRC4H5kC8AwoA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-base font-semibold transition-colors duration-200 bg-white border-2 rounded-xl text-wri-red border-wri-red hover:bg-wri-red hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}