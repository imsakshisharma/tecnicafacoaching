const fs = require('fs');

// Read current html
let html = fs.readFileSync('tecnica.html', 'utf8');

// 1. Replace header nav right actions
const oldHeaderRight = `      <!-- Action Button & Mobile Burger -->
      <div class="nav-right-actions">
        <a href="#contact" class="hero-primary-pill-btn trigger-booking-modal" style="padding: 0.65rem 1.4rem; font-size: 0.88rem;">
          <span>Book a Session</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <button type="button" class="mobile-burger-toggle" id="mobileToggleBtn" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>`;

const newHeaderRight = `      <!-- Action Button & Mobile Burger -->
      <div class="nav-action-wrapper">
        <a href="#contact" class="header-cta-pill-btn trigger-booking-modal">
          <span>Book a Session</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <button type="button" class="mobile-hamburger-btn" id="mobileHamburgerBtn" aria-label="Toggle navigation menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>`;

html = html.replace(oldHeaderRight, newHeaderRight);

// 2. Replace Mobile Drawer Menu
const oldDrawer = `  <!-- Mobile Drawer Menu -->
  <div class="mobile-nav-drawer" id="mobileNavDrawer">
    <div class="mobile-drawer-header">
      <div class="brand-logo-cluster">
        <img src="assets/logo_transparent.png" alt="Tecnica FA Crest" class="brand-crest-img" style="height: 42px;">
        <span class="brand-title-main">TECNICA <span class="text-gold">FA</span></span>
      </div>
      <button type="button" class="mobile-drawer-close" id="mobileDrawerClose" aria-label="Close menu">&times;</button>
    </div>
    <div class="mobile-drawer-body">
      <a href="#home" class="mobile-nav-link">1. Home</a>
      <a href="#about" class="mobile-nav-link">2. About Us</a>
      <a href="#philosophy" class="mobile-nav-link">3. Coaching Philosophy</a>
      <a href="#sessions" class="mobile-nav-link">4. Academy Sessions</a>
      <a href="#schools" class="mobile-nav-link">5. Schools</a>
      <a href="#tournaments" class="mobile-nav-link">6. Tournaments / Showcase Events</a>
      <a href="#gallery" class="mobile-nav-link">7. Gallery</a>
      <a href="#contact" class="mobile-nav-link">8. Contact Us</a>
      <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
        <a href="#contact" class="hero-primary-pill-btn w-full text-center trigger-booking-modal" style="display: block;">Book Free Assessment Trial</a>
        <a href="https://www.tecnicafa.com/" class="nav-single-link text-gold" style="display: block; margin-top: 1rem; text-align: center;">&larr; Switch to Tecnica FA CIC Main Club</a>
      </div>
    </div>
  </div>`;

const newDrawer = `  <!-- Mobile Drawer Menu Overlay (Hidden on desktop) -->
  <div class="mobile-drawer-overlay" id="mobileDrawerOverlay">
    <div class="mobile-drawer-container">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div class="brand-logo-cluster">
          <img src="assets/logo_transparent.png" alt="Tecnica FA Crest" class="brand-crest-img" style="height: 38px;">
          <span class="brand-title-main" style="font-size: 1.3rem;">TECNICA <span class="text-gold">FA</span></span>
        </div>
        <button type="button" id="mobileDrawerCloseBtn" aria-label="Close menu" style="background: transparent; border: none; color: #fff; font-size: 1.75rem; cursor: pointer;">&times;</button>
      </div>

      <div class="mobile-drawer-links">
        <a href="#home" class="mobile-drawer-link">1. Home</a>
        <a href="#about" class="mobile-drawer-link">2. About Us</a>
        <a href="#philosophy" class="mobile-drawer-link">3. Coaching Philosophy</a>
        <a href="#sessions" class="mobile-drawer-link">4. Academy Sessions</a>
        <a href="#schools" class="mobile-drawer-link">5. Schools</a>
        <a href="#tournaments" class="mobile-drawer-link">6. Tournaments / Showcases</a>
        <a href="#gallery" class="mobile-drawer-link">7. Gallery</a>
        <a href="#contact" class="mobile-drawer-link">8. Contact Us</a>
      </div>

      <div class="mobile-drawer-action">
        <a href="#contact" class="hero-primary-pill-btn trigger-booking-modal" style="width: 100%; justify-content: center; box-sizing: border-box;">
          Book Free Assessment Trial
        </a>
        <a href="https://www.tecnicafa.com/" class="nav-single-link text-gold" style="display: block; margin-top: 1rem; text-align: center;" target="_blank" rel="noopener">
          &larr; Switch to Tecnica FA CIC Main Club
        </a>
      </div>
    </div>
  </div>`;

html = html.replace(oldDrawer, newDrawer);

// 3. Replace FAQ Accordion
const oldFaqRegex = /<section class="faq-accordion-section" id="faq"[\s\S]*?<\/section>/;
const newFaq = `<section class="faq-accordion-section" id="faq" style="padding: 6.5rem 0; background: var(--bg-tertiary);">
      <div class="container">
        <div class="text-center" style="max-width: 800px; margin: 0 auto 3.5rem;">
          <div class="section-eyebrow-pill" style="margin: 0 auto 1rem;">
            <span>/</span>
            <span>PARENT GUIDANCE</span>
          </div>
          <h2 class="section-title-large">Frequently Asked Questions</h2>
          <p class="section-subtitle-copy">
            Everything you need to know about our coaching syllabus, session bookings, and the distinction between Coaching Ltd and our community club.
          </p>
        </div>

        <div class="faq-accordion-stack">
          
          <div class="faq-accordion-item is-open">
            <button type="button" class="faq-accordion-trigger" aria-expanded="true">
              <span class="faq-question-label">What is the difference between Tecnica FA Coaching Ltd and Tecnica Football Academy CIC?</span>
              <span class="faq-chevron-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </button>
            <div class="faq-accordion-body">
              <p style="margin: 0;">
                <strong>Tecnica FA Coaching Ltd</strong> is our specialized coaching organization responsible for midweek academy technical hubs, Futsal masterclasses, primary/secondary school partnerships, 1-on-1 coaching, and holiday day camps. <br><br>
                <strong>Tecnica Football Academy CIC</strong> is our FA Charter Standard Community Interest Club that manages our competitive weekend league teams (U7s to U15s) competing in Sunday junior leagues.
              </p>
            </div>
          </div>

          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-trigger" aria-expanded="false">
              <span class="faq-question-label">What qualifications do your coaches hold?</span>
              <span class="faq-chevron-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </button>
            <div class="faq-accordion-body">
              <p style="margin: 0;">
                Our Director of Coaching, Austin Berkley, holds the prestigious <strong>UEFA B License and FA Level 3 qualification</strong> and previously managed within the <strong>Crystal Palace FC Youth Academy</strong>. All coaches hold verified FA coaching badges, enhanced DBS checks, FA First Aid, and FA Safeguarding Children certifications.
              </p>
            </div>
          </div>

          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-trigger" aria-expanded="false">
              <span class="faq-question-label">How does the free assessment trial work?</span>
              <span class="faq-chevron-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </button>
            <div class="faq-accordion-body">
              <p style="margin: 0;">
                When you register your child for an assessment trial, they will join an age-appropriate weekly development or futsal hub session. Our coaches evaluate their ball control, listening, speed of movement, and attitude in a welcoming, low-pressure environment. Following the session, we provide personalized feedback and recommended squad placement.
              </p>
            </div>
          </div>

          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-trigger" aria-expanded="false">
              <span class="faq-question-label">What footwear and equipment is required?</span>
              <span class="faq-chevron-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </button>
            <div class="faq-accordion-body">
              <p style="margin: 0;">
                For our outdoor 3G synthetic pitches (Bromley &amp; Shirley), players should wear moulded studs or astro turf trainers (no metal studs). For indoor Futsal sessions, clean, non-marking indoor trainers or futsal shoes are required. Shin guards and plenty of water are mandatory for all sessions.
              </p>
            </div>
          </div>

          <div class="faq-accordion-item">
            <button type="button" class="faq-accordion-trigger" aria-expanded="false">
              <span class="faq-question-label">Do you partner with local schools for PPA cover?</span>
              <span class="faq-chevron-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </button>
            <div class="faq-accordion-body">
              <p style="margin: 0;">
                Yes! We deliver curriculum P.E. lessons, PPA teacher cover, breakfast clubs, and after-school clubs to primary and secondary schools across West Wickham, Beckenham, and Bromley. Please contact Warren Berkley directly at <strong>07456 528 812</strong> for a school proposal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>`;

html = html.replace(oldFaqRegex, newFaq);

fs.writeFileSync('tecnica.html', html, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Regenerated tecnica.html and index.html!');
