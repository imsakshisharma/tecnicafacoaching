'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <SubpageHero
          breadcrumbCurrent="Philosophy"
          badge="Coaching Ethos"
          title="Our Coaching Philosophy"
          highlightWord="Philosophy"
          description="Tecnica FA believes in technique first, the individual player before the team. We develop skill, confidence, and decision‑making through focused, small‑group sessions."
          bgImage="/assets/images/hero_banner.jpg"
          ctaText="Book Free Assessment"
          ctaHref="/contact"
        />
        <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-extrabold text-navy-950 mb-6">Core Principles</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>Technique over tactics – mastering ball control first.</li>
            <li>Individual development – each child’s growth is priority.</li>
            <li>Creative courage – encouraging players to take risks.</li>
            <li>Positive environment – fun, safe, and supportive.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

