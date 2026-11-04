'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';

export default function ShowcasesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <SubpageHero
          breadcrumbCurrent="Showcases"
          badge="Competitive Matches"
          title="Showcase Games & Tournaments"
          highlightWord="Showcases"
          description="Our showcase games bring young talent together for high‑level competition against elite clubs, providing exposure and experience on the pitch."
          bgImage="/assets/images/hero_banner.jpg"
          ctaText="Book Free Assessment"
          ctaHref="/contact"
        />
        <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-extrabold text-navy-950 mb-6">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>Regular showcase matches against professional academy teams.</li>
            <li>Season‑long tournament series for U‑12 to U‑18 age groups.</li>
            <li>Talent scouting opportunities for future trials.</li>
            <li>Media coverage and player performance analytics.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

