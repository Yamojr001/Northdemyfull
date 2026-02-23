import logoImg from '@/asset/logo.jpg';

// Company Details
export const COMPANY_DETAILS = {
  name: 'NorthDemy',
  email: 'info@northdemy.com',
  phone: '08099072748',
  address: 'No 14 Nana Plaza Opposite Sabon Gidan Galadiman Dutse, Jigawa, Nigeria',
  description: 'NorthDemy Limited is a technology and security solutions company delivering enterprise software, cybersecurity, network infrastructure, and innovation programs for governments, security agencies, and private sector organizations while building Africa\'s next generation of world class tech talent.',
  logo: logoImg,
};

// Navigation Links
export const NavLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Programs',
    path: '/programs',
    children: [
      { name: 'Training', path: '/programs/training' },
      { name: 'Incubation', path: '/programs/incubation' },
      { name: 'Mentorship', path: '/programs/mentorship' },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'Consulting', path: '/services/consulting' },
      { name: 'Digital Safety', path: '/services/digital-safety' },
      { name: 'Enterprise Solutions', path: '/services/enterprise' },
    ],
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Team',
    path: '/team',
  },
  {
    name: 'Partners',
    path: '/partners',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

// Footer Links
export const FooterLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Partners', path: '/partners' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
  ],
  services: [
    { name: 'Consulting', path: '/services/consulting' },
    { name: 'Training', path: '/programs/training' },
    { name: 'Incubation', path: '/programs/incubation' },
    { name: 'Digital Safety', path: '/services/digital-safety' },
  ],
  resources: [
    { name: 'Blog', path: '/blog' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ],
};

// Social Media Links
export const SocialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/northdemy', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/northdemy', icon: 'Twitter' },
  { name: 'Facebook', url: 'https://facebook.com/northdemy', icon: 'Facebook' },
  { name: 'Instagram', url: 'https://instagram.com/northdemy', icon: 'Instagram' },
];

// Service Categories
export const Services = [
  {
    id: 1,
    icon: 'GraduationCap',
    title: 'Talent Development',
    description: 'World-class training programs designed to upskill the next generation of African tech talents.',
  },
  {
    id: 2,
    icon: 'Rocket',
    title: 'Startup Incubation',
    description: 'From idea to execution: we help transform innovative ideas into sustainable businesses.',
  },
  {
    id: 3,
    icon: 'ShieldCheck',
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security infrastructure and consulting to protect your digital assets.',
  },
  {
    id: 4,
    icon: 'Code',
    title: 'Enterprise Systems',
    description: 'Custom software solutions tailored to meet complex organizational requirements.',
  },
  {
    id: 5,
    icon: 'TrendingUp',
    title: 'Digital Transformation',
    description: 'Strategic guidance to modernize your operations and embrace digital-first approaches.',
  },
  {
    id: 6,
    icon: 'Users',
    title: 'Consulting & Advisory',
    description: 'Expert consultation on technology strategy, security, and organizational scaling.',
  },
];

// Blog/Article Categories
export const ArticleCategories = [
  { id: 1, name: 'Technology', slug: 'technology' },
  { id: 2, name: 'Security', slug: 'security' },
  { id: 3, name: 'Startups', slug: 'startups' },
  { id: 4, name: 'Education', slug: 'education' },
];

// Footer Menu Sections
export const FooterMenuSections = [
  {
    title: 'Company',
    links: FooterLinks.company,
  },
  {
    title: 'Services',
    links: FooterLinks.services,
  },
  {
    title: 'Resources',
    links: FooterLinks.resources,
  },
];
// Training Programs and other data should be fetched from the backend API
// Use the following endpoints:
// - /api/training - for training programs
// - /api/services - for services
// - /api/programs - for general programs