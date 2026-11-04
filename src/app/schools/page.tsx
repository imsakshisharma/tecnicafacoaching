'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';

export default function SchoolsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <SubpageHero
          breadcrumbCurrent="Schools"
          badge="School Partnerships"
          title="Coaching for Schools"
          highlightWord="Schools"
          description="Tailored football sessions integrated into school curricula, delivering technical skill development alongside academic commitments."
          bgImage="/assets/images/hero_banner.jpg"
          ctaText="Book Free Assessment"
          ctaHref="/contact"
        />
        <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-extrabold text-navy-950 mb-6">Our School Offerings</h2>
          <p className="text-slate-600 mb-4">We partner with primary and secondary schools across South London and Kent to provide:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>Weekly technical football sessions on school pitches.</li>
            <li>Qualified coaches with UEFA B licences.</li>
            <li>Full PPA (Parents and Players Association) coverage and insurance.</li>
            <li>Progress reports for parents and teachers.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

