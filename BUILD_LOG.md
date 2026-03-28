# Portfolio Build Log — Mohammed Wasif Farooqui
## Full development history from start to finish

---

## Session 1 — Initial Build (March 27, 2026)

### Request
Build a fully responsive IT Professional portfolio landing page inspired by Landonorris.com's editorial style, with a B&W → colour hero reveal effect on hover.

### What was built
- **3 files created:** `index.html`, `style.css`, `script.js`
- **7 sections:** Hero, About, Skills, Creations/Gallery, Circular Text Statement, Testimonials, Footer
- **Hero reveal effect:** Two stacked images (B&W base + colour top layer). Canvas draws a soft radial gradient at cursor position, converts to data-URL, applies as CSS `mask-image`. Smooth lerp easing on cursor follow. Fades in/out on hover/leave.
- **Gallery slider:** Arrow buttons + drag/swipe support, responsive card count (3→2→1)
- **Scroll reveal:** IntersectionObserver-powered fade-up animations
- **Circular text:** SVG `<textPath>` with infinite CSS rotation
- **Typography:** Bebas Neue (headings) + Inter (body) via Google Fonts
- **Colour palette:** Dark near-black, off-white, monochrome accents
- **Responsive:** Desktop, tablet (≤1024px), mobile (≤640px)

### Image placeholders used
- `images/hero-bw.jpg` / `images/hero-color.jpg`
- `images/about-1.jpg` through `about-4.jpg`
- `images/creation-1.jpg` through `creation-4.jpg`
- `images/circle-portrait.jpg`
- `images/footer-portrait.jpg`

---

## Session 2 — Profile Integration (March 27, 2026)

### Input received
- **PDF:** `Profile (4).pdf` — full LinkedIn profile export
- **B&W photo:** `Wasifblack.png`
- **Colour photo:** `Wasif Mohammed_JCDecaux_0875_January 2023.jpg`

### Profile data extracted
- **Name:** Mohd Wasif Farooqui
- **Title:** Product Specialist MEA at JCDecaux
- **Location:** Dubai, UAE
- **Email:** wasiffrd@gmail.com
- **LinkedIn:** linkedin.com/in/wasifpr
- **Education:** MSc IT (AI) — University of Mumbai; BSc IT — Rizvi College
- **Certifications:** Agile, EA Product Management, Gemini Prompting, RPA, Google IT Support
- **Experience:** JCDecaux (2 roles), Focus Media, Max Advertising

### Changes made
- All content updated with real profile data
- Hero images pointed to actual photo files
- Skills updated: Product Support (90%), Data Viz & SQL (85%), GenAI & Automation (80%), IT Support (88%)
- Testimonials rewritten for IT/product context
- Footer updated with real LinkedIn and email
- Placeholder images swapped to relevant Unsplash URLs (AI, data, tech themes)

---

## Session 3 — Certifications & Documentation (March 27, 2026)

### New sections added
1. **Experience Timeline** — 4 roles with vertical timeline, blush-pink dot markers
2. **Certifications & Education** — 5 cert cards + 2 education cards

### Navigation updated
- Added JOURNEY and CERTS links to header

### Documentation added
- `index.html` — full comment header with section index + "How to Update" guide
- `style.css` — comment header with customisation guide, section index, BEM conventions
- `script.js` — comment header explaining each module + how to tune effects

### README.md created
- Project overview, folder structure, features, tech stack
- Customisation guide (colours, fonts, content, hero effect)
- Deployment instructions (GitHub Pages, Netlify, Vercel)
- Contact info, MIT license

---

## Session 4 — AI & Product Manager Repositioning (March 27, 2026)

### Content reframing
- **Title:** "IT & Product Specialist" → "AI & Product Strategist"
- **Hero word:** "SPECIALIST" → "AI" (later changed to "PRODUCT SPECIALIST")
- **Subtitle:** "AI Strategist · Product Manager · Dubai, UAE"
- **About headline:** "WHERE AI MEETS PRODUCT"
- **Skills reordered:** GenAI & LLM Strategy (92%), Product Management (90%), Data & Analytics (85%), Cross-Functional Leadership (88%)
- **Experience:** Roles reframed with PM/AI language (roadmap ownership, AI-first thinking)
- **Case Studies:** AI-Powered Dashboards, Product Roadmap, RPA Automation, GenAI Integration
- **Testimonials:** Quotes from VP Product, CTO, Regional Director — AI/PM focused
- **Circular text:** "AI PRODUCT STRATEGY DATA INNOVATION LEADERSHIP"

### Colour shift (then reverted)
- Briefly changed to blue-violet accents → user felt it broke the black monochrome vibe
- Reverted to silver `#c0c0c0` + mid-grey `#9a9a9a` accents
- Testimonial cards: warm grey `#e8e8e6`
- Kept monochrome feel — colour reveal remains the only dramatic colour moment

### About images updated
- Unsplash: AI visualization, data dashboard, product strategy, code/AI models

---

## Session 5 — Certifications Fix & Dark Mode (March 28, 2026)

### Cert card fix
- Cards changed from flat white `#fff` to `#f7f7f5` with subtle `1px` border
- Hover lifts to true white for contrast
- Same treatment for testimonial white cards

### Dark/Light mode toggle
- Moon (☾) button added to hero nav
- Click toggles `body.dark-mode` class
- All light sections (About, Certs, Creations, Testimonials) go dark
- Cards, inputs, buttons all have dark mode overrides
- Preference saved to `localStorage` — persists across visits
- Icon switches between ☾ (moon) and ☉ (sun)

---

## Session 6 — Smart Sticky Header (March 28, 2026)

### Implementation
- Separate `<header>` element with same nav links + theme toggle
- Hidden during hero section (no visual interference with cinematic intro)
- Slides down when user scrolls UP past the hero
- Hides when scrolling DOWN (never blocks content)
- Semi-transparent dark glass background with `backdrop-filter: blur(12px)`
- Compact 56px height
- Both theme toggles kept in sync via shared `syncIcons()` function

### Documentation
- "TO REMOVE" instructions in all 3 files (HTML, CSS, JS)
- Each piece clearly labelled for easy removal/restoration

---

## Session 7 — Header Declutter & New Features (March 28, 2026)

### Header simplified
- Removed from nav: "Download CV" button, "Let's Talk" button, HOME link, CERTS link
- Kept: Logo (MOHAMMED WASIF) + 4 links + theme toggle
- Same cleanup on sticky header

### CV Download moved to hero body
- Two pill buttons below subtitle: "↓ Download CV" + "Get in Touch"
- CV links to `Profile (4).pdf`
- "Get in Touch" links to #contact

### Case study details added
- Each creation card now has a `.creations__overlay` with problem→result description
- Descriptions reveal on hover (desktop) or always visible (mobile)

### Tools & Tech strip added
- After skills section, before certifications
- 12 pill tags: Python, SQL Server, Power BI, Google Gemini, ChatGPT/OpenAI, Jira, Agile/Scrum, RPA/UiPath, Figma, HTML/CSS/JS, Data Modeling, Prompt Engineering
- Hover inverts colours

### Contact form added
- Before footer, light background
- Two-column layout: contact info left, form right
- Fields: Name, Email, Message
- Connected to Formspree (ID: `maqlqlpv`)
- AJAX submission — no redirect, stays on page
- Success/error messages shown inline
- Falls back to mailto: if Formspree ID removed
- Dark mode styles included

### GitHub link added
- Footer socials: LI, GH, EM
- GitHub link: github.com/wasifpr

---

## Session 8 — Name & Year Updates (March 28, 2026)

### Changes
- Logo: "WASIF" → "MOHAMMED WASIF" (both hero and sticky header)
- Year: 2025 → 2026 (hero label + footer copyright)
- Footer copyright: "© 2026 Mohammed Wasif Farooqui"

---

## Session 9 — Background Word & Font Size (March 28, 2026)

### Changes
- Hero bg word: "AI" → "STRATEGIST" → "PRODUCT SPECIALIST"
- Footer bg word: same
- Font size reduced: `clamp(6rem, 18vw, 16rem)` → `clamp(3.5rem, 10vw, 9rem)` to fit longer text

---

## Session 10 — Formspree Integration (March 28, 2026)

### Changes
- Replaced `YOUR_FORM_ID` with real Formspree ID `maqlqlpv`
- Form now submits via AJAX with `Accept: application/json` header
- No Formspree branded redirect page shown
- Button shows "Sending…" during submission
- Green success / red error messages inline

---

## Session 11 — Full Mobile Responsiveness Pass (March 28, 2026)

### Comprehensive mobile fixes (≤640px)
- **Hero:** portrait 75vw/320px max, bg word scales to `clamp(2rem, 8vw, 4rem)`, reduced padding
- **Logo:** smaller (1.1rem) on mobile
- **Action buttons:** stack vertically, bigger tap targets (14px padding)
- **About:** headline scales, cards 180px height
- **Experience:** headline scales, proper spacing
- **Skills:** blob indicator hidden, percentages scale down
- **Tech stack:** smaller pills (0.62rem, 8px 16px padding)
- **Case studies:** overlay text always visible on mobile (no hover on touch)
- **Certs:** single column, label scales
- **Statement:** smaller circle (260px–360px), smaller curved text
- **Testimonials:** wider cards (280px), smaller headline, adjusted padding
- **Contact:** single column, full-width submit button
- **Footer:** scaled THANK YOU text, smaller bg word, wrapped links

---

## Session 12 — Final Audit & Documentation Update (March 28, 2026)

### HTML fixes
- Form doc note: "replace YOUR_FORM_ID" → "Formspree ID already set (maqlqlpv)"
- CV reference: `.hero__cta-btn--cv` → `.hero__action-btn`
- Section comment numbers fixed (Circular Text → 7, Testimonials → 8)

### JS doc header updated
- Feature list expanded from 3 to 7 (added dark mode, contact form, sticky header)
- Line number references corrected
- Added Formspree ID and SCROLL_DELTA to modification guide

### README.md fully rewritten
- Title: "Mohammed Wasif Farooqui — AI & Product Strategist"
- All 14 features listed
- Correct colour values
- New sections: Contact form setup, Dark mode, Sticky header removal
- WordPress/Divi/Elementor form integration note
- Folder structure includes `Profile (4).pdf`
- Phone number added to contact section

### GitHub footer link
- Updated from `https://github.com/` to `https://github.com/wasifpr`

---

## Session 13 — Career Action Plan (March 28, 2026)

### Created `CAREER_ACTION_PLAN.md`
Comprehensive career strategy document including:
- **Target role:** AI Product Manager (not AI Engineer)
- **Phase 1:** LinkedIn rewrite (copy-paste ready headline, about, bullets)
- **Phase 2:** 4 GitHub projects (AI FAQ Bot, AI Dashboard, Prompt Engineering Playbook, PRD Template)
- **Phase 3:** Certification recommendations (Google PM, DeepLearning.AI, Google Cloud GenAI)
- **Phase 4:** Job search strategy (15 Dubai target companies, outreach templates)
- **Phase 5:** Interview prep (PM frameworks, AI-specific questions, killer story script)
- **8-week timeline** with daily habits

---

## Final File Inventory

```
D:\wasif\
├── index.html                    # Main page — all 11 sections
├── style.css                     # ~1600 lines — styling + dark mode + responsive
├── script.js                     # ~420 lines — 7 interactive features
├── README.md                     # GitHub-ready project documentation
├── BUILD_LOG.md                  # This file — full development history
├── CAREER_ACTION_PLAN.md         # Career strategy & action items
├── Profile (4).pdf               # Downloadable CV
├── Wasifblack.png                # Hero — grayscale portrait
└── Wasif Mohammed_JCDecaux_0875_January 2023.jpg  # Hero — colour portrait
```

---

## Technical Decisions & Rationale

**Why vanilla HTML/CSS/JS (no framework)?**
- Zero build step — open `index.html` and it works
- Easy to host anywhere (GitHub Pages, Netlify, any web host)
- Easy to edit for someone without a dev environment
- Lightweight — fast load times, no dependencies

**Why single file instead of splitting into partials?**
- Single-page site doesn't benefit from splitting
- Would require a build tool (adds complexity for no gain)
- Comment banners + Ctrl+F make navigation easy

**Why Formspree instead of custom backend?**
- Static site has no server — needs external form handler
- Formspree free tier: 50 submissions/month (plenty for a portfolio)
- AJAX submission avoids redirect — premium feel
- Falls back to mailto: if Formspree removed

**Why monochrome palette?**
- The B&W → colour hero reveal is the hero effect
- Monochrome everywhere else makes the reveal feel dramatic and intentional
- High contrast is more readable and more premium
- Matches the editorial/magazine aesthetic direction

---

*Last updated: March 28, 2026*
