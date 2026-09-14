"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Call, Messages1 } from "iconsax-react";

interface ReviewsCtaSectionProps {
  onOpenQuoteModal: () => void;
}

export const ReviewsCtaSection: React.FC<ReviewsCtaSectionProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section className="relative z-20 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-14 scroll-mt-24" id="reviews">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex flex-col">
          <span className="text-[12px] font-black uppercase tracking-wider text-dt-blue">
            CUSTOMER REVIEWS
          </span>
          <div className="w-8 h-[3px] bg-dt-green rounded-full mt-1" />
        </div>

        <span className="text-[13px] font-bold text-dt-muted tracking-tight">
          Real People. Real Journeys.
        </span>
      </div>

      {/* 4 Columns: 3 Review Cards + 1 Semantic CTA Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-4">
        
        {/* 3 Review Cards (takes 8 cols total) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          {siteConfig.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/80 hover:bg-white/95 backdrop-blur-xl rounded-[22px] p-4 sm:p-5 border border-white/90 shadow-[0_10px_30px_rgba(6,63,107,0.06)] hover:shadow-[0_16px_36px_rgba(6,63,107,0.12)] hover:-translate-y-1 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Card Top: Frosted Quote Icon & 5 Golden Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-dt-ice/90 backdrop-blur-sm border border-dt-blue/20 flex items-center justify-center text-dt-blue font-black text-sm shadow-xs">
                    “
                  </div>
                  <div className="flex items-center gap-0.5 text-[#FFA800] text-[13px] drop-shadow-xs">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-[12px] sm:text-[12.5px] text-dt-navy font-medium leading-relaxed mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-dt-blue/15 flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black text-dt-navy leading-tight">
                      {review.name}
                    </h4>
                    <span className="text-[11px] font-bold text-dt-blue leading-tight block">
                      {review.location}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-medium text-dt-muted">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reconstructed Semantic CTA Card (takes 4 cols) with Glassmorphism */}
        <div className="lg:col-span-4 relative rounded-[22px] overflow-hidden border border-white/40 shadow-[0_14px_40px_rgba(6,63,107,0.18)] flex flex-col justify-between p-5 sm:p-6 group min-h-[220px]">
          {/* Base High-Resolution Photographic Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/dhasvika/cta/cta_mountain_hiker_hq.jpg"
              alt="Ready for Your Next Journey?"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Deep Navy Glassmorphic Gradient Scrim for crisp text legibility */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#063F6B]/95 via-[#063F6B]/80 via-65% to-transparent backdrop-blur-[1px] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 z-10 bg-gradient-to-t from-[#063F6B]/90 via-[#063F6B]/60 to-transparent pointer-events-none" />

          {/* Top Decorative Script */}
          <div className="relative z-20 flex justify-end">
            <span className="font-script text-[22px] text-white/95 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] -rotate-2">
              Collect Moments Not Things
            </span>
          </div>

          {/* Semantic HTML Heading & Real Interactive Glassmorphic Buttons */}
          <div className="relative z-20 mt-6">
            <h3 className="text-[20px] sm:text-[22px] font-black text-white tracking-tight leading-tight mb-1 drop-shadow-md">
              Ready for Your Next Journey?
            </h3>
            <p className="text-[12px] text-white/90 mb-4 font-medium">
              Get a quote or speak with our team now.
            </p>

            {/* Real Interactive Action Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href={siteConfig.contact.phoneHref}
                className="btn-gradient-green text-white font-black text-[12px] px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-[0_6px_20px_rgba(42,170,69,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Call size={14} variant="Bold" />
                <span>Call Now</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/40 text-white font-black text-[12px] px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Messages1 size={14} variant="Bold" />
                <span>Get Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
