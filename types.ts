export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'Pen' | 'Camera' | 'Code' | 'Box';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum NavLink {
  WORK = 'work',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
}