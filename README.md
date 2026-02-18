# Core

Next.js app with team workspaces, Clerk auth, Prisma (PostgreSQL), and shadcn/ui.

## Quick start

```bash
yarn install
# Create .env with required variables (see docs/setup.md)
yarn db:push
yarn db:seed   # optional: seed with Clerk users
yarn dev
```

See [docs/setup.md](docs/setup.md) for full setup and environment variables.

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `yarn dev`    | Start dev server         |
| `yarn build`  | Production build         |
| `yarn start`  | Start production server  |
| `yarn db:push`| Push Prisma schema to DB |
| `yarn db:migrate` | Run migrations     |
| `yarn db:studio`  | Open Prisma Studio  |
| `yarn db:seed`    | Seed database       |

## Stack

- **Framework:** Next.js 16
- **Auth:** Clerk
- **Database:** PostgreSQL + Prisma
- **UI:** React 19, Tailwind CSS, shadcn/ui
