'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Users, 
  GraduationCap, 
  Trophy, 
  CalendarDays, 
  Target, 
  Zap, 
  ArrowRight, 
  Clock,
  MapPin
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  schedule: string;
  location: string;
  bullets: string[];
  ctaText: string;
  ctaParam: string;
}

const services: ServiceItem[] = [
  {
    id: 'academy-sessions',
    title: 'Academy Sessions',
    tagline: 'Ages 7 – 15 Years',
    badge: 'Core Program',
    badgeColor: 'bg-navy-950 text-gold-400',
    icon: <Users className="w-5 h-5 text-navy-900" />,
    image: '/assets/images/fulham_match_2.jpg',
    description: 'Weekly intensive technical hubs focusing on Dutch Coerver ball mastery, rapid 1v1 attacking feints, and positional intelligence on floodlit 3G surfaces.',
    schedule: 'Midweek Evenings (Floodlit 3G)',
    location: 'West Wickham, Bromley & Beckenham',
    bullets: [
      'Over 1,000 deliberate touches per session',
      'Advanced 1v1 offensive & defensive duels',
      'Fast transition play and small-sided overloads',
    ],
    ctaText: 'Book Academy Trial',
    ctaParam: 'Academy Development Hub',
  },
  {
    id: 'schools',
    title: 'Schools Coaching',
    tagline: 'Primary & Secondary Schools',
    badge: 'Curriculum P.E. & PPA',
    badgeColor: 'bg-emerald-700 text-white',
    icon: <GraduationCap className="w-5 h-5 text-navy-900" />,
    image: '/assets/wp/Fulham-Acad-7-1024x768.jpg',
    description: 'High-quality National Curriculum P.E. lessons, reliable teacher PPA release cover, morning breakfast clubs, and high-energy after-school football programs.',
    schedule: 'School Term Times (Mon – Fri)',
    location: 'Schools across South London & Kent',
    bullets: [
      'Termly curriculum schemes of work',
      'Zero administrative burden for school staff',
      'Pupil progress assessments & certificates',
    ],
    ctaText: 'Request School Proposal',
    ctaParam: 'Schools Partnership & PPA',
  },
  {
    id: 'showcase-games',
    title: 'Showcase Games',
    tagline: 'Ages 8 – 16 Years',
    badge: 'Elite Matchplay',
    badgeColor: 'bg-gold-500 text-navy-950 font-black',
    icon: <Trophy className="w-5 h-5 text-navy-900" />,
    image: '/assets/images/fulham_match_1.jpg',
    description: 'Competitive showcase fixtures against Premier League and EFL Category 1 & 2 professional club academies, giving talented players authentic high-level test environments.',
    schedule: 'Midweek & Holiday Fixtures',
    location: 'Pro Club Training Grounds (Fulham, Palace)',
    bullets: [
      'Fixtures against Fulham FC Academy & Palace',
      'Professional scouts in regular attendance',
      'Tactical video review & individual guidance',
    ],
    ctaText: 'Enquire About Showcases',
    ctaParam: 'Academy Showcases',
  },
  {
    id: 'tournaments',
    title: 'Tournaments',
    tagline: 'Youth Squads (U7 – U15)',
    badge: 'Competitive Festivals',
    badgeColor: 'bg-navy-800 text-white',
    icon: <CalendarDays className="w-5 h-5 text-navy-900" />,
    image: '/assets/images/holiday_camp.jpg',
    description: 'Structured youth football festivals, summer cup competitions, and half-term mini-tournaments designed to test tactical camaraderie, match resilience, and composure.',
    schedule: 'School Half-Terms & Summer Breaks',
    location: 'Pickhurst Rise & Regional Sports Arenas',
    bullets: [
      'Group stages and knockout matches',
      'FA qualified referees & certified coaches',
      'Medals, trophies, and player awards',
    ],
    ctaText: 'View Tournament Dates',
    ctaParam: 'Tournaments & Day Camps',
  },
  {
    id: '1-2-1',
    title: '1-2-1 Coaching',
    tagline: 'All Ages (6 – 18 Years)',
    badge: 'Private Masterclass',
    badgeColor: 'bg-slate-900 text-gold-400',
    icon: <Target className="w-5 h-5 text-navy-900" />,
    image: '/assets/images/fulham_acad_6.jpg',
    description: 'Bespoke 60-minute private technical clinics tailored directly to a player’s positional role, weak-foot striking precision, speed of footwork, and tactical confidence.',
    schedule: 'Flexible Evening & Weekend Slots',
    location: 'Selected Hub Venues (London & Kent)',
    bullets: [
      'Direct coaching with UEFA B Licensed Directors',
      'High-repetition mechanical correction',
      'Targeted weak-foot and shooting mechanics',
    ],
    ctaText: 'Book 1-2-1 Session',
    ctaParam: '1-on-1 Precision Coaching',
  },
  {
    id: 'futsal',
    title: 'Futsal Clinics',
    tagline: 'Ages 6 – 14 Years',
    badge: 'Indoor Mastery',
    badgeColor: 'bg-cyan-700 text-white',
    icon: <Zap className="w-5 h-5 text-navy-900" />,
    image: '/assets/images/futsal_session.jpg',
    description: 'Indoor Brazilian futsal utilizing weighted low-bounce balls to demand instant decision-making, rapid sole-of-foot control, and spatial awareness in tight environments.',
    schedule: 'Weekend & Midweek Indoor Slots',
    location: 'West Wickham & Beckenham Sports Halls',
    bullets: [
      'Low-bounce ball demands tight close control',
      'Generates 6x more touches per minute',
      'Fast transitions, wall passes, and tight turns',
    ],
    ctaText: 'Register for Futsal',
    ctaParam: 'Futsal Technical Masterclass',
  },
];

export default function ServicesGrid() {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-900 border border-navy-200/60 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <span className="text-gold-500 font-black">/</span>
            <span>Comprehensive Coaching Syllabus</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-4">
            The 6 Core Coaching Pathways
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From midweek technical development hubs and school curriculum P.E. to high-intensity Brazilian futsal and pro academy showcases, explore our specialized programs.
          </p>
        </div>

        {/* The 6 Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-md hover:shadow-2xl hover:border-navy-900 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-2"
            >
              {/* Card Image Wrap with Children in Action */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={`${service.title} - Tecnica FA Coaching Ltd`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                
                {/* Floating Program Badge */}
                <div className="absolute top-3.5 right-3.5">
                  <span className={`text-[11px] font-heading font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Tagline / Age Range Overlay */}
                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-xs font-heading font-bold text-gold-400 uppercase tracking-wider block">
                    {service.tagline}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-grow">
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow font-normal">
                  {service.description}
                </p>

                {/* Bullet Features with Gold checkmarks */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-800">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-gold-500 font-extrabold text-sm leading-none mt-0.5 select-none">
                        ✓
                      </span>
                      <span className="font-medium text-slate-700">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Schedule & Location Meta Bar */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500 mb-6 bg-slate-50 -mx-7 -mb-7 p-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-navy-800 flex-shrink-0" />
                    <span><strong className="text-slate-800">Schedule:</strong> {service.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-navy-800 flex-shrink-0" />
                    <span><strong className="text-slate-800">Hub Venues:</strong> {service.location}</span>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="mt-8">
                  <a
                    href={`#contact?session=${encodeURIComponent(service.ctaParam)}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white font-heading font-bold text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-sm hover:shadow transition-all"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Assessment Banner Callout */}
        <div className="mt-16 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-navy-800">
          <div className="max-w-2xl">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Start Your Coaching Journey
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              Unsure Which Program Fits Your Child Best?
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Speak directly with coaching directors Austin Berkley or Warren Berkley to evaluate your child&apos;s current developmental phase and book a free trial assessment session.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-heading font-bold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>Book Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
