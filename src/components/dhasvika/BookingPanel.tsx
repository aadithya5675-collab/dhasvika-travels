"use client";

import React, { useState, useRef } from "react";
import { siteConfig } from "@/config/site";
import {
  Location,
  Calendar1,
  User,
  SearchNormal1,
  ArrowSwapHorizontal,
  ArrowRight,
  Airplane,
} from "iconsax-react";

interface BookingPanelProps {
  onSearch: (data: {
    tripType: string;
    from: string;
    to: string;
    date: string;
    passengers: string;
  }) => void;
}

export const BookingPanel: React.FC<BookingPanelProps> = ({ onSearch }) => {
  const [tripType, setTripType] = useState<"oneway" | "roundtrip" | "airport">("oneway");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [passengers, setPassengers] = useState("1 Passenger");
  const [showPassengerMenu, setShowPassengerMenu] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleSwap = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const handleRouteChipClick = (destination: string) => {
    setFromLocation("Coimbatore");
    setToLocation(destination);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      tripType,
      from: fromLocation || "Coimbatore",
      to: toLocation,
      date: travelDate,
      passengers,
    });
  };

  return (
    <div className="relative z-30 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-20 lg:-mt-24 mb-10">
      <div className="rounded-[22px] sm:rounded-[30px] p-4 sm:p-7 bg-gradient-to-br from-[#075B8F]/88 via-[#0B9E9A]/82 to-[#063F6B]/92 backdrop-blur-2xl border-[1.5px] border-white/45 shadow-[0_26px_65px_rgba(3,66,108,0.32),inset_0_1px_2px_rgba(255,255,255,0.6)] relative overflow-visible">
        
        {/* Subtle Decorative Ambient Backlights */}
        <div className="absolute top-0 right-1/4 w-80 h-32 bg-white/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-32 bg-dt-mint/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Row: Tabs on Left, Smart Branding + Cursive Script on Right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          {/* Trip Type Tabs Capsule */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#063F6B]/40 backdrop-blur-xl border border-white/35 self-start max-w-full overflow-x-auto scrollbar-none shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]">
            <button
              type="button"
              onClick={() => setTripType("oneway")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[14px] font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                tripType === "oneway"
                  ? "bg-white text-dt-blue shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <span>One Way</span>
              <ArrowRight size={14} />
            </button>

            <button
              type="button"
              onClick={() => setTripType("roundtrip")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                tripType === "roundtrip"
                  ? "bg-white text-dt-blue shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <ArrowSwapHorizontal size={15} />
              <span>Round Trip</span>
            </button>

            <span className="text-white/30 text-xs mx-0.5">|</span>

            <button
              type="button"
              onClick={() => setTripType("airport")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                tripType === "airport"
                  ? "bg-white text-dt-blue shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <Airplane size={15} />
              <span>Airport Transfer</span>
            </button>
          </div>

          {/* Right Smart Travel Badge & Script Phrase with Green Arrow */}
          <div className="hidden lg:flex items-center gap-6 self-end pb-1 relative">
            <div className="flex items-center gap-2.5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
                <path d="M6 5h10" />
                <path d="M8 3v2" />
                <path d="M14 3v2" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] tracking-[0.16em] uppercase font-bold text-white/80 leading-tight">
                  TRAVEL SMART
                </span>
                <span className="text-[13px] font-black tracking-wider uppercase text-white leading-tight">
                  TRAVEL DHASVIKA
                </span>
              </div>
            </div>

            <div className="relative pl-1">
              <span className="font-script text-[23px] text-white font-bold whitespace-nowrap drop-shadow-sm -rotate-2 inline-block">
                Your Next Journey Starts Here
              </span>
              {/* Curved green arrow pointing downwards to Search Rides button */}
              <svg
                className="absolute -bottom-7 right-4 w-12 h-8 text-[#66C83D] stroke-current fill-none pointer-events-none"
                viewBox="0 0 44 26"
              >
                <path
                  d="M4,4 Q26,22 40,14"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M32,10 L40,14 L34,22"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Form Inputs Row */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-2.5 items-center">
            
            {/* Field 1: From */}
            <div className="lg:col-span-3 relative">
              <div className="bg-white rounded-[16px] p-3 flex items-center gap-3 shadow-sm border border-slate-100 hover:border-dt-teal/50 transition-colors h-[64px]">
                <div className="text-[#0B9E9A] flex-shrink-0">
                  <Location size={22} variant="Bold" />
                </div>
                <div className="flex-1 min-w-0 pr-6">
                  <label className="block text-[11px] font-medium text-dt-muted leading-tight">
                    From
                  </label>
                  <input
                    type="text"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    placeholder="Enter pickup location"
                    className="w-full text-[14px] font-bold text-dt-navy focus:outline-none placeholder:text-slate-400 bg-transparent truncate"
                  />
                </div>
              </div>

              {/* Floating Circular Swap Button Between From & To (Desktop) */}
              <button
                type="button"
                onClick={handleSwap}
                title="Swap Locations"
                className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white text-dt-blue border border-dt-blue/20 shadow-md items-center justify-center hover:rotate-180 hover:bg-dt-ice transition-all duration-200 cursor-pointer"
              >
                <ArrowSwapHorizontal size={14} />
              </button>
            </div>

            {/* Mobile Swap Button Between From & To */}
            <div className="flex sm:hidden justify-center -my-1.5 relative z-10">
              <button
                type="button"
                onClick={handleSwap}
                title="Swap Locations"
                className="w-7 h-7 rounded-full bg-white text-dt-blue border border-dt-blue/20 shadow-md flex items-center justify-center hover:rotate-180 hover:bg-dt-ice transition-all duration-200 cursor-pointer"
              >
                <ArrowSwapHorizontal size={13} />
              </button>
            </div>

            {/* Field 2: To */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-[16px] p-3 flex items-center gap-3 shadow-sm border border-slate-100 hover:border-dt-teal/50 transition-colors h-[64px]">
                <div className="text-dt-blue flex-shrink-0">
                  <Location size={22} variant="Bold" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[11px] font-medium text-dt-muted leading-tight">
                    To
                  </label>
                  <input
                    type="text"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    placeholder="Enter drop location"
                    className="w-full text-[14px] font-bold text-dt-navy focus:outline-none placeholder:text-slate-400 bg-transparent truncate"
                  />
                </div>
              </div>
            </div>

            {/* Field 3: Travel Date */}
            <div className="lg:col-span-2">
              <div
                onClick={() => dateInputRef.current?.showPicker?.()}
                className="bg-white rounded-[16px] p-3 flex items-center gap-3 shadow-sm border border-slate-100 hover:border-dt-teal/50 transition-colors cursor-pointer h-[64px] relative"
              >
                <div className="text-dt-blue flex-shrink-0">
                  <Calendar1 size={22} variant="Bold" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[11px] font-medium text-dt-muted leading-tight">
                    Travel Date
                  </label>
                  <div className="text-[14px] font-bold text-dt-navy truncate">
                    {travelDate || (
                      <span className="text-slate-400 font-normal">Select date</span>
                    )}
                  </div>
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Field 4: Passengers */}
            <div className="lg:col-span-2 relative">
              <div
                onClick={() => setShowPassengerMenu(!showPassengerMenu)}
                className="bg-white rounded-[16px] p-3 flex items-center gap-3 shadow-sm border border-slate-100 hover:border-dt-teal/50 transition-colors cursor-pointer h-[64px]"
              >
                <div className="text-dt-blue flex-shrink-0">
                  <User size={22} variant="Bold" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[11px] font-medium text-dt-muted leading-tight">
                    Passengers
                  </label>
                  <div className="text-[14px] font-bold text-dt-navy truncate flex items-center justify-between">
                    <span>{passengers}</span>
                    <svg
                      className="w-3.5 h-3.5 text-dt-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Passenger Dropdown */}
              {showPassengerMenu && (
                <div className="absolute top-full mt-1 left-0 right-0 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-30">
                  {["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers"].map(
                    (p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setPassengers(p);
                          setShowPassengerMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-bold text-dt-navy hover:bg-dt-ice transition-colors"
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Field 5: Search Rides Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full h-[64px] btn-gradient-green text-white font-black text-[15px] rounded-full flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(42,170,69,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <SearchNormal1 size={19} variant="Linear" />
                <span>Search Rides</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </form>

        {/* Bottom Quick Select Route Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-nowrap sm:flex-wrap mt-4 sm:mt-5 pt-1 text-xs">
          <span className="font-extrabold text-white tracking-tight mr-1 text-[13px] drop-shadow-sm whitespace-nowrap">
            Popular Routes:
          </span>
          {siteConfig.routes.map((route) => (
            <button
              key={route.id}
              type="button"
              onClick={() => handleRouteChipClick(route.to)}
              className="bg-white/90 hover:bg-white text-dt-blue font-bold px-3 py-1.5 rounded-full border border-white/80 shadow-sm transition-all hover:scale-105 hover:text-dt-navy hover:shadow cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              {route.from} → {route.to}
            </button>
          ))}
          <a
            href="#routes"
            className="bg-white/75 hover:bg-white text-dt-navy font-black px-3 py-1.5 rounded-full border border-white/70 transition-all hover:scale-105 flex items-center gap-1 cursor-pointer whitespace-nowrap flex-shrink-0"
          >
            <span>More Routes</span>
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
