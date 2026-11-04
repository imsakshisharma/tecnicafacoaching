const fs = require('fs');

// 1. Update css/style.css to include the fix rules
let css = fs.readFileSync('css/style.css', 'utf8');

const fixes = `
/* ==========================================================================
   Header, Mobile Drawer, and FAQ Accordion Fixes
   ========================================================================== */

/* Prevent Mobile Drawer from ever displaying on desktop */
.mobile-drawer-overlay {
  display: none;
  position: fixed;
  inset: 76px 0 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  overflow-y: auto;
}

.mobile-drawer-container {
  background: var(--nav-bg, #030a18);
  border-bottom: 1px solid var(--nav-border, rgba(255, 255, 255, 0.1));
  padding: 1.75rem 1.5rem 2.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  max-width: 100%;
}

.mobile-drawer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-drawer-link {
  font-family: var(--font-heading);
  text-transform: uppercase;
  color: var(--text-heading, #fff);
  text-align: left;
  border-radius: var(--radius-sm, 8px);
  padding: 0.7rem 0.85rem;
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  display: block;
}

.mobile-drawer-link:hover,
.mobile-drawer-link.is-active {
  color: var(--gold-500, #ffca05);
  background: rgba(255, 202, 5, 0.08);
}

.mobile-drawer-action {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1.5rem;
  padding-top: 1.5rem;
}

@media (min-width: 1025px) {
  .mobile-drawer-overlay,
  .mobile-nav-drawer,
  .mobile-hamburger-btn {
    display: none !important;
  }
}

@media (max-width: 1024px) {
  .desktop-menu-row {
    display: none !important;
  }
  .mobile-hamburger-btn {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  .mobile-drawer-overlay.is-active,
  .mobile-drawer-overlay.is-open {
    display: block !important;
  }
}

/* Header layout & CTA fix */
.site-header-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--nav-bg, rgba(3, 10, 24, 0.94));
  border-bottom: 1px solid var(--nav-border, rgba(255, 255, 255, 0.08));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

.nav-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  gap: 1rem;
}

.desktop-menu-row {
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 0.9vw, 1.15rem);
  flex-wrap: nowrap;
}

.nav-single-link {
  font-family: var(--font-heading);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--nav-text, #f1f5f9);
  white-space: nowrap;
  padding: 0.4rem 0.2rem;
  font-size: clamp(0.78rem, 0.88vw, 0.92rem);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}

.nav-single-link:hover,
.nav-single-link.is-active {
  color: var(--gold-500, #ffca05);
}

.nav-action-wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 0.5rem;
}

.header-cta-pill-btn {
  border-radius: var(--radius-full, 9999px);
  background: var(--pill-bg, linear-gradient(135deg, #ffca05 0%, #e5a812 100%));
  color: var(--pill-text, #020712);
  font-family: var(--font-heading);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: var(--pill-shadow, 0 6px 20px rgba(255, 202, 5, 0.35));
  white-space: nowrap !important;
  flex-shrink: 0 !important;
  transition: all 0.28s ease;
  cursor: pointer;
  border: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 1.35rem;
  font-size: 0.88rem;
  font-weight: 700;
}

.header-cta-pill-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 202, 5, 0.5);
  color: #000;
}

.mobile-hamburger-btn {
  border-radius: var(--radius-sm, 8px);
  width: 44px;
  height: 44px;
  color: var(--text-heading, #fff);
  cursor: pointer;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: none;
  padding: 0.35rem;
  transition: all 0.2s;
}

/* FAQ Accordion Styling */
.faq-accordion-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 860px;
  margin: 0 auto;
}

.faq-accordion-item {
  background: var(--card-bg, #071530);
  border: 1px solid var(--card-border, rgba(255, 255, 255, 0.08));
  box-shadow: var(--card-shadow, 0 8px 24px rgba(0,0,0,0.4));
  border-radius: var(--radius-md, 14px);
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.faq-accordion-item.is-open {
  border-color: var(--gold-500, #ffca05);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 202, 5, 0.12);
}

.faq-accordion-trigger {
  width: 100%;
  color: var(--text-heading, #fff);
  text-align: left;
  justify-content: space-between;
  align-items: center;
  padding: 1.35rem 1.75rem;
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
}

.faq-question-label {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  padding-right: 1rem;
}

.faq-chevron-circle {
  background: var(--bg-tertiary, #081632);
  width: 32px;
  height: 32px;
  color: var(--gold-500, #ffca05);
  transition: transform 0.28s ease, background 0.28s ease;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.faq-accordion-item.is-open .faq-chevron-circle {
  transform: rotate(180deg);
  background: var(--gold-500, #ffca05);
  color: #020712;
}

.faq-accordion-body {
  color: var(--text-muted, #94a3b8);
  padding: 0 1.75rem 1.5rem;
  font-size: 0.95rem;
  line-height: 1.7;
  display: none;
}

.faq-accordion-item.is-open .faq-accordion-body {
  display: block;
}
`;

fs.writeFileSync('css/style.css', css + '\n' + fixes, 'utf8');
console.log('Updated css/style.css with layout and accordion fixes!');
