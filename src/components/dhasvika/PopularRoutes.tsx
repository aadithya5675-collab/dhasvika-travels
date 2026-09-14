"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowRight, Clock } from "iconsax-react";

interface PopularRoutesProps {
  onSelectRoute: (from: string, to: string) => void;
}

export const PopularRoutes: React.FC<PopularRoutesProps> = ({ onSelectRoute }) => {
  return (
    <section className="relative z-20 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 scroll-mt-24" id="routes">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
        <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
          <div className="flex flex-col">
            <span className="text-[12px] font-black uppercase tracking-wider text-dt-blue">
              POPULAR ROUTES
            </span>
            <div className="w-8 h-[3px] bg-dt-green rounded-full mt-1" />
          </div>
          <span className="text-[14px] sm:text-[16px] font-extrabold text-dt-navy tracking-tight">
            Explore Top Destinations with <span className="font-black text-dt-navy">DHASVIKA TRAVELS</span>
          </span>
        </div>

        <a
          href="#routes"
          className="inline-flex items-center gap-1.5 text-dt-blue hover:text-dt-navy font-bold text-[12px] transition-colors"
        >
          <span>View All Routes</span>
          <ArrowRight size={13} />
        </a>
      </div>

      {/* 5 Route Cards in One Desktop Row with Glassmorphism Overlays */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
        {siteConfig.routes.map((route) => (
          <button
            key={route.id}
            type="button"
            onClick={() => onSelectRoute(route.from, route.to)}
            aria-label={`${route.from} to ${route.to}, Duration: ${route.duration}, Category: ${route.category}`}
            className="group relative w-full aspect-[220/132] sm:aspect-[225/135] rounded-[20px] overflow-hidden border border-white/80 shadow-[0_8px_24px_rgba(6,63,107,0.08)] hover:shadow-[0_16px_36px_rgba(6,63,107,0.2)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-dt-blue text-left flex flex-col justify-between p-2.5 sm:p-3"
          >
            {/* Background 8K Scenic Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={route.image}
                alt={`${route.from} to ${route.to}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Soft Ambient Vignette for Superior Text Legibility */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

            {/* Top-Left Glassmorphic Badge */}
            <div className="relative z-20 self-start bg-white/85 group-hover:bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-[12px] border border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-colors">
              <div className="text-[12px] sm:text-[12.5px] font-black text-dt-navy tracking-tight leading-tight flex items-center gap-1">
                <span>{route.from}</span>
                <span className="text-dt-teal">→</span>
                <span>{route.to}</span>
              </div>
              <div className="flex items-center gap-1 text-[10.5px] font-bold text-dt-blue mt-0.5">
                <Clock size={11} variant="Bold" className="text-dt-blue flex-shrink-0" />
                <span>{route.duration}</span>
              </div>
            </div>

            {/* Bottom Row: Category Pill & Floating Glass Circular Arrow */}
            <div className="relative z-20 flex items-center justify-between w-full mt-auto pt-2">
              <span className="bg-black/40 backdrop-blur-md text-white/95 font-extrabold text-[9px] px-2 py-0.5 rounded-full border border-white/20 tracking-tight">
                {route.category}
              </span>

              <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-white/90 group-hover:bg-dt-green backdrop-blur-md border border-white text-dt-blue group-hover:text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <ArrowRight size={13} variant="Linear" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

