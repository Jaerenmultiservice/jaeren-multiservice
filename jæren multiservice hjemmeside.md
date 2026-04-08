# Jæren Multiservice Hjemmeside

## Oversikt
Dette er nettsiden for Jæren Multiservice, en tjenesteleverandør som tilbyr profesjonelle tjenester som takvask, høytrykkspyling, hekkeklipp, gravearbeid og mer i Jæren, Sandnes og Stavanger-området.

- **Produksjons-URL:** https://jaerenmultiservice.no/
- **GitHub Repo:** Koblet til GitHub; deploy skjer automatisk via hosting (f.eks. Netlify) når du pusher til `main`-branchen.
- **Språk:** Norsk (no)
- **Teknologi:** React med TypeScript, Vite, Tailwind CSS, React Router

## Teknisk Oppsett

### Prosjektstruktur
- **Frontend Framework:** React 18.3.1 med TypeScript
- **Byggverktøy:** Vite 8.0.0
- **Styling:** Tailwind CSS 3.4.14 med PostCSS
- **Routing:** React Router DOM 6.30.3 (med HashRouter)
- **Ikoner:** Lucide React 0.577.0
- **Linting:** ESLint med TypeScript støtte

### Avhengigheter
- **Dependencies:**
  - lucide-react: ^0.577.0
  - react: ^18.3.1
  - react-dom: ^18.3.1
  - react-router-dom: ^6.30.3
- **DevDependencies:**
  - @eslint/js: ^9.13.0
  - @types/react: ^18.3.12
  - @types/react-dom: ^18.3.1
  - @vitejs/plugin-react: ^4.3.3
  - autoprefixer: ^10.4.20
  - eslint: ^9.13.0
  - eslint-plugin-react-hooks: ^5.0.0
  - eslint-plugin-react-refresh: ^0.4.14
  - globals: ^15.11.0
  - postcss: ^8.4.47
  - sharp: ^0.34.5
  - tailwindcss: ^3.4.14
  - typescript: ~5.6.2
  - typescript-eslint: ^8.11.0
  - vite: ^8.0.0

### Kommandoer
```bash
npm install          # Installer avhengigheter
npm run dev          # Start utviklingsserver
npm run build        # Bygg for produksjon
npm run lint         # Kjør linting
npm run preview      # Forhåndsvis bygg
```

### Vite Konfigurasjon
- Bruker React plugin
- Alias: '@' peker til 'src'-mappen
- Standard Vite-oppsett uten spesielle tilpasninger

## Applikasjonsstruktur

### Routing
Bruker HashRouter for klient-side routing. Hovedruter:
- `/` - Hjemmeside (Home)
- `/takvask` - Takvask-tjenester
  - `/takvask/takvask` - Takvask underside
  - `/takvask/takrens` - Takrens
  - `/takvask/mosefjerning` - Mosefjerning
  - `/takvask/impregnering` - Impregnering
- `/hagearbeid` - Hagearbeid
  - `/hagearbeid/hekkeklipp` - Hekkeklipp
  - `/hagearbeid/plenklipp` - Plenklipp
  - `/hagearbeid/hagevedlikehold` - Hagevedlikehold
  - `/hagearbeid/rydding` - Rydding
- `/graving` - Gravearbeid
  - `/graving/graving` - Graving tjeneste
  - `/graving/drenering` - Drenering
  - `/graving/oppkjoring` - Oppkjoring
  - `/graving/tomtearbeid` - Tomtearbeid
- `/smarthjem` - Smarthjem
- `/smarthus` - Smarthus
- `/wifi` - Wifi
- `/feilsoking` - Feilsøking
- `/pchjelp` - PC-hjelp

### Hjemmeside Komponenter
Hjemmesiden består av følgende komponenter:
- Navbar
- HomeHero
- ServiceCards
- WhyUs
- Contact
- Footer

## Kontakt og E-post Oppsett

### Formspree Integrasjon
Nettsiden bruker Formspree for håndtering av kontaktskjemaer. Dette sender e-poster direkte uten behov for backend.

- **Formspree URL:** https://formspree.io/f/mgonpjya
- **Emne:** "Ny forespørsel fra jaerenmultiservice.no"
- **Funksjonalitet:** Uforpliktende befaring-forespørsler sendes via skjemaet

### Kontaktinformasjon
- Tittel: "Få gratis befaring"
- Beskrivelse: "Send forespørsel – vi tar kontakt for en uforpliktende befaring og skriftlig tilbud."

Skjemaet inkluderer felt for navn, e-post, telefon, melding og mulighet for filopplasting.

## HTML og Metadata
- **DOCTYPE:** HTML5
- **Språk:** no (Norsk)
- **Tittel:** "Jæren Multiservice – Profesjonelle tjenester"
- **Beskrivelse:** "Jæren Multiservice – profesjonelle tjenester for private og bedrifter. Takvask, høytrykkspyling, hekkeklipp og gravearbeid i Jæren, Sandnes og Stavanger."
- **Canonical URL:** https://jaerenmultiservice.no/
- **Favicon:** /favicon.svg
- **Fonts:** Saira Condensed fra Google Fonts
- **Bakgrunnsfarge:** #0d0d0d (mørk)

## Utvikling og Deploy
- **Utvikling:** Kjør `npm run dev` for lokal utvikling
- **Bygg:** `npm run build` lager produksjonsbygg i `dist`-mappen
- **Deploy:** Automatisk via GitHub-integrasjon med hosting-plattform (f.eks. Netlify) på push til main

## Ytterligere Ressurser
- Bilder og videoer ligger i `public/images/` og `public/videos/`
- Komponenter er organisert i `src/components/`
- Sider i `src/pages/`
- Konfigurasjonsfiler: `tailwind.config.js`, `postcss.config.js`, `tsconfig.json`, `tsconfig.app.json`