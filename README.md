# SE Project

A React + Redux Toolkit frontend demo with mock authentication, protected routes, and shared auth state.

## Stack

- **Vite** — build tool
- **React 18** — UI
- **Redux Toolkit** — state management
- **React Router v6** — client-side routing
- **Plain CSS** — global design system (no Tailwind)

## Setup

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Demo flow

1. **Register** — create an account at `/register` (password min 6 characters)
2. **Auto-login** — after registration you are redirected to `/dashboard`
3. **Profile** — visit `/profile` to see user info from Redux state
4. **Logout** — use the navbar Logout button
5. **Login** — sign back in at `/login` with your credentials
6. **Refresh** — auth persists via `localStorage` until you log out

## Routes

| Path | Access |
|------|--------|
| `/` | Public |
| `/about` | Public |
| `/contact` | Public |
| `/login` | Guests only (redirects to dashboard if logged in) |
| `/register` | Guests only |
| `/dashboard` | Protected |
| `/profile` | Protected |

## Project structure

```
src/
├── app/           # Redux store and hooks
├── features/auth/ # Auth slice and thunks
├── components/    # Layout and routing guards
├── pages/         # Route pages
└── utils/         # localStorage helpers
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
