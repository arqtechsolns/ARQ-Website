export interface NavLink {
  label: string;
  path: string;
  exact: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ProjectShowcaseItem {
  title: string;
  image: string;
  alt: string;
}

export interface SiteBrand {
  shortName: string;
  fullName: string;
  domain: string;
}

export interface SiteContact {
  email: string;
}

export interface PlatformIconItem {
  key: 'android' | 'apple' | 'linux' | 'windows' | 'websites';
  label: string;
}

export const siteBrand: SiteBrand = {
  shortName: 'ARQ',
  fullName: 'ARQ Tech Solutions',
  domain: 'arqtechsolns.com',
};

export const siteContact: SiteContact = {
  email: 'info@arqtechsolns.com',
};

export const navLinks: readonly NavLink[] = [
  { label: 'Home', path: '/', exact: true },
  { label: 'About', path: '/about', exact: false },
  { label: 'Contact', path: '/contact', exact: false },
];

export const services: readonly ServiceItem[] = [
  {
    title: 'Custom Software',
    description:
      'Tailored software solutions built to meet your unique business requirements. From automation tools to full-scale applications, we develop systems that improve efficiency and scalability.',
  },
  {
    title: 'IT Services',
    description:
      'Reliable IT support and infrastructure management for businesses of any size. We handle troubleshooting, network management, and system optimization to keep your operations running smoothly.',
  },
  {
    title: 'Consultation',
    description:
      'Expert technology consulting to help align IT strategies with business goals. We provide guidance on the best tools, practices, and solutions to ensure sustainable growth.',
  },
  {
    title: 'Website Design',
    description:
      'Modern, responsive, and user-friendly websites that highlight your brand. Our designs enhance customer engagement while ensuring performance and accessibility across all devices.',
  },
];

export const projectShowcase: readonly ProjectShowcaseItem[] = [
  {
    title: 'Custom Software',
    image: 'assets/custom-software.jpg',
    alt: 'Close-up of a computer screen displaying programming code in a dark environment.',
  },
  {
    title: 'IT Services',
    image: 'assets/it-services.jpg',
    alt: 'Detailed image of a server rack with glowing lights in a modern data center.',
  },
  {
    title: 'Consultation',
    image: 'assets/consultation.jpg',
    alt: 'Two women working together on software programming indoors, focusing on code.',
  },
  {
    title: 'Personalized Hardware Solutions',
    image: 'assets/hardware-solutions.jpg',
    alt: 'Detailed view of a computer motherboard showcasing RAM slots and electronic components.',
  },
];

export const platformIcons: readonly PlatformIconItem[] = [
  { key: 'android', label: 'Android' },
  { key: 'apple', label: 'IOS' },
  { key: 'linux', label: 'Linux' },
  { key: 'windows', label: 'Windows' },
  { key: 'websites', label: 'Web Technologies' },
];
