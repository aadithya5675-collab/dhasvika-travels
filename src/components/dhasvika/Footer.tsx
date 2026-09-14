"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Call, ArrowRight } from "iconsax-react";

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-7 pb-6 scroll-mt-24" id="contact">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo, Nav, Script Phrase, Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          
          {/* Logo */}
          <div className="relative h-10 w-48">
            <Image
              src="/assets/dhasvika/brand/dhasvika_logo_nav_transparent.png"
              alt={siteConfig.businessName}
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Nav Links */}
          <nav className="flex items-center justify-center gap-4 sm:gap-6 text-[13.5px] whitespace-nowrap">
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="font-semibold text-dt-blue hover:text-dt-navy transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Script Phrase with Green Brush Stroke Underline */}
          <div className="relative flex items-center gap-5">
            <div className="relative">
              <span className="font-script text-[25px] text-dt-blue font-bold tracking-normal inline-block -rotate-1">
                Making Every Mile Meaningful.
              </span>
              {/* Green curved brush underline stroke */}
              <svg
                className="absolute -bottom-2 right-0 w-44 h-3.5 text-dt-green"
                viewBox="0 0 180 14"
                fill="none"
              >
                <path
                  d="M4 11C45 4 120 2 176 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span className="hidden sm:inline-block text-slate-200 text-lg">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-dt-navy hover:bg-dt-blue text-white flex items-center justify-center shadow-sm transition-transform hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-dt-navy hover:bg-dt-blue text-white flex items-center justify-center shadow-sm transition-transform hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-dt-navy hover:bg-dt-blue text-white flex items-center justify-center shadow-sm transition-transform hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-dt-navy hover:bg-dt-blue text-white flex items-center justify-center shadow-sm transition-transform hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Agency Branding Credit: SaNeura Technologies */}
        <div className="mt-6 mb-5 p-4 sm:p-5 rounded-[20px] bg-gradient-to-r from-[#063F6B]/6 via-[#0B9E9A]/10 to-[#2AAA45]/8 border border-dt-blue/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#063F6B] via-[#0B9E9A] to-[#2AAA45] p-[2px] shadow-sm flex-shrink-0">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-dt-navy text-xs">
                ST
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-dt-blue">
                  Brand Strategy &amp; Website By
                </span>
                <span className="text-[14px] font-black text-dt-navy tracking-tight">
                  {siteConfig.agency.name}
                </span>
              </div>
              <p className="text-[12px] text-dt-muted font-medium mt-0.5">
                {siteConfig.agency.role} • Transforming businesses through high-impact digital experiences
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 flex-shrink-0">
            <a
              href={siteConfig.agency.phoneHref}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-dt-ice text-dt-navy font-bold text-[12px] border border-dt-blue/20 shadow-xs transition-all hover:scale-105"
              aria-label={`Call SaNeura Technologies at ${siteConfig.agency.phoneDisplay}`}
            >
              <Call size={14} variant="Bold" className="text-dt-green" />
              <span>Contact: {siteConfig.agency.phoneDisplay}</span>
            </a>

            <a
              href={siteConfig.agency.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-green text-white font-black text-[12px] px-4 py-2 rounded-full inline-flex items-center gap-1.5 shadow-sm transition-all hover:scale-105"
            >
              <span>Connect with Agency</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100 text-[12px] text-dt-muted font-medium">
          <p>© 2025 {siteConfig.businessName}. All rights reserved. • Powered by <span className="font-bold text-dt-navy">{siteConfig.agency.name}</span></p>
          <p className="font-extrabold text-dt-navy">{siteConfig.tagline}.</p>
        </div>
      </div>
    </footer>
  );
};
