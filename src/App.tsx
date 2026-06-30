import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, HelpCircle, Newspaper, CheckCircle, ArrowRight } from 'lucide-react';

import { Article, SectionType } from './types';
import { INITIAL_ARTICLES } from './data';
import TopAppBar from './components/TopAppBar';
import NavigationDrawer from './components/NavigationDrawer';
import LiveTicker from './components/LiveTicker';
import ArticleCard from './components/ArticleCard';
import ArticleDetailModal from './components/ArticleDetailModal';
import MiniWordle from './components/MiniWordle';
import AccountTab from './components/AccountTab';
import BottomNavBar from './components/BottomNavBar';

export default function App() {
  // Navigation & filtering states
  const [activeSection, setActiveSection] = useState<SectionType>('Home');
  const [activeTab, setActiveTab] = useState<'feed' | 'foryou' | 'games' | 'account'>('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  // Article reading & bookmark state
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([]);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);

  // Live coverage popup state
  const [liveCoverageHeadline, setLiveCoverageHeadline] = useState<string | null>(null);

  // Load bookmarks on mount
  useEffect(() => {
    const saved = localStorage.getItem('nyt_saved_articles');
    if (saved) {
      try {
        setSavedArticleIds(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleToggleSave = (id: string) => {
    setSavedArticleIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('nyt_saved_articles', JSON.stringify(next));
      return next;
    });
  };

  const handleSectionSelect = (section: SectionType) => {
    setActiveSection(section);
    setActiveTab('feed');
    setShowBookmarksOnly(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLiveHeadline = (headline: string) => {
    setLiveCoverageHeadline(headline);
  };

  // Filter articles based on activeSection, searchQuery, and bookmarks flag
  const getFilteredArticles = () => {
    let list = INITIAL_ARTICLES;

    if (showBookmarksOnly) {
      list = list.filter((art) => savedArticleIds.includes(art.id));
    } else if (activeSection !== 'Home') {
      list = list.filter((art) => art.section === activeSection);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        (art) =>
          art.title.toLowerCase().includes(query) ||
          art.summary.toLowerCase().includes(query) ||
          art.content.toLowerCase().includes(query)
      );
    }

    return list;
  };

  const filteredArticles = getFilteredArticles();

  // Primary feed layout (Home view) matching the exact screenshot structure
  const renderHomeFeed = () => {
    if (searchQuery.trim() !== '') {
      return (
        <div className="space-y-4 pt-4">
          <div className="px-4 py-2 border-b border-neutral-100">
            <h3 className="font-label-caps text-xs text-neutral-500 uppercase tracking-wider">
              Search Results ({filteredArticles.length})
            </h3>
          </div>
          {filteredArticles.length > 0 ? (
            <div className="divide-y divide-neutral-200">
              {filteredArticles.map((art) => (
                <ArticleCard
                  key={art.id}
                  article={art}
                  layout="row"
                  onClick={() => setSelectedArticle(art)}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center space-y-2">
              <p className="font-headline-lg text-lg text-neutral-500">No results matching "{searchQuery}"</p>
              <p className="font-metadata text-xs text-neutral-400">Try checking spelling or choosing another topic.</p>
            </div>
          )}
        </div>
      );
    }

    if (activeSection !== 'Home') {
      return (
        <div className="space-y-4 pt-4">
          <div className="px-4 py-1 border-b border-black flex justify-between items-center">
            <h2 className="font-label-caps text-sm font-black uppercase tracking-widest text-black">
              {activeSection} Section
            </h2>
          </div>
          <div className="divide-y divide-neutral-200">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((art, idx) => (
                <ArticleCard
                  key={art.id}
                  article={art}
                  layout={idx === 0 ? 'hero' : 'row'}
                  onClick={() => setSelectedArticle(art)}
                />
              ))
            ) : (
              <p className="p-8 text-center text-neutral-500 font-metadata text-sm">
                No recent stories in this section. Check back later for updates.
              </p>
            )}
          </div>
        </div>
      );
    }

    // Exact replica of the NYT Home Page shown in the image
    const heroStory = INITIAL_ARTICLES.find((a) => a.id === 'hero-1');
    const justicesStory = INITIAL_ARTICLES.find((a) => a.id === 'story-2');
    const genZStory = INITIAL_ARTICLES.find((a) => a.id === 'story-3');
    const electionStory = INITIAL_ARTICLES.find((a) => a.id === 'story-4');
    const sportsStory = INITIAL_ARTICLES.find((a) => a.id === 'story-5');
    const cookingStory = INITIAL_ARTICLES.find((a) => a.id === 'story-6');

    return (
      <div className="space-y-0">
        {/* Hero Story */}
        {heroStory && (
          <ArticleCard
            article={heroStory}
            layout="hero"
            onClick={() => setSelectedArticle(heroStory)}
          />
        )}

        {/* Separator rule line */}
        <div className="px-4 my-6">
          <div className="rule-line"></div>
        </div>

        {/* Secondary Story Cluster */}
        {justicesStory && (
          <ArticleCard
            article={justicesStory}
            layout="text-only"
            onClick={() => setSelectedArticle(justicesStory)}
          />
        )}

        <div className="px-4 my-4">
          <div className="rule-line"></div>
        </div>

        {/* Gen Z row story */}
        {genZStory && (
          <ArticleCard
            article={genZStory}
            layout="row"
            onClick={() => setSelectedArticle(genZStory)}
          />
        )}

        <div className="px-4 my-4">
          <div className="rule-line"></div>
        </div>

        {/* California Elections row story */}
        {electionStory && (
          <ArticleCard
            article={electionStory}
            layout="row"
            onClick={() => setSelectedArticle(electionStory)}
          />
        )}

        {/* Thick line separating Main News from Sports Section */}
        <div className="px-4 my-6">
          <div className="rule-line h-[2px] bg-black"></div>
        </div>

        {/* Sports Section (THE ATHLETIC) */}
        <section className="px-4 space-y-3">
          <h4 className="font-label-caps text-xs text-black border-b border-black inline-block pb-0.5 font-black tracking-widest uppercase">
            THE ATHLETIC
          </h4>
          {sportsStory && (
            <div className="group space-y-3 cursor-pointer" onClick={() => setSelectedArticle(sportsStory)}>
              <img
                src={sportsStory.imageUrl}
                alt={sportsStory.imageAlt || sportsStory.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/9] object-cover border border-outline-variant rounded-none"
              />
              <h3 className="font-headline-lg text-[22px] leading-tight text-black group-hover:text-neutral-700 font-bold">
                {sportsStory.title}
              </h3>
              <p className="font-body-sm text-sm text-neutral-600">
                {sportsStory.summary}
              </p>
            </div>
          )}
        </section>

        {/* Large spacing before Cooking Section */}
        <div className="px-4 my-8">
          {cookingStory && (
            <ArticleCard
              article={cookingStory}
              layout="cooking"
              onClick={() => setSelectedArticle(cookingStory)}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black font-body-md relative flex flex-col">
      
      {/* Top Application Header */}
      <TopAppBar
        onToggleDrawer={() => setIsDrawerOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenBookmarks={() => {
          setShowBookmarksOnly(!showBookmarksOnly);
          setActiveTab('feed');
        }}
        showBookmarksOnly={showBookmarksOnly}
      />

      {/* Navigation Slideout Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
        onSectionSelect={handleSectionSelect}
      />

      {/* Main Newspaper Feed Container */}
      <main className="pt-14 pb-20 w-full max-w-screen-md mx-auto flex-1">
        
        {/* Header Metadata bar: Date & Subscribe banner */}
        <div className="px-4 py-2 flex justify-between items-center border-b border-outline-variant bg-white select-none">
          <span className="font-metadata font-bold text-[11px] uppercase tracking-wider text-black">
            Monday, June 29, 2026
          </span>
          <button
            onClick={() => setIsSubscriptionOpen(true)}
            className="font-label-caps text-[10px] sm:text-xs border border-black px-3 py-1 uppercase active:scale-95 transition-transform hover:bg-black hover:text-white transition-colors cursor-pointer rounded-none font-bold"
          >
            Subscribe for $1/week
          </button>
        </div>

        {/* Live coverage ticker bar */}
        <LiveTicker onSelectLiveHeadline={handleSelectLiveHeadline} />

        {/* Dynamic Views switcher */}
        {activeTab === 'feed' && renderHomeFeed()}

        {activeTab === 'foryou' && (
          <div className="p-4 space-y-6 pt-6">
            <div className="border-b border-black pb-2 flex items-center justify-between">
              <h2 className="font-headline-lg text-xl font-bold uppercase flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-black" />
                <span>FOR YOU clippings</span>
              </h2>
              <span className="text-xs font-metadata text-metadata-gray font-semibold">
                Saved Offline: {savedArticleIds.length}
              </span>
            </div>

            {savedArticleIds.length > 0 ? (
              <div className="divide-y divide-neutral-200">
                {INITIAL_ARTICLES.filter((a) => savedArticleIds.includes(a.id)).map((art) => (
                  <ArticleCard
                    key={art.id}
                    article={art}
                    layout="row"
                    onClick={() => setSelectedArticle(art)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center max-w-sm mx-auto space-y-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-headline-lg text-lg font-bold">Your Saved clippings Feed</h3>
                <p className="font-body-sm text-sm text-neutral-500 leading-relaxed">
                  Your clippings are empty. Bookmark editorial pieces while reading to save them securely inside your browser's local cache.
                </p>
                <button
                  onClick={() => setActiveTab('feed')}
                  className="px-4 py-2 bg-black text-white text-xs font-label-caps uppercase flex items-center space-x-2 mx-auto cursor-pointer"
                >
                  <span>Browse Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'games' && (
          <div className="p-4 pt-6 space-y-6">
            <div className="border-b border-black pb-2">
              <h2 className="font-headline-lg text-xl font-bold uppercase flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-black" />
                <span>NYT Games & Puzzles</span>
              </h2>
            </div>
            <MiniWordle />
          </div>
        )}

        {activeTab === 'account' && (
          <div className="p-4 pt-6 space-y-6">
            <div className="border-b border-black pb-2">
              <h2 className="font-headline-lg text-xl font-bold uppercase">Subscriber Settings</h2>
            </div>
            <AccountTab savedCount={savedArticleIds.length} />
          </div>
        )}

        {/* Footer block matching screenshot */}
        <footer className="w-full px-4 py-8 flex flex-col items-center space-y-4 bg-white border-t-2 border-black mt-8">
          <div className="font-masthead text-2xl font-black italic tracking-tighter select-none">
            The New York Times
          </div>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-center max-w-md">
            <a href="#" className="font-label-caps text-[10px] text-neutral-500 hover:text-black uppercase tracking-wider">Privacy Policy</a>
            <a href="#" className="font-label-caps text-[10px] text-neutral-500 hover:text-black uppercase tracking-wider">Terms of Service</a>
            <a href="#" className="font-label-caps text-[10px] text-neutral-500 hover:text-black uppercase tracking-wider">Help</a>
            <a href="#" className="font-label-caps text-[10px] text-neutral-500 hover:text-black uppercase tracking-wider">Contact Us</a>
            <a href="#" className="font-label-caps text-[10px] text-neutral-500 hover:text-black uppercase tracking-wider font-bold">Subscribe</a>
          </nav>
          <div className="font-metadata text-[11px] text-neutral-400">
            © 2026 The New York Times Company
          </div>
        </footer>
      </main>

      {/* Floating Bottom Navigation Tab bar */}
      <BottomNavBar
        onToggleDrawer={() => setIsDrawerOpen(true)}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setShowBookmarksOnly(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeTab={activeTab}
      />

      {/* Article Detail Full Reading View Panel */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleDetailModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
            isSaved={savedArticleIds.includes(selectedArticle.id)}
            onToggleSave={() => handleToggleSave(selectedArticle.id)}
          />
        )}
      </AnimatePresence>

      {/* Subscription offer Modal */}
      <AnimatePresence>
        {isSubscriptionOpen && (
          <div className="fixed inset-0 bg-black/60 z-[80] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-6 border border-black w-full max-w-sm text-center space-y-4 rounded-none relative"
            >
              <h3 className="font-headline-lg text-2xl font-bold font-serif-headline">Support Independent Journalism.</h3>
              <p className="font-body-sm text-sm text-neutral-600">
                Subscribe today for only <span className="font-bold text-black">$1/week</span> for comprehensive coverage, recipes, Wordle archives, and analytical world news reports.
              </p>
              <div className="bg-neutral-50 p-4 border border-neutral-200">
                <span className="font-label-caps text-[10px] text-neutral-400 block uppercase">INTRODUCTORY OFFER</span>
                <span className="text-3xl font-black text-black font-serif-headline mt-1 block">$1 / WEEK</span>
                <span className="text-[11px] text-neutral-500 block mt-1">Cancel anytime. Terms apply.</span>
              </div>
              <button
                onClick={() => {
                  alert('Thank you for choosing to support independent journalism! Subscription simulated successfully.');
                  setIsSubscriptionOpen(false);
                }}
                className="w-full py-2.5 bg-black hover:bg-neutral-800 text-white font-label-caps text-xs uppercase cursor-pointer rounded-none font-bold tracking-wider"
              >
                Start Subscription
              </button>
              <button
                onClick={() => setIsSubscriptionOpen(false)}
                className="w-full py-2 border border-neutral-300 hover:border-black text-neutral-600 hover:text-black font-label-caps text-xs uppercase cursor-pointer rounded-none"
              >
                No Thanks, Keep Reading
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Live coverage alert popup */}
      <AnimatePresence>
        {liveCoverageHeadline && (
          <div className="fixed inset-0 bg-black/60 z-[80] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-6 border border-black w-full max-w-md text-left space-y-4 rounded-none"
            >
              <div className="flex items-center space-x-2">
                <span className="font-label-caps text-xs text-breaking-red font-black tracking-widest uppercase">LIVE BULLETIN</span>
                <span className="w-1.5 h-1.5 rounded-full bg-breaking-red animate-pulse"></span>
              </div>
              
              <h3 className="font-headline-lg text-xl font-bold font-serif-headline leading-tight">
                {liveCoverageHeadline}
              </h3>
              
              <div className="text-xs text-neutral-500 font-metadata">
                Updated moments ago • Editorial Team Room
              </div>
              
              <p className="font-body-sm text-sm text-neutral-600 leading-relaxed">
                Reporters are on the ground gathering details. Additional articles, transcripts of live testimonies, and professional opinions are being added. Check back soon for the full, complete story inside our sections.
              </p>

              <button
                onClick={() => setLiveCoverageHeadline(null)}
                className="w-full py-2 bg-black hover:bg-neutral-800 text-white font-label-caps text-xs uppercase cursor-pointer rounded-none font-bold"
              >
                Close Bulletin
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
