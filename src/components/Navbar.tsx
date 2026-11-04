'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'Philosophy', href: '/philosophy' },
    { label: 'Schools', href: '/schools' },
    { label: 'Showcases', href: '/showcases' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? 'shadow-md border-b border-slate-200/90 py-2.5'
          : 'border-b border-slate-200/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo & Title with Blue Crest Logo on Pure White */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/assets/logo-blue.svg"
              alt="Tecnica FA Coaching Ltd Official Navy Crest"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-navy-950 leading-none group-hover:text-navy-700 transition-colors">
                TECNICA <span className="text-navy-900">FA</span>
              </span>
              <span className="bg-gold-500 text-navy-950 text-[10px] font-heading font-black px-1.5 py-0.5 rounded uppercase leading-none">
                Coaching
              </span>
            </div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 mt-0.5">
              Elite Football &amp; Futsal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-heading font-bold text-sm tracking-wide uppercase px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  active
                    ? 'bg-navy-950 text-white shadow-xs'
                    : 'text-navy-950 hover:text-navy-700 hover:bg-slate-100/80'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-navy-950 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-heading font-bold text-base uppercase px-3.5 py-2.5 rounded-xl transition-colors ${
                    active
                      ? 'bg-navy-950 text-white'
                      : 'text-navy-950 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-heading font-bold uppercase tracking-wider py-3 rounded-xl shadow-md text-sm"
              >
                <span>Book Free Assessment Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
