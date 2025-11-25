export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  date: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface SiteConfig {
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  contactEmail: string;
}

export interface AppState {
  courses: Course[];
  posts: BlogPost[];
  testimonials: Testimonial[];
  services: Service[];
  config: SiteConfig;
}