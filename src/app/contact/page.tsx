'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <SubpageHero
          breadcrumbCurrent="Contact"
          badge="Get In Touch"
          title="Contact Tecnica FA"
          highlightWord="Contact"
          description="Reach out to us for enquiries, bookings, or any questions you may have. We're here to help you and your child achieve football excellence."
          bgImage="/assets/images/hero_banner.jpg"
          ctaText="Send Message"
          ctaHref="/contact"
        />
        <section className="py-20 lg:py-24 max-w-3xl mx-auto px-4 sm:px-6">
          <form className="grid gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-navy-900 mb-1" htmlFor="name">Name</label>
              <input type="text" id="name" className="border border-slate-300 rounded-md p-2" placeholder="Your name" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-navy-900 mb-1" htmlFor="email">Email</label>
              <input type="email" id="email" className="border border-slate-300 rounded-md p-2" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-navy-900 mb-1" htmlFor="message">Message</label>
              <textarea id="message" rows={5} className="border border-slate-300 rounded-md p-2" placeholder="Your message..." />
            </div>
            <button type="submit" className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-2 px-4 rounded-md shadow-md transition-colors">
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

