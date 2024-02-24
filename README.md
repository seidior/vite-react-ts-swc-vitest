# vite-react-ts-swc-vitest

This template provides a moderate setup to get React working in Vite with HMR
and some ESLint rules.

Additionally, the following features are enabled:

- Compilation of TypeScript with SWC
- Testing using vitest

## Commands

- `pnpm install` installs the project
- `pnpm lint` runs eslint
- `pnpm format:write` formats files in `src/`
- `pnpm test` executes any test files found in `src/`
  - `pnpm test:ui` shows a web-based UI for the tests
- `pnpm dev` runs a development server
- `pnpm build` builds a static HTML distributable
  - `pnpm preview` shows that built distributable

## For continuous integration

- `pnpm format` checks formatting
- `pnpm test:ci` runs tests in a CI-friendly manner
