import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  key?: string | number;
  article: Article;
  layout: 'hero' | 'row' | 'text-only' | 'cooking';
  onClick: () => void;
}

export default function ArticleCard({ article, layout, onClick }: ArticleCardProps) {
  if (layout === 'hero') {
    return (
      <article
        id={`article-card-${article.id}`}
        onClick={onClick}
        className="group pt-4 px-4 space-y-3 cursor-pointer select-none"
      >
        <div className="space-y-2">
          {article.isBreaking && (
            <div className="flex items-center space-x-1.5">
              <span className="font-label-caps text-xs text-breaking-red font-extrabold tracking-wider">BREAKING NEWS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-breaking-red animate-pulse"></span>
            </div>
          )}
          <h2 className="font-headline-xl text-2xl sm:text-[30px] leading-tight text-black hover:text-neutral-700 transition-colors font-bold tracking-tight">
            {article.title}
          </h2>
          <p className="font-body-md text-[17px] sm:text-lg leading-relaxed text-on-surface-variant font-light">
            {article.summary}
          </p>
          <div className="flex items-center space-x-3 text-metadata text-metadata-gray text-xs">
            {article.byline && <span className="font-semibold">{article.byline}</span>}
            <span className="w-1.5 h-1.5 bg-neutral-200 rounded-full"></span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {article.imageUrl && (
          <div className="mt-3 overflow-hidden border border-outline-variant bg-neutral-100 rounded-none relative">
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              referrerPolicy="no-referrer"
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.02] rounded-none"
            />
          </div>
        )}
      </article>
    );
  }

  if (layout === 'row') {
    return (
      <article
        id={`article-card-${article.id}`}
        onClick={onClick}
        className="group px-4 py-4 flex gap-4 items-start cursor-pointer select-none"
      >
        <div className="flex-1 space-y-2">
          <h3 className="font-headline-lg text-[20px] sm:text-22px leading-tight text-black hover:text-neutral-700 transition-colors font-bold">
            {article.title}
          </h3>
          <p className="font-body-sm text-[15px] text-neutral-600 line-clamp-2 leading-relaxed">
            {article.summary}
          </p>
          <div className="flex items-center space-x-2 text-metadata text-metadata-gray text-xs">
            {article.byline && <span className="font-medium">{article.byline}</span>}
            <span className="w-1.5 h-1.5 bg-neutral-200 rounded-full"></span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {article.imageUrl && (
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden border border-outline-variant rounded-none bg-neutral-100">
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300 rounded-none"
            />
          </div>
        )}
      </article>
    );
  }

  if (layout === 'cooking') {
    return (
      <article
        id={`article-card-${article.id}`}
        onClick={onClick}
        className="group bg-surface-container-low p-4 border border-outline-variant/60 cursor-pointer select-none"
      >
        <div className="flex space-x-4 items-center">
          <div className="flex-1 space-y-2">
            <span className="font-label-caps text-[10px] text-neutral-400 uppercase tracking-widest block">
              NYT COOKING
            </span>
            <h3 className="font-headline-lg text-lg sm:text-[21px] leading-tight text-black hover:text-neutral-700 font-bold">
              {article.title}
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-neutral-600 line-clamp-2">
              {article.summary}
            </p>
            <div className="text-metadata text-metadata-gray text-[11px] font-medium">
              {article.readTime} • By {article.byline?.replace(/^By\s+/i, '') || 'Melissa Clark'}
            </div>
          </div>

          {article.imageUrl && (
            <div className="w-24 h-24 flex-shrink-0 overflow-hidden border border-outline-variant rounded-none bg-neutral-100">
              <img
                src={article.imageUrl}
                alt={article.imageAlt || article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-none"
              />
            </div>
          )}
        </div>
      </article>
    );
  }

  // text-only layout
  return (
    <article
      id={`article-card-${article.id}`}
      onClick={onClick}
      className="group px-4 py-4 space-y-2 cursor-pointer select-none"
    >
      <h3 className="font-headline-lg text-[21px] sm:text-[23px] leading-tight text-black hover:text-neutral-700 transition-colors font-bold">
        {article.title}
      </h3>
      <p className="font-body-sm text-[15px] text-on-surface-variant leading-relaxed">
        {article.summary}
      </p>
      <div className="flex items-center space-x-2 text-metadata text-metadata-gray text-xs">
        {article.byline && <span className="font-medium">{article.byline}</span>}
        <span className="w-1.5 h-1.5 bg-neutral-200 rounded-full"></span>
        <span>{article.readTime}</span>
      </div>
    </article>
  );
}
