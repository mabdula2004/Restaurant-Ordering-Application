# EMBER° — Restaurant Ordering Application

A premium, responsive full-stack restaurant ordering experience built with React and Supabase. EMBER° pairs an editorial restaurant aesthetic with a real Postgres-backed menu and a production-oriented security model.

## Highlights

- Premium responsive storefront for desktop, tablet and mobile
- Live menu and category data from Supabase Postgres
- Search and category filtering
- Interactive cart with quantity controls and calculated totals
- Database model for profiles, favorites, orders and order line items
- Row Level Security policies for user-owned data
- Seeded restaurant menu for immediate local development
- Loading and empty-result states
- Vite production build

## Stack

**Frontend:** React 18, Vite, Lucide React, CSS

**Backend:** Supabase Auth + PostgreSQL + Row Level Security

## Architecture

`src/App.jsx` contains the customer ordering surface and live menu queries. `src/lib/supabase.js` owns the Supabase browser client. The database separates public catalog data (`categories`, `menu_items`) from user-owned data (`profiles`, `favorites`, `orders`, `order_items`). RLS permits public catalog reads while authenticated users can only access their own private records.

## Database

- `profiles` — customer profile linked to `auth.users`
- `categories` — ordered menu taxonomy
- `menu_items` — product catalog, availability, pricing and merchandising metadata
- `favorites` — user/menu-item relation
- `orders` — order header, delivery details and status
- `order_items` — immutable order-line snapshots and customizations

Order statuses are constrained to: `placed`, `confirmed`, `preparing`, `out_for_delivery`, `delivered`, `cancelled`.

## Local setup

```bash
git clone https://github.com/mabdula2004/Restaurant-Ordering-Application.git
cd Restaurant-Ordering-Application
npm install
cp .env.example .env
npm run dev
```

Add your Supabase project URL and **publishable** key to `.env`. Never put a service-role key in a Vite/browser environment variable.

## Build

```bash
npm run build
npm run preview
```

## Security

RLS is enabled on every application table. Catalog tables are read-only to public clients; profile, favorite and order policies use `auth.uid()` ownership checks. The browser uses only the Supabase publishable key.

## Design direction

EMBER° intentionally avoids a generic dashboard/template aesthetic. The interface uses warm editorial neutrals, ember-orange accents, oversized food photography, strong typography, restrained motion, compact commerce controls and a drawer-style bag experience.

## Screenshots

Run the application locally to capture the latest desktop/mobile surfaces. The primary showcase states are the editorial home/menu view, filtered catalog, populated bag, empty search state and mobile layout.

## Roadmap

The schema already supports authenticated profiles, favorites and persistent orders. Natural production extensions include restaurant staff/admin roles, real payment-provider checkout, delivery tracking and transactional notifications.

---

Built as a full-stack portfolio project by Muhammad Abdullah.