'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Trophy, Flame, Shield, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[680px] lg:min-h-[760px] flex items-center overflow-hidden border-b border-slate-200 bg-slate-900">
      
      {/* 1. Full-Bleed Background Pitch Image with Pro Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero_banner.jpg"
          alt="Tecnica FA Coaching floodlit pitch"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        
        {/* Modern Football Site Gradient: Clean white/slate fade on left for 100% text contrast, rich atmosphere on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white/95 to-slate-900/60 lg:via-white/90 lg:to-slate-950/70" />
        
        {/* Subtle athletic diagonal light ray */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 pointer-events-none" />
      </div>

      {/* Ambient Glow Accents */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-navy-600/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* 2. Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Dynamic Football Typography & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Athletic Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-navy-900 text-white border border-navy-800 shadow-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
              <span>Youth Technical Development &bull; Ages 4&ndash;16</span>
            </div>

            {/* Bold Football Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-navy-950 uppercase tracking-tight leading-[1.02] mb-6">
              Master The Ball. <br />
              <span className="text-navy-900">Dominate The Game.</span>
            </h1>

            {/* Sub-headline with gold highlight */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-0.5 w-8 bg-gold-500 inline-block" />
              <p className="font-heading font-bold text-lg sm:text-xl text-navy-800 uppercase tracking-wide">
                Specialized Dutch Coerver Coaching &bull; South London &amp; Kent
              </p>
            </div>

            {/* Narrative Body */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl font-normal">
              Accelerate your child&apos;s 1v1 confidence, speed of footwork, and tactical intelligence through our weekly midweek 3G academy hubs, Brazilian indoor futsal clinics, and pro club showcases vs Fulham FC &amp; Crystal Palace.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-heading font-extrabold text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Book Free Assessment Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-navy-950 border-2 border-navy-900/40 font-heading font-bold text-base uppercase tracking-wider px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>View 6 Programs</span>
              </a>
            </div>

            {/* Value Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-300 w-full text-xs sm:text-sm text-slate-800 font-semibold">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Dutch Coerver Method</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>UEFA B Leadership</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Pro Club Showcases</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Indoor Brazilian Futsal</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Schools Curriculum PPA</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Bromley &amp; Beckenham</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Pro Football Showcase (NO OVERLAPPING BADGES) (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              
              {/* Main Match Action Showcase Card */}
              <div className="bg-white rounded-3xl p-3 shadow-2xl border-2 border-slate-200/90 overflow-hidden">
                
                {/* Photo Frame with Clean Pro Header */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-slate-900 group">
                  <Image
                    src="/assets/images/fulham_match_1.jpg"
                    alt="Tecnica FA youth players in action against Fulham FC Academy"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Subtle top bar inside photo */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-gold-500 text-navy-950 font-heading font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      Pro Club Showcase
                    </span>
                    <span className="bg-navy-950/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/20">
                      Motspur Park
                    </span>
                  </div>

                  {/* Gradient bottom bar */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
                </div>

                {/* Structured Info Bar BELOW the photo (NO OVERLAPPING CLUTTER) */}
                <div className="p-4 pt-3 bg-white">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-navy-950 uppercase tracking-tight">
                      Tecnica FA Squad vs Fulham FC Academy
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-navy-700" />
                    <span>Motspur Park &bull; Competitive Cat 1 Fixture Experience</span>
                  </p>
                </div>

              </div>

              {/* Clean Twin Feature Cards Below Photo (Zero Overlap, Pro Aesthetics) */}
              <div className="grid grid-cols-2 gap-3">
                
                <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-md flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center font-bold flex-shrink-0">
                    <Flame className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-navy-950 text-base uppercase leading-none">
                      1,000+ Touches
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">
                      Per Coerver technical clinic
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-md flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-navy-950 text-base uppercase leading-none">
                      Cat 1 Pathways
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">
                      Fulham, Palace &amp; Charlton
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
