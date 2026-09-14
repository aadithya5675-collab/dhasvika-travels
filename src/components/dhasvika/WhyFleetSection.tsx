"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  ShieldSecurity,
  Car,
  SearchNormal1,
  Award,
  ArrowRight,
  User,
} from "iconsax-react";

interface WhyFleetSectionProps {
  onOpenQuoteModal: () => void;
}

export const WhyFleetSection: React.FC<WhyFleetSectionProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section className="relative z-20 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 scroll-mt-24" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
        
        {/* Left Column: Why Choose Us (About) */}
        <div className="lg:col-span-5 bg-white/85 backdrop-blur-2xl rounded-[24px] p-6 sm:p-7 border border-white/90 shadow-[0_12px_36px_rgba(6,63,107,0.06)] flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            
            {/* Left Sub-column: Text & CTA */}
            <div className="sm:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-col mb-2">
                  <span className="text-[12px] font-extrabold uppercase tracking-wider text-dt-blue">
                    WHY CHOOSE US
                  </span>
                  <div className="w-8 h-[3px] bg-dt-green rounded-full mt-1" />
                </div>

                <h2 className="text-[20px] sm:text-[22px] font-black text-dt-navy leading-[1.25] mb-2.5 tracking-tight">
                  More Than Just a Ride, <br />
                  A Better Way to Travel.
                </h2>

                <p className="text-[12.5px] text-dt-muted leading-relaxed mb-6 font-normal">
                  <strong className="font-semibold text-dt-navy">DHASVIKA TRAVELS</strong> is built on trust, comfort and commitment. We go the extra mile to make your journey smooth, safe and memorable.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="btn-gradient-green text-white font-extrabold text-[13px] px-6 py-2.5 rounded-full inline-flex items-center gap-2 shadow-[0_6px_20px_rgba(42,170,69,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Sub-column: 4 Feature Items */}
            <div className="sm:col-span-6 sm:border-l sm:border-slate-100 sm:pl-5 flex flex-col justify-center gap-3.5">
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-dt-ice/90 backdrop-blur-sm border border-dt-blue/20 flex items-center justify-center text-dt-blue flex-shrink-0 shadow-xs">
                  <ShieldSecurity size={18} variant="Bold" />
                </div>
                <div>
                  <h3 className="text-[13px] font-extrabold text-dt-navy leading-tight">
                    Transparent Pricing
                  </h3>
                  <p className="text-[11px] text-dt-muted leading-tight mt-0.5">
                    No hidden charges
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-dt-ice/90 backdrop-blur-sm border border-dt-blue/20 flex items-center justify-center text-dt-blue flex-shrink-0 shadow-xs">
                  <Car size={18} variant="Bold" />
                </div>
                <div>
                  <h3 className="text-[13px] font-extrabold text-dt-navy leading-tight">
                    Well-Maintained Sedans
                  </h3>
                  <p className="text-[11px] text-dt-muted leading-tight mt-0.5">
                    Clean, comfortable &amp; reliable
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-dt-ice/90 backdrop-blur-sm border border-dt-blue/20 flex items-center justify-center text-dt-blue flex-shrink-0 shadow-xs">
                  <SearchNormal1 size={18} variant="Bold" />
                </div>
                <div>
                  <h3 className="text-[13px] font-extrabold text-dt-navy leading-tight">
                    Experienced Drivers
                  </h3>
                  <p className="text-[11px] text-dt-muted leading-tight mt-0.5">
                    Polite, professional &amp; local experts
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-dt-ice/90 backdrop-blur-sm border border-dt-blue/20 flex items-center justify-center text-dt-blue flex-shrink-0 shadow-xs">
                  <Award size={18} variant="Bold" />
                </div>
                <div>
                  <h3 className="text-[13px] font-extrabold text-dt-navy leading-tight">
                    24/7 Customer Support
                  </h3>
                  <p className="text-[11px] text-dt-muted leading-tight mt-0.5">
                    We&apos;re always here for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Our Fleet (~54% width -> 7 cols out of 12) */}
        <div id="fleet" className="lg:col-span-7 scroll-mt-24 bg-white/85 backdrop-blur-2xl rounded-[24px] p-6 sm:p-7 border border-white/90 shadow-[0_12px_36px_rgba(6,63,107,0.06)] flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex flex-col">
                <span className="text-[12px] font-extrabold uppercase tracking-wider text-dt-blue">
                  OUR FLEET
                </span>
                <div className="w-8 h-[3px] bg-dt-green rounded-full mt-1" />
              </div>
              <h2 className="text-[20px] sm:text-[22px] font-black text-dt-navy tracking-tight mt-1">
                Premium Sedans for Every Journey
              </h2>
            </div>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-dt-blue/40 text-dt-blue font-bold text-[12px] hover:bg-dt-ice/80 backdrop-blur-sm transition-colors cursor-pointer"
            >
              <span>View All Fleet</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* 3 Fleet Model Cards in One Row with Glassmorphism */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-2">
            {siteConfig.fleetPreview.map((fleet) => (
              <div
                key={fleet.id}
                className="group relative bg-white/75 hover:bg-white/95 backdrop-blur-xl rounded-[20px] p-3.5 border border-white/90 shadow-[0_6px_20px_rgba(6,63,107,0.05)] hover:shadow-[0_14px_32px_rgba(6,63,107,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Glassmorphic Highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-dt-teal/10 via-transparent to-transparent pointer-events-none rounded-tr-[20px]" />

                {/* Car Image Container with Studio Framing */}
                <div className="relative w-full aspect-[16/10] mb-2.5 rounded-[12px] overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-100 flex items-center justify-center shadow-inner">
                  <Image
                    src={fleet.image}
                    alt={fleet.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Model Title & Category Badge */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-[14px] font-black text-dt-navy tracking-tight">
                      {fleet.name}
                    </h3>
                    <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-dt-blue bg-dt-ice/90 backdrop-blur-sm px-1.5 py-0.5 rounded border border-dt-blue/15">
                      Sedan
                    </span>
                  </div>

                  {/* Glassmorphic Specs Bar */}
                  <div className="flex items-center justify-between text-[10.5px] font-bold text-dt-navy bg-slate-50/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-slate-100/80 shadow-xs whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      <User size={12} variant="Bold" className="text-dt-blue" />
                      <span>{fleet.seats}</span>
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="inline-flex items-center gap-1 text-dt-teal">
                      <svg
                        className="w-2.5 h-2.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a1 1 0 0 1 1 1v2.07a8.003 8.003 0 0 1 7 7.93h-2a6 6 0 0 0-5-5.91V10a1 1 0 0 1-2 0V7.09A6 6 0 0 0 6 13H4a8.003 8.003 0 0 1 7-7.93V3a1 1 0 0 1 1-1zm0 20a1 1 0 0 1-1-1v-2.07a8.003 8.003 0 0 1-7-7.93h2a6 6 0 0 0 5 5.91V14a1 1 0 0 1 2 0v2.91a6 6 0 0 0 5-5.91h2a8.003 8.003 0 0 1-7 7.93V21a1 1 0 0 1-1 1z" />
                      </svg>
                      <span>AC</span>
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-dt-navy font-bold">{fleet.feature}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
