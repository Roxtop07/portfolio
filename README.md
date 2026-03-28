# Manish Srivastav — Developer Portfolio

> Personal portfolio of **Manish Srivastav** — Backend Developer, AI Engineer, and Hackathon Winner.
> Built with Next.js 14 App Router and Tailwind CSS.

---

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Styling** — Tailwind CSS (utility-only, no UI libraries)
- **Fonts** — Syne (display), DM Sans (body), JetBrains Mono (code/labels)
- **Language** — JavaScript (React functional components)

---

## Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# 1. Clone or unzip the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
portfolio/
├── public/
│   └── profile.jpg          ← Add your profile photo here
├── src/
│   ├── app/
│   │   ├── globals.css      ← Global styles, fonts, custom utilities
│   │   ├── layout.js        ← Root layout with metadata
│   │   └── page.js          ← Main page (assembles all sections)
│   └── components/
│       ├── Navbar.js        ← Sticky nav with mobile menu
│       ├── Hero.js          ← Intro, name, CTA, profile image
│       ├── Projects.js      ← Featured project cards
│       ├── Skills.js        ← Grouped tech skills
│       ├── Experience.js    ← Internship timeline
│       ├── Achievements.js  ← Hackathons and recognitions
│       ├── Certifications.js← Certification cards
│       └── Contact.js       ← Links and contact CTA
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

---

## Adding Your Profile Photo

1. Drop your image into the `public/` folder and name it `profile.jpg`
2. Open `src/components/Hero.js`
3. Find the placeholder block (marked with a comment) and replace it:

```jsx
// Add this import at the top of Hero.js
import Image from 'next/image';

// Replace the placeholder <div> inside the profile circle with:
<Image
  src="/profile.jpg"
  alt="Manish Srivastav"
  fill
  className="object-cover"
/>
```

---

## Customization

### Update Personal Info
All content is co-located with its component — no separate data files. Edit directly inside each component:

| What to change | File |
|---|---|
| Name, title, description | `src/components/Hero.js` |
| Projects | `src/components/Projects.js` |
| Skills | `src/components/Skills.js` |
| Work experience | `src/components/Experience.js` |
| Achievements | `src/components/Achievements.js` |
| Certifications | `src/components/Certifications.js` |
| GitHub, email, LinkedIn | `src/components/Contact.js` |

### Update LinkedIn URL
In `src/components/Contact.js`, find the `contactLinks` array and replace:
```js
href: 'https://linkedin.com/in/your-profile',
```
with your actual LinkedIn URL.

### Change Accent Color
The green accent (`#39ff14`) is defined in `tailwind.config.js`:
```js
accent: '#39ff14',
'accent-dim': '#2dcc10',
```
Change both values to any color you prefer.

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, profile photo, stats, CTA |
| **Projects** | 3 featured project cards with GitHub links |
| **Skills** | Backend, AI/ML, Frontend, Database, Core |
| **Experience** | Timeline of internships with bullet points |
| **Achievements** | Hackathon wins and recognitions |
| **Certifications** | Credential cards with issuer |
| **Contact** | GitHub, email, LinkedIn + hire CTA |

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push.

### Netlify

```bash
npm run build
# Deploy the .next/ output folder via Netlify dashboard or CLI
```

---

## License

This project is personal and not open-sourced. All content belongs to **Manish Srivastav**.
