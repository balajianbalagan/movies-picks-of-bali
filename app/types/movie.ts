export interface Movie {
  title: string;
  year: string;
  language: string;
  rating: number;
  review: string;
  genre: string;
  director: string;
  actors: string;
  poster?: string;
}

export interface MovieCategory {
  id: string;
  name: string;
  displayName: string;
  emoji: string;
  movies: Movie[];
}

export interface MovieData {
  [key: string]: Movie[];
}