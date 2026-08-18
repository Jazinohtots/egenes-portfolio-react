# Egenes Portfolio — React + TypeScript

Same design as the plain HTML build, rebuilt as a componentized Vite + React +
TypeScript app.

## Structure
```
egenes-portfolio-react/
├── index.html                 # Vite entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── resume.pdf              # linked from "Download Résumé"
├── src/
│   ├── main.tsx                 # mounts <App /> into #root
│   ├── App.tsx                  # composes all sections
│   ├── types.ts                 # shared TypeScript interfaces
│   ├── styles/
│   │   └── global.css            # design tokens + all styling
│   ├── data/                    # typed content, edit these to update copy
│   │   ├── work.ts
│   │   ├── currentProjects.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── ticker.ts
│   ├── hooks/
│   │   └── useScrollReveal.ts    # IntersectionObserver hook
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── TopologyDiagram.tsx   # the animated hero SVG
│       ├── Ticker.tsx
│       ├── About.tsx
│       ├── SelectedWork.tsx / WorkCard.tsx
│       ├── CurrentBuilds.tsx / ProjectCard.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── Reveal.tsx            # generic scroll-reveal wrapper
└── README.md
```

## Run locally
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production
```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally to sanity-check it
```

## Deploy
- **Vercel**: import the repo at vercel.com/new — it auto-detects Vite.
- **Netlify**: `npm run build`, then drag the `dist/` folder onto
  app.netlify.com/drop, or connect the repo (build command `npm run build`,
  publish directory `dist`).
- **GitHub Pages**: build, then push the contents of `dist/` to a
  `gh-pages` branch (or use the `gh-pages` npm package).

## Editing content
All copy lives in `src/data/*.ts`, typed against the interfaces in
`src/types.ts` — add a new object to any array and a new card/timeline
row appears automatically. No JSX editing required for routine updates.
- You can edit the source codeto fit your preferences.

## Before you publish
- Replace the LinkedIn/GitHub placeholders in `src/components/Contact.tsx`.
- Swap `public/resume.pdf` for whichever resume version you want public.
- Selected Work descriptions are generalized on purpose — check them
  against any employer NDA before sharing externally.
- Drop afollow and ask For explicit permission to use some of the features in the code.
  
