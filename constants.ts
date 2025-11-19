import { TeamMember, Service, BlogPost, Project } from './types';

export const HERO_TEXT = "SECURING LEGACIES ACROSS GENERATIONS.";
export const SUB_HERO_TEXT = "Bespoke estate and succession planning for Indians, NRIs, and Global Citizens.";

export const ABOUT_TEXT = `India Succession is a boutique advisory firm providing bespoke estate and succession planning services for Indians, NRIs, PIOs, OCIs. Our services include Will Writing, Private Trust Formation, Inheritance Tax Planning, Cross Border Succession, Family Business Succession, Mediation, Family Settlement, obtaining Probate, Succession Certificate, etc. At India Succession we guide clients for their very crucial aspect of financial planning which is transitioning of their wealth to the next generation. We work with our clients, analyze all factors to offer tailor made solutions which will impact the next generation not only on wealth inheritance but also in preserving family relationship.`;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 't1',
    name: 'Namita Agarwal',
    role: 'Founder',
    bio: 'Namita Agarwal has fifteen years of experience in succession planning. She provides personal advice to families, business houses and HNIs having wealth across various asset classes, across countries, and complex business structures, keeping in mind the religious laws applicable in India. She is also an IMI certified mediator.',
    imageUrl: 'https://picsum.photos/seed/namita/400/500'
  },
  {
    id: 't2',
    name: 'Pallavi Uzgare',
    role: 'Chief Relationship Officer',
    bio: 'Pallavi is equipped with nearing two decades of rich experience in the broad spectrum of domains including Private Banking, Wealth Management, BFSI, Logistics as well as Telecom. Prior to joining India Succession, she was with Amicorp Trustees (India) Private Limited almost since its inception in 2012.',
    imageUrl: 'https://picsum.photos/seed/pallavi/400/500'
  },
  {
    id: 't3',
    name: 'Manita Agarwal',
    role: 'Strategic Adviser',
    bio: 'Manita is our international partner for Business development based in the USA. She comes with 10+ years of financial management experience working with various fortune 500 companies. Manita is a CPA and holds a Masters in Finance from New York, USA.',
    imageUrl: 'https://picsum.photos/seed/manita/400/500'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Will Writing',
    description: 'To distribute your assets as per your wishes after lifetime. In absence of a Will the assets will be distributed as per the applicable religious laws.',
    icon: 'FileText'
  },
  {
    id: 's2',
    title: 'Private Family Trust',
    description: 'Formation of a structure during your lifetime to hold personal wealth for enjoyment by family members for multiple generations, creating a robust governance structure.',
    icon: 'Shield'
  },
  {
    id: 's3',
    title: 'Family Business Succession',
    description: 'Preparing family charters for long term business continuity, defining business roles and family harmony.',
    icon: 'Users'
  },
  {
    id: 's4',
    title: 'Cross Border Succession',
    description: 'Assisting NRIs/OCIs/PIOs to create a separate situs Will/Trust for Indian assets within regulatory framework. Inheritance tax planning for Indian wealth.',
    icon: 'Globe'
  },
  {
    id: 's5',
    title: 'Mediation & Settlement',
    description: 'Settling disputes related to inheritance outside the court amicably through facilitated negotiation and arriving at family settlement.',
    icon: 'Handshake'
  },
  {
    id: 's6',
    title: 'Probate & Certificates',
    description: 'Probate establishes the validity of a Will in Court. Succession certificate is obtained in absence of a Will for transfer of assets.',
    icon: 'Scale'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Understanding Intestate Succession Laws in India: Distribution of Assets in Different Religious Communities and Inter-Caste Marriages',
    date: 'June 28, 2024',
    excerpt: 'Navigating the complexities of asset distribution across diverse religious frameworks in India.'
  },
  {
    id: 'b2',
    title: 'Debunking Misconceptions About Wills and Estate Planning',
    date: 'May 17, 2024',
    excerpt: 'Common myths regarding wills and why waiting too long can be detrimental to your legacy.'
  },
  {
    id: 'b3',
    title: 'Executing Single or Separate Wills for Multi-Jurisdictional Assets',
    date: 'May 17, 2024',
    excerpt: 'Strategies for managing global wealth and ensuring legal compliance across borders.'
  },
  {
    id: 'b4',
    title: 'Securing Your Legacy: The Importance of Wills for Succession Planning in India',
    date: 'May 16, 2024',
    excerpt: 'Why a Will is the cornerstone of financial planning and family harmony.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Global Family Trust Structure',
    category: 'Advisory',
    year: '2023',
    imageUrl: 'https://picsum.photos/seed/project1/600/800'
  },
  {
    id: 'p2',
    title: 'Multi-Generational Business Charter',
    category: 'Succession',
    year: '2022',
    imageUrl: 'https://picsum.photos/seed/project2/600/800'
  },
  {
    id: 'p3',
    title: 'Cross-Border Will Execution',
    category: 'Legal',
    year: '2023',
    imageUrl: 'https://picsum.photos/seed/project3/600/800'
  }
];