export type MediaType = 'ebook' | 'audiobook' | 'movie' | 'music' | 'comic';

export interface MediaItem {
  id: string;
  title: string;
  artist: string; // Author, Director, or Artist
  type: MediaType;
  coverUrl: string;
  description: string;
  rating: number; // 1-5
  year: number;
  genre: string[];
}

export interface User {
  name: string;
  borrowedItems: string[]; // List of IDs
  monthlyLimit: number;
  borrowsUsed: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}