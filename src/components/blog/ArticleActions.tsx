"use client";

import { useState, useSyncExternalStore } from "react";
import { Bookmark, Share2, Check } from "lucide-react";

const BOOKMARKS_EVENT = "bookmarks-change";

function subscribeBookmarks(callback: () => void) {
  window.addEventListener(BOOKMARKS_EVENT, callback);
  return () => window.removeEventListener(BOOKMARKS_EVENT, callback);
}

function readBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("bookmarks");
    return saved ? (JSON.parse(saved) as string[]) : [];
  } catch {
    return [];
  }
}

export function ArticleActions({ articleTitle, articleSlug }: { articleTitle: string, articleSlug: string }) {
  const [isShared, setIsShared] = useState(false);

  const isBookmarked = useSyncExternalStore(
    subscribeBookmarks,
    () => readBookmarks().includes(articleSlug),
    () => false
  );

  const toggleBookmark = () => {
    const bookmarks = readBookmarks();
    const next = isBookmarked
      ? bookmarks.filter(s => s !== articleSlug)
      : [...bookmarks, articleSlug];

    localStorage.setItem("bookmarks", JSON.stringify(next));
    window.dispatchEvent(new Event(BOOKMARKS_EVENT));
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: articleTitle,
          url: url
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(url);
      setIsShared(true);
      setTimeout(() => setIsShared(false), 2000);
    }
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={toggleBookmark}
        className={`cursor-pointer w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${isBookmarked ? 'bg-teal-50 border-teal-200 text-teal-600' : 'border-slate-200 text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}
        title={isBookmarked ? "Remove Bookmark" : "Bookmark"}
      >
        <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
      </button>
      <button 
        onClick={handleShare}
        className="cursor-pointer w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors"
        title="Share"
      >
        {isShared ? <Check className="w-4 h-4 text-teal-600" /> : <Share2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
