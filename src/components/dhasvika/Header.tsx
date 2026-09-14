"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Call, ArrowRight, HambergerMenu, CloseCircle } from "iconsax-react";
import { motion } from "framer-motion";

interface HeaderProps {
  onOpenBookingModal: (prefill?: { from?: string; to?: string }) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = ["contact", "reviews", "routes", "fleet", "about", "home"];
      const scrollY = window.scrollY + 160;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(6,63,107,0.08)] py-2.5"
          : "bg-white py-3"
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center group cursor-pointer"
        >
          <div className="relative h-10 sm:h-11 w-48 sm:w-56 transition-transform group-hover:scale-[1.01]">
            <Image
              src="/assets/dhasvika/brand/dhasvika_logo_nav_transparent.png"
              alt={siteConfig.businessName}
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[14.5px] whitespace-nowrap">
          {siteConfig.navLinks.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative py-1.5 px-0.5 transition-colors select-none cursor-pointer ${
                  isActive
                    ? "text-dt-navy font-black"
                    : "text-[#063F6B] hover:text-dt-green font-bold"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-[3.5px] bg-dt-green rounded-full shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-5">
          {/* Phone Call Block */}
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
            aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
          >
            <div className="w-9 h-9 rounded-full bg-dt-mint border border-dt-green/20 flex items-center justify-center text-dt-green group-hover:bg-dt-green group-hover:text-white transition-all shadow-sm">
              <Call size={18} variant="Bold" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-black text-dt-navy tracking-tight group-hover:text-dt-blue transition-colors leading-tight">
                {siteConfig.contact.phoneDisplay}
              </span>
              <span className="text-[11px] font-semibold text-dt-muted leading-tight">
                Call Now
              </span>
            </div>
          </a>

          {/* Book a Ride CTA */}
          <button
            onClick={() => onOpenBookingModal()}
            className="btn-gradient-green text-white font-black text-[14px] px-6 py-2.5 rounded-full flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md"
          >
            <span>Book a Ride</span>
            <ArrowRight size={15} variant="Linear" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBookingModal()}
            className="btn-gradient-green text-white font-black text-xs px-3.5 py-2 rounded-full flex items-center gap-1.5"
          >
            <span>Book</span>
            <ArrowRight size={14} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-dt-navy rounded-lg hover:bg-dt-ice"
            aria-label="Toggle Navigation"
          >
            <HambergerMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-dt-muted">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-dt-muted hover:text-dt-navy"
            >
              <CloseCircle size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-3.5 mb-5 text-[15px]">
            {siteConfig.navLinks.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`py-1.5 font-semibold flex items-center justify-between cursor-pointer ${
                    isActive ? "text-dt-green font-bold" : "text-dt-navy hover:text-dt-teal"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-dt-green" />}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center gap-3 py-2 text-dt-navy font-bold"
            >
              <div className="w-8 h-8 rounded-full bg-dt-mint flex items-center justify-center text-dt-green">
                <Call size={16} variant="Bold" />
              </div>
              <span>{siteConfig.contact.phoneDisplay} (Call Now)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="btn-gradient-green text-white font-bold text-sm py-3 rounded-full text-center flex items-center justify-center gap-2"
            >
              <span>Book a Ride</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
