import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Obsidian Tower',
    category: 'Architecture',
    imageUrl: 'https://picsum.photos/seed/arch1/800/1000',
    description: 'A study in vertical void spaces.',
    year: '2024'
  },
  {
    id: 'p2',
    title: 'Silent Echo',
    category: 'Photography',
    imageUrl: 'https://picsum.photos/seed/photo2/800/600',
    description: 'Capturing the sound of absence.',
    year: '2023'
  },
  {
    id: 'p3',
    title: 'Mono Brand',
    category: 'Identity',
    imageUrl: 'https://picsum.photos/seed/brand3/800/800',
    description: 'Reductive branding for high-fashion.',
    year: '2024'
  },
  {
    id: 'p4',
    title: 'Vogue Tech',
    category: 'Web Design',
    imageUrl: 'https://picsum.photos/seed/tech4/800/1200',
    description: 'Digital brutalism.',
    year: '2022'
  },
  {
    id: 'p5',
    title: 'Concrete Dreams',
    category: 'Editorial',
    imageUrl: 'https://picsum.photos/seed/edit5/800/900',
    description: 'Print layout for architectural digest.',
    year: '2023'
  },
  {
    id: 'p6',
    title: 'Shadow Play',
    category: 'Art Direction',
    imageUrl: 'https://picsum.photos/seed/art6/800/800',
    description: 'Light manipulation study.',
    year: '2024'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Art Direction',
    description: 'Curating visual languages that speak without words.',
    icon: 'Pen'
  },
  {
    id: 's2',
    title: 'Photography',
    description: 'High-contrast, narrative-driven imagery.',
    icon: 'Camera'
  },
  {
    id: 's3',
    title: 'Digital Design',
    description: 'Immersive web experiences focusing on typography and motion.',
    icon: 'Code'
  },
  {
    id: 's4',
    title: 'Branding',
    description: 'Identity systems built for longevity and impact.',
    icon: 'Box'
  }
];

export const HERO_TEXT = "WE CRAFT SILENCE AND NOISE IN EQUAL MEASURE.";
export const SUB_HERO_TEXT = "A digital creative studio focused on the essential.";