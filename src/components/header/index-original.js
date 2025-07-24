import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="https://www.masstransitmag.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/mass-transit-presenting-sponsor.webp"
                width={258}
                height={75}
                alt="Mass Transit Logo"
                priority // Add priority if this image is above the fold
              />
            </a>
          </div>
          <Link href="/">
            <Image
              src="/wri-2024-full.svg"
              width={1000}
              height={200}
              alt="WRI 2024"
              priority // Add priority because this image is critical for LCP
            />
          </Link>
          <div className="flex items-center">
            <a
              href="https://www.rtands.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/RT&S-PresentingSponsor.png"
                width={217}
                height={75}
                alt="RT&S Logo"
                priority // Add priority if this image is above the fold
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
