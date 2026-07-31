# Rahul Attery, portfolio site

Static site. No build step, no dependencies, no framework. Works as is on GitHub Pages, Vercel, Netlify or any static host.

```
index.html                      Homepage
resume.html                     Resume as a web page. This file also generates the PDF.
work/isat-ipulse.html           Case 01, iSAT Africa
work/d2c-growth-engine.html     Case 02, The Teaser Company
work/mena-market-entry.html     Case 03, Digidarts
assets/site.css                 One stylesheet for every page, including print rules
assets/site.js                  Scroll reveal and nav highlighting. Site works without it.
assets/Rahul_Attery_Resume.pdf  Downloadable resume, generated from resume.html
.nojekyll                       Stops GitHub Pages from processing the files
```

## Deploying

**GitHub Pages.** Push these files to the root of the `main` branch, then Settings > Pages > Source: Deploy from a branch > `main` / `root`. Live in about a minute.

**Vercel.** Import the repository. Framework preset: Other. Build command and output directory: leave both empty. Deploy.

All internal links are relative, so nothing breaks when you add a custom domain.

## Design system

| Token | Value | Used for |
|---|---|---|
| Paper | `#FFF6EC` | page background |
| Ink | `#190E33` | text, borders, hard shadows |
| Flame | `#FF5A1F` | primary accent, ticker, CTA shadow |
| Sun | `#FFC531` | signature output panel, pull quotes |
| Aqua | `#00C9A0` | case 02, live indicators |
| Violet | `#6E4BFF` | case 03 |

Type: **Bricolage Grotesque** for display, **Instrument Serif italic** for emphasised phrases, **Inter** for body, **JetBrains Mono** for data and labels. All four load from Google Fonts.

The recurring device is the **signal block**: a dark monospace panel showing the raw technical description, next to a bright panel showing the sentence that actually sold it. It appears once on the homepage and once per case study, in a different accent colour each time.

## Keeping the resume and the PDF in sync

The PDF is printed from `resume.html`, so they cannot disagree unless you regenerate one and not the other.

After editing `resume.html`:

1. Open `resume.html` in a browser.
2. Print, destination Save as PDF, paper A4, margins Default, Background graphics **off**.
3. Save over `assets/Rahul_Attery_Resume.pdf`.

The print stylesheet deliberately strips all the colour and personality. Recruiters run PDFs through applicant tracking systems, and a bright design with coloured blocks parses badly. The site is loud, the PDF is plain, on purpose. It currently fills one A4 page with about 14px of slack, so if you add three lines, remove three.

## Client names

Clients are named only where they already appear on the circulating resume, and no fee, retainer or contract value is attached to any named client anywhere on the site.

If you get permission to name a client, these are the only places to change:

| Currently reads | Files |
|---|---|
| "a pan-African bank running around 600 branches" | `index.html`, `work/isat-ipulse.html` |
| "early-stage D2C food and coffee brand" | `index.html`, `work/d2c-growth-engine.html` |
| "a regional super app" and "a UAE bank" | `index.html`, `work/mena-market-entry.html` |

Do not add contract values for the iSAT end customer. That contract is live.

## What was changed from the uploaded resume

Five corrections. Every date and every figure is unchanged.

1. **"Assistant Produce Manager" corrected to "Assistant Product Manager"** under Citibank.
2. **"Promoted 3 times in 4 years" corrected to "Promoted twice in 4 years"**, which is what the three listed titles actually show.
3. **Summary rewritten.** The old version claimed "most recently from $300K to $450K ARR", but that figure is from The Teaser Company, not the current role. It now leads with the iSAT portfolio figure.
4. **Skills trimmed.** "Account manager" removed, because it is a job title and not a skill. "Onboarding enterprise" corrected to "Enterprise Onboarding".
5. **Location line** set to "Dubai, UAE (relocating in 30 days)" as instructed.

Deliberately not changed: the "6+ years" figure, at your instruction, since you are counting time worked rather than elapsed time.

## Still open

- **Languages.** Every UAE resume should carry one. Add a line to `resume.html` when you decide the wording.
- **A relocation month.** "In 30 days" is a rolling claim on a permanent site and goes stale once indexed.
- **Phone number.** The PDF carries the +91 number. The site pages show only email and LinkedIn, because public pages get scraped.
- **The 808 case study.** Omitted, the work is under NDA. It stays as an experience entry only.
