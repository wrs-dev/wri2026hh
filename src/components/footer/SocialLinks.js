import { FacebookIcon, TwitterIcon, LinkedInIcon } from './Icons';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/WheelRailSeminars', icon: FacebookIcon },
  { name: 'X', href: 'https://twitter.com/WheelRailSem', icon: TwitterIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/wheel-rail-seminars/', icon: LinkedInIcon },
];

const SocialLinks = () => (
  <div className="flex space-x-6 md:order-2">
    {socialLinks.map(item => (
      <a
        key={item.name}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-wri-green hover:text-wri-yellow"
      >
        <span className="sr-only">{item.name}</span>
        <item.icon className="w-6 h-6" aria-hidden="true" />
      </a>
    ))}
  </div>
);

export default SocialLinks;