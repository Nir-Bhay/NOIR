export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'FileText' | 'Shield' | 'Users' | 'Globe' | 'Handshake' | 'Scale';
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum NavLink {
  ABOUT = 'about',
  SERVICES = 'services',
  TEAM = 'team',
  BLOGS = 'blogs',
  CONTACT = 'contact',
}