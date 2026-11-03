'use client';

import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Trophy, ThumbsUp, Sparkles, MapPin } from 'lucide-react';

interface TestimonialCard {
  id: string;
  parentName: string;
  playerInfo: string;
  hubLocation: string;
  focusArea: string;
  quote: string;
  improvementTag: string;
  rating: number;
  highlight?: boolean;
}

const testimonials: TestimonialCard[] = [
  {
    id: '1',
    parentName: 'Sarah Jenkins',
    playerInfo: 'Parent of Leo (Age 9, Midfielder)',
    hubLocation: 'West Wickham Hub',
    focusArea: 'Academy Technical Hub',
    quote: 'Leo joined Tecnica FA Coaching 14 months ago lacking confidence on his weak left foot. The individual mechanics and Dutch Coerver drills delivered by Austin and Warren have been transformational. He now plays with tremendous composure, quick turns, and two-footed flair.',
    improvementTag: 'Weak Foot & 1v1 Confidence',
    rating: 5,
    highlight: true,
  },
  {
    id: '2',
    parentName: 'David Reynolds',
    playerInfo: 'Parent of Harry (Age 11, Winger)',
    hubLocation: 'Bromley Bishop Justus 3G',
    focusArea: 'Futsal & Academy Hub',
    quote: 'The indoor Brazilian futsal clinics are the best coaching we have found in South London. Using the low-bounce ball has forced Harry to think faster and rely on close manipulation with the sole of his foot. The coaching standard is truly professional academy level.',
    improvementTag: 'Sole Manipulation & Speed of Play',
    rating: 5,
  },
  {
    id: '3',
    parentName: 'Clare Matthews',
    playerInfo: 'Parent of Oliver (Age 7, Foundation)',
    hubLocation: 'Beckenham Hub',
    focusArea: 'Mini Kickers & Holiday Camps',
    quote: 'Every single child has a football at their feet for the entire session—no standing around in long queues. The positive encouragement and structured syllabus make this far superior to standard weekend soccer schools.',
    improvementTag: 'First Touch & Agility Balance',
    rating: 5,
  },
  {
    id: '4',
    parentName: 'Mark Thompson',
    playerInfo: 'Parent of Ethan (Age 13, Centre-Back)',
    hubLocation: 'Shirley Coloma 3G Arena',
    focusArea: 'Showcase Squad & 1-to-1',
    quote: 'Playing against Fulham FC Academy at Motspur Park gave Ethan an incredible benchmark of elite football. The coaches gave him actionable positional feedback that helped him get selected for district schoolboys.',
    improvementTag: 'Pro Academy Fixture Pathway',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Academy Technical Hub' | 'Futsal & Academy Hub' | 'Showcase Squad & 1-to-1'>('all');

  const filtered = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(t => t.focusArea.includes(activeFilter) || activeFilter.includes(t.focusArea));

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Proof Bar & Header Grid */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-slate-200">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-950 border border-navy-200/60 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Verified Parent Feedback</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight leading-tight mb-4">
              Real Stories. <span className="text-navy-800 underline decoration-gold-500 decoration-wavy decoration-2">Real Player Growth.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Discover how our specialized Coerver methodology elevates individual skill, match confidence, and tactical composure for youth players across South London.
            </p>
          </div>

          {/* Aggregate Rating Score Box */}
          <div className="bg-slate-50 border-2 border-slate-200/80 rounded-3xl p-6 sm:p-7 flex items-center gap-6 shadow-sm flex-shrink-0">
            <div className="text-center pr-6 border-r border-slate-200">
              <div className="font-heading font-black text-4xl sm:text-5xl text-navy-950 leading-none">
                4.9<span className="text-gold-500 text-2xl font-bold">/5</span>
              </div>
              <div className="flex items-center justify-center gap-1 mt-2 text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-1">
              <p className="font-heading font-bold uppercase text-navy-950 text-sm">
                500+ Players Coached
              </p>
              <p className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Verified Parent Reviews</span>
              </p>
              <p className="text-slate-500 text-xs">
                Bromley &bull; Beckenham &bull; West Wickham
              </p>
            </div>
          </div>

        </div>

        {/* 4-Card Multi-Column Athletic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Spotlight Card (Spans 7 cols on large screens) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between border border-navy-800 relative overflow-hidden group">
            
            {/* Background Quote Watermark */}
            <Quote className="w-32 h-32 text-white/5 absolute -bottom-6 -right-6 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <span className="bg-gold-500 text-navy-950 text-xs font-heading font-extrabold uppercase px-3 py-1 rounded-full shadow">
                  Featured Case Study
                </span>
                
                <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-heading font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{testimonials[0].hubLocation}</span>
                </span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-8">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gold-500 text-navy-950 font-heading font-extrabold text-lg flex items-center justify-center shadow">
                  SJ
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-lg text-white uppercase tracking-wide">
                    {testimonials[0].parentName}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {testimonials[0].playerInfo}
                  </p>
                </div>
              </div>

              <span className="bg-white/10 text-gold-400 border border-white/15 px-3 py-1.5 rounded-xl text-xs font-medium">
                🎯 {testimonials[0].improvementTag}
              </span>
            </div>

          </div>

          {/* Secondary Spotlight Card (Spans 5 cols on large screens) */}
          <div className="lg:col-span-5 bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-navy-900 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bg-navy-950 text-white text-[11px] font-heading font-bold uppercase px-3 py-1 rounded-full">
                  Futsal Masterclass
                </span>
                <div className="flex items-center gap-0.5 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500" />
                  ))}
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                &ldquo;{testimonials[1].quote}&rdquo;
              </p>
            </div>

            <div className="pt-5 border-t border-slate-200 flex items-center justify-between gap-3">
              <div>
                <h4 className="font-heading font-bold text-base text-navy-950 uppercase">
                  {testimonials[1].parentName}
                </h4>
                <p className="text-xs text-slate-500">
                  {testimonials[1].playerInfo} &bull; {testimonials[1].hubLocation}
                </p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                Verified
              </span>
            </div>
          </div>

          {/* Card 3 (Spans 6 cols on bottom row) */}
          <div className="lg:col-span-6 bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-navy-900 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bg-navy-900 text-gold-400 text-[11px] font-heading font-bold uppercase px-3 py-1 rounded-full">
                  Foundation &amp; Camps
                </span>
                <div className="flex items-center gap-0.5 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500" />
                  ))}
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                &ldquo;{testimonials[2].quote}&rdquo;
              </p>
            </div>

            <div className="pt-5 border-t border-slate-200 flex items-center justify-between gap-3">
              <div>
                <h4 className="font-heading font-bold text-base text-navy-950 uppercase">
                  {testimonials[2].parentName}
                </h4>
                <p className="text-xs text-slate-500">
                  {testimonials[2].playerInfo} &bull; {testimonials[2].hubLocation}
                </p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                Verified
              </span>
            </div>
          </div>

          {/* Card 4 (Spans 6 cols on bottom row) */}
          <div className="lg:col-span-6 bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-navy-900 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bg-navy-900 text-gold-400 text-[11px] font-heading font-bold uppercase px-3 py-1 rounded-full">
                  Showcase Pathways
                </span>
                <div className="flex items-center gap-0.5 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500" />
                  ))}
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                &ldquo;{testimonials[3].quote}&rdquo;
              </p>
            </div>

            <div className="pt-5 border-t border-slate-200 flex items-center justify-between gap-3">
              <div>
                <h4 className="font-heading font-bold text-base text-navy-950 uppercase">
                  {testimonials[3].parentName}
                </h4>
                <p className="text-xs text-slate-500">
                  {testimonials[3].playerInfo} &bull; {testimonials[3].hubLocation}
                </p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                Verified
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
