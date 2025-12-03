import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MediaCard } from './components/MediaCard';
import { SmartLibrarian } from './components/SmartLibrarian';
import { MOCK_MEDIA, GENRES } from './constants';
import { MediaItem } from './types';
import { Button } from './components/Button';
import { ArrowRight, Filter, Library } from 'lucide-react';

// --- Page Components ---

const HomePage: React.FC<{ 
  items: MediaItem[]; 
  borrowedIds: string[]; 
  onToggleBorrow: (id: string) => void;
  onOpenLibrarian: () => void;
}> = ({ items, borrowedIds, onToggleBorrow, onOpenLibrarian }) => (
  <div className="animate-in fade-in duration-500">
    <HeroSection />
    
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Popular Now</h2>
        <Link to="/browse" className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
          View All <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.slice(0, 5).map(item => (
          <MediaCard 
            key={item.id} 
            item={item} 
            isBorrowed={borrowedIds.includes(item.id)}
            onAction={onToggleBorrow}
          />
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 mb-12 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">Not sure what to choose?</h3>
        <p className="text-slate-300">Let Lumina, our AI Librarian, help you discover your next obsession.</p>
      </div>
      <Button onClick={onOpenLibrarian} size="lg" className="whitespace-nowrap">
        <span className="flex items-center gap-2">Ask Lumina <ArrowRight size={16} /></span>
      </Button>
    </div>

    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">New Audiobooks</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.filter(i => i.type === 'audiobook').map(item => (
          <MediaCard 
            key={item.id} 
            item={item} 
            isBorrowed={borrowedIds.includes(item.id)}
            onAction={onToggleBorrow}
          />
        ))}
      </div>
    </div>
  </div>
);

const BrowsePage: React.FC<{ 
  items: MediaItem[]; 
  borrowedIds: string[]; 
  onToggleBorrow: (id: string) => void 
}> = ({ items, borrowedIds, onToggleBorrow }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'ebook', 'audiobook', 'movie', 'music', 'comic'];

  const filteredItems = activeFilter === 'All' 
    ? items 
    : items.filter(item => item.type === activeFilter);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-white">Browse Collection</h1>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <Filter size={18} className="text-slate-500 mr-2" />
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === f 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredItems.map(item => (
          <MediaCard 
            key={item.id} 
            item={item} 
            isBorrowed={borrowedIds.includes(item.id)}
            onAction={onToggleBorrow}
          />
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          No items found for this category.
        </div>
      )}
    </div>
  );
};

const MyLibraryPage: React.FC<{ 
  items: MediaItem[]; 
  borrowedIds: string[]; 
  onToggleBorrow: (id: string) => void 
}> = ({ items, borrowedIds, onToggleBorrow }) => {
  const borrowedItems = items.filter(item => borrowedIds.includes(item.id));

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-bold text-white mb-2">My Library</h1>
      <p className="text-slate-400 mb-8">You have borrowed {borrowedItems.length} items.</p>

      {borrowedItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {borrowedItems.map(item => (
            <MediaCard 
              key={item.id} 
              item={item} 
              isBorrowed={true}
              onAction={onToggleBorrow}
            />
          ))}
        </div>
      ) : (
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-12 text-center">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
            <Library size={32} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Your library is empty</h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            You haven't borrowed any titles yet. Explore our collection or ask Lumina for a recommendation!
          </p>
          <Link to="/browse">
            <Button>Browse Titles</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

// --- Main App ---

const App = () => {
  const [borrowedItems, setBorrowedItems] = useState<string[]>([]);
  const [isLibrarianOpen, setIsLibrarianOpen] = useState(false);

  const handleToggleBorrow = (id: string) => {
    setBorrowedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id) 
        : [...prev, id]
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans selection:bg-blue-500/30">
        <Navbar 
          onOpenLibrarian={() => setIsLibrarianOpen(true)} 
          borrowsCount={borrowedItems.length} 
        />
        
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={
              <HomePage 
                items={MOCK_MEDIA} 
                borrowedIds={borrowedItems} 
                onToggleBorrow={handleToggleBorrow}
                onOpenLibrarian={() => setIsLibrarianOpen(true)}
              />
            } />
            <Route path="/browse" element={
              <BrowsePage 
                items={MOCK_MEDIA} 
                borrowedIds={borrowedItems} 
                onToggleBorrow={handleToggleBorrow}
              />
            } />
            <Route path="/my-library" element={
              <MyLibraryPage 
                items={MOCK_MEDIA} 
                borrowedIds={borrowedItems} 
                onToggleBorrow={handleToggleBorrow}
              />
            } />
          </Routes>
        </main>

        <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Lumina Library. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
              <a href="#" className="hover:text-slate-300">Terms</a>
              <a href="#" className="hover:text-slate-300">Privacy</a>
              <a href="#" className="hover:text-slate-300">Help</a>
            </div>
          </div>
        </footer>

        <SmartLibrarian 
          isOpen={isLibrarianOpen} 
          onClose={() => setIsLibrarianOpen(false)} 
        />
      </div>
    </Router>
  );
};

export default App;