import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Library, Search, User, Menu, X, Sparkles } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onOpenLibrarian: () => void;
  borrowsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLibrarian, borrowsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/browse', label: 'Browse' },
    { path: '/my-library', label: 'My Library' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Library size={18} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Lumina
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-blue-400' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <Search className="text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-slate-800/50 border border-slate-700 rounded-full py-1.5 pl-9 pr-4 text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-all w-48 focus:w-64"
              />
            </div>

            <Button onClick={onOpenLibrarian} variant="ghost" className="text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 gap-2 px-3">
              <Sparkles size={16} />
              <span className="text-xs font-semibold uppercase tracking-wider">Ask AI</span>
            </Button>

            <div className="h-8 w-[1px] bg-slate-800"></div>

            <Link to="/my-library" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
               <div className="relative">
                 <User size={20} />
                 {borrowsCount > 0 && (
                   <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900"></span>
                 )}
               </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <Button onClick={onOpenLibrarian} variant="ghost" className="text-blue-400 p-2">
              <Sparkles size={20} />
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium ${
                isActive(link.path) ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-800">
             <div className="flex items-center gap-2 text-slate-400">
               <User size={18} />
               <span>Borrowed Items: {borrowsCount}</span>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};