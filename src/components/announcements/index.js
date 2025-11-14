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
          Gordon Bachinsky receives CARS Lifetime Achievement Award
        </h1>
        <Image
          src="/gbachinsky-lifetime-achievement.webp"
          alt="Gordon Bachinsky receives CARS Lifetime Achievement Award"
          width={776}
          height={582}
          className="mb-4"
          style={{ width: "100%", height: "auto", maxWidth: "776px" }}
        />
        <p>
          Congratulations to <Link href="https://wheel-rail-seminars.com" target="_blank" rel="noopener noreferrer" className="text-wri-blue hover:underline">Wheel Rail Seminars</Link> Founder, <strong>Gordon Bachinsky</strong>, on receiving the <strong>Lifetime Achievement Award</strong> from the <strong>Canadian Association of Railway Suppliers (CARS)</strong> during <strong>National Railway Day on November 4, 2025</strong>, in Montreal!
        </p>
        <p className="mt-4">
          This well-deserved honor recognizes Gordon's <strong>50+ years of dedication, innovation, and leadership</strong> in the railway industry. We're proud to see his lifelong commitment to advancing rail through <strong>education and collaboration</strong> celebrated on the international stage.
        </p>
        <p className="mt-4">
          Join us in congratulating Gordon on this incredible achievement!
        </p>
        <p className="mt-4">
          <Link
            href="https://www.rtands.com/news/news-news/wri-founder-gordon-bachinsky-honored-with-canadian-association-of-railway-suppliers-lifetime-achievement-award/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wri-blue hover:underline"
          >
            Read the full article on RT&S
          </Link>
        </p>
      </div>
    </div>
  );
}
