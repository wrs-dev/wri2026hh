import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PricingVirtualMulti() {
  return (
    <section className="px-0 lg:px-12">
      <div className="mb-4 overflow-hidden bg-white shadow-md rounded-3xl">
        <div className="px-8 py-4 bg-wri-green">
          <h1 className="text-xl font-bold text-white">
            Virtual Registration - Multi-Event Pricing
          </h1>
        </div>
        <div className="px-8 pt-6 pb-8">
          <div className="mb-4">
            <h2 className="font-semibold text-md text-blue-950">
              Heavy Haul Seminar <em>Plus</em> Principles Course (3 Days)
            </h2>
            <h2 className="text-md text-wri-blue">
              Cost: $650 (Save $150)
            </h2>
            <p className="text-gray-500 text-md">June 10 - 12, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
