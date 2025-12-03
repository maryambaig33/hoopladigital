import React from 'react';
import { Button } from './Button';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-12 group">
      <img 
        src="https://picsum.photos/seed/dune/1200/600" 
        alt="Hero Banner" 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent flex items-end p-8 md:p-12">
        <div className="max-w-2xl space-y-4">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded uppercase tracking-wider mb-2">
            Featured Movie
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Dune: Part Two
          </h1>
          <p className="text-slate-300 text-lg md:text-xl line-clamp-2 max-w-xl">
            Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.
          </p>
          <div className="flex gap-4 pt-4">
            <Button variant="primary" size="lg" className="gap-2">
              <Play size={20} fill="currentColor" /> Watch Now
            </Button>
            <Button variant="secondary" size="lg">
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};