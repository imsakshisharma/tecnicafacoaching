'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <SubpageHero
          breadcrumbCurrent="FAQ"
          badge="Common Questions"
          title="Frequently Asked Questions"
          highlightWord="FAQ"
          description="Answers to the most common queries about our programmes, scheduling, and enrollment process."
          bgImage="/assets/images/hero_banner.jpg"
          ctaText="Book Free Assessment"
          ctaHref="/contact"
        />
        <section className="py-20 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            <details className="group border-b border-slate-200 pb-4">
              <summary className="font-medium cursor-pointer text-navy-950">What age groups do you cater to?</summary>
              <p className="mt-2 text-slate-600">We coach children from U‑6 up to U‑18, with sessions tailored to each developmental stage.</p>
            </details>
            <details className="group border-b border-slate-200 pb-4">
              <summary className="font-medium cursor-pointer text-navy-950">Do you offer trial sessions?</summary>
              <p className="mt-2 text-slate-600">Yes, a free introductory assessment is available for new players. Book via the Contact page.</p>
            </details>
            <details className="group border-b border-slate-200 pb-4">
              <summary className="font-medium cursor-pointer text-navy-950">How are sessions booked?</summary>
              <p className="mt-2 text-slate-600">Sessions can be booked online through the Contact form or by calling our office. Full schedules are available on the Programs page.</p>
            </details>
            <details className="group border-b border-slate-200 pb-4">
              <summary className="font-medium cursor-pointer text-navy-950">What safety measures are in place?</summary>
              <p className="mt-2 text-slate-600">All coaches are DBS‑checked, hold first‑aid certifications, and sessions adhere to strict safeguarding policies.</p>
            </details>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

