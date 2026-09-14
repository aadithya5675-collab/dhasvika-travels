"use client";

import React, { useState } from "react";
import { Header } from "@/components/dhasvika/Header";
import { Hero } from "@/components/dhasvika/Hero";
import { BookingPanel } from "@/components/dhasvika/BookingPanel";
import { MetricStrip } from "@/components/dhasvika/MetricStrip";
import { WhyFleetSection } from "@/components/dhasvika/WhyFleetSection";
import { PopularRoutes } from "@/components/dhasvika/PopularRoutes";
import { ReviewsCtaSection } from "@/components/dhasvika/ReviewsCtaSection";
import { Footer } from "@/components/dhasvika/Footer";
import { BookingModal } from "@/components/dhasvika/BookingModal";
import { SmoothScroll } from "@/components/dhasvika/SmoothScroll";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState<{
    from?: string;
    to?: string;
    tripType?: string;
    date?: string;
    passengers?: string;
  }>({});

  const handleOpenBookingModal = (prefill?: {
    from?: string;
    to?: string;
    tripType?: string;
    date?: string;
    passengers?: string;
  }) => {
    if (prefill) {
      setModalPrefill(prefill);
    } else {
      setModalPrefill({ from: "Coimbatore" });
    }
    setModalOpen(true);
  };

  const handleSearchFromPanel = (data: {
    tripType: string;
    from: string;
    to: string;
    date: string;
    passengers: string;
  }) => {
    handleOpenBookingModal({
      tripType:
        data.tripType === "oneway"
          ? "One Way"
          : data.tripType === "roundtrip"
          ? "Round Trip"
          : "Airport Transfer",
      from: data.from,
      to: data.to,
      date: data.date,
      passengers: data.passengers,
    });
  };

  const handleSelectRoute = (from: string, to: string) => {
    handleOpenBookingModal({
      from,
      to,
      tripType: "One Way",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4FAFE]">
      {/* Global Smooth Scrolling via Lenis */}
      <SmoothScroll />

      {/* Navigation Header */}
      <Header onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Cinematic Hero */}
        <Hero />

        {/* Signature Booking Glass Panel (Overlaps Hero) */}
        <BookingPanel onSearch={handleSearchFromPanel} />

        {/* Three Business Metric Cards */}
        <MetricStrip
          onCardClick={(type) => {
            if (type === "pricing" || type === "rules") {
              handleOpenBookingModal();
            }
          }}
        />

        {/* Why Choose Us & Fleet Showcase Split Section */}
        <WhyFleetSection
          onOpenQuoteModal={() => handleOpenBookingModal()}
        />

        {/* Popular Routes Section */}
        <PopularRoutes onSelectRoute={handleSelectRoute} />

        {/* Customer Reviews & Journey CTA Section */}
        <ReviewsCtaSection
          onOpenQuoteModal={() => handleOpenBookingModal()}
        />
      </main>

      {/* Elegant Footer */}
      <Footer />

      {/* Interactive Booking & Quote Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefill={modalPrefill}
      />
    </div>
  );
}
