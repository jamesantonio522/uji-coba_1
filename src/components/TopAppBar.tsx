import { useState, useEffect } from 'react';
import { Menu, User, Search, X } from 'lucide-react';

interface TopAppBarProps {
  onToggleDrawer: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenBookmarks: () => void;
  showBookmarksOnly: boolean;
}

export default function TopAppBar({
  onToggleDrawer,
  searchQuery,
  onSearchChange,
  onOpenBookmarks,
  showBookmarksOnly,
}: TopAppBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="top-app-bar"
      className={`fixed top-0 left-0 w-full z-40 bg-white transition-all duration-300 border-b border-outline-variant flex flex-col justify-center px-4 ${
        isScrolled ? 'shadow-md h-16' : 'h-14'
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-screen-md mx-auto relative">
        {/* Left: Menu & Search */}
        <div className="flex items-center space-x-2">
          <button
            id="btn-menu"
            onClick={onToggleDrawer}
            className="p-2 hover:bg-neutral-100 transition-colors text-black active:scale-95 transition-transform cursor-pointer"
            aria-label="Toggle Navigation Drawer"
          >
            <Menu className="w-6 h-6 stroke-[1.8]" />
          </button>
          
          <button
            id="btn-search-toggle"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2 hover:bg-neutral-100 transition-colors active:scale-95 transition-transform cursor-pointer ${
              isSearchOpen ? 'text-breaking-red' : 'text-black'
            }`}
            aria-label="Search articles"
          >
            {isSearchOpen ? <X className="w-5 h-5 stroke-[2]" /> : <Search className="w-5 h-5 stroke-[1.8]" />}
          </button>
        </div>

        {/* Center: Brand Masthead */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center select-none cursor-pointer">
          <h1 className="font-masthead text-[25px] sm:text-3xl font-black text-black tracking-tighter leading-none select-none italic">
            The New York Times
          </h1>
        </div>

        {/* Right: Saved/Bookmarks & Account Indicator */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            id="btn-bookmarks"
            onClick={onOpenBookmarks}
            className={`px-2.5 py-1 text-xs font-label-caps border border-black uppercase transition-all duration-200 active:scale-95 cursor-pointer ${
              showBookmarksOnly ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-neutral-100'
            }`}
          >
            {showBookmarksOnly ? 'Show All' : 'Saved'}
          </button>

          <div className="relative group">
            <button
              id="btn-profile"
              className="p-2 hover:bg-neutral-100 transition-colors text-black active:scale-95 transition-transform cursor-pointer"
              aria-label="User account"
            >
              <User className="w-6 h-6 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Search Input Row */}
      {isSearchOpen && (
        <div className="w-full bg-white border-t border-neutral-100 py-2 px-4 transition-all duration-300">
          <div className="max-w-screen-md mx-auto flex items-center relative">
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search news, topics, cooking recipes..."
              className="w-full text-sm font-metadata border border-black px-3 py-2 outline-none focus:ring-1 focus:ring-black bg-neutral-50"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 text-neutral-400 hover:text-black p-1 text-xs font-label-caps uppercase"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
