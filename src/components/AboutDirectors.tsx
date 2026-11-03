'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutDirectors() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Children in Coaching Clinic (CLEAN CARD, ZERO OVERLAPPING BADGES) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Main Action Photo Card */}
            <div className="bg-white rounded-3xl p-3 shadow-xl border-2 border-slate-200/90 overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 group">
                <Image
                  src="/assets/images/fulham_acad_6.jpg"
                  alt="Tecnica FA youth players in technical coaching clinic"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gold-500 text-navy-950 font-heading font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    Youth Technical Drill
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950/80 to-transparent" />
              </div>

              {/* Caption Bar BELOW the image with zero overlap */}
              <div className="p-4 pt-3">
                <h4 className="font-heading font-extrabold text-lg text-navy-950 uppercase tracking-tight">
                  High-Repetition Ball Manipulation
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Every player with a ball &bull; Licensed UEFA coaching supervision
                </p>
              </div>
            </div>

            {/* Director Credentials Card Positioned Neatly Below (NO OVERLAPPING BADGES) */}
            <div className="bg-navy-950 text-white rounded-2xl p-5 shadow-lg border border-navy-800 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-navy-900 text-gold-400 border border-navy-800 flex-shrink-0">
                <Award className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-base text-gold-400 uppercase tracking-wide mb-1">
                  UEFA B Coaching Leadership
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Coaching director Austin Berkley brings former professional football experience with Gillingham FC, Swindon Town &amp; Shrewsbury to elevate grassroots technical education.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Coaching Credentials & Ethos */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
            
            <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-900 border border-navy-200/60 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
              <span className="text-gold-500 font-black">/</span>
              <span>Our Coaching Leadership</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-6">
              Elite Coaching Ethos &amp; Proven Player Development
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Founded by former professional footballer <strong>Austin Berkley (UEFA B Licensed Director)</strong> and <strong>Warren Berkley (Head of Operations)</strong>, Tecnica FA Coaching Ltd provides dedicated, high-level technical football development for children and youth players across South London and Kent.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Unlike traditional grassroots clubs where match results often dictate session design, our specialized coaching setup is 100% focused on the technical growth, confidence, and creative expression of the individual young player.
            </p>

            {/* Badges - NO FA CHARTER */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-navy-950 text-sm uppercase">
                    UEFA B Licensed Direction
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Highest tier tactical and technical syllabus delivery.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-navy-950 text-sm uppercase">
                    Enhanced DBS &amp; Safeguarding
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    All staff fully vetted with comprehensive First Aid certification.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-heading font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-full shadow-md transition-all duration-200"
            >
              <span>Speak with Our Coaching Directors</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
