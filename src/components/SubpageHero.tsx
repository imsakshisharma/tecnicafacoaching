'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface SubpageHeroProps {
  badge: string;
  title: string;
  highlightWord?: string;
  description: string;
  breadcrumbCurrent: string;
  bgImage?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function SubpageHero({
  badge,
  title,
  highlightWord,
  description,
  breadcrumbCurrent,
  bgImage = '/assets/images/hero_banner.jpg',
  ctaText = 'Book Free Assessment',
  ctaHref = '/contact',
}: SubpageHeroProps) {
  return (
    <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200 bg-slate-900">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Modern Football Gradient Wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-navy-950/70" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-navy-600/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 w-full">
        
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mb-6">
          <Link href="/" className="hover:text-gold-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-gold-400 font-semibold">{breadcrumbCurrent}</span>
        </div>

        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-gold-400 border border-white/20 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span>{badge}</span>
          </div>

          {/* Main Page Title */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05] mb-5">
            {title} {highlightWord && <span className="text-gold-400">{highlightWord}</span>}
          </h1>

          {/* Page Narrative */}
          <p className="text-sm sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal">
            {description}
          </p>

          {/* Action CTA */}
          {ctaText && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}

