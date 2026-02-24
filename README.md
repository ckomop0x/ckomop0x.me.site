[![codecov](https://codecov.io/gh/ckomop0x/ckomop0x.me.site/branch/main/graph/badge.svg?token=ENO8W3HTIX)](https://codecov.io/gh/ckomop0x/ckomop0x.me.site)

# Ckomop0x.me Blog Website

This personal blog website is built using Next.js, Strapi, TypeScript, GraphQL, and Tailwind CSS. It includes optimizations for performance, type safety, and automated deployments.

🌐 **Live:** [https://ckomop0x.me](https://ckomop0x.me)

---

## Overview

### Backend
- **CMS:** Strapi 5+ (headless CMS)
- **Data Layer:** GraphQL for API interactions

### Frontend
- **Framework:** Next.js 16+ with Apollo Client
- **Type Safety:** Automatically generated TypeScript types from GraphQL schemas and queries during deployment
- **Styling:** Tailwind CSS 4+

### CI/CD
- **Automation:** GitHub Actions
- **Deployment:** Vercel
  - Production deployment restricted to `main` branch only
  - Merge requests require passing automated tests and successful builds

---

## Technologies

- **Next.js 16+** (Frontend)
- **React 19** (UI)
- **Strapi 5+** (Headless CMS)
- **Apollo Client** (GraphQL queries)
- **TypeScript 5+** (Schema-based automated type generation)
- **Tailwind CSS 4+** (Styling)
- **Storybook** (Component development and documentation)
- **Prettier & Husky** (Code formatting and Git hooks)
- **ESLint** (Code linting)
- **Vitest** (Unit and integration testing)

---

## Getting Started

### Prerequisites

This project uses [pnpm](https://pnpm.io/) as the package manager.

```sh
npm install -g pnpm
```

### Set up environment variables

Copy the template and fill in your values:

```sh
cp .env-template .env.local
```

### Install dependencies

```sh
pnpm install
```

### Run development server

Runs on [http://localhost:8000](http://localhost:8000).

```sh
pnpm dev
```

### Run tests

```sh
pnpm test
```

### Run tests with coverage

```sh
pnpm test:coverage
```

### Build and run for production

```sh
pnpm build
pnpm start
```

---

## Additional Commands

| Command | Description |
|---|---|
| `pnpm lint` | Lint and auto-fix source files |
| `pnpm check-style` | Check code formatting with Prettier |
| `pnpm check-ts` | Run TypeScript type checking |
| `pnpm codegen` | Generate TypeScript types from GraphQL schema |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm build-storybook` | Build Storybook for static export |

---

## Author

**Pavel Klochkov** ([paul.klochkov@gmail.com](mailto:paul.klochkov@gmail.com))

- Blog & Poetry: [ckomop0x.me](https://ckomop0x.me)
- Twitter: [@ckomop0x](https://twitter.com/ckomop0x)
- GitHub: [ckomop0x](https://github.com/ckomop0x)
- LinkedIn: [ckomop0x](https://linkedin.com/in/ckomop0x)

---

## Support

Star this repository if you find it helpful!

---

## License

© 2026 Pavel Klochkov. Licensed under the [MIT License](LICENSE).
