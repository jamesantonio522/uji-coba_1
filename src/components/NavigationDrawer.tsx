import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Globe, Landmark, Newspaper, Quote, Trophy, Utensils, BookOpen } from 'lucide-react';
import { SectionType } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: SectionType;
  onSectionSelect: (section: SectionType) => void;
}

const SECTIONS: { name: SectionType; icon: ReactNode; desc: string }[] = [
  { name: 'Home', icon: <Newspaper className="w-4 h-4" />, desc: 'Top Headlines & Essential Journalism' },
  { name: 'World', icon: <Globe className="w-4 h-4" />, desc: 'International News & Global Perspectives' },
  { name: 'U.S.', icon: <Landmark className="w-4 h-4" />, desc: 'National News, Stories & Features' },
  { name: 'Politics', icon: <BookOpen className="w-4 h-4" />, desc: 'Washington, Campaigns & Legal Battles' },
  { name: 'Opinion', icon: <Quote className="w-4 h-4" />, desc: 'Columns, Op-Eds & Editorial Perspectives' },
  { name: 'Sports', icon: <Trophy className="w-4 h-4" />, desc: 'The Athletic & Global Matches' },
  { name: 'Cooking', icon: <Utensils className="w-4 h-4" />, desc: 'Delicious Recipes & Culinary Guides' },
];

export default function NavigationDrawer({
  isOpen,
  onClose,
  activeSection,
  onSectionSelect,
}: NavigationDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            id="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60] cursor-pointer"
          />

          {/* Sidebar Drawer */}
          <motion.aside
            id="nav-drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-[70] w-80 sm:w-96 bg-white border-r border-outline-variant flex flex-col p-6 shadow-2xl h-full select-none"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center mb-6 border-b border-neutral-100 pb-4">
              <div>
                <span className="font-label-caps text-[11px] text-neutral-400 uppercase tracking-widest block">Sections</span>
                <h2 className="font-headline-lg text-xl text-black font-bold mt-1">The New York Times</h2>
              </div>
              <button
                id="btn-close-drawer"
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 transition-colors text-black rounded-full active:scale-90 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sections List */}
            <nav className="flex-1 overflow-y-auto space-y-2 pr-1">
              {SECTIONS.map((sec) => {
                const isActive = activeSection === sec.name;
                return (
                  <button
                    key={sec.name}
                    id={`section-link-${sec.name.toLowerCase()}`}
                    onClick={() => {
                      onSectionSelect(sec.name);
                      onClose();
                    }}
                    className={`w-full flex items-start gap-4 p-3 border text-left cursor-pointer transition-all duration-200 ${
                      isActive
                        ? 'border-black bg-black text-white font-bold'
                        : 'border-transparent hover:bg-neutral-50 hover:border-neutral-200 text-neutral-800'
                    }`}
                  >
                    <div className={`p-1.5 mt-0.5 ${isActive ? 'text-white' : 'text-neutral-500'}`}>
                      {sec.icon}
                    </div>
                    <div>
                      <span className="font-metadata font-bold text-sm tracking-wider uppercase block">
                        {sec.name}
                      </span>
                      <span className={`font-metadata text-xs block mt-0.5 ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {sec.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Drawer Footer */}
            <div className="mt-auto pt-4 border-t border-neutral-100">
              <p className="font-metadata text-[11px] text-neutral-400 leading-normal">
                Journal Editorial Theme.<br />
                Authentic Newspaper Aesthetic.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
