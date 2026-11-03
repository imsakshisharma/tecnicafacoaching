'use client';

import React from 'react';
import { BookOpen, Clock, Star, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';

interface SchoolCardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  checkpoints: string[];
}

const schoolCards: SchoolCardItem[] = [
  {
    icon: <BookOpen className="w-7 h-7 text-gold-400" />,
    title: 'Curriculum P.E. & PPA Cover',
    description: 'High-quality Physical Education lessons aligned with National Curriculum standards, planned and taught by fully qualified, DBS-checked UEFA/FA coaches.',
    checkpoints: [
      'Full termly lesson schemes of work',
      'Inclusive learning for all ability levels',
      'Reliable weekly teacher PPA cover',
      'Pupil assessment & progress reports',
    ],
  },
  {
    icon: <Clock className="w-7 h-7 text-gold-400" />,
    title: 'Breakfast & After-School Clubs',
    description: 'Energizing morning sessions and engaging after-school football clubs that boost school attendance, fitness, and team camaraderie.',
    checkpoints: [
      'Hassle-free online parent booking',
      'Healthy breakfast & active warm-ups',
      'End-of-term medals & certificates',
      'Zero administrative burden for staff',
    ],
  },
  {
    icon: <Star className="w-7 h-7 text-gold-400" />,
    title: 'School Teams & Tournaments',
    description: 'Tactical preparation for inter-school cups, friendly fixtures, and borough tournaments, instilling tactical teamwork and sportsmanship.',
    checkpoints: [
      'School team squad coaching',
      'Match day management & refereeing',
      'Hosting local school mini-festivals',
      'Teacher CPD & coaching workshops',
    ],
  },
];

export default function SchoolsSection() {
  return (
    <section id="schools" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-900 border border-navy-200/80 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <span className="text-gold-500 font-black">/</span>
            <span>Educational Partnerships</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-4">
            Schools Coaching &amp; P.E. Delivery
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Tecnica FA Coaching Ltd partners with Primary and Secondary schools across West Wickham, Bromley, and Beckenham to deliver inspiring P.E. lessons, reliable PPA cover, and active school clubs.
          </p>
        </div>

        {/* 3 Prominent Cards Matching User's Screenshot In Clean Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {schoolCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border-2 border-slate-200/80 shadow-md hover:shadow-xl hover:border-navy-900 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Top Squircle Icon Box (Deep Navy with Gold Icon outline) */}
              <div className="w-16 h-16 rounded-2xl bg-navy-950 text-gold-400 border border-navy-800 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 group-hover:border-gold-500/50 transition-all">
                {card.icon}
              </div>

              {/* Bold Athletic Title */}
              <h3 className="font-heading font-extrabold text-2xl text-navy-950 uppercase tracking-tight mb-3">
                {card.title}
              </h3>

              {/* Narrative Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow font-normal">
                {card.description}
              </p>

              {/* Gold Checkpoint List (Exact copy & layout from client screenshot) */}
              <ul className="space-y-3 pt-5 border-t border-slate-100 text-xs sm:text-sm text-slate-800">
                {card.checkpoints.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-gold-500 font-bold text-base leading-none select-none">
                      ✓
                    </span>
                    <span className="font-medium text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Headteacher & P.E. Coordinator Proposal Callout Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-navy-800">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-gold-400 font-heading font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>DBS Enhanced &bull; Safeguarding Certified Coaches</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              Are You a School Headteacher or P.E. Coordinator?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We offer free trial taster sessions at your school, customized PPA schemes of work, and flexible termly billing. Contact Warren Berkley directly for our School Partnership Proposal Pack.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href="tel:07456528812"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3.5 rounded-full border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>07456 528 812</span>
            </a>

            <a
              href="#contact?session=Schools+Proposal"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>Request School Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
