# Vasanth M.M — Portfolio

A premium, animated personal portfolio built with React 19, Vite, React
Router, Framer Motion, and EmailJS. Dark theme, fully responsive, no
Bootstrap/Tailwind/TypeScript/jQuery.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

Other scripts:

```bash
npm run build     # production build to /dist
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
portfolio/
  public/
    favicon.svg
    resume-vasanth-mm.pdf     ← placeholder, replace with your real resume
  src/
    assets/
      images/                 ← project screenshots (optional, see README inside)
      icons/
    components/                ← one folder per component (Component.jsx + Component.module.css)
    context/
      ThemeContext.jsx
    data/
      skills.js
      projects.js
      services.js             ← also holds achievements, testimonials, experience
    hooks/
      useScrollAnimation.js
      useTypingEffect.js
    pages/
      Home.jsx
    styles/
      variables.css           ← design tokens (colors, type, spacing)
      global.css               ← resets + shared utility classes
    App.jsx
    main.jsx
```

## Personalizing content

Almost everything text-based lives in `src/data/`:

- **`skills.js`** — skill list, category, proficiency level, icon
- **`projects.js`** — project title, tagline, description, tech stack, GitHub/demo links
- **`services.js`** — services offered, achievements (counters), testimonials, work experience

Edit these files directly; the components re-render automatically.

## Setting up the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) so it can send
real emails without a backend.

1. Create a free EmailJS account.
2. Add an **Email Service** (e.g. Gmail) and note its **Service ID**.
3. Create an **Email Template** with fields matching the form: `name`,
   `email`, `subject`, `message`. Note the **Template ID**.
4. Find your **Public Key** under Account → API Keys.
5. Open `src/components/Contact/Contact.jsx` and replace:

   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```

   with your actual IDs/key.

Until you do this, submitting the form will show the "something went
wrong" message — the validation and UI states all work immediately,
only the actual send requires your EmailJS credentials.

## Replacing the resume

`public/resume-vasanth-mm.pdf` is a placeholder. Replace it with your real
resume, keeping the same filename — the "Download Resume" button in the
Hero section already points at `/resume-vasanth-mm.pdf`.

## Adding real project images

By default, project cards render a gradient placeholder with the
project's initials so the site works with zero images. To use real
screenshots, see `src/assets/images/README.md` for the two small edits
needed (add an `image` import in `projects.js` and swap the placeholder
`<div>` for an `<img>` in `ProjectCard.jsx`).

## Notes on animations

Framer Motion drives page-load, scroll-reveal, hover, and slider
animations. Motion respects `prefers-reduced-motion` globally (see
`global.css`). The animated background, cursor glow, scroll progress
bar, and loading screen are implemented directly in `App.jsx`.

## Deploying

The build output in `/dist` after `npm run build` is a static site — it
can be deployed as-is to Vercel, Netlify, GitHub Pages, or any static host.
