# JT Smith Portfolio

A modern, responsive resume and portfolio website built with **Next.js** and **Tailwind CSS** to showcase the work experience, education, certifications, skills, and personal projects of JT Smith, Senior Financial Analyst.

---

## 🚀 Project Overview

This website serves as a digital resume and professional portfolio for JT Smith. It highlights:
- **Work Experience**: Detailed roles and responsibilities at leading organizations.
- **Education**: Academic background and notable projects.
- **Certifications**: Professional certifications with digital verification.
- **Skills**: Technical and business proficiencies.
- **Personal Projects**: Interactive project showcases with video demos and links.
- **Contact**: Direct contact form for professional inquiries.

---

## ✨ Features
- **Modern UI**: Built with React, Next.js, and Tailwind CSS for a clean, responsive design.
- **Dark/Light Mode**: Toggle between light and dark themes.
- **Mobile Friendly**: Fully responsive layout for all devices.
- **Downloadable Resume**: Quick access to a downloadable resume.
- **Contact Form**: Integrated with Formspree for direct messaging.
- **Social Links**: Quick links to GitHub and LinkedIn.

---

## 🌐 Live Demo
[Visit the live site](https://jtsmithinfo.com) <!-- Replace with actual link if deployed -->

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```
2. **Install dependencies:**
   ```sh
   pnpm install # or npm install or yarn install
   ```
3. **Run the development server:**
   ```sh
   pnpm dev # or npm run dev or yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Static Export & GitHub Pages Deployment

This project is configured for **static export** using Next.js (`output: 'export'` in `next.config.mjs`). This means all pages are pre-rendered as static HTML, making it ideal for hosting on GitHub Pages or any static hosting provider.

### Static Export Steps
1. **Build and export the site:**
   ```sh
   pnpm build && pnpm export # or npm run build && npm run export or yarn build && yarn export
   ```
   This will generate a static `out/` directory with your site.
2. **Deploy the `out/` directory to GitHub Pages:**
   - You can use [GitHub Actions](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#github-pages) or manually push the contents of `out/` to your `gh-pages` branch.

**Note:**
- No server-side rendering or API routes are used; all content is statically generated.
- If you add dynamic server code or API routes, static export will not work.

---
## 📁 Project Structure


```


jt-smith-portfolio/


├── app/                # Next.js app directory (pages, layout, etc.)


├── components/         # Reusable React components (UI, sections)


├── public/             # Static assets (images, icons)


├── styles/             # Global styles (Tailwind CSS)


├── hooks/              # Custom React hooks


├── lib/                # Utility libraries


├── ...
