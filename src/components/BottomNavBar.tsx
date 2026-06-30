import { Menu, Sparkles, Gamepad2, User } from 'lucide-react';

interface BottomNavBarProps {
  onToggleDrawer: () => void;
  onSelectTab: (tab: 'feed' | 'foryou' | 'games' | 'account') => void;
  activeTab: 'feed' | 'foryou' | 'games' | 'account';
}

export default function BottomNavBar({
  onToggleDrawer,
  onSelectTab,
  activeTab,
}: BottomNavBarProps) {
  return (
    <nav
      id="bottom-nav-bar"
      className="fixed bottom-0 left-0 w-full z-35 flex justify-around items-center h-16 bg-white border-t border-outline-variant px-4 shadow-sm select-none"
    >
      <div className="w-full max-w-screen-md mx-auto flex justify-around items-center">
        {/* Sections */}
        <button
          onClick={onToggleDrawer}
          className="flex flex-col items-center justify-center text-neutral-600 hover:text-black transition-colors cursor-pointer active:scale-95"
        >
          <Menu className="w-5 h-5 stroke-[2]" />
          <span className="font-label-caps text-[9px] uppercase tracking-wider mt-1">Sections</span>
        </button>

        {/* For You / Bookmarks */}
        <button
          onClick={() => onSelectTab('foryou')}
          className={`flex flex-col items-center justify-center transition-colors cursor-pointer active:scale-95 ${
            activeTab === 'foryou' ? 'text-black font-bold' : 'text-neutral-500 hover:text-black'
          }`}
        >
          <Sparkles className={`w-5 h-5 ${activeTab === 'foryou' ? 'fill-current text-black' : 'stroke-[2]'}`} />
          <span className="font-label-caps text-[9px] uppercase tracking-wider mt-1">For You</span>
        </button>

        {/* Games */}
        <button
          onClick={() => onSelectTab('games')}
          className={`flex flex-col items-center justify-center transition-colors cursor-pointer active:scale-95 ${
            activeTab === 'games' ? 'text-black font-bold' : 'text-neutral-500 hover:text-black'
          }`}
        >
          <Gamepad2 className="w-5 h-5 stroke-[2]" />
          <span className="font-label-caps text-[9px] uppercase tracking-wider mt-1">Games</span>
        </button>

        {/* Account Info */}
        <button
          onClick={() => onSelectTab('account')}
          className={`flex flex-col items-center justify-center transition-colors cursor-pointer active:scale-95 ${
            activeTab === 'account' ? 'text-black font-bold' : 'text-neutral-500 hover:text-black'
          }`}
        >
          <User className={`w-5 h-5 ${activeTab === 'account' ? 'fill-current text-black' : 'stroke-[2]'}`} />
          <span className="font-label-caps text-[9px] uppercase tracking-wider mt-1">Account</span>
        </button>
      </div>
    </nav>
  );
}
