'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'What is the difference between Tecnica FA Coaching Ltd and Tecnica FA CIC?',
    a: 'Tecnica FA Coaching Ltd is our dedicated technical coaching academy, delivering midweek technical development hubs, Brazilian futsal masterclasses, school curriculum P.E./PPA partnerships, private 1-2-1 coaching, and pro club showcases. Tecnica Football Academy CIC is the sister grassroots community club that operates competitive Sunday league teams.',
  },
  {
    q: 'Can my child train with Tecnica FA Coaching while playing for another grassroots club?',
    a: 'Yes, absolutely! The majority of players who attend our midweek academy hubs play for grassroots Sunday teams elsewhere. Our coaching does not clash with weekend grassroots clubs—it complements them by providing specialized technical training, high-rep ball mastery, and 1v1 skill development.',
  },
  {
    q: 'How does the free trial assessment work?',
    a: 'We invite new players to attend a trial session at one of our hubs (Bromley, Beckenham, or West Wickham). Our UEFA B licensed coaching directors observe your child’s footwork mechanics, technical aptitude, and game awareness to place them in the optimal developmental group.',
  },
  {
    q: 'What footwear and equipment are required?',
    a: 'For our outdoor floodlit 3G pitches (Bromley & Shirley), players should wear moulded studs or astro turf boots (no metal studs). For indoor Futsal clinics, clean non-marking indoor trainers or futsal shoes are required. Shin guards and a labelled water bottle are mandatory for all sessions.',
  },
  {
    q: 'Do you partner with primary and secondary schools for PPA cover?',
    a: 'Yes! We deliver National Curriculum Physical Education lessons, PPA teacher release cover, morning breakfast clubs, and after-school clubs across West Wickham, Beckenham, Bromley, and Croydon. Contact Warren Berkley directly for a tailored school proposal.',
  },
  {
    q: 'What age groups do you cater for across your programs?',
    a: 'Our programs start with foundation kickers from age 4, running up to teenagers aged 16 in our elite development hubs and pro academy showcase squads. Private 1-2-1 clinics are also open to all ages from 6 to 18.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-900 border border-navy-200/80 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-navy-800" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our specialized coaching syllabus, hubs, schedule, and player pathways.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-heading font-bold text-lg sm:text-xl text-navy-950 hover:text-navy-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold-500 text-navy-950' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

