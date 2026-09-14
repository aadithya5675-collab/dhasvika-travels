"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Car, ArrowRight2, Routing } from "iconsax-react";

interface MetricStripProps {
  onCardClick?: (metricType: string) => void;
}

export const MetricStrip: React.FC<MetricStripProps> = ({ onCardClick }) => {
  return (
    <section className="relative z-20 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        
        {/* Card 1: 5+ Sedans */}
        <div
          onClick={() => onCardClick?.("fleet")}
          className="relative group h-[110px] sm:h-[118px] rounded-[22px] p-5 border border-white/90 shadow-[0_10px_30px_rgba(6,63,107,0.08)] hover:shadow-[0_16px_40px_rgba(6,63,107,0.14)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden"
        >
          {/* Scenic Background Texture with Ice-Blue Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/dhasvika/hero/hero_scenery_car_clean.jpg"
              alt="Background"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-left opacity-35 filter blur-[0.5px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-[#EEF8FB]/90 to-[#DFF7EF]/70 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 flex items-center gap-4">
            {/* Circular Gradient Icon Badge */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2AAA45] via-[#0B9E9A] to-[#063F6B] p-[2px] shadow-[0_6px_20px_rgba(42,170,69,0.35)] flex-shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2AAA45] to-[#063F6B] flex items-center justify-center text-white">
                <Car size={26} variant="Bold" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-[26px] sm:text-[28px] font-black text-dt-navy tracking-tight leading-none">
                  {siteConfig.fleetCount}
                </span>
              </div>
              <div className="w-10 h-[3px] bg-dt-green rounded-full mt-1.5 mb-1" />
              <p className="text-[13px] font-bold text-dt-blue tracking-tight">
                Premium. Spacious. Always Ready.
              </p>
            </div>
          </div>

          <div className="relative z-10 w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-dt-navy group-hover:bg-dt-ice group-hover:translate-x-0.5 transition-all">
            <ArrowRight2 size={16} variant="Linear" />
          </div>
        </div>

        {/* Card 2: ₹15 / km */}
        <div
          onClick={() => onCardClick?.("pricing")}
          className="relative group h-[110px] sm:h-[118px] rounded-[22px] p-5 border border-white/90 shadow-[0_10px_30px_rgba(6,63,107,0.08)] hover:shadow-[0_16px_40px_rgba(6,63,107,0.14)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/dhasvika/hero/hero_scenery_car_clean.jpg"
              alt="Background"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center opacity-35 filter blur-[0.5px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-[#EEF8FB]/90 to-[#DFF7EF]/70 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2AAA45] via-[#0B9E9A] to-[#063F6B] p-[2px] shadow-[0_6px_20px_rgba(11,158,154,0.35)] flex-shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0B9E9A] to-[#063F6B] flex items-center justify-center text-white">
                <span className="text-[24px] font-black leading-none">₹</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-[26px] sm:text-[28px] font-black text-dt-navy tracking-tight leading-none">
                  ₹{siteConfig.ratePerKm} / km
                </span>
              </div>
              <p className="text-[13px] font-bold text-dt-blue tracking-tight mt-1.5">
                Transparent &amp; Affordable
              </p>
            </div>
          </div>

          <div className="relative z-10 w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-dt-navy group-hover:bg-dt-ice group-hover:translate-x-0.5 transition-all">
            <ArrowRight2 size={16} variant="Linear" />
          </div>
        </div>

        {/* Card 3: Minimum Trip 130 km */}
        <div
          onClick={() => onCardClick?.("rules")}
          className="relative group h-[110px] sm:h-[118px] rounded-[22px] p-5 border border-white/90 shadow-[0_10px_30px_rgba(6,63,107,0.08)] hover:shadow-[0_16px_40px_rgba(6,63,107,0.14)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/dhasvika/hero/hero_scenery_car_clean.jpg"
              alt="Background"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-right opacity-35 filter blur-[0.5px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-[#EEF8FB]/90 to-[#DFF7EF]/70 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2AAA45] via-[#0B9E9A] to-[#063F6B] p-[2px] shadow-[0_6px_20px_rgba(6,63,107,0.35)] flex-shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2AAA45] to-[#075B8F] flex items-center justify-center text-white">
                <Routing size={26} variant="Bold" />
              </div>
            </div>

            <div>
              <span className="block text-[11px] font-black uppercase tracking-wider text-dt-navy leading-none">
                Minimum Trip
              </span>
              <div className="text-[26px] sm:text-[28px] font-black text-dt-navy tracking-tight leading-none mt-1">
                {siteConfig.minimumTripKm} km
              </div>
              <p className="text-[13px] font-bold text-dt-blue tracking-tight mt-1">
                Plan Longer. Explore More.
              </p>
            </div>
          </div>

          <div className="relative z-10 w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-dt-navy group-hover:bg-dt-ice group-hover:translate-x-0.5 transition-all">
            <ArrowRight2 size={16} variant="Linear" />
          </div>
        </div>
      </div>
    </section>
  );
};
