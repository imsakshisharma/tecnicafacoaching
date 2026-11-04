'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  Target,
  Sparkles,
  Users
} from 'lucide-react';

export default function AboutPage() {
  const hubVenues = [
    {
      name: 'West Wickham Training Ground',
      address: 'Pickhurst Rise, West Wickham, Kent BR4 0AU',
      features: 'Full Grass Pitches & Academy Development Hubs',
      focus: 'Midweek Technical Sessions & Holiday Camps',
    },
    {
      name: 'Bromley 3G Arena',
      address: 'Bishop Justus School, Magpie Hall Lane, Bromley BR2 8HZ',
      features: 'Floodlit All-Weather Synthetic 3G Surface',
      focus: 'Evening Technical Hubs & Tactical Combinations',
    },
    {
      name: 'Beckenham Sports Complex',
      address: 'Goals Complex & Kent County Sports Ground',
      features: 'Indoor Sports Hall & Multiple 3G Enclosed Pitches',
      focus: 'Brazilian Futsal Clinics & Mini Tecnica Kickers',
    },
    {
      name: 'Shirley 3G Arena',
      address: 'Coloma 3G Arena, Upper Shirley Road, CR9 5AS',
      features: 'Full-Sized Floodlit 3G Artificial Pitch',
      focus: 'Advanced Age Brackets & Pro Showcase Matchplay',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <TopBar />
      <Navbar />

      <main className="flex-grow">
        {/* Subpage Hero */}
        <SubpageHero
          breadcrumbCurrent="About Us"
          badge="Coaching Leadership & Pedigree"
          title="About Tecnica FA"
          highlightWord="Coaching Ltd"
          description="Founded by former professional footballer Austin Berkley (UEFA B Licensed) and Warren Berkley. Providing specialized technical football education for young players across South London and Kent."
          bgImage="/assets/images/hero_banner.jpg"
          ctaText="Book Free Assessment"
          ctaHref="/contact"
        />

        {/* 1. Leadership Overview Section */}
        <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
              
              {/* Photo Frame (Children in Action) */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl p-3 shadow-xl border-2 border-slate-200 overflow-hidden">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                    <Image
                      src="/assets/images/fulham_acad_6.jpg"
                      alt="Youth technical coaching in action"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold-500 text-navy-950 font-heading font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow">
                        Youth Technical Syllabus
                      </span>
                    </div>
                  </div>
                  <div className="p-4 pt-3">
                    <h3 className="font-heading font-extrabold text-lg text-navy-950 uppercase tracking-tight">
                      Deliberate Practice &amp; Maximum Ball Touches
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Every child with a football &bull; High-tempo decision making
                    </p>
                  </div>
                </div>
              </div>

              {/* Ethos Copy */}
              <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
                <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-900 border border-navy-200/60 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
                  <span className="text-gold-500 font-black">/</span>
                  <span>Our Foundational Ethos</span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-6">
                  Technique Over Tactics. <br />
                  <span className="text-navy-900">The Individual Player First.</span>
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                  At <strong>Tecnica FA Coaching Ltd</strong>, our philosophy is simple: football is a game of skill, spatial awareness, and creative courage. Too often in grassroots football, team match results overshadow individual mechanical development.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  We bridge that critical gap by providing mid-week technical masterclasses grounded in the Dutch Coerver Technique. We focus on giving each child the confidence to beat opponents 1v1, manipulate the ball with both feet, and play with composure under match pressure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-navy-950 text-sm uppercase">UEFA B Director Led</h4>
                      <p className="text-xs text-slate-500">Highest tier technical syllabus and curriculum planning.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-navy-950 text-sm uppercase">DBS Enhanced &amp; Certified</h4>
                      <p className="text-xs text-slate-500">All coaches fully vetted with current First Aid &amp; Safeguarding.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Directors Profiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              {/* Austin Berkley Card */}
              <div className="bg-slate-50 rounded-3xl p-8 border-2 border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-navy-950 text-gold-400 font-heading font-extrabold text-xs uppercase px-3.5 py-1 rounded-full">
                      Coaching Director
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      UEFA B Licensed
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-950 uppercase mb-3">
                    Austin Berkley
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Former professional footballer with extensive EFL league experience representing <strong>Gillingham FC, Swindon Town, and Shrewsbury Town</strong>. Austin brings decades of professional playing insight, technical mechanics, and positional mastery directly into youth session design.
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span>
                      <span>UEFA B Coaching License accredited</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span>
                      <span>Specialist in Coerver 1v1 attacking mechanics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span>
                      <span>Direct mentor to professional academy trialists</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                  Leading academy hubs, 1-to-1 masterclasses &amp; showcase fixtures.
                </div>
              </div>

              {/* Warren Berkley Card */}
              <div className="bg-slate-50 rounded-3xl p-8 border-2 border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-navy-950 text-gold-400 font-heading font-extrabold text-xs uppercase px-3.5 py-1 rounded-full">
                      Head of Operations
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      Schools Director
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-950 uppercase mb-3">
                    Warren Berkley
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Overseeing all academy logistics, school curriculum P.E. partnerships, PPA cover, breakfast clubs, and safeguarding protocols. Warren is the direct point of contact for parents, school headteachers, and hub coordinators across South London.
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span>
                      <span>Director of Primary &amp; Secondary school delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span>
                      <span>Child welfare &amp; safeguarding certified officer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold-500 font-bold">✓</span>
                      <span>Direct phone support: 07456 528 812</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                  Managing schools partnerships, parent onboarding &amp; scheduling.
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 2. Coaching Hub Grounds Directory */}
        <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-900 border border-navy-200/80 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5 text-navy-800" />
                <span>Regional Venues</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-4">
                Our 4 Coaching Grounds
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Operating across state-of-the-art synthetic 3G pitches, sports halls, and private grounds in South London and Kent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {hubVenues.map((hub, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-heading font-bold text-gold-500 uppercase tracking-wider block mb-1">
                      Hub Location #{idx + 1}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-navy-950 uppercase mb-2">
                      {hub.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-navy-700 flex-shrink-0" />
                      <span>{hub.address}</span>
                    </p>
                    <div className="bg-slate-50 rounded-xl p-3.5 text-xs text-slate-700 space-y-1 mb-4">
                      <p><strong>Facility:</strong> {hub.features}</p>
                      <p><strong>Programs:</strong> {hub.focus}</p>
                    </div>
                  </div>

                  <Link
                    href={`/contact?hub=${encodeURIComponent(hub.name)}`}
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase text-navy-900 hover:text-gold-500 pt-3 border-t border-slate-100"
                  >
                    <span>Enquire About Sessions Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 3. CTA Callout */}
        <section className="py-16 bg-navy-950 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl uppercase tracking-tight mb-4 text-white">
              Ready to Give Your Child Professional Coaching?
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
              Book a free trial assessment session today. Meet our coaching directors Austin and Warren Berkley on the pitch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-heading font-extrabold text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>Book Free Trial Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

