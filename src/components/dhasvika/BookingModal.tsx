"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import {
  CloseCircle,
  Location,
  Calendar1,
  User,
  Call,
  Messages1,
  Routing,
  InfoCircle,
  ShieldTick,
} from "iconsax-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    from?: string;
    to?: string;
    tripType?: string;
    date?: string;
    passengers?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefill,
}) => {
  const [fromLocation, setFromLocation] = useState(prefill?.from || "Coimbatore");
  const [toLocation, setToLocation] = useState(prefill?.to || "");
  const [tripType, setTripType] = useState(prefill?.tripType || "One Way");
  const [date, setDate] = useState(prefill?.date || "");
  const [passengers, setPassengers] = useState(prefill?.passengers || "1 Passenger");
  const [userDistanceKm, setUserDistanceKm] = useState<string>("");

  useEffect(() => {
    if (prefill) {
      if (prefill.from) setFromLocation(prefill.from);
      if (prefill.to) setToLocation(prefill.to);
      if (prefill.tripType) setTripType(prefill.tripType);
      if (prefill.date) setDate(prefill.date);
      if (prefill.passengers) setPassengers(prefill.passengers);
    }
  }, [prefill]);

  if (!isOpen) return null;

  // Calculate fare only if user explicitly provides verified distance
  const distanceNum = parseFloat(userDistanceKm);
  const hasValidDistance = !isNaN(distanceNum) && distanceNum > 0;
  const billableKm = hasValidDistance
    ? Math.max(distanceNum, siteConfig.minimumTripKm)
    : null;
  const estimatedFare = billableKm ? billableKm * siteConfig.ratePerKm : null;

  const handleWhatsAppInquiry = () => {
    const text = `Hello DHASVIKA TRAVELS,\n\nI would like to book/inquire about a ride:\n- From: ${fromLocation || "Not specified"}\n- To: ${toLocation || "Not specified"}\n- Trip Type: ${tripType}\n- Date: ${date || "Flexible"}\n- Passengers: ${passengers}${hasValidDistance ? `\n- Approximate Distance: ${distanceNum} km` : ""}\n\nPlease share availability and quote. Thank you!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919876543210?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-dt-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-7 shadow-2xl border border-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-dt-green">
              DHASVIKA TRAVELS • INSTANT BOOKING
            </span>
            <h3 className="text-[20px] font-black text-dt-navy tracking-tight mt-0.5">
              Book Your Journey
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-dt-muted hover:text-dt-navy transition-colors p-1"
            aria-label="Close modal"
          >
            <CloseCircle size={24} />
          </button>
        </div>

        {/* Pricing Notice */}
        <div className="bg-[#EEF8FB] border border-[#DFF7EF] rounded-[14px] p-3.5 my-4 flex items-start gap-2.5">
          <ShieldTick size={20} variant="Bold" className="text-dt-green flex-shrink-0 mt-0.5" />
          <div className="text-[12px] text-dt-navy">
            <span className="font-extrabold text-dt-blue">Transparent Pricing Policy:</span> Flat ₹{siteConfig.ratePerKm}/km for all sedans.{" "}
            <span className="font-bold text-dt-navy">Minimum trip rule is {siteConfig.minimumTripKm} km</span> per booking.
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          {/* Pickup & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-slate-200">
              <label className="flex items-center gap-1.5 text-[11px] font-semibold text-dt-muted mb-1">
                <Location size={14} className="text-dt-teal" />
                Pickup Location
              </label>
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                placeholder="City or Address"
                className="w-full text-xs font-bold text-dt-navy bg-transparent focus:outline-none"
              />
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-slate-200">
              <label className="flex items-center gap-1.5 text-[11px] font-semibold text-dt-muted mb-1">
                <Location size={14} className="text-dt-blue" />
                Drop Location
              </label>
              <input
                type="text"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                placeholder="Destination City"
                className="w-full text-xs font-bold text-dt-navy bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Date & Trip Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-slate-200">
              <label className="flex items-center gap-1.5 text-[11px] font-semibold text-dt-muted mb-1">
                <Calendar1 size={14} className="text-dt-blue" />
                Travel Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-xs font-bold text-dt-navy bg-transparent focus:outline-none cursor-pointer"
              />
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-slate-200">
              <label className="flex items-center gap-1.5 text-[11px] font-semibold text-dt-muted mb-1">
                <User size={14} className="text-dt-blue" />
                Trip Type &amp; Passengers
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full text-xs font-bold text-dt-navy bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="1 Passenger">1 Passenger</option>
                <option value="2 Passengers">2 Passengers</option>
                <option value="3 Passengers">3 Passengers</option>
                <option value="4 Passengers">4 Passengers</option>
              </select>
            </div>
          </div>

          {/* Optional Distance field for explicit fare estimation */}
          <div className="bg-[#F8FAFC] rounded-xl p-2.5 border border-slate-200">
            <label className="flex items-center justify-between text-[11px] font-semibold text-dt-muted mb-1">
              <span className="flex items-center gap-1.5">
                <Routing size={14} className="text-dt-green" />
                Approx. Distance in KM (Optional)
              </span>
              <span className="text-[10px] text-dt-muted">For instant estimate</span>
            </label>
            <input
              type="number"
              value={userDistanceKm}
              onChange={(e) => setUserDistanceKm(e.target.value)}
              placeholder="e.g. 150"
              className="w-full text-xs font-bold text-dt-navy bg-transparent focus:outline-none"
              min="1"
            />
          </div>

          {/* Calculated Fare or Pricing Terms */}
          {hasValidDistance ? (
            <div className="bg-dt-mint/50 border border-dt-green/30 rounded-xl p-3 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-dt-navy font-semibold block">
                  Estimated Fare ({billableKm} km billable @ ₹15/km):
                </span>
                {distanceNum < 130 && (
                  <span className="text-[10px] text-dt-muted block">
                    (Applied minimum trip rule of 130 km)
                  </span>
                )}
              </div>
              <span className="text-[20px] font-black text-dt-green">
                ₹{estimatedFare?.toLocaleString()}
              </span>
            </div>
          ) : (
            <div className="text-[11px] text-dt-muted flex items-center gap-1.5 py-1">
              <InfoCircle size={14} className="flex-shrink-0" />
              <span>Exact fare calculated based on verified odometer reading at ₹15/km (min 130 km).</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="btn-gradient-green text-white font-extrabold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Messages1 size={16} variant="Bold" />
            <span>Inquire on WhatsApp</span>
          </button>

          <a
            href={siteConfig.contact.phoneHref}
            className="bg-dt-navy hover:bg-dt-blue text-white font-extrabold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center cursor-pointer"
          >
            <Call size={16} variant="Bold" />
            <span>Call {siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
