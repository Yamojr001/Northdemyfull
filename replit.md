# replit.md

## Overview

This is a Laravel 12 web application using Inertia.js with React as the frontend framework. The project appears to be an organizational/nonprofit website with content management features for services, programs, team members, blog posts, and board members. It uses Laravel Breeze for authentication scaffolding and Tailwind CSS for styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Backend Architecture
- **Framework**: Laravel 12 (PHP 8.2+)
- **Authentication**: Laravel Breeze with Inertia.js React stack, providing login, registration, password reset, email verification, and profile management
- **API/Routing**: Laravel Sanctum for API token authentication; Ziggy for sharing Laravel routes with the JavaScript frontend
- **Server-Side Rendering Bridge**: Inertia.js (`inertiajs/inertia-laravel`) acts as the glue between Laravel backend and React frontend — pages are rendered as Inertia responses rather than traditional Blade views or API endpoints

### Frontend Architecture
- **Framework**: React 18 with JSX (files in `resources/js/`)
- **Routing**: Inertia.js handles page navigation (no separate React Router needed for main pages, though `react-router-dom` is listed as a dependency)
- **Styling**: Tailwind CSS 3 with `@tailwindcss/forms` plugin; configured in `tailwind.config.js` with custom font (Figtree)
- **UI Components**: HeadlessUI React for accessible UI primitives; Framer Motion for animations; Lucide React for icons
- **Build Tool**: Vite 7 with `laravel-vite-plugin` and `@vitejs/plugin-react`; entry point is `resources/js/app.jsx`
- **State/Data Management**: A custom `DataManager` utility (`resources/js/utils/dataManager.js`) uses localStorage to manage content data (services, programs, team, blog, board) with constants as fallback defaults. This is a client-side data layer — content is stored in the browser, not in a database.

### Data Storage
- **Database**: Laravel's default database configuration (likely SQLite for development based on Laravel 12 defaults). Migrations handle schema management. The database is primarily used for authentication (users table).
- **Content Data**: Currently managed client-side via localStorage through the `DataManager` utility, with hardcoded constants as initial data. This means content data (services, programs, team members, blog posts, board members) is NOT persisted server-side — it lives in the user's browser.

### Key Design Decisions

1. **Inertia.js instead of a traditional SPA or API**
   - Problem: Need a modern React frontend with Laravel backend without building a separate API
   - Solution: Inertia.js bridges Laravel and React, allowing server-side routing with client-side rendering
   - Pros: No need for a separate API layer, shared authentication, server-side routing
   - Cons: Tighter coupling between frontend and backend

2. **Client-side data management with localStorage**
   - Problem: Need to manage content without a full CMS backend
   - Solution: `DataManager` stores/retrieves content from localStorage with constant fallbacks
   - Cons: Data is not persistent across browsers/devices, not suitable for production multi-user scenarios. This should likely be migrated to database-backed storage.

3. **Laravel Breeze for auth scaffolding**
   - Problem: Need authentication (login, register, password reset, profile management)
   - Solution: Breeze provides pre-built React/Inertia auth pages and controllers
   - Pros: Quick setup, follows Laravel conventions

### Development Workflow
- **Dev command**: `composer dev` runs Laravel server, queue listener, Pail log viewer, and Vite dev server concurrently
- **Setup command**: `composer setup` handles full project initialization (install deps, generate key, run migrations, build assets)
- **Code formatting**: Laravel Pint for PHP code style

### Project Structure
- `app/` — Laravel application code (controllers, models, etc.)
- `resources/js/` — React components and frontend code (JSX files)
- `resources/js/utils/` — Utility modules including DataManager
- `resources/js/constants/` — Static content data (referenced by DataManager)
- `resources/css/` — Tailwind CSS entry point
- `resources/views/` — Blade templates (minimal, mainly the Inertia root template)
- `database/` — Migrations, factories, seeders
- `routes/` — Laravel route definitions
- `public/build/` — Compiled/built frontend assets

## External Dependencies

### PHP Packages (Backend)
- **laravel/framework** (^12.0) — Core framework
- **laravel/sanctum** (^4.0) — API authentication
- **laravel/breeze** (^2.3, dev) — Auth scaffolding
- **inertiajs/inertia-laravel** (^2.0) — Inertia.js server-side adapter
- **tightenco/ziggy** (^2.0) — Shares Laravel routes with JavaScript
- **laravel/tinker** (^2.10.1) — REPL for Laravel
- **laravel/pail** (^1.2.2, dev) — Real-time log viewer
- **laravel/pint** (^1.24, dev) — PHP code formatter
- **laravel/sail** (^1.41, dev) — Docker development environment
- **fakerphp/faker** (^1.23, dev) — Fake data generation for testing
- **phpunit/phpunit** (^11.5.3, dev) — Testing framework
- **mockery/mockery** (^1.6, dev) — Mocking library

### JavaScript Packages (Frontend)
- **react** / **react-dom** (^18.2.0) — UI framework
- **@inertiajs/react** (^2.0.0) — Inertia.js React adapter
- **tailwindcss** (^3.2.1) — Utility-first CSS framework
- **@headlessui/react** (^2.0.0) — Accessible UI components
- **framer-motion** (^12.29.2) — Animation library
- **lucide-react** (^0.563.0) — Icon library
- **axios** (^1.13.4) — HTTP client
- **vite** (^7.3.1) — Build tool
- **laravel-vite-plugin** (^2.1.0) — Vite integration for Laravel

### Database
- Laravel's default database setup (uses migrations). No explicit Postgres or MySQL configuration visible — likely defaults to SQLite for local development. The database is used for user authentication and session management.