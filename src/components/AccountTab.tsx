import { useState } from 'react';
import { User, CreditCard, Mail, Newspaper, Settings, CheckCircle } from 'lucide-react';

interface AccountTabProps {
  savedCount: number;
}

export default function AccountTab({ savedCount }: AccountTabProps) {
  const [newsletterSubscribed, setNewsletterSubscribed] = useState({
    morning: true,
    evening: false,
    cooking: true,
    sports: false,
  });

  const [toastMessage, setToastMessage] = useState('');

  const handleToggleNewsletter = (key: 'morning' | 'evening' | 'cooking' | 'sports') => {
    setNewsletterSubscribed((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      const statusText = next[key] ? 'subscribed to' : 'unsubscribed from';
      setToastMessage(`Successfully ${statusText} newsletter!`);
      setTimeout(() => setToastMessage(''), 2000);
      return next;
    });
  };

  return (
    <div className="bg-white p-6 max-w-md mx-auto space-y-6 border border-outline-variant rounded-none">
      {/* Profile summary */}
      <div className="flex items-center space-x-4 pb-4 border-b border-neutral-100">
        <div className="w-14 h-14 bg-black text-white flex items-center justify-center font-bold text-xl rounded-none">
          JA
        </div>
        <div>
          <h3 className="font-headline-lg text-lg font-bold">James Antonio</h3>
          <p className="font-metadata text-xs text-neutral-500">jamesantonio522@gmail.com</p>
        </div>
      </div>

      {/* Subscription details */}
      <div className="bg-neutral-50 p-4 border border-outline-variant rounded-none space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <Newspaper className="w-4 h-4 text-black" />
            <span className="font-label-caps text-xs text-black font-extrabold uppercase tracking-wider">
              YOUR SUBSCRIPTION
            </span>
          </div>
          <span className="bg-black text-white text-[10px] font-label-caps px-2 py-0.5 uppercase tracking-wider rounded-none font-bold">
            All-Access Member
          </span>
        </div>
        <p className="font-body-sm text-sm text-neutral-600 leading-normal">
          You have unlimited digital reading access, cooking recipes, premium puzzles, and archival news.
        </p>
        <div className="text-xs font-metadata text-neutral-400 pt-1">
          Next billing date: July 29, 2026
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-3 border border-neutral-200">
          <div className="text-2xl font-bold text-black">{savedCount}</div>
          <div className="text-[10px] font-label-caps text-neutral-400 uppercase tracking-widest mt-1">
            Saved Articles
          </div>
        </div>
        <div className="p-3 border border-neutral-200">
          <div className="text-2xl font-bold text-black">Active</div>
          <div className="text-[10px] font-label-caps text-neutral-400 uppercase tracking-widest mt-1">
            Status
          </div>
        </div>
      </div>

      {/* Newsletters Preferences */}
      <div className="space-y-3">
        <div className="flex items-center space-x-1.5 border-b border-neutral-200 pb-1.5">
          <Mail className="w-4 h-4 text-black" />
          <h4 className="font-label-caps text-[11px] text-black font-extrabold uppercase tracking-widest">
            Manage Newsletters
          </h4>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-metadata text-xs font-bold text-black block">The Morning Briefing</span>
              <span className="font-metadata text-[11px] text-neutral-400 block">The major stories of the day, sent every morning.</span>
            </div>
            <button
              onClick={() => handleToggleNewsletter('morning')}
              className={`px-3 py-1 text-[10px] font-label-caps uppercase border rounded-none cursor-pointer transition-colors ${
                newsletterSubscribed.morning ? 'bg-black text-white border-black' : 'border-neutral-300 text-neutral-500 hover:text-black'
              }`}
            >
              {newsletterSubscribed.morning ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-metadata text-xs font-bold text-black block">The Evening Update</span>
              <span className="font-metadata text-[11px] text-neutral-400 block">Wrap up your day with a comprehensive summary.</span>
            </div>
            <button
              onClick={() => handleToggleNewsletter('evening')}
              className={`px-3 py-1 text-[10px] font-label-caps uppercase border rounded-none cursor-pointer transition-colors ${
                newsletterSubscribed.evening ? 'bg-black text-white border-black' : 'border-neutral-300 text-neutral-500 hover:text-black'
              }`}
            >
              {newsletterSubscribed.evening ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-metadata text-xs font-bold text-black block">Cooking Weekly Digest</span>
              <span className="font-metadata text-[11px] text-neutral-400 block">Mouthwatering recipes, tips, and culinary inspiration.</span>
            </div>
            <button
              onClick={() => handleToggleNewsletter('cooking')}
              className={`px-3 py-1 text-[10px] font-label-caps uppercase border rounded-none cursor-pointer transition-colors ${
                newsletterSubscribed.cooking ? 'bg-black text-white border-black' : 'border-neutral-300 text-neutral-500 hover:text-black'
              }`}
            >
              {newsletterSubscribed.cooking ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Save Success Toast */}
      {toastMessage && (
        <div className="text-center text-xs text-green-700 bg-green-50 p-2 border border-green-200 font-metadata">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
