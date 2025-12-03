import { MediaItem } from './types';

export const GENRES = ['Action', 'Sci-Fi', 'Romance', 'Mystery', 'History', 'Self-Help', 'Fantasy', 'Jazz', 'Rock'];

export const MOCK_MEDIA: MediaItem[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    artist: 'Matt Haig',
    type: 'ebook',
    coverUrl: 'https://picsum.photos/seed/midnight/300/450',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
    rating: 4.5,
    year: 2020,
    genre: ['Fantasy', 'Fiction']
  },
  {
    id: '2',
    title: 'Dune: Part Two',
    artist: 'Denis Villeneuve',
    type: 'movie',
    coverUrl: 'https://picsum.photos/seed/dune/300/450',
    description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    rating: 4.8,
    year: 2024,
    genre: ['Sci-Fi', 'Action']
  },
  {
    id: '3',
    title: 'Atomic Habits',
    artist: 'James Clear',
    type: 'audiobook',
    coverUrl: 'https://picsum.photos/seed/atomic/300/450',
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving--every day.',
    rating: 4.9,
    year: 2018,
    genre: ['Self-Help']
  },
  {
    id: '4',
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    type: 'music',
    coverUrl: 'https://picsum.photos/seed/miles/300/300',
    description: 'Regarded by many critics as the greatest jazz record, Kind of Blue is a masterpiece of modern music.',
    rating: 5.0,
    year: 1959,
    genre: ['Jazz']
  },
  {
    id: '5',
    title: 'Saga, Vol. 1',
    artist: 'Brian K. Vaughan',
    type: 'comic',
    coverUrl: 'https://picsum.photos/seed/saga/300/450',
    description: 'Two soldiers from opposing sides of a never-ending galactic war fall in love.',
    rating: 4.7,
    year: 2012,
    genre: ['Sci-Fi', 'Fantasy']
  },
  {
    id: '6',
    title: 'Project Hail Mary',
    artist: 'Andy Weir',
    type: 'audiobook',
    coverUrl: 'https://picsum.photos/seed/hailmary/300/450',
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.',
    rating: 4.8,
    year: 2021,
    genre: ['Sci-Fi', 'Mystery']
  },
  {
    id: '7',
    title: 'Everything Everywhere All At Once',
    artist: 'Daniels',
    type: 'movie',
    coverUrl: 'https://picsum.photos/seed/eeaao/300/450',
    description: 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save the existence by exploring other universes.',
    rating: 4.6,
    year: 2022,
    genre: ['Sci-Fi', 'Action']
  },
  {
    id: '8',
    title: 'Rumours',
    artist: 'Fleetwood Mac',
    type: 'music',
    coverUrl: 'https://picsum.photos/seed/rumours/300/300',
    description: 'The eleventh studio album by British-American rock band Fleetwood Mac.',
    rating: 4.9,
    year: 1977,
    genre: ['Rock']
  },
  {
    id: '9',
    title: '1984',
    artist: 'George Orwell',
    type: 'ebook',
    coverUrl: 'https://picsum.photos/seed/1984/300/450',
    description: 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.',
    rating: 4.4,
    year: 1949,
    genre: ['Sci-Fi', 'Fiction']
  },
  {
    id: '10',
    title: 'Spider-Man: Into the Spider-Verse',
    artist: 'Bob Persichetti',
    type: 'movie',
    coverUrl: 'https://picsum.photos/seed/spider/300/450',
    description: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
    rating: 4.9,
    year: 2018,
    genre: ['Action', 'Sci-Fi']
  }
];