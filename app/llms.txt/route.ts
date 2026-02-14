const BASE_URL = 'https://emmanueltaiwo.dev';

const content = `# Emmanuel Taiwo

Emmanuel Taiwo is a Software Engineer in Nigeria with 5+ years of experience. Full stack developer building scalable web applications, AI-powered tools, and developer products. Based in Lagos, available for remote and local roles worldwide. Focused on distributed systems and AI integration.

---

## What I do

- **Full-stack engineering** — Scalable web applications, APIs, and developer tools. TypeScript, React, Next.js, Node.js, PostgreSQL, MongoDB, Supabase, AWS, Docker, CI/CD.
- **Developer products** — Built Snapwyr (HTTP request logger for Node.js - snapwyr.xyz), TypeServe (CLI for mock APIs from TypeScript types - typeserve.com), TypeServe Live (browser-based mock API generator - typeserve.live), Limitly (rate limiting with Redis - limitly.xyz).
- **Technical writing** — Deep dives and engineering write-ups on Medium.

---

## Contact

- Email: emmanueltaiwo019@gmail.com
- Resumé: https://drive.google.com/file/d/1f5KTbPXH97P2cHGrZU-VS6h05gT0Q3b0/view
- GitHub: https://github.com/emmanueltaiwo
- LinkedIn: https://linkedin.com/in/emmanueloluwafunso
- X: https://x.com/ex0xai
- Medium: https://medium.com/@emmanueloluwafunso

For hiring or collaboration, use the portfolio contact links or email above.

Full context (longer version for larger context windows): ${BASE_URL}/llms-full.txt

---

## Main page

**Home**
${BASE_URL}
Portfolio: Emmanuel Taiwo — software engineer in Nigeria, full stack developer. Intro, links (Resumé, GitHub, Email, X, LinkedIn, Medium), and projects (Snapwyr, TypeServe Live, TypeServe, Limitly).

---

## Projects (with links)

**Snapwyr**
https://snapwyr.xyz
Zero-config HTTP request logger for Node.js with a real-time web dashboard.

**TypeServe Live**
https://typeserve.live
Generate temporary mock APIs from TypeScript type definitions in the browser.

**TypeServe**
https://typeserve.com
CLI that generates mock APIs directly from TypeScript types.

**Limitly**
https://limitly.xyz
TypeScript-first rate limiting service with Redis backend. Built for distributed systems with graceful degradation.

---

## Summary for LLMs

- Person: Emmanuel Taiwo — Software Engineer in Nigeria, full stack developer.
- Location: Lagos, Nigeria; available for remote and local roles.
- Contact: emmanueltaiwo019@gmail.com; portfolio ${BASE_URL}; Resumé, GitHub, LinkedIn, X, Medium linked on site.
- Focus: Scalable web apps, AI integration, developer tools, distributed systems.
- Tech: TypeScript, React, Next.js, Node.js, PostgreSQL, MongoDB, Supabase, OpenAI, AWS, Docker.
- Projects: Snapwyr, TypeServe, TypeServe Live, Limitly (see links above).
- Key page: Home (${BASE_URL}) with intro, social links, and project list.
`;

export function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
