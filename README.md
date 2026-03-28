# Mohammed Wasif Farooqui — Portfolio

> **AI & Product Strategist · Middle East & Africa**
> MSc Information Technology — Artificial Intelligence · University of Mumbai

A premium, monochrome editorial portfolio built with vanilla HTML, CSS and JavaScript. Features a cursor-tracked B&W → colour hero reveal, career timeline, certifications, case studies with detail overlays, tools & tech strip, contact form (Formspree), dark/light mode, smart sticky header, and fully responsive layout.

---

## ✨ Live Preview

Open `index.html` in any modern browser — no build step required.

```bash
# Optional: local dev server with live-reload
npx serve .
```

---

## 📁 Folder Structure

```
wasif/
├── index.html          # All sections (single-page site)
├── style.css           # Styling, dark mode, responsive rules
├── script.js           # Hero reveal, slider, form, sticky header, dark mode
├── README.md           # This file
├── Profile (4).pdf     # Downloadable CV
├── Wasifblack.png      # Hero — grayscale portrait
└── Wasif Mohammed_JCDecaux_0875_January 2023.jpg  # Hero — colour portrait
```

> About/creation images currently use Unsplash URLs. To use local images, update `<img src>` paths in `index.html`.

---

## 🎨 Features

- **Hero B&W → Colour Reveal** — cursor-tracked radial mask using `<canvas>` → CSS `mask-image`
- **Experience Timeline** — vertical timeline with dot markers, reverse-chronological
- **Skills & Expertise** — percentage bars with bold headings
- **Tools & Tech Strip** — horizontal pill-tag display of your stack
- **Certifications & Education** — card grid + dark education cards
- **Case Studies** — gallery slider with hover-reveal detail overlays (problem → result)
- **Circular Text** — SVG `<textPath>` with infinite CSS rotation
- **Testimonials** — petal-shaped quote cards with asymmetric layout
- **Contact Form** — AJAX-powered via Formspree (no redirect, stays on page)
- **Dark / Light Mode** — toggle in nav, persisted in localStorage
- **Smart Sticky Header** — hidden in hero, appears on scroll-up, hides on scroll-down
- **CV Download** — one-click PDF download from hero section
- **Scroll Reveal** — `IntersectionObserver` fade-up on first enter
- **Responsive** — three breakpoints: desktop, tablet (≤ 1024px), mobile (≤ 640px)

---

## 🛠️ Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, `clamp()`, grid, flexbox, `mask-image`, `backdrop-filter`
- **JavaScript (ES6)** — zero dependencies, IIFE-scoped
- **Google Fonts** — Bebas Neue (headings), Inter (body)
- **Formspree** — contact form backend (free tier, 50 submissions/month)

---

## 🔧 How to Customise

### Content
All text lives in `index.html`. Each section has a comment banner — search `========` to jump between them.

- **Name / title** → search `MOHAMMED WASIF` and `Farooqui`
- **Hero images** → update `<img src>` inside `#heroPortrait`
- **Background word** → edit text inside `.hero__bg-word`
- **About images** → update `<img src>` inside `.about__gallery`
- **Experience** → add/remove `.timeline__item` blocks
- **Skills** → edit `.skills__row` blocks (percentage + description)
- **Tools & Tech** → add/remove `.techstack__item` `<span>` elements
- **Certifications** → add/remove `.certs__card` blocks
- **Case studies** → edit `.creations__overlay` blocks (title + description)
- **Gallery images** → update `<img src>` inside `#creationsTrack`
- **Testimonials** → edit `.testimonials__card` blocks
- **Contact info** → search `mailto:` and `linkedin.com`
- **CV download** → update `href` on `.hero__action-btn` (points to your PDF)
- **GitHub link** → update `href` on the GH link in footer `.footer__socials`

### Colours
Edit CSS custom properties at the top of `style.css`:

```css
:root {
  --clr-dark:   #0a0a0a;   /* Dark section backgrounds    */
  --clr-light:  #f2f2f0;   /* Light section backgrounds    */
  --clr-white:  #ffffff;   /* Card backgrounds             */
  --clr-text:   #1a1a1a;   /* Body text                    */
  --clr-blush:  #c0c0c0;   /* Silver accent (skill %, dots)*/
  --clr-beige:  #9a9a9a;   /* Mid-grey secondary           */
}
```

### Fonts
1. Pick a new pair on [Google Fonts](https://fonts.google.com/)
2. Replace the `<link>` tag in `index.html`
3. Update `--ff-heading` and `--ff-body` in `style.css`

### Hero reveal effect
In `script.js`:
- `REVEAL_RADIUS` — size of the colour circle (default `150`)
- `FADE_SPEED` — fade in/out speed (default `0.045`)

### Contact form
The form uses **Formspree** for zero-backend handling.
- Current Formspree ID: `maqlqlpv`
- To change: update the `<form action>` URL in `index.html`
- AJAX submission keeps users on-page (no Formspree redirect)
- If Formspree ID is removed, falls back to `mailto:` automatically
- To use on WordPress: paste the same `<form action>` in a Divi Code Module or Elementor HTML widget

### Dark mode
- Toggle button in both the hero nav and sticky header
- Preference saved to `localStorage` — persists across visits
- To default to dark: add `class="dark-mode"` to `<body>` in `index.html`

### Sticky header
- Hidden during hero, slides in on scroll-up, hides on scroll-down
- **To remove:** delete `<header id="stickyHeader">` in HTML, `.sticky-header` styles in CSS, and block `7. STICKY HEADER` in JS

---

## 🚀 Deployment

Static site — deploy anywhere:

- **GitHub Pages** — push to `main`, enable Pages in repo settings
- **Netlify / Vercel** — drag-and-drop or connect repo
- **Any web host** — upload via FTP/SFTP

### GitHub Pages quick setup

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then: **Settings → Pages → Source: main / root**
Live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## 📬 Contact

- **Email:** wasiffrd@gmail.com
- **Phone:** +971 529806036
- **LinkedIn:** [linkedin.com/in/wasifpr](https://www.linkedin.com/in/wasifpr)
- **Location:** Dubai, United Arab Emirates

---

## 📄 License

Open-source under the [MIT License](https://opensource.org/licenses/MIT).

---

*Built with care. Designed to impress.*
