'use client';

import React from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Philosophy from '@/components/Philosophy';
import AboutDirectors from '@/components/AboutDirectors';
import SchoolsSection from '@/components/SchoolsSection';
import ShowcasesSection from '@/components/ShowcasesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* 1. Top Contact Bar (No FA Charter badge) */}
      <TopBar />

      {/* 2. White Header / Nav (Blue Logo, Navy Typography) */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Hero Section (Light, Youth Action Photo, 4 Metric Boxes Removed) */}
        <Hero />

        {/* 4. The 6 Core Boxes (Academy Sessions, Schools, Showcase Games, Tournaments, 1-2-1, Futsal) */}
        <ServicesGrid />

        {/* 5. Dutch Coerver Technique Philosophy */}
        <Philosophy />

        {/* 6. About Directors & Coaching Pedigree (Child training photo, UEFA B credentials) */}
        <AboutDirectors />

        {/* 7. Dedicated Schools Coaching & PPA Delivery */}
        <SchoolsSection />

        {/* 8. Pro Club Showcases (Fulham FC, Palace, Charlton) */}
        <ShowcasesSection />

        {/* 9. High-Definition Youth Action Gallery with Lightbox */}
        <GallerySection />

        {/* 10. Parent Testimonials */}
        <TestimonialsSection />

        {/* 11. FAQ Section */}
        <FaqSection />

        {/* 12. Assessment Trial Booking & Contact Form */}
        <BookingForm />
      </main>

      {/* 13. Navy/White Footer with Hub Locations & Ecosystem Links */}
      <Footer />
    </div>
  );
}

