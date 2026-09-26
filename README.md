# Next Starter

A [Next.js](https://nextjs.org) (App Router) starter template built around a
**feature-based architecture** — pages stay thin in `app/`, while everything
domain-specific lives in `features/`.

## Tech stack

| Area       | Tool                                     |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 16 (App Router) + React 19       |
| Language   | TypeScript (strict)                      |
| Styling    | Tailwind CSS v4 + shadcn/ui (Base UI)    |
| Forms      | React Hook Form + Zod                    |
| State      | Zustand (global + feature stores)        |
| Database   | Prisma 7 + PostgreSQL                    |
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
npx degit nyeinminhtet/next-starter my-app
cd my-app
npm install        # also runs `prisma generate`
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> `npm install` triggers `postinstall: prisma generate`, which creates the
> client in `lib/generated/prisma` (gitignored — never commit it).

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
  shared/                # cross-feature components (Header, Footer, …)
features/                # one folder per domain
  auth/
    actions/             # server actions
    components/          # feature UI (login-form)
    hooks/               # feature hooks + stores (use-auth-store)
    types/               # feature types (AuthUser, …)
    validations/         # Zod schemas (login-schema)
lib/                     # global utils (cn, prisma singleton)
store/                   # global state (use-app-store)
db/                      # database client & schemas
types/                   # global TypeScript definitions
prisma/                  # schema.prisma + migrations
```

## Scripts

| Command                  | Description                   |
| ------------------------ | ----------------------------- |
| `npm run dev`            | Start the dev server          |
| `npm run build`          | Production build              |
| `npm run start`          | Serve the production build    |
| `npm run lint`           | ESLint                        |
| `npm run format`         | Format the repo with Prettier |
| `npm run format:check`   | Check formatting              |
| `npx prisma generate`    | Regenerate the Prisma client  |
| `npx prisma migrate dev` | Create/apply migrations       |
| `npx prisma studio`      | Browse the database           |

## Environment variables

Copy the placeholder file and fill in your values:

```bash
cp .env.example .env
```

| Variable              | Purpose                                                  |
| --------------------- | -------------------------------------------------------- |
| `DATABASE_URL`        | Postgres connection string (read by `prisma7.config.ts`) |
| `DIRECT_URL`          | Direct (non-pooled) connection string                    |
| `AUTH_SECRET`         | Secret used for auth                                     |
| `AUTH_URL`            | Canonical app URL for auth                               |
| `NEXT_PUBLIC_APP_URL` | Public app URL                                           |

For a throwaway local Postgres, run `npx prisma dev`, then apply the schema
with `npx prisma migrate dev`.
