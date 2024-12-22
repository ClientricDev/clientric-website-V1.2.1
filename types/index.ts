export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface VideoMetadata {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration?: string;
}