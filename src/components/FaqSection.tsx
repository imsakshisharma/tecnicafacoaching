'use client';

import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, HelpCircle, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface FaqItem {
  id: string;
  num: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    num: '01',
    category: 'Organization & Ethos',
    question: 'What is the difference between Tecnica FA Coaching Ltd and Tecnica FA CIC?',
    answer: 'Tecnica FA Coaching Ltd is our dedicated technical coaching organization responsible for midweek development hubs, Brazilian futsal masterclasses, school curriculum P.E./PPA delivery, 1-on-1 private coaching, and pro club showcases. Tecnica Football Academy CIC is our sister community interest club managing competitive Sunday league grassroots teams.',
  },
  {
    id: 'faq-2',
    num: '02',
    category: 'Club Compatibility',
    question: 'Can my child train with Tecnica FA Coaching while playing for another grassroots club?',
    answer: 'Yes, 100%! Over 80% of players at our midweek academy hubs play for local Sunday grassroots teams. Our coaching syllabus is specifically designed to complement their weekend club matches by focusing intensely on individual ball mastery, 1v1 moves, and rapid decision-making.',
  },
  {
    id: 'faq-3',
    num: '03',
    category: 'Trials & Assessment',
    question: 'How does the free trial assessment work?',
    answer: 'We invite prospective players to attend a trial session at one of our hubs in Bromley, Beckenham, or West Wickham. Coaching directors Austin Berkley and Warren Berkley evaluate your child’s current mechanics, touch confidence, and speed of play to ensure they are grouped with peers of matching ability.',
  },
  {
    id: 'faq-4',
    num: '04',
    category: 'Footwear & Equipment',
    question: 'What footwear and kit are required for training?',
    answer: 'For our floodlit outdoor 3G pitches (Bromley & Shirley), players must wear moulded studs or astro trainers (metal blades/studs are strictly prohibited). For indoor Brazilian futsal sessions, clean non-marking indoor trainers or futsal shoes are required. Shin guards and plenty of water are mandatory.',
  },
  {
    id: 'faq-5',
    num: '05',
    category: 'Educational Partnerships',
    question: 'Do you partner with primary and secondary schools for PPA cover?',
    answer: 'Yes! We deliver National Curriculum Physical Education lessons, PPA teacher release cover, morning breakfast clubs, and after-school clubs across West Wickham, Beckenham, Bromley, and Croydon. All coaches are fully qualified, DBS enhanced, and safeguarding certified.',
  },
  {
    id: 'faq-6',
    num: '06',
    category: 'Age Brackets',
    question: 'What age groups do you accept across your coaching programs?',
    answer: 'We cater for children from age 4 (Mini Kickers foundation movement) through to teenagers aged 16 in our elite development hubs and pro academy showcase squads. Private 1-to-1 masterclasses are also available for players aged 6 to 18.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Sticky Support Hub Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            
            <div className="bg-navy-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-navy-800">
              
              <div className="inline-flex items-center gap-2 bg-navy-900 text-gold-400 border border-navy-800 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Knowledge Base</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-white mb-4 leading-tight">
                Got Questions? <br />
                <span className="text-gold-400">We Have Answers.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Everything you need to know about our coaching syllabus, trial assessments, school partnerships, and hub locations across South London.
              </p>

              {/* Direct Help Callout Box */}
              <div className="bg-navy-900/90 rounded-2xl p-5 border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center font-bold flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white uppercase leading-none">
                      Speak Directly With Operations
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Warren Berkley &bull; <a href="tel:07456528812" className="text-gold-400 font-bold hover:underline">07456 528 812</a>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Questions about age groups?</span>
                  <a href="#contact" className="text-gold-400 font-bold hover:underline flex items-center gap-1">
                    <span>Contact Us</span> &rarr;
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Venue Directory Tag */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs text-slate-700 font-medium">
                  <strong>4 Active Hubs:</strong> Bromley, Beckenham, West Wickham &amp; Shirley
                </span>
              </div>
              <a href="#contact" className="text-xs font-heading font-bold uppercase text-navy-900 hover:text-gold-600 whitespace-nowrap">
                View Maps &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Numbered Modern Interactive Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-navy-950 shadow-xl'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      {/* Number Indicator Pill */}
                      <span className={`font-heading font-black text-lg px-2.5 py-1 rounded-xl transition-colors ${
                        isOpen
                          ? 'bg-navy-950 text-gold-400'
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {faq.num}
                      </span>

                      <div>
                        <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-600 block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950 uppercase tracking-tight leading-tight">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Chevron Circle */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-gold-500 text-navy-950 shadow-sm'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Accordion Expandable Answer */}
                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-12 font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
