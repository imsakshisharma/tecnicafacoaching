'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <SubpageHero
          breadcrumbCurrent="Gallery"
          badge="Photo Showcase"
          title="Our Training Gallery"
          highlightWord="Gallery"
          description="A visual collection of our coaching sessions, tournaments, and community events highlighting the energy and passion of our players."
          bgImage="/assets/images/hero_banner.jpg"
          ctaText="Book Free Assessment"
          ctaHref="/contact"
        />
        {/* Simple Image Grid Placeholder */}
        <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Image src="/assets/images/gallery1.jpg" alt="Gallery Image 1" width={400} height={300} className="object-cover rounded-lg" />
            <Image src="/assets/images/gallery2.jpg" alt="Gallery Image 2" width={400} height={300} className="object-cover rounded-lg" />
            <Image src="/assets/images/gallery3.jpg" alt="Gallery Image 3" width={400} height={300} className="object-cover rounded-lg" />
            <Image src="/assets/images/gallery4.jpg" alt="Gallery Image 4" width={400} height={300} className="object-cover rounded-lg" />
            <Image src="/assets/images/gallery5.jpg" alt="Gallery Image 5" width={400} height={300} className="object-cover rounded-lg" />
            <Image src="/assets/images/gallery6.jpg" alt="Gallery Image 6" width={400} height={300} className="object-cover rounded-lg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

