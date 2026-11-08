# Rama Chiranjeevi — Personal Brand Website

A responsive dark editorial-style portfolio built with Next.js. The portfolio and blog live in one application; the blog route is `/blog`.

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy on Vercel
1. Create a GitHub repository and push this project.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository. Vercel should detect Next.js automatically.
4. Select **Deploy**. Vercel assigns a `*.vercel.app` URL.
5. A custom domain can be connected later.

## Important content review before publishing
This draft is based on the four-page LinkedIn PDF provided in the conversation. Please verify:
- ZF Group responsibilities have been updated based on the user’s description: steering portfolio durability analysis (control arm, knuckle, HWA, tie rod) and initial design of an MCP-based convergence troubleshooting tool.
- Experience has been updated to 9 years, as confirmed by the user.
- The export lists the ISB Advanced Management Program in Artificial Intelligence as October 2024–April 2026.
- Gold Medal: Graduation 2014, JNTU Anantapur, as confirmed by the user.
- Contact email and phone are not published on this draft page. Add only the professional contact details you want public.
- The AI project summaries from the user's broader portfolio have not been represented as completed project case studies yet. They can be added after you confirm titles, outcomes and links.

## Next enhancements
- Add full project case studies with images, architecture, outcomes and GitHub links.
- Add a Markdown/MDX-powered blog with article pages and categories.
- Add a custom domain, SEO metadata, analytics and a contact form.


## ISB AMPBA project portfolio and profile image placeholder
- The homepage now includes 10 highlighted projects based on the uploaded ISB AMPBA Projects document.
- The complete project-title index is grouped by the source document's term headings in expandable sections.
- The hero section uses the professional profile photo supplied by the user at `public/profile-photo.jpg`.
- Project titles and descriptions are based on the uploaded document. Review them for accuracy and decide which projects should be featured publicly.


## Articles tab
An `/articles` page links to the Medium profile at https://medium.com/@ramachiranjeevi123. This is an outbound link; automatic Medium syncing is not configured in this draft.


## Curated GitHub project portfolio

The Projects section features 10 selected projects. Each card links to the public
GitHub repository at https://github.com/Rama389/AI-Projects. If projects are
organized into separate GitHub repositories or subfolders, replace each card's
`github` URL in `app/page.tsx` with its exact project URL.


## Resume
The approved black-only, ATS-oriented two-page PDF is stored at `public/resume.pdf`.
The homepage navigation includes a View Resume link and the hero section includes
a Download Resume action. Replace `public/resume.pdf` when publishing a newer version.


## Recent visual refinements
- Added Education to the main and Articles navigation.
- Increased body and section text sizes for readability.
- Added typographic company and institution marks for experience and education.
- Reorganized education, skills, certifications and learning into vertical lists.

## Organization logo assets
The experience and education sections use image assets for ZF, Mercedes-Benz, General Motors, Tata Consultancy Services, NIT Tiruchirappalli, and G. Pulla Reddy Engineering College. Logo images are loaded from their published source URLs. The ISB initials are kept as plain text rather than using the official ISB logo: ISB's AMPBA terms state that alumni need prior authorization to use the ISB logo in public collateral. Add an authorized ISB logo asset only after obtaining approval.
