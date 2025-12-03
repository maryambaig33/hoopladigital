import React from 'react';
import { MediaItem } from '../types';
import { Star, Headphones, Book, Film, Music, Tv } from 'lucide-react';

interface MediaCardProps {
  item: MediaItem;
  isBorrowed?: boolean;
  onAction: (id: string) => void;
}

const TypeIcon = ({ type }: { type: MediaItem['type'] }) => {
  switch (type) {
    case 'audiobook': return <Headphones size={14} />;
    case 'ebook': return <Book size={14} />;
    case 'movie': return <Film size={14} />;
    case 'music': return <Music size={14} />;
    case 'comic': return <Tv size={14} />; // Using Tv for comic as closest visual proxy in this set
    default: return <Book size={14} />;
  }
};

export const MediaCard: React.FC<MediaCardProps> = ({ item, isBorrowed, onAction }) => {
  return (
    <div className="group relative flex flex-col w-full bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800 transition-colors border border-slate-700/50 hover:border-blue-500/50">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={item.coverUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 text-white">
          <Star size={10} className="text-yellow-400 fill-yellow-400" />
          {item.rating}
        </div>
        <div className="absolute top-2 left-2 bg-blue-600/90 backdrop-blur-md text-xs font-bold px-2 py-1 rounded-full text-white uppercase flex items-center gap-1">
          <TypeIcon type={item.type} />
          {item.type}
        </div>
        
        {/* Hover Overlay Action */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <button 
            onClick={() => onAction(item.id)}
            className={`px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ${
              isBorrowed 
                ? 'bg-slate-200 text-slate-900 hover:bg-white' 
                : 'bg-blue-600 text-white hover:bg-blue-500'
            }`}
          >
            {isBorrowed ? 'Return' : 'Borrow'}
          </button>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white font-semibold text-base line-clamp-1 group-hover:text-blue-400 transition-colors" title={item.title}>
          {item.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1 mb-3 line-clamp-1">{item.artist}</p>
        <div className="mt-auto flex flex-wrap gap-1">
          {item.genre.slice(0, 2).map(g => (
            <span key={g} className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-1.5 py-0.5 rounded">
              {g}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};