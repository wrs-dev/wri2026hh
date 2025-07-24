import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PricingEmployeeIndividual() {
  return (
    <section className="px-0 lg:px-12">
      <div className="mb-4 overflow-hidden bg-white shadow-md rounded-3xl">
        <div className="px-8 py-4 bg-yellow-500">
          <h1 className="text-xl font-bold text-blue-950">
            Employee Registration - Individual Event Pricing
          </h1>
        </div>
        <div className="px-8 pt-6 pb-8">
          <div className="mb-4">
            <h2 className="font-semibold text-md text-blue-950">
              Principles Course (1 Day)
            </h2>
            <h2 className="text-md text-wri-blue">
              Cost:
              <span className="ml-2 mr-1 text-gray-500 line-through">$450</span>
              $405 Early Bird
            </h2>
            <p className="text-gray-500 text-md">June 10, 2025</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold text-md text-blue-950">
              Heavy Haul Seminar (2 Days)
            </h2>
            <h2 className="text-md text-wri-blue">
              Cost:
              <span className="ml-2 mr-1 text-gray-500 line-through">
                $1,000
              </span>
              $900 Early Bird
            </h2>
            <p className="text-gray-500 text-md">June 11-12, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
