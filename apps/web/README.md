# ⚡ Next.js 16 Canary + React 19 Stable + ShadCN + Tailwind CSS v4 + Radix UI Design System Monorepo

[![Next.js](https://img.shields.io/badge/Next.js-16 Canary-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19 Stable-blue?logo=react)](https://react.dev/)
[![Tailwind v4](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![ShadCN UI](https://img.shields.io/badge/ShadCN-UI-Kit-purple)](https://ui.shadcn.com/)
[![Radix UI](https://img.shields.io/badge/Radix-UI-Primitives-8B5CF6?logo=radix-ui)](https://www.radix-ui.com/)
[![Yarn v4](https://img.shields.io/badge/Yarn-4.x-Berry-2C8EBB?logo=yarn)](https://yarnpkg.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> 🧱 A **production-grade, performance-optimized monorepo** built on **Next.js 16 Canary**, **React 19 Stable**, **TailwindCSS v4**, **ShadCN**, and **Radix UI** — featuring a modular **design system architecture**, dark/light theming, Turbopack, React Compiler, and first-class **Yarn v4** workspace support.

---

## 🌐 GitHub SEO & Social Metadata

- **Repository Name:** next16-monorepo-design-system
- **Description:** Next.js 16 Canary + React 19 Stable monorepo with Tailwind v4, ShadCN, and Radix UI. Performance-optimized design system starter for modern web apps.
- **Topics:** nextjs, react, tailwindcss, design-system, monorepo, yarn, radix-ui, shadcn, react-compiler, turbopack
- **Open Graph / Social Preview:**
  ```html
  <meta property="og:title" content="Next.js 16 + React 19 Monorepo | Tailwind v4 + ShadCN + Radix UI" />
  <meta property="og:description" content="A high-performance Next.js 16 monorepo with TailwindCSS v4, ShadCN UI, Radix UI, and Yarn v4 — perfect for scalable design systems." />
  <meta property="og:image" content="https://raw.githubusercontent.com/<your-username>/<repo-name>/main/public/og-preview.png" />
  <meta property="og:url" content="https://github.com/<your-username>/<repo-name>" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Next.js 16 + React 19 Monorepo" />
  <meta name="twitter:description" content="Perfect design system starter built for performance and scalability." />
  <meta name="twitter:image" content="https://raw.githubusercontent.com/<your-username>/<repo-name>/main/public/og-preview.png" />
  ```

📸 Add an image named `og-preview.png` (1200×630) inside `public/` showing your design system UI — GitHub and Twitter will auto-render it in link previews.

---

## 🚀 Performance-First Architecture

This repository is engineered for **speed, scalability, and developer productivity**.

### ⚡ Performance Highlights
- **React Compiler Enabled** → zero-cost memoization and automatic re-render optimization.
- **Turbopack-Driven Dev Server** → 10x faster incremental rebuilds.
- **Radix Import Optimization** → fine-grained tree-shaking of UI primitives.
- **TailwindCSS v4 Tokens** → CSS variables for reduced bundle size.
- **Static Asset Caching** → immutable cache headers for long-term performance.
- **Bundle Analyzer** → integrated `yarn build:analyze` command to monitor size.
- **ESM + SideEffects Safe Packages** → full tree-shaking for `@design/ui` and `@design/theme`.
- **Dynamic Imports** → on-demand loading for heavy client components.
- **Server Actions + Edge Ready** → instant response rendering.

### 🧠 Smart Build Pipeline
- **Turbopack** for dev and production.
- **Next.js SWC / React Compiler** for lightning-fast transformation.
- **TypeScript project references** for parallel compilation.
- **Yarn v4 caching** for ultra-fast installs.

---

## 🧱 Monorepo Structure

```bash
calc/
├── apps/
│   └── web/                 # Next.js 16 Canary app (React 19 Stable)
├── packages/
│   ├── ui/                  # ShadCN + Radix component library
│   ├── theme/               # Tailwind v4 tokens + ThemeProvider
│   └── shared-utils/        # optional shared utilities
├── tsconfig.base.json
├── package.json
└── .yarnrc.yml
```

Each workspace uses TypeScript `composite: true` for incremental builds and strict typing.

---

## 🎨 Design System — Production Ready

A robust **design system foundation** that scales across apps, themes, and platforms.

### 🧩 Packages
| Package | Description |
|----------|-------------|
| `@design/ui` | ShadCN + Radix UI component library with variants and themes |
| `@design/theme` | Tailwind v4 tokens, typography, radius, and color palette |
| `@shared-utils` | Optional utilities and helpers shared across apps |

### 🧭 Tokenized Styling
Defined in `packages/theme/tokens.css`:
```css
@theme {
  --radius: 12px;
  --font-sans: "Geist", ui-sans-serif, system-ui;
  --brand-500: #3366ff;
}
```

Use tokens anywhere:
```tsx
<div className="rounded-[var(--radius)] bg-[var(--brand-500)] text-white">
  Hello Design System
</div>
```

### 🌓 Theming
```tsx
import { ThemeProvider } from "@design/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 🎨 ShadCN + Radix UI Integration
- Components are accessible, composable, and built with `class-variance-authority`.
- Strict type safety (`ButtonProps`, `Variants`) ensures reliable DX.
- Theme-aware variants keep UI consistent across dark/light modes.

Example:
```tsx
import { Button } from "@design/ui";
<Button variant="outline" size="sm">Click Me</Button>
```

---

## 🧰 Developer Experience

### 🧩 Scripts
| Command | Description |
|----------|-------------|
| `yarn dev` | Start Next.js 16 app with Turbopack |
| `yarn build` | Production build |
| `yarn build:analyze` | Generate bundle analysis report |
| `yarn lint` | Run ESLint on all packages |
| `yarn typecheck` | Run TypeScript checks |
| `yarn clean` | Remove cache and dist folders |

### 🧠 Tooling
- TypeScript 5 Strict Mode
- ESLint + Prettier unified config
- React Compiler enabled in `next.config.ts`
- `optimizePackageImports` for Radix UI & ShadCN
- Auto header policies for security and caching

---

## 🔍 SEO & Analytics Ready
- JSON-LD structured data support (Article, WebPage schemas)
- Configurable `<meta>` tags via shared SEO utils
- GTM & GA integration-ready (`@design/utils/gtm`)
- Optimized CLS and LCP metrics for web vitals

---

## ⚙️ Advanced Build Config (Next.js 16)
**next.config.ts Highlights:**
```ts
experimental: {
  reactCompiler: true,
  optimizePackageImports: [
    "@radix-ui/react-dialog",
    "@radix-ui/react-tooltip",
    "@radix-ui/react-select",
  ],
  optimizeCss: true,
  typedRoutes: true,
}
```

**Static Asset Headers:**
```ts
headers: async () => [
  {
    source: "/(.*)\\.(js|css|woff2|png|jpg|svg)",
    headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
  },
];
```

These ensure blazing-fast load times and long-term caching.

---

## 🧠 Technology Stack
| Layer | Technology |
|-------|-------------|
| Framework | Next.js 16 (canary) + App Router |
| Language | TypeScript 5.x |
| UI | React 19 Stable + ShadCN + Radix UI |
| Styling | TailwindCSS v4 (tokens + variants) |
| Theming | `next-themes` + CSS variables |
| Monorepo | Yarn v4 Workspaces |
| Deployment | Vercel / Docker / AWS ECS |

---

## 🤝 Contributing
Contributions are welcome! Fork, open issues, or submit PRs.  
If this repo helps you — **please give it a ⭐ on GitHub!**

---

## 🗺 Roadmap
- [ ] Add Redux + Redux-Saga package
- [ ] Storybook integration for UI components
- [ ] Expo / React Native support
- [ ] Automated Lighthouse + WebVitals reports
- [ ] Visual regression tests via Playwright

---

## ❤️ Support & Community
If you love this work:
- 🌟 Star this repository
- 🐦 Tweet with `#Next16 #React19 #ShadCN #TailwindCSS #Monorepo`
- 💬 Join discussions via Issues / PRs

> Built with ❤️ by [Uday Pawar](https://github.com/<your-username>) — the perfect foundation for a scalable, high-performance design system.

---

### 🔑 SEO Keywords
**Next.js 16 monorepo**, **React 19 stable**, **Tailwind v4 design system**, **ShadCN UI starter**, **Radix UI boilerplate**, **Yarn v4 monorepo**, **React compiler**, **Next.js 16 canary**, **frontend performance**, **design system architecture**, **Next 16 app router**, **React 19 template**, **high performance UI framework**.
