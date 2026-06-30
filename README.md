# SE Project

A React + Redux Toolkit frontend demo with mock authentication, protected routes, and a responsive admin dashboard.

## Stack

- **Vite** — build tool
- **React 19** — UI
- **Redux Toolkit** — state management (RTK Query for API)
- **React Router v7** — client-side routing
- **Tailwind CSS v4** — styling
- **Recharts** — dashboard charts
- **Lucide React** — icons

## Setup

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Demo flow

1. **Register** — create an account at `/register` (password min 6 characters)
2. **Login** — sign in at `/login` with your credentials
3. **Dashboard** — explore stats, charts, and activity at `/dashboard`
4. **Profile** — visit `/profile` to see user info from Redux state
5. **Logout** — use the profile page logout button
6. **Refresh** — auth persists via `localStorage` until you log out

## Routes

| Path | Access |
|------|--------|
| `/home` | Public (landing) |
| `/about` | Public (landing section) |
| `/contact` | Public (landing section) |
| `/login` | Guests only |
| `/register` | Guests only |
| `/dashboard` | Protected |
| `/users` | Protected |
| `/analytics` | Protected |
| `/settings` | Protected |
| `/profile` | Protected |

## Project structure

```
src/
├── components/     # UI components (common, dashboard, landing, error)
├── config/         # Environment and API configuration
├── data/           # Static mock data for dashboards
├── features/       # Redux slices by domain (auth, dashboard, sidebar, user)
├── hooks/          # Custom React hooks
├── layouts/        # Page layouts (main, auth, dashboard)
├── pages/          # Route pages (auth, dashboard, landing)
├── providers/      # App-level providers (auth initializer)
├── routes/         # Route config and guards
├── services/       # Storage, mocks, error helpers
├── shared/         # Constants, utilities, reusable UI primitives
└── store/          # Redux store, middleware, RTK Query APIs
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Notes

This app uses **mock authentication** only. User data is stored in `localStorage` for demo purposes — not suitable for production.
