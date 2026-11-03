'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Parent of Leo (Age 9)',
    location: 'West Wickham Hub',
    text: 'Leo joined Tecnica FA Coaching 14 months ago struggling for confidence on his weak left foot. The individual attention and Dutch Coerver drills delivered by Austin and Warren have been transformational. He is now playing with tremendous composure and flair.',
    stars: 5,
  },
  {
    name: 'David Reynolds',
    role: 'Parent of Harry (Age 11)',
    location: 'Bromley Hub & Futsal',
    text: 'The indoor futsal masterclasses are second to none. Using the low-bounce ball has forced Harry to think faster and rely on close manipulation with the sole of his foot. The coaching standard is truly professional academy level.',
    stars: 5,
  },
  {
    name: 'Clare Matthews',
    role: 'Parent of Oliver (Age 7)',
    location: 'Mini Tecnica & Half-Term Camps',
    text: 'Every single child has a football at their feet for the entire session. No standing around in long queues. The positive encouragement and structure make this the best coaching organization in South London.',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIdx((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const item = testimonials[currentIdx];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-900 border border-navy-200/60 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <span className="text-gold-500 font-black">/</span>
            <span>Parent Verified Reviews</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-4">
            What Parents Say About Our Coaching
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
          <Quote className="w-12 h-12 text-navy-200/80 absolute top-8 right-8" />
          
          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6 text-gold-500">
            {[...Array(item.stars)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold-500" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-slate-700 text-lg sm:text-xl italic leading-relaxed mb-8">
            &ldquo;{item.text}&rdquo;
          </p>

          {/* Author Details & Carousel Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
            <div>
              <h4 className="font-heading font-bold text-xl text-navy-950 uppercase">
                {item.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                {item.role} &bull; <span className="text-navy-700 font-medium">{item.location}</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-navy-900 hover:text-white transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-navy-900 hover:text-white transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

