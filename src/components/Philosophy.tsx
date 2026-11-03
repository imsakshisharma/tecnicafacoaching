'use client';

import React from 'react';
import { 
  CircleDot, 
  ArrowLeftRight, 
  Swords, 
  Activity, 
  Crosshair, 
  Users2 
} from 'lucide-react';

const pillars = [
  {
    step: '01',
    title: 'Ball Mastery',
    icon: <CircleDot className="w-5 h-5 text-gold-500" />,
    desc: 'The foundation of all technical excellence. Repetitive multi-surface ball manipulation (sole, inside, outside, laces) until controlling the ball becomes second nature in high-pressure matches.',
  },
  {
    step: '02',
    title: 'Receiving & Passing',
    icon: <ArrowLeftRight className="w-5 h-5 text-gold-500" />,
    desc: 'First touch directed into forward space. Crisp, weighted ground passing with optimal body angles to circulate possession under aggressive high presses.',
  },
  {
    step: '03',
    title: '1v1 Dominance',
    icon: <Swords className="w-5 h-5 text-gold-500" />,
    desc: 'Mastering attacking moves, step-overs, and changes of pace to beat defenders, combined with body shape, timing, and recovery tackling in defensive 1v1 duels.',
  },
  {
    step: '04',
    title: 'Speed & Agility',
    icon: <Activity className="w-5 h-5 text-gold-500" />,
    desc: 'Explosive multi-directional acceleration with and without the ball. Fast footwork mechanics, sharp deceleration, and rapid mental reaction to transitional moments.',
  },
  {
    step: '05',
    title: 'Finishing Precision',
    icon: <Crosshair className="w-5 h-5 text-gold-500" />,
    desc: 'Composed ball striking under defensive pressure. Volleys, driven low strikes into corners, curled finishes, and rapid decision-making in the final third.',
  },
  {
    step: '06',
    title: 'Group Combinations',
    icon: <Users2 className="w-5 h-5 text-gold-500" />,
    desc: 'Small-sided 2v1 and 3v2 overload combinations, wall passes, overlapping runs, and intuitive off-the-ball movement mirroring professional academy play.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-900 border border-navy-200/80 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <span className="text-gold-500 font-black">/</span>
            <span>World-Class Methodology</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-4">
            The Dutch Coerver Technique
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Adopted by global giants including <strong>Ajax Amsterdam, FC Barcelona, Benfica, and Bayern Munich</strong>, the Coerver method breaks football down into fundamental building blocks, teaching players to master the ball first before progressing to complex tactical game states.
          </p>
        </div>

        {/* 6 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.step}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading font-black text-2xl text-navy-200 group-hover:text-gold-500 transition-colors">
                  {pillar.step}
                </span>
                <div className="p-2.5 rounded-xl bg-navy-50 text-navy-900">
                  {pillar.icon}
                </div>
              </div>

              <h3 className="font-heading font-bold text-xl text-navy-950 uppercase mb-2">
                {pillar.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* European Adoption Crests Banner */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-lg text-navy-950 uppercase mb-1">
              The European Pedigree of Technical Mastery
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Endorsed by international federations and elite European clubs to develop intelligent, technically dominant players.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {['AFC Ajax', 'FC Barcelona', 'Bayern Munich', 'SL Benfica', 'The English FA'].map((club) => (
              <span
                key={club}
                className="bg-slate-100 text-navy-900 font-heading font-bold text-xs uppercase px-3.5 py-1.5 rounded-lg border border-slate-200"
              >
                {club}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

