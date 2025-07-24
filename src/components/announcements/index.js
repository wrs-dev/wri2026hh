import Image from 'next/image';
import Link from 'next/link';

export default function WRIAnnouncements() {
  return (
    <div className="w-full bg-gray-100">
      <div className="p-8 text-4xl font-bold text-wri-dark-blue bg-wri-yellow">
        WRI Announcements
      </div>
      <div className="p-8">
        <h1 className="mb-1 text-2xl font-bold text-wri-dark-blue">
          Mike Roney Receives 2025 Worth Award
        </h1>
        <Image
          src="/mike-roney-worth-award.jpeg"
          alt="Mike Roney receives the Worth Award at WRI 2025"
          width={776}
          height={582}
          className="mb-4"
          style={{ width: "100%", height: "auto", maxWidth: "776px" }}
        />
        <p>
          Congratulations to Mike Roney on receiving this year’s Worth Award at the WRI Heavy Haul Conference—an honor named after the legendary Art Worth and awarded to one individual each year in recognition of lifetime achievement and extraordinary contributions to the rail industry.
        </p>
        <p className="mt-4">
          Michael’s dedication, leadership, and impact over the years make him more than deserving of this highly coveted recognition. Well done! 👏
        </p>
      </div>
    </div>
  );
}