# Next Starter

A [Next.js](https://nextjs.org) (App Router) starter template built around a
**feature-based architecture** — pages stay thin in `app/`, while everything
domain-specific lives in `features/`.

> This is the **`landing-page`** branch: a marketing-site variant with an
> animated landing page and no database layer. Other branches of this repo
> carry different setups.

## Tech stack

| Area       | Tool                                     |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 16 (App Router) + React 19       |
| Language   | TypeScript (strict)                      |
| Styling    | Tailwind CSS v4 + shadcn/ui (Base UI)    |
| Motion     | Framer Motion                            |
| Forms      | React Hook Form + Zod                    |
| State      | Zustand (feature stores)                 |
| Formatting | Prettier + `prettier-plugin-tailwindcss` |

## Quick start with degit

[`degit`](https://github.com/Rich-Harris/degit) downloads a snapshot of a
repository **without** its history or `.git` folder — the fastest way to start
a new project from this template:

```bash
npx degit <user>/<repo> my-app
```

For this repository:

```bash
npx degit nyeinminhtet/next-starter#landing-page my-app
cd my-app
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Switching between branches

List the branches available on the remote:

```bash
git ls-remote --heads https://github.com/nyeinminhtet/next-starter
```

**Option A — degit a specific branch (no `.git` folder)**

Use the `#branch` suffix when cloning:

```bash
npx degit nyeinminhtet/next-starter#<branch> my-app
```

Because degit leaves no `.git` directory, you cannot `git checkout` inside a
degit'd project. To move to another branch, either degit it into a fresh
folder, or attach git to your copy:

```bash
cd my-app
git init
git remote add origin git@github.com:nyeinminhtet/next-starter.git
git fetch origin
git checkout -b <branch> origin/<branch>
```

**Option B — clone with git**

```bash
git clone -b <branch> git@github.com:nyeinminhtet/next-starter.git my-app
```

Or, inside an already-cloned copy:

```bash
git fetch origin
git checkout <branch>
```

## Project structure

```
app/                     # routes, layouts, API routes only
components/
  ui/                    # shadcn/ui base components
  shared/                # cross-feature UI (hero, features, footer, …)
features/                # one folder per domain
  auth/
    actions/             # server actions
    components/          # feature UI (login-form)
    hooks/               # feature hooks + stores (use-auth-store)
    types/               # feature types (AuthUser, …)
    validations/         # Zod schemas (login-schema)
lib/                     # global utils (cn)
types/                   # global TypeScript definitions
```

## Scripts

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Start the dev server          |
| `npm run build`        | Production build              |
| `npm run start`        | Serve the production build    |
| `npm run lint`         | ESLint                        |
| `npm run format`       | Format the repo with Prettier |
| `npm run format:check` | Check formatting              |

## Environment variables

Copy the placeholder file and fill in your values:

```bash
cp .env.example .env
```

| Variable              | Purpose                    |
| --------------------- | -------------------------- |
| `AUTH_SECRET`         | Secret used for auth       |
| `AUTH_URL`            | Canonical app URL for auth |
| `NEXT_PUBLIC_APP_URL` | Public app URL             |
