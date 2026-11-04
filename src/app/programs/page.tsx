'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        {/* Subpage Hero */}
        <SubpageHero
          breadcrumbCurrent="Programs"
          badge="Coaching Pathways"
          title="Our Coaching Programs"
          highlightWord="Programs"
          description="Explore our range of elite football and futsal programs designed for young athletes. From academy sessions to showcase games, each pathway is crafted to develop technical skill and tactical awareness."
          bgImage="/assets/images/hero_banner.jpg"
          ctaText="Book Free Assessment"
          ctaHref="/contact"
        />
        {/* Placeholder Content */}
        <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-extrabold text-navy-950 mb-6">Program Overview</h2>
          <p className="text-slate-600 mb-4">We offer six core programmes that align with the club’s philosophy and the needs of schools and independent athletes.</p>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>Academy Sessions – Mid‑week technical masterclasses on 3G pitches.</li>
            <li>Schools Coaching – In‑school sessions with PPA coverage.</li>
            <li>Showcase Games – Competitive matches against elite clubs.</li>
            <li>Tournaments & Day Camps – Seasonal events for intensive development.</li>
            <li>1‑2‑1 Specialist Masterclasses – Tailored one‑on‑one coaching.</li>
            <li>Futsal Technical Clinics – Fast‑paced small‑sided training.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

