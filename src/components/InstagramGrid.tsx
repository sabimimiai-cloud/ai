import React, { useState } from 'react';
import { Instagram, Heart, Play, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_FEED, STORE_CONTACT } from '../data/storeData';

export const InstagramGrid: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  return (
    <section 
      id="instagram-social-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F58220] mb-2">
              <Instagram className="w-4 h-4" />
              <span>COMMUNITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F70] tracking-tight font-display">
              More Buubu Bloom moments
            </h2>
            <p className="text-base sm:text-lg text-[#172033]/80 mt-2 max-w-xl">
              New drops. Cute fits. Little customers. Plenty of reasons to keep up with us.
            </p>
          </div>

          <a
            id="instagram-follow-cta"
            href={STORE_CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#173F70] hover:bg-[#2563C7] text-white px-7 py-4 rounded-2xl font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95 self-start sm:self-auto cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Buubu Bloom</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6-Grid Instagram Feed */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_FEED.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post.id)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F4F1EA] cursor-pointer border border-[#F4F1EA]"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />

              {/* Type Badge */}
              {post.type === 'reel' && (
                <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F70]/90 via-[#173F70]/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                <div className="flex items-center gap-1.5 text-xs font-bold mb-1 text-[#F9C928]">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-[11px] text-white/90 line-clamp-3 leading-snug">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#173F70]/75">
            Tag <span className="font-bold text-[#173F70]">@buububloom_</span> when they step out in their new look!
          </p>
        </div>

      </div>
    </section>
  );
};
