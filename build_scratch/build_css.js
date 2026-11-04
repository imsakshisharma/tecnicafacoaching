const fs = require('fs');
const path = require('path');

fs.mkdirSync('css', { recursive: true });
fs.mkdirSync('js', { recursive: true });

// Read existing demo-style.css
const baseCss = fs.readFileSync('demo-style.css', 'utf8');

// Custom styling additions for Coaching Ltd, Schools, Philosophy, Futsal, etc.
const coachingAdditions = `
/* ==========================================================================
   Tecnica FA Coaching Ltd - Dark Theme Enhancements & Custom Sections
   ========================================================================== */

:root {
  --bg-primary: #020712;
  --bg-secondary: #050e20;
  --bg-tertiary: #081632;
  --nav-bg: rgba(3, 10, 24, 0.94);
  --nav-border: rgba(255, 255, 255, 0.08);
  --nav-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
  --nav-text: #f1f5f9;
  --nav-text-hover: #ffca05;
  --card-bg: rgba(7, 21, 48, 0.72);
  --card-border: rgba(255, 255, 255, 0.08);
  --card-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  --card-hover-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
  --text-main: #e2e8f0;
  --text-heading: #ffffff;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --eyebrow-color: #ffca05;
  --pill-bg: linear-gradient(135deg, #ffca05 0%, #e5a812 100%);
  --pill-hover: linear-gradient(135deg, #ffd838 0%, #ffca05 100%);
  --pill-text: #020712;
  --pill-shadow: 0 6px 20px rgba(255, 202, 5, 0.35);
  --hero-overlay-bg: radial-gradient(circle at 75% 35%, rgba(0, 32, 67, 0.45) 0%, rgba(2, 7, 18, 0.92) 80%);
  --footer-bg: #01040a;
  --accent-gold: #ffca05;
  --accent-green: #10b981;
  --accent-cyan: #06b6d4;
  --accent-red: #ec1940;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: var(--font-body, 'Plus Jakarta Sans', sans-serif);
  line-height: 1.65;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

/* Entity distinction banner */
.entity-badge-bar {
  background: linear-gradient(90deg, #071530 0%, #0d224d 50%, #071530 100%);
  border-bottom: 1px solid rgba(255, 202, 5, 0.2);
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  color: #cbd5e1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.entity-badge-tag {
  background: #ffca05;
  color: #020712;
  font-weight: 800;
  font-family: var(--font-heading);
  text-transform: uppercase;
  padding: 0.15rem 0.55rem;
  border-radius: 9999px;
  font-size: 0.72rem;
  letter-spacing: 0.5px;
}
.entity-switch-link {
  color: #ffca05;
  text-decoration: underline;
  font-weight: 600;
  transition: opacity 0.2s;
}
.entity-switch-link:hover {
  opacity: 0.85;
}

/* Coerver Philosophy Grid */
.philosophy-section {
  padding: 6.5rem 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}
.philosophy-grid-6 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  margin-top: 3rem;
}
.philosophy-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  display: flex;
  flex-direction: column;
}
.philosophy-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 202, 5, 0.4);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 202, 5, 0.1);
}
.philosophy-step-num {
  font-family: var(--font-heading);
  font-size: 2.8rem;
  font-weight: 800;
  color: rgba(255, 202, 5, 0.2);
  line-height: 1;
  margin-bottom: 0.5rem;
}
.philosophy-card:hover .philosophy-step-num {
  color: rgba(255, 202, 5, 0.5);
}
.philosophy-card-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.philosophy-card-desc {
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.65;
  flex-grow: 1;
}
.coerver-legacy-banner {
  margin-top: 3.5rem;
  background: linear-gradient(135deg, rgba(8, 22, 50, 0.8) 0%, rgba(2, 7, 18, 0.95) 100%);
  border: 1px solid rgba(255, 202, 5, 0.25);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.club-crest-logos {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.club-crest-badge {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-family: var(--font-heading);
  font-weight: 700;
  color: #f1f5f9;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

/* Schools Partnership Section */
.schools-section {
  padding: 6.5rem 0;
  background: var(--bg-primary);
  position: relative;
}
.schools-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}
.school-offering-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-lg);
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}
.school-offering-card:hover {
  transform: translateY(-5px);
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
}
.school-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  margin-bottom: 1.25rem;
}
.school-offering-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
}
.school-offering-desc {
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}
.school-feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.school-feature-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: #cbd5e1;
}
.school-feature-check {
  color: #10b981;
  flex-shrink: 0;
}

/* Tournaments & Pro Showcases Section */
.tournaments-section {
  padding: 6.5rem 0;
  background: var(--bg-tertiary);
  position: relative;
}
.showcase-featured-match {
  background: linear-gradient(135deg, rgba(7, 21, 48, 0.9) 0%, rgba(2, 7, 18, 0.95) 100%);
  border: 1px solid rgba(255, 202, 5, 0.25);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
}
.showcase-match-thumb {
  width: 100%;
  height: 320px;
  border-radius: var(--radius-md);
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.showcase-fixture-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}
.showcase-fixture-row {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s;
}
.showcase-fixture-row:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 202, 5, 0.3);
}

/* Modal lightbox */
.gallery-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 99999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(8px);
}
.gallery-modal-overlay.is-active {
  display: flex;
}
.gallery-modal-box {
  max-width: 900px;
  width: 100%;
  position: relative;
  background: #050e20;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
}
.gallery-modal-img {
  width: 100%;
  max-height: 65vh;
  object-fit: contain;
  background: #000;
  display: block;
}
.gallery-modal-info {
  padding: 1.5rem;
}
.gallery-modal-close-btn {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
}
.gallery-modal-close-btn:hover {
  background: #ec1940;
  border-color: #ec1940;
}

/* Success notification toast */
.toast-success-banner {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
  border: 1px solid #10b981;
  color: #ffffff;
  padding: 1.25rem 1.75rem;
  border-radius: var(--radius-md);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  display: none;
  align-items: center;
  gap: 1rem;
  z-index: 999999;
  max-width: 420px;
  animation: slideInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-success-banner.is-visible {
  display: flex;
}
@keyframes slideInUp {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Responsive queries */
@media (max-width: 1024px) {
  .philosophy-grid-6,
  .schools-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  .showcase-featured-match {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .philosophy-grid-6,
  .schools-grid-3 {
    grid-template-columns: 1fr;
  }
  .coerver-legacy-banner {
    flex-direction: column;
    text-align: center;
  }
  .club-crest-logos {
    justify-content: center;
  }
}
`;

// Combine into unified stylesheet
fs.writeFileSync('css/style.css', baseCss + '\n' + coachingAdditions, 'utf8');
console.log('Written css/style.css, size:', fs.statSync('css/style.css').size);
