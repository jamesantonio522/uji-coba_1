export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string; // Detailed text for reading mode
  readTime: string;
  imageUrl?: string;
  imageAlt?: string;
  section: string;
  byline?: string;
  date?: string;
  isBreaking?: boolean;
  liveIndicator?: string;
}

export type SectionType = 'Home' | 'World' | 'U.S.' | 'Politics' | 'Opinion' | 'Sports' | 'Cooking';

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  likes: number;
}
