'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Clock, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    ageGroup: '',
    hubLocation: '',
    program: 'Academy Development Hub',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Hub Locations */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-900 border border-navy-200/60 px-3.5 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-4">
              <span className="text-gold-500 font-black">/</span>
              <span>Get In Touch</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 uppercase tracking-tight mb-4">
              Book Your Free Trial Assessment
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Speak directly with our coaching operations team to reserve your child&apos;s free assessment session, discuss school PPA partnerships, or enquire about 1-on-1 development.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 w-full mb-8">
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold-500 text-navy-950 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-navy-950 leading-tight">
                    Warren Berkley &bull; Head of Operations
                  </h4>
                  <div className="text-xs text-slate-500 mt-1 space-y-0.5">
                    <p>Mobile: <a href="tel:07456528812" className="text-navy-900 font-bold hover:underline">07456 528 812</a></p>
                    <p>Direct Office: <a href="tel:07590046769" className="text-navy-900 font-bold hover:underline">07590 046 769</a></p>
                    <p>Email: <a href="mailto:warren@tecnicafa.com" className="text-navy-900 font-medium hover:underline">warren@tecnicafa.com</a></p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-navy-900 text-gold-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-navy-950 leading-tight">
                    Coaching Hubs &amp; Training Grounds
                  </h4>
                  <ul className="text-xs text-slate-600 mt-1.5 space-y-1">
                    <li>&bull; <strong>West Wickham:</strong> Pickhurst Rise Sports Pitches (BR4 0AU)</li>
                    <li>&bull; <strong>Bromley:</strong> Bishop Justus School 3G Pitch</li>
                    <li>&bull; <strong>Beckenham:</strong> Goals Soccer Complex &amp; Kent County Ground</li>
                    <li>&bull; <strong>Shirley:</strong> Coloma 3G Arena</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3 text-emerald-900 text-xs font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Zero obligation assessment. Safe, positive, age-appropriate coaching environment.</span>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10">
            
            {submitted ? (
              <div className="text-center py-12 px-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-navy-950 uppercase mb-2">
                  Trial Assessment Request Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.parentName}</strong>. Warren Berkley or one of our coaching directors will contact you on <strong>{formData.phone}</strong> within 24 hours with session confirmation.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-navy-900 text-white font-heading font-bold uppercase text-xs tracking-wider px-6 py-2.5 rounded-full hover:bg-gold-500 hover:text-navy-950 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="mb-6">
                  <span className="text-xs font-heading font-bold text-gold-500 uppercase tracking-widest block mb-1">
                    Fast Registration
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-navy-950 uppercase">
                    Register For Assessment Session
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill in your details below and we will confirm the session time and venue.
                  </p>
                </div>

                {/* Parent & Child Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 uppercase mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 uppercase mb-1">
                      Child / Player Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      required
                      placeholder="e.g. Leo Jenkins"
                      value={formData.childName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm"
                    />
                  </div>
                </div>

                {/* Contact: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 uppercase mb-1">
                      Telephone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 07456 528 812"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm"
                    />
                  </div>
                </div>

                {/* Age & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 uppercase mb-1">
                      Player Age Group *
                    </label>
                    <select
                      name="ageGroup"
                      required
                      value={formData.ageGroup}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm bg-white"
                    >
                      <option value="">Select Age Group</option>
                      <option value="Mini Tecnica (4-6 Years)">Mini Tecnica (Ages 4 &ndash; 6)</option>
                      <option value="Under 7s & 8s">Under 7s &amp; 8s</option>
                      <option value="Under 9s & 10s">Under 9s &amp; 10s</option>
                      <option value="Under 11s & 12s">Under 11s &amp; 12s</option>
                      <option value="Under 13s to 16s">Under 13s to 16s</option>
                      <option value="Older / Specialist (16+)">Older / 1-on-1 (16+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-700 uppercase mb-1">
                      Preferred Hub Venue *
                    </label>
                    <select
                      name="hubLocation"
                      required
                      value={formData.hubLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm bg-white"
                    >
                      <option value="">Select Venue</option>
                      <option value="Bromley (Bishop Justus 3G)">Bromley (Bishop Justus School 3G)</option>
                      <option value="Beckenham (Goals 3G & Indoor)">Beckenham (Goals Complex &amp; Indoor)</option>
                      <option value="West Wickham (Pickhurst Rise)">West Wickham (Pickhurst Rise Pitches)</option>
                      <option value="Shirley (Coloma 3G Arena)">Shirley (Coloma 3G Arena)</option>
                    </select>
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <label className="block text-xs font-heading font-bold text-slate-700 uppercase mb-1">
                    Program of Interest *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm bg-white"
                  >
                    <option value="Academy Development Hub">1. Academy Sessions (Midweek 3G Hub)</option>
                    <option value="Schools Partnership & PPA">2. Schools Coaching (Curriculum P.E. &amp; PPA)</option>
                    <option value="Academy Showcases">3. Showcase Games (Pro Academy Matchplay)</option>
                    <option value="Tournaments & Day Camps">4. Tournaments (Youth Cups &amp; Holiday Camps)</option>
                    <option value="1-on-1 Precision Coaching">5. 1-2-1 Specialist Coaching</option>
                    <option value="Futsal Technical Masterclass">6. Futsal Masterclasses (Indoor Brazilian)</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-heading font-bold text-slate-700 uppercase mb-1">
                    Player Notes / Current Team (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="e.g. Currently plays for grassroots team, wants to improve weak foot speed and 1v1 confidence..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-heading font-bold text-base uppercase tracking-wider py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Assessment Request</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

