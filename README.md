<div align="center">

<img src="site/public/logo-v2.png" width="120" alt="Sameer Gorde studio mark" />

# 🎨 Sameer Gorde — Artist Portfolio

*Drawings and paintings on paper — the body, memory, and migration.*

**A premium, motion-rich single-artist portfolio that turns 29 studio works across 4 series into a quiet, museum-style browsing experience.**

<br />

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis_Smooth_Scroll-1A1A1A?style=for-the-badge&logo=apple&logoColor=white)
![Sharp](https://img.shields.io/badge/Sharp_WebP-99CC00?style=for-the-badge&logo=sharp&logoColor=white)

<br />

[![🚀 Live Demo](https://img.shields.io/badge/🚀_Live_Demo-c9a45c?style=for-the-badge&logoColor=white)](https://your-deploy-url-here.vercel.app)
[![⭐ GitHub](https://img.shields.io/badge/⭐_GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nikhilthakur21)

> ⚠️ **Update the Live Demo link** — no deploy URL was found in the repo. Replace `https://your-deploy-url-here.vercel.app` above once the site is deployed.

</div>

---

## 📖 About The App

This is the digital studio of **Sameer Gorde**, a Pune-based visual artist (b. 1991) whose drawings and paintings on paper move through three recurring routes — **nostalgia, migration, and the body**. Born into a farmer's family that migrated to the city for his father's job, Gorde absorbed a village slowly rewritten in cement and a father's painful spine operation, and began rendering anatomical forms in ink, charcoal, acrylic, watercolour, pastel, and collage. This site gathers **29 works across 4 series** — **Suffering, Self Portrait, Migration, and Other** — into one carefully-paced experience.

It is built as a **premium, gallery-grade showcase** rather than a generic template. The homepage is a single long scroll, smooth-scrolling carries you through it, page changes are masked by soft view transitions, and content reveals itself section by section as you move down the page. A museum-style detail view lets visitors read wall-label details (medium, size, series) for each piece and step through the archive with prev/next.

It's for **the artist** — to present a body of work with the gravity it deserves — and for **curators, collectors, and visitors** who want to browse the archive in a focused, distraction-free, motion-rich environment.

> 🎯 **The goal:** give a single artist a portfolio that feels like walking through a quiet, well-lit gallery — slow, considered, and beautiful — instead of a grid of thumbnails.

### What you can do

| 🧩 Feature | ✨ What it does |
|-----------|----------------|
| 🖼️ **Browse the gallery** | View all 29 works in a responsive masonry grid |
| 🏷️ **Filter by series** | Narrow the archive to Suffering, Self Portrait, Migration, or Other — also reachable from the nav via `?series=…` deep links |
| 🔍 **Open a work** | Full detail page for each piece with wall-label details and prev/next navigation through the collection |
| 🌊 **Scroll the story** | A single long homepage — Hero, Selected Works, and an About teaser — unfolds as one continuous, smooth-scrolled sequence |
| 👤 **Read the artist's story** | Biography, education, and a full critic essay on the About page |
| 📰 **Scan the CV** | Education, exhibitions, and mediums in one place |
| ✉️ **Write to the studio** | A stylized contact form wired to Formspree with graceful submit feedback |
| 🪶 **Enjoy the motion layer** | Smooth scrolling, soft page/view transitions, directional section reveals, and hover-zoom artwork cards throughout |

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|-------|-----------|
| ⚛️ **Framework** | Next.js 16 (App Router) + React 19 |
| 💻 **Language** | TypeScript 5 |
| 🎨 **Styling** | Tailwind CSS 4 — custom cream / cocoa / ink / accent palette |
| 🌀 **Animation** | Hand-built reveal + page-transition components on the native View Transitions API |
| 🪄 **Smooth Scroll** | Lenis (reduced-motion aware) |
| 🔤 **Fonts** | Cormorant Garamond · Inter · Edu NSW ACT Cursive (via `next/font`) |
| 🖼️ **Image Pipeline** | Sharp (WebP + blur placeholders) + `next/image` |
| ✉️ **Contact** | Formspree (no backend required) |

</div>

---

## 🌐 Web App Link

> 🔗 **Live:** `https://your-deploy-url-here.vercel.app` &nbsp;·&nbsp; *(placeholder — update once deployed)*
>
> 💾 **Source:** [github.com/nikhilthakur21](https://github.com/nikhilthakur21)

---

## ✨ Getting Started

This is a **public showcase** — there's no sign-up or login. Just open the site and explore. Here's the intended flow:

```
1️⃣  Land on the homepage and scroll — Hero, Selected Works, and the About teaser unfold as one continuous story.

2️⃣  Open Works from the nav to see all 29 pieces in a masonry grid.

3️⃣  Use the filter chips (or the nav dropdown) to focus on a single series — Suffering · Self Portrait · Migration · Other.

4️⃣  Click any piece to open its detail page — read the wall label and step through the archive with prev/next.

5️⃣  Visit About for the artist's biography and critic essay — and CV for education, exhibitions & mediums.

6️⃣  Head to Contact to write to the studio.
```

> 💬 **Note:** The contact form posts to **Formspree** — add a real form id in `site/app/lib/site.ts` (`formspreeId`) to start receiving messages. Until then, submissions won't be delivered.

---

## 🚀 Run Locally

```bash
# 1️⃣  Clone the repository
git clone https://github.com/nikhilthakur21/<your-repo>.git
cd <your-repo>/site

# 2️⃣  Install dependencies
npm install

# 3️⃣  Configure the artist's details
#     Edit site/app/lib/site.ts — fill in the items marked TODO
#     (Instagram handle, phone/WhatsApp, Formspree id). ✅

# 4️⃣  Start the dev server
npm run dev        # → http://localhost:3000

# ── Other useful scripts ──────────────────────────────
npm run build                  # Production build
npm start                      # Serve the production build
npm run lint                   # Lint with ESLint
node scripts/process-images.mjs   # Re-run the Sharp → WebP image pipeline
```

> 📁 **Note:** the Next.js app lives in the **`site/`** directory — run all npm commands from there.

---

<div align="center">

## 👨‍💻 Developer

### **Nikhil Thakur**

🤖 *AI-based MERN Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-@nikhilthakur21-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nikhilthakur21)
[![Instagram](https://img.shields.io/badge/Instagram-@nikhil__thakur__patil-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/nikhil_thakur_patil)

<br />

⭐ **If you like this project, give it a star!** ⭐

</div>
