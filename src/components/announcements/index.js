import Image from 'next/image';
import Link from 'next/link';

export default function WRIAnnouncements() {
  return (
    <div className="w-full bg-gray-100">
      <div className="p-8 text-4xl font-bold text-wri-dark-blue bg-wri-yellow">
        WRI Announcements
      </div>
      <div className="p-8">
        <h1 className="mb-4 text-2xl font-bold text-wri-dark-blue">
          Christopher Barkan receives the Worth Award at WRI 2026
        </h1>
        <div className="flex flex-col gap-4 mb-4 sm:flex-row">
          <Image
            src="/worth-award-2026.jpeg"
            alt="Christopher Barkan receives the Worth Award at the WRI 2026 Heavy Haul Conference"
            width={1620}
            height={1080}
            className="w-full h-auto sm:w-1/2"
          />
          <Image
            src="/christopher-barkan.jpeg"
            alt="Christopher Barkan, professor at RailTEC at the University of Illinois"
            width={1200}
            height={799}
            className="w-full h-auto sm:w-1/2"
          />
        </div>
        <p>
          Congratulations to <strong>Christopher Barkan</strong> on receiving the <strong>Worth Award</strong> at the <strong>WRI 2026 Heavy Haul Conference</strong>. Chris serves as a professor and leading figure at the <strong>University of Illinois</strong> within <strong>RailTEC at Illinois</strong>, where he has left a lasting impact by fostering a culture of technical excellence and statistical rigor.
        </p>
        <p className="mt-4">
          He is specifically recognized for bridging the gap between academia and the private sector through applied research that addresses real-world railroad challenges with vision and practical timing. As a dedicated mentor, he oversees graduate research with an emphasis on professional standards, ensuring a new generation of engineers is prepared to advance the industry through a comprehensive systems-based approach.
        </p>
        <p className="mt-4">
          Thank you to <strong>J. Riley Edwards, Ph.D, P.E.</strong> for accepting the award on Chris's behalf.
        </p>
        <p className="mt-4">
          <Link href="https://interfacejournal.com/archives/49584" target="_blank" rel="noopener noreferrer" className="text-wri-blue hover:underline">
            Read the full story &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
