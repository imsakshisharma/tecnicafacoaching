'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, X, Camera } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'all' | 'showcase' | 'futsal' | 'drills' | 'camps';
  categoryLabel: string;
  image: string;
  venue: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Showcase vs Fulham FC Academy',
    category: 'showcase',
    categoryLabel: 'Pro Showcase',
    image: '/assets/images/fulham_match_1.jpg',
    venue: 'Motspur Park Training Ground',
  },
  {
    id: 2,
    title: 'Youth Squad Fixture vs Fulham',
    category: 'showcase',
    categoryLabel: 'Pro Showcase',
    image: '/assets/images/fulham_match_2.jpg',
    venue: 'Motspur Park Arena',
  },
  {
    id: 3,
    title: 'Coerver Technical Ball Mastery Drill',
    category: 'drills',
    categoryLabel: 'Technical Drills',
    image: '/assets/images/fulham_acad_6.jpg',
    venue: 'Bishop Justus 3G Arena',
  },
  {
    id: 4,
    title: 'Brazilian Indoor Futsal Clinic',
    category: 'futsal',
    categoryLabel: 'Futsal',
    image: '/assets/images/futsal_session.jpg',
    venue: 'Beckenham Indoor Sports Hall',
  },
  {
    id: 5,
    title: 'Half-Term Soccer Camp Winners',
    category: 'camps',
    categoryLabel: 'Holiday Camps',
    image: '/assets/images/holiday_camp.jpg',
    venue: 'Pickhurst Rise Hub',
  },
  {
    id: 6,
    title: 'Youth Squad Competitive Matchplay',
    category: 'showcase',
    categoryLabel: 'Matchplay',
    image: '/assets/images/u13_palace.jpg',
    venue: 'Goals 3G Complex',
  },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'showcase' | 'futsal' | 'drills' | 'camps'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-900 border border-navy-200/80 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-navy-800" />
            <span>Youth Action In High Definition</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-4">
            Coaching &amp; Match Action Gallery
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real action photography from our midweek academy technical hubs, pro club showcases, Brazilian futsal clinics, and holiday camps across South London.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { key: 'all', label: 'All Photos' },
            { key: 'showcase', label: 'Pro Showcases' },
            { key: 'futsal', label: 'Futsal Clinics' },
            { key: 'drills', label: 'Ball Mastery' },
            { key: 'camps', label: 'Holiday Camps' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 ${
                activeFilter === tab.key
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer bg-slate-900 aspect-[16/11] border border-slate-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-gold-500 text-navy-950 text-[10px] font-heading font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Zoom Icon Button */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Title & Venue */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-heading font-bold text-lg sm:text-xl leading-snug group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {item.venue}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-navy-900 rounded-2xl overflow-hidden max-w-4xl w-full border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[65vh] w-full bg-black">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-navy-950 text-white flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs font-heading font-bold uppercase text-gold-400 tracking-wider block mb-1">
                  {activeModalItem.categoryLabel}
                </span>
                <h3 className="font-heading font-bold text-2xl">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {activeModalItem.venue}
                </p>
              </div>
              <a
                href="#contact"
                onClick={() => setActiveModalItem(null)}
                className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-heading font-bold uppercase text-xs tracking-wider px-5 py-2.5 rounded-full"
              >
                Book Session Like This
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

