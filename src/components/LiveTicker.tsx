import { ArrowUpRight } from 'lucide-react';

interface LiveTickerProps {
  onSelectLiveHeadline: (headline: string) => void;
}

const LIVE_HEADLINES = [
  { text: 'World Cup: Netherlands vs. Morocco', url: '#' },
  { text: 'War in the Middle East', url: '#' },
  { text: 'Fed Independence Upheld in Landmark Supreme Court Verdict', url: '#' },
  { text: 'Tropical Storm Elsa Gains Strength Moving Eastward', url: '#' },
];

export default function LiveTicker({ onSelectLiveHeadline }: LiveTickerProps) {
  return (
    <section
      id="live-ticker"
      className="px-4 py-3 border-b border-outline-variant flex items-center space-x-3 overflow-x-auto whitespace-nowrap scrollbar-hide bg-white max-w-screen-md mx-auto select-none"
    >
      <div className="flex items-center space-x-1.5 flex-shrink-0">
        <span className="font-label-caps text-xs text-breaking-red font-black tracking-widest">LIVE</span>
        <div className="w-1.5 h-1.5 rounded-full bg-breaking-red animate-pulse"></div>
      </div>
      
      <div className="h-4 w-[1px] bg-outline-variant flex-shrink-0"></div>

      <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
        {LIVE_HEADLINES.map((headline, idx) => (
          <div key={idx} className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={() => onSelectLiveHeadline(headline.text)}
              className="font-metadata text-[13px] text-black hover:text-breaking-red hover:underline transition-all flex items-center space-x-1 font-medium cursor-pointer"
            >
              <span>{headline.text}</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </button>
            {idx < LIVE_HEADLINES.length - 1 && (
              <div className="h-3 w-[1px] bg-neutral-200"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
