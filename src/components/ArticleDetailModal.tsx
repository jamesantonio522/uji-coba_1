import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bookmark, Share2, ThumbsUp, Type, MessageSquare, Send } from 'lucide-react';
import { Article, Comment } from '../types';
import { MOCK_COMMENTS } from '../data';

interface ArticleDetailModalProps {
  article: Article;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

export default function ArticleDetailModal({
  article,
  onClose,
  isSaved,
  onToggleSave,
}: ArticleDetailModalProps) {
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentError, setCommentError] = useState('');
  const [shareToast, setShareToast] = useState(false);

  const fontClasses = {
    sm: 'text-base leading-relaxed',
    md: 'text-lg leading-relaxed',
    lg: 'text-xl leading-relaxed',
    xl: 'text-2xl leading-relaxed',
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  const handleLikeComment = (commentId: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) {
      setCommentError('Please fill out both your name and comment text.');
      return;
    }

    const created: Comment = {
      id: `custom-comment-${Date.now()}`,
      author: newCommentName.trim(),
      text: newCommentText.trim(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }) + ', ' + new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
      likes: 0,
    };

    setComments([created, ...comments]);
    setNewCommentName('');
    setNewCommentText('');
    setCommentError('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto flex flex-col h-full"
    >
      {/* Top Action Bar */}
      <nav className="sticky top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-outline-variant z-10 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-3 w-full max-w-screen-md mx-auto justify-between">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 p-2 hover:bg-neutral-100 text-black active:scale-95 transition-transform cursor-pointer font-label-caps text-xs uppercase"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>

          {/* Controls: Save, Share, Font Size */}
          <div className="flex items-center space-x-1">
            {/* Font Size Selector */}
            <div className="flex items-center border border-neutral-200 px-1 py-0.5 mr-2">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 text-xs font-bold transition-all rounded-none cursor-pointer ${
                  fontSize === 'sm' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="Small text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-2 py-1 text-sm font-bold transition-all rounded-none cursor-pointer ${
                  fontSize === 'md' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="Medium text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 text-base font-bold transition-all rounded-none cursor-pointer ${
                  fontSize === 'lg' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="Large text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2 py-1 text-lg font-bold transition-all rounded-none cursor-pointer ${
                  fontSize === 'xl' ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="Extra large text"
              >
                A+
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={onToggleSave}
              className={`p-2 hover:bg-neutral-100 transition-colors cursor-pointer rounded-none border ${
                isSaved ? 'bg-black border-black text-white' : 'border-neutral-200 text-neutral-600 hover:text-black'
              }`}
              title={isSaved ? 'Saved to Bookmarks' : 'Save Article'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 hover:bg-neutral-100 text-neutral-600 hover:text-black border border-neutral-200 cursor-pointer rounded-none"
              title="Copy link to clipboard"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Pane */}
      <main className="flex-1 w-full max-w-screen-md mx-auto px-6 py-6 pb-24 space-y-6">
        {/* Breadcrumb section */}
        <div className="flex items-center space-x-2">
          <span className="font-label-caps text-xs text-black border-b-2 border-black uppercase tracking-wider font-bold">
            {article.section}
          </span>
          {article.isBreaking && (
            <span className="bg-breaking-red text-white text-[10px] font-label-caps px-1.5 py-0.5 uppercase tracking-widest font-extrabold rounded-none">
              Live updates
            </span>
          )}
        </div>

        {/* Title & Byline */}
        <div className="space-y-4">
          <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-[42px] leading-[1.1] font-bold text-black tracking-tight font-serif-headline">
            {article.title}
          </h1>

          <p className="font-body-md text-lg sm:text-xl text-on-surface-variant leading-relaxed">
            {article.summary}
          </p>

          <div className="rule-line !my-4"></div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-metadata text-metadata-gray">
            <div className="space-y-1">
              {article.byline && <div className="text-black font-semibold text-[13px]">{article.byline}</div>}
              <div>Journal Staff Reporter</div>
            </div>
            <div className="text-[12px]">
              {article.date || 'Monday, June 29, 2026'} • {article.readTime}
            </div>
          </div>

          <div className="rule-line !my-4"></div>
        </div>

        {/* Image if present */}
        {article.imageUrl && (
          <figure className="space-y-2 border border-outline-variant bg-neutral-50 rounded-none p-2">
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              referrerPolicy="no-referrer"
              className="w-full object-cover max-h-[420px] rounded-none"
            />
            {article.imageAlt && (
              <figcaption className="text-xs font-metadata text-metadata-gray leading-normal px-2 pt-1 border-t border-neutral-100">
                {article.imageAlt}
              </figcaption>
            )}
          </figure>
        )}

        {/* Body Content */}
        <article className={`font-body-md text-neutral-800 ${fontClasses[fontSize]} whitespace-pre-line space-y-6 font-serif-body`}>
          {article.content}
        </article>

        <div className="rule-line !my-8"></div>

        {/* Interactive Comments Panel */}
        <section className="space-y-6" id="comments-section">
          <div className="flex items-center space-x-3 pb-2 border-b border-black">
            <MessageSquare className="w-5 h-5 text-black" />
            <h3 className="font-headline-lg text-lg sm:text-xl font-bold uppercase tracking-tight">
              Community Responses ({comments.length})
            </h3>
          </div>

          {/* Create Comment Form */}
          <form onSubmit={handleAddComment} className="space-y-3 bg-neutral-50 p-4 border border-outline-variant rounded-none">
            <span className="font-label-caps text-[11px] text-neutral-500 uppercase tracking-wider block">
              Join the Editorial Debate
            </span>

            {commentError && (
              <div className="text-xs text-breaking-red font-medium">{commentError}</div>
            )}

            <div className="grid grid-cols-1 gap-3">
              <input
                type="text"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                placeholder="Your Name (e.g., Arthur Miller)"
                className="w-full text-sm font-metadata border border-neutral-300 bg-white px-3 py-2 outline-none focus:border-black rounded-none"
              />
              <textarea
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                rows={3}
                placeholder="Share your analytical response..."
                className="w-full text-sm font-metadata border border-neutral-300 bg-white px-3 py-2 outline-none focus:border-black rounded-none"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-black hover:bg-neutral-800 text-white font-label-caps text-xs uppercase flex items-center space-x-2 cursor-pointer transition-transform active:scale-95 rounded-none"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Comment</span>
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-4 border-b border-neutral-200 hover:bg-neutral-50/50 transition-colors space-y-2"
              >
                <div className="flex justify-between items-start text-xs font-metadata">
                  <div className="font-bold text-black">{comment.author}</div>
                  <div className="text-metadata-gray">{comment.date}</div>
                </div>
                <p className="font-body-sm text-[15px] text-neutral-800 leading-normal">
                  {comment.text}
                </p>
                <div className="flex items-center space-x-3 pt-1">
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className="flex items-center space-x-1.5 text-xs font-metadata text-metadata-gray hover:text-black active:scale-95 transition-transform cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{comment.likes} likes</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Copy Share Toast */}
      {shareToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2.5 shadow-lg border border-neutral-800 text-xs font-label-caps uppercase tracking-wider z-50">
          Article link copied to clipboard!
        </div>
      )}
    </motion.div>
  );
}
