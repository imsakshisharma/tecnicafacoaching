'use client';

import React from 'react';
import { Phone, Mail, ShieldCheck, Instagram, Facebook } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        {/* Contact info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="tel:07456528812"
            className="inline-flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span>07456 528 812 (Direct)</span>
          </a>
          <a
            href="tel:07590046769"
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span>07590 046 769</span>
          </a>
          <a
            href="mailto:warren@tecnicafa.com"
            className="inline-flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gold-500" />
            <span>warren@tecnicafa.com</span>
          </a>
        </div>

        {/* Quality Badges & Social - NO FA CHARTER (As instructed by client) */}
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-1.5 bg-navy-900/80 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[11px] font-medium">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>UEFA Licensed &bull; Enhanced DBS Verified</span>
          </div>

          <div className="flex items-center gap-2.5 text-slate-400">
            <a
              href="https://www.instagram.com/tecnicafa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gold-400 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com/tecnicafa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gold-400 transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

