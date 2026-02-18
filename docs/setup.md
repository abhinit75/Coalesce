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

5. **Tunneling (local development with Clerk)**

   For Clerk to work locally (redirects, webhooks), it must reach your app at a public URL. Use a tunnel so `localhost` is exposed:

   - **[ngrok](https://ngrok.com):** `ngrok http 3000` → use the `https://…` URL.
   - **[Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps):** `cloudflared tunnel --url http://localhost:3000` → use the generated URL.

   Then:

   1. Set `NEXT_PUBLIC_APP_URL` in `.env` to your tunnel URL (e.g. `https://abc123.ngrok.io`).
   2. In [Clerk Dashboard](https://dashboard.clerk.com) → **Paths**: add the tunnel URL under "Allowed redirect URLs" / "Allowed origins" so sign-in and sign-up redirects work.
   3. Restart `yarn dev` and use the tunnel URL in the browser when testing auth.

6. **Clerk webhooks**

   The app syncs new Clerk users to your database via a webhook. For that to work, Clerk must be able to POST to your app:

   - **Production:** Use your real domain (e.g. `https://yourapp.com`).
   - **Local:** Use your tunnel URL from step 5 (e.g. `https://abc123.ngrok.io`).

   **Configure in Clerk:**

   1. Go to [Clerk Dashboard](https://dashboard.clerk.com) → **Webhooks** → **Add endpoint**.
   2. **Endpoint URL:** `https://<your-domain-or-tunnel>/api/user/create-user`
   3. **Subscribe to:** `user.created` (and any other events your app handles).
   4. After saving, open the webhook and copy the **Signing secret**.
   5. In `.env`, set:
      ```bash
      USER_CREATED_WEBHOOK_SECRET="whsec_..."
      ```
   6. Restart the app. New sign-ups in Clerk will trigger the webhook and create/update users in your DB.

## Troubleshooting

- **Prisma errors:** Ensure `DATABASE_URL` is set and the database is reachable. Run `yarn db:generate` if you change the schema.
- **Clerk redirects:** Set `NEXT_PUBLIC_APP_URL` to your dev URL (or tunnel URL) and add it in Clerk Dashboard → Paths.
- **Seed fails for Clerk:** Seed runs without `CLERK_SECRET_KEY` but won’t create Clerk org memberships; DB seed still applies.
- **Webhooks not firing locally:** Ensure the tunnel is running, the endpoint URL in Clerk uses the tunnel URL, and `USER_CREATED_WEBHOOK_SECRET` matches the webhook’s Signing secret in the Clerk Dashboard.
