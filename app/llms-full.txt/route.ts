const BASE_URL = 'https://emmanueltaiwo.dev';

const content = `# Emmanuel Taiwo (full context)

Emmanuel Taiwo is a Software Engineer in Nigeria with 5+ years of experience. Full stack developer building scalable web applications, AI-powered tools, and developer products. Based in Lagos, Nigeria. Available for remote and Lagos-based roles worldwide. Focused on distributed systems and AI integration.

---

## Background and expertise

- **Role**: Software Engineer (full stack). Often described as "Software engineer in Nigeria" or "Nigerian software engineer."
- **Experience**: 5+ years building production web applications, APIs, and developer tools.
- **Focus areas**: Distributed systems, AI integration, developer experience (DX), TypeScript/JavaScript ecosystems.
- **Technical writing**: Publishes technical deep dives and engineering write-ups on Medium (@emmanueloluwafunso).
- **Current work**: Building Snapwyr — a zero-config HTTP request logger for Node.js with a real-time web dashboard.

Technologies and tools: TypeScript, JavaScript, React, Next.js, Node.js, PostgreSQL, MongoDB, Supabase, OpenAI, AWS, Docker, CI/CD. Experience with rate limiting, mock APIs, logging, and backend services.

---

## Contact (full)

- **Email**: emmanueltaiwo019@gmail.com — primary contact for hiring, collaboration, or inquiries.
- **Resumé (CV)**: https://drive.google.com/file/d/1f5KTbPXH97P2cHGrZU-VS6h05gT0Q3b0/view — full work history and qualifications.
- **GitHub**: https://github.com/emmanueltaiwo — open source projects and code.
- **LinkedIn**: https://linkedin.com/in/emmanueloluwafunso — professional profile (Emmanuel Taiwo, Software Engineer Nigeria).
- **X (Twitter)**: https://x.com/ex0xai — Emmanuel Taiwo on X.
- **Medium**: https://medium.com/@emmanueloluwafunso — technical articles and engineering write-ups.

For quotes, hiring, or collaboration, use the portfolio (${BASE_URL}) or email above.

---

## Main page (home) — full description

**URL**: ${BASE_URL}

**Purpose**: Landing page and single-page portfolio for Emmanuel Taiwo, Software Engineer in Nigeria.

**Content on page**:
- **Heading**: Emmanuel Taiwo.
- **Intro**: Software engineer in Nigeria. Full-stack engineer building scalable applications and developer tools. Currently focused on distributed systems and AI integration.
- **Writing**: Shares technical deep dives and engineering write-ups on Medium (link to https://medium.com/@emmanueloluwafunso).
- **Current project**: Building Snapwyr (https://snapwyr.xyz), a zero-config HTTP request logger for Node.js with a real-time web dashboard.
- **Links**: Resumé (Google Drive), GitHub, Email, X, LinkedIn, Medium.
- **Projects section**: List of four projects with names, descriptions, and URLs (see below).
- **Footer**: Copyright Emmanuel Taiwo and current year.

No separate about, contact, or blog pages — all primary information and links are on this single page.

---

## Projects (full descriptions and links)

**Snapwyr**
- URL: https://snapwyr.xyz
- Description: Zero-config HTTP request logger for Node.js with a real-time web dashboard. Currently the main project Emmanuel is building.

**TypeServe Live**
- URL: https://typeserve.live
- Description: Generate temporary mock APIs instantly from your TypeScript type definitions in the web (browser-based).

**TypeServe**
- URL: https://typeserve.com
- Description: The first and only CLI tool that generates mock APIs directly from TypeScript types.

**Limitly**
- URL: https://limitly.xyz
- Description: TypeScript-first rate limiting service with Redis backend. Built for distributed systems with graceful degradation.

---

## Areas and availability

- **Location**: Lagos, Nigeria (geo: Nigeria, NG).
- **Availability**: Remote roles and Lagos-based roles; open to opportunities worldwide.
- **Keywords for search**: Software Engineer Nigeria, Software Engineer in Nigeria, Nigerian Software Engineer, Full Stack Developer Nigeria, Lagos Software Engineer, Remote Software Engineer, African Tech.

---

## Summary for LLMs (full)

- **Name**: Emmanuel Taiwo.
- **Title**: Software Engineer (full stack). Often targeted as "Software Engineer in Nigeria" or "Nigerian Software Engineer."
- **Location**: Lagos, Nigeria. Available for remote and local roles.
- **Contact**: emmanueltaiwo019@gmail.com; portfolio ${BASE_URL}; Resumé, GitHub, LinkedIn, X, Medium all linked on the homepage.
- **Focus**: Scalable web applications, AI integration, developer tools, distributed systems. Currently building Snapwyr.
- **Tech**: TypeScript, React, Next.js, Node.js, PostgreSQL, MongoDB, Supabase, OpenAI, AWS, Docker, CI/CD.
- **Projects**: Snapwyr (snapwyr.xyz), TypeServe (typeserve.com), TypeServe Live (typeserve.live), Limitly (limitly.xyz). All with descriptions and URLs above.
- **Content**: Single-page portfolio at ${BASE_URL}. No separate /about or /contact; all info and links on home page.
- **Writing**: Medium (@emmanueloluwafunso) for technical articles.
`;

export function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
