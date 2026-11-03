'use client';

import React from 'react';
import Image from 'next/image';
import { Trophy, CheckCircle, Shield, ArrowRight } from 'lucide-react';

export default function ShowcasesSection() {
  const showcaseFixtures = [
    {
      opponent: 'Fulham FC Academy',
      venue: 'Motspur Park Training Ground',
      ageGroups: 'U9, U11, U13 & U15',
      badge: 'Premier League Cat 1',
    },
    {
      opponent: 'Crystal Palace FC Youths',
      venue: 'Copers Cope Training Centre',
      ageGroups: 'U8, U10 & U12',
      badge: 'Premier League Cat 1',
    },
    {
      opponent: 'Charlton Athletic Academy',
      venue: 'Sparrows Lane Training Ground',
      ageGroups: 'U9, U12 & U14',
      badge: 'EFL Championship Cat 2',
    },
  ];

  return (
    <section id="showcases" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-navy-800">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Information */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 bg-white/10 text-gold-400 border border-white/20 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
                <Trophy className="w-3.5 h-3.5" />
                <span>Professional Academy Pathways</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-6">
                Elite Pro Club Showcase Fixtures
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Through our coaching director network and proven technical caliber, Tecnica FA Coaching squads regularly participate in organized showcase games against Category 1 &amp; 2 professional football club academies.
              </p>

              <div className="space-y-3 mb-8 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span>Direct exposure to Category 1 professional academy scouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span>Authentic academy match speeds, tactical formations, and intense physical tests</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span>Post-match video feedback to support individual development plans</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <span>Enquire About Showcase Trials</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

            {/* Right Column: Fixtures Stack & Youth Match Action Image */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Fixture Cards */}
              <div className="space-y-3">
                {showcaseFixtures.map((fixture, index) => (
                  <div
                    key={index}
                    className="bg-navy-900/90 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-gold-500/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-heading font-bold text-lg text-white">
                          vs {fixture.opponent}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400">
                        {fixture.venue} &bull; {fixture.ageGroups}
                      </p>
                    </div>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {fixture.badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Showcase Image Frame */}
              <div className="relative rounded-xl overflow-hidden h-44 w-full border border-white/10 shadow-lg">
                <Image
                  src="/assets/images/fulham_match_2.jpg"
                  alt="Tecnica FA players vs Fulham FC Academy match"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-heading font-bold text-gold-400 uppercase">
                  Motspur Park Fixture &bull; Fulham FC Academy
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

