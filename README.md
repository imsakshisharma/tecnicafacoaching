# Tecnica FA Coaching Ltd — Next.js Web Platform

Modern, responsive web platform for **Tecnica FA Coaching Ltd** built with **Next.js 14**, **React**, **Tailwind CSS**, and **TypeScript**. Tailored specifically to the updated client requirements featuring a clean **Light Theme**, **Navy Blue branding**, **White Header**, **Youth Action Imagery**, and the **6 Core Coaching Pathways**.

---

## 🌟 Key Updates & Client Feedback Implemented

1. **White Header & Light Theme:**
   - Switched from dark stadium obsidian to a crisp, professional **Light Theme** (`#ffffff` and `#f8fafc`).
   - Sticky header with a pure **white background** and deep navy typography.

2. **Navy Blue Brand Palette:**
   - Grounded in Tecnica FA’s official navy blue (`#002043`), accented with gold (`#ffca05`), turf green (`#10b981`), and crisp neutral surfaces.
   - Deployed the official **Navy Blue SVG Crest Logo** (`/assets/logo-blue.svg`).

3. **Removed FA Chartered / Accredited Claims:**
   - Removed all *"FA Charter Standard Accredited"* badges and mentions across the Top Bar, Director Bio, FAQ, and Footer (as Tecnica FA Coaching Ltd is a dedicated coaching setup, not a grassroots club).
   - Preserved genuine coaching credentials: **UEFA B Licensed Leadership** & **Enhanced DBS Safeguarding**.

4. **Youth Imagery (Children, Not Adults):**
   - Replaced adult portrait photography (`hero_austin.jpg`) with active high-definition photography of **children and youth players** engaged in ball mastery, futsal masterclasses, holiday camps, and academy matches.

5. **Removed the 4 Metric Boxes:**
   - Removed the 4 clunky metric cards from the hero section, creating a spacious, modern, and conversion-focused header and hero layout.

6. **The 6 Dedicated Coaching Boxes:**
   - Prominently showcases the exact 6 programs requested:
     1. **Academy Sessions** — Midweek evening technical hubs (Ages 7–15) on floodlit 3G pitches.
     2. **Schools Coaching** — National Curriculum P.E. lessons, PPA teacher cover, breakfast & after-school clubs.
     3. **Showcase Games** — High-level showcase fixtures against professional academies (Fulham FC Academy, Crystal Palace).
     4. **Tournaments** — Half-term cups, summer youth festivals, and competitive matchplay.
     5. **1-2-1 Coaching** — Bespoke private technical clinics tailored to position-specific mechanics.
     6. **Futsal Masterclasses** — Fast-paced indoor Brazilian futsal with low-bounce ball technology.

---

## 🚀 Running on Localhost

To view and develop the home page on your computer:

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start the Next.js local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. The page supports live hot-reloading as you make changes.

---

## 🌐 Deploying to Netlify

The project is structured with zero-configuration Netlify deployment via `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Steps to Deploy:
1. Push your repository to **GitHub** (or GitLab/Bitbucket).
2. Log into your **Netlify** account and click **"Add new site" &rarr; "Import an existing project"**.
3. Select your repository. Netlify will automatically detect:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `out`
4. Click **"Deploy site"** — Netlify will build and deploy the static site globally to edge CDN with 100% speed scores.

---

## 📁 Project Directory Structure

```
tecnica-fa-coaching/
├── public/
│   ├── assets/
│   │   ├── images/               # High-res youth action & futsal photography
│   │   ├── wp/                   # Original assets
│   │   ├── logo-blue.svg         # Official Navy Blue Tecnica Crest
│   │   └── logo_transparent.png
├── src/
│   ├── app/
│   │   ├── globals.css           # Global typography & Tailwind directives
│   │   ├── layout.tsx            # Root layout, metadata & favicon
│   │   └── page.tsx              # Complete Home Page
│   └── components/
│       ├── TopBar.tsx            # Navy top bar (DBS & direct phones)
│       ├── Navbar.tsx            # Sticky White Header with Blue Logo
│       ├── Hero.tsx              # Children action hero (4 boxes removed)
│       ├── ServicesGrid.tsx      # The 6 Core Boxes (Academy, Schools, Showcases, etc.)
│       ├── Philosophy.tsx        # Dutch Coerver 6-pillar pyramid
│       ├── AboutDirectors.tsx    # UEFA B Coaching Leadership
│       ├── SchoolsSection.tsx    # Schools P.E. & PPA delivery
│       ├── ShowcasesSection.tsx  # Pro Academy Fixtures (Fulham & Palace)
│       ├── GallerySection.tsx    # Youth match action gallery with lightbox
│       ├── TestimonialsSection.tsx # Parent reviews
│       ├── FaqSection.tsx        # Structured FAQ
│       ├── BookingForm.tsx       # Trial assessment registration form
│       └── Footer.tsx            # Navy footer with hub venues & links
├── netlify.toml                  # Netlify deployment configuration
├── next.config.js                # Static export configuration
├── package.json                  # Next 14 & React 18 dependencies
├── postcss.config.js
├── tailwind.config.js            # Custom Navy & Gold brand tokens
└── tsconfig.json
```
