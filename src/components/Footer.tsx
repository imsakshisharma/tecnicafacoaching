'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/assets/logo-blue.svg"
                  alt="Tecnica FA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white leading-none">
                  TECNICA <span className="text-gold-500">FA</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                  Coaching Ltd
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Specialized elite football training hubs, Brazilian Futsal clinics, and primary/secondary school partnerships across South London. Combining the Dutch Coerver technique with English FA player pathways under UEFA B Licensed Director Austin Berkley.
            </p>

            {/* Quality & Safeguarding Tag - NO FA CHARTER (As instructed by client) */}
            <div className="inline-flex items-center gap-2 bg-navy-900/90 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-full text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>UEFA B Licensed &bull; Enhanced DBS Verified</span>
            </div>
          </div>

          {/* Column 2: The 6 Core Coaching Programs (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-4">
              Coaching Pathways
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#programs" className="hover:text-gold-400 transition-colors">
                  1. Academy Sessions (Midweek 3G)
                </a>
              </li>
              <li>
                <a href="#schools" className="hover:text-gold-400 transition-colors">
                  2. Schools Coaching &amp; PPA Cover
                </a>
              </li>
              <li>
                <a href="#showcases" className="hover:text-gold-400 transition-colors">
                  3. Showcase Games (Pro Clubs)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-gold-400 transition-colors">
                  4. Tournaments &amp; Day Camps
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-gold-400 transition-colors">
                  5. 1-2-1 Specialist Masterclasses
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-gold-400 transition-colors">
                  6. Futsal Technical Clinics
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem & Partners (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-4">
              Club Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="https://www.tecnicafa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-semibold"
                >
                  <span>Tecnica FA CIC</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="block text-[11px] text-slate-500">Weekend league teams</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.prokituk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-semibold"
                >
                  <span>ProkitUK Shop</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="block text-[11px] text-slate-500">Official training kits</span>
              </li>
              <li className="pt-2">
                <a href="#contact" className="text-emerald-400 hover:underline font-semibold">
                  Book Free Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hub Locations (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-4">
              Training Hub Grounds
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p>
                <strong className="text-white">West Wickham:</strong><br />
                Pickhurst Rise, Kent BR4 0AU
              </p>
              <p>
                <strong className="text-white">Bromley:</strong><br />
                Bishop Justus School Floodlit 3G
              </p>
              <p>
                <strong className="text-white">Beckenham:</strong><br />
                Goals Complex &amp; Kent County Sports Ground
              </p>
              <p>
                <strong className="text-white">Shirley:</strong><br />
                Coloma 3G Arena
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Tecnica FA Coaching Ltd &bull; Registered in England &amp; Wales &bull; All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-300 transition-colors">Safeguarding</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

