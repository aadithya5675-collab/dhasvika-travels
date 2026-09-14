"use client";

import React from "react";
import Image from "next/image";
import { ShieldTick, Profile2User, Car, Location } from "iconsax-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-2 pb-16 sm:pb-20 overflow-visible" id="home">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Container Card */}
        <div className="relative w-full min-h-[520px] sm:min-h-0 sm:h-[490px] lg:h-[510px] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-[0_25px_70px_rgba(6,63,107,0.22)] border border-white/60">
          
          {/* Layer 1: Clean, High-Resolution 8K Scenic Artwork */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/dhasvika/hero/hero_scenery_car_clean.jpg"
              alt="Dhasvika Travels Scenic Mountain Road and White Sedan"
              fill
              priority
              className="object-cover object-[75%_center] lg:object-[82%_center]"
            />
          </div>

          {/* Layer 2: Left Readability Gradient Scrim */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#063F6B] from-0% via-[#063F6B] via-[36%] md:via-[42%] to-transparent md:to-[68%]" />
          <div className="absolute bottom-0 left-0 w-full sm:w-[58%] h-48 z-10 bg-gradient-to-t from-[#063F6B] via-[#063F6B]/90 to-transparent pointer-events-none" />

          {/* Layer 3: Sunbeam & Atmospheric Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FFA800]/15 rounded-full blur-3xl pointer-events-none z-10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-dt-teal/15 rounded-full blur-3xl pointer-events-none z-10" />

          {/* Layer 4: Top-Right Glassmorphic Badge */}
          <div className="hidden md:flex absolute top-6 right-8 z-20 items-center gap-3 px-4 py-2.5 rounded-[18px] bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-white/25 transition-all">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2AAA45] to-[#0B9E9A] flex items-center justify-center text-white shadow-sm flex-shrink-0">
              <Location size={18} variant="Bold" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider leading-tight">
                Explore
              </span>
              <span className="text-[12.5px] font-black text-white leading-tight">
                Incredible India With Us
              </span>
            </div>
          </div>

          {/* Layer 5: Decorative Script Phrases */}
          {/* Middle lake cursive */}
          <div className="hidden xl:block absolute top-28 left-[42%] z-20 -rotate-12 pointer-events-none">
            <span className="font-script text-[30px] text-white/90 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] tracking-wide">
              Good Journeys <br />
              <span className="text-[#66C83D] ml-4">Brighter Stories</span>
            </span>
          </div>

          {/* Far right cursive */}
          <div className="hidden lg:block absolute bottom-28 right-6 z-20 rotate-[-16deg] pointer-events-none">
            <span className="font-script text-[26px] text-white/85 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] leading-tight block text-right">
              Different Places <br />
              <span className="text-[#66C83D]">Same Great Journeys</span>
            </span>
          </div>

          {/* Layer 6: Semantic Left Content with Glassmorphic Elements */}
          <div className="relative z-20 h-full flex flex-col justify-center px-5 sm:px-10 lg:px-14 py-7 sm:py-10 max-w-2xl lg:max-w-[650px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10.5px] sm:text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#A6EAD2] drop-shadow-sm">
                TRAVEL MORE • EXPLORE FURTHER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[30px] sm:text-[46px] lg:text-[54px] font-black text-white tracking-tight leading-[1.08] mb-2 drop-shadow-md">
              JOURNEYS BEYOND <br />
              <span className="text-gradient-lime font-black">BOUNDARIES</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-[15px] sm:text-[18px] lg:text-[19px] font-bold text-white mb-2 tracking-tight">
              Comfortable Rides. Memorable Journeys.
            </h2>

            {/* Description */}
            <p className="text-[12px] sm:text-[13.5px] text-white/90 leading-relaxed font-normal mb-5 sm:mb-7 max-w-[500px]">
              At <strong className="font-bold text-white">DHASVIKA TRAVELS</strong>, we make every journey a pleasant experience. Safe rides, transparent pricing and reliable sedans for your every destination.
            </p>

            {/* Trust Row - 3 Glassmorphic Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1 max-w-[600px]">
              {/* Badge 1: Safe & Secure */}
              <div className="group flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-md hover:bg-white/15 transition-all">
                <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#2AAA45] to-[#0B9E9A] p-[1.5px] shadow-[0_4px_14px_rgba(42,170,69,0.5)] flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2AAA45] to-[#0B9E9A] flex items-center justify-center text-white">
                    <ShieldTick size={18} variant="Bold" className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[12px] sm:text-[13px] font-bold text-white leading-tight">
                    Safe &amp; Secure
                  </h3>
                  <p className="text-[10px] sm:text-[10.5px] text-white/80 leading-tight mt-0.5">
                    Your safety, our priority
                  </p>
                </div>
              </div>

              {/* Badge 2: Professional Drivers */}
              <div className="group flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-md hover:bg-white/15 transition-all">
                <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#2AAA45] to-[#0B9E9A] p-[1.5px] shadow-[0_4px_14px_rgba(42,170,69,0.5)] flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2AAA45] to-[#0B9E9A] flex items-center justify-center text-white">
                    <Profile2User size={18} variant="Bold" className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[12px] sm:text-[13px] font-bold text-white leading-tight">
                    Professional Drivers
                  </h3>
                  <p className="text-[10px] sm:text-[10.5px] text-white/80 leading-tight mt-0.5">
                    Polite, experienced &amp; trusted
                  </p>
                </div>
              </div>

              {/* Badge 3: Clean & Comfortable */}
              <div className="group flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-md hover:bg-white/15 transition-all">
                <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#2AAA45] to-[#0B9E9A] p-[1.5px] shadow-[0_4px_14px_rgba(42,170,69,0.5)] flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2AAA45] to-[#0B9E9A] flex items-center justify-center text-white">
                    <Car size={18} variant="Bold" className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[12px] sm:text-[13px] font-bold text-white leading-tight">
                    Clean &amp; Comfortable
                  </h3>
                  <p className="text-[10px] sm:text-[10.5px] text-white/80 leading-tight mt-0.5">
                    Well-maintained sedans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
