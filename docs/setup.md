# Setup

## Prerequisites

- Node.js 20+
- Yarn 4 (project uses `packageManager: "yarn@4.12.0"`)
- PostgreSQL database
- [Clerk](https://clerk.com) account (for auth)

## Steps

1. **Clone and install**

   ```bash
   git clone <repo-url>
   cd core
   yarn install
   ```

2. **Environment variables**

   Create a `.env` file in the project root with:

   | Variable | Required | Description |
   |----------|----------|-------------|
   | `DATABASE_URL` | Yes | PostgreSQL connection string |
   | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Clerk publishable key |
   | `CLERK_SECRET_KEY` | Yes | Clerk secret key |
   | `NEXT_PUBLIC_APP_URL` | Yes | App URL (e.g. `http://localhost:3000`) |
   | `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | No | Override sign-in path (default `/sign-in`) |
   | `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | No | Override sign-up path (default `/sign-up`) |
   | `USER_CREATED_WEBHOOK_SECRET` | No | For Clerk user-created webhook verification |
   | `CLERK_SECRET_KEY` (for seed) | No | Needed if you run `yarn db:seed` to sync org members to Clerk |

   Get Clerk keys from [Clerk Dashboard](https://dashboard.clerk.com) → API Keys.

3. **Database**

   ```bash
   yarn db:push      # create/update schema
   yarn db:seed      # optional: seed users/teams (requires CLERK_SECRET_KEY for Clerk sync)
   ```

4. **Run**

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Troubleshooting

- **Prisma errors:** Ensure `DATABASE_URL` is set and the database is reachable. Run `yarn db:generate` if you change the schema.
- **Clerk redirects:** Set `NEXT_PUBLIC_APP_URL` to your dev URL and add it in Clerk Dashboard → Paths.
- **Seed fails for Clerk:** Seed runs without `CLERK_SECRET_KEY` but won’t create Clerk org memberships; DB seed still applies.
