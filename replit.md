# NorthDemy

## Overview

NorthDemy is a technology education and startup incubation platform based in Nigeria. The application serves as the digital presence for NorthDemy Limited, showcasing their tech training programs, startup incubation services, digital safety initiatives, and organizational information. The platform includes a public-facing website with pages for services, team members, blog posts, programs, and partners, along with a protected admin dashboard for content management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript, using Vite as the build tool
- **Routing**: React Router DOM v7 with HashRouter for client-side navigation
- **Styling**: Tailwind CSS loaded via CDN, with custom fonts (Plus Jakarta Sans)
- **Icons**: Lucide React for consistent iconography
- **State Management**: Local component state with React hooks; no global state library

### Dual Codebase Structure
The project is now based in the root folder as a single Laravel application with React frontend integration.

### Data Management
- **Storage**: Browser localStorage for data persistence (no backend database currently)
- **DataManager utility**: Centralized data access layer that manages services, programs, team members, blog posts, and board members
- **Default data**: Hardcoded in `constants.tsx` with localStorage overrides

### Authentication
- Simple token-based admin authentication using localStorage (`admin_token`)
- Protected routes wrap admin dashboard components
- No server-side session management in the React-only implementation

### Page Structure
- Public pages: Home, About, Team, Blog, Contact, Programs, Partners, Incubation Hub, Service Details
- Admin pages: Services, Programs, Blog, Team, and Board management interfaces
- Layout component handles navbar/footer wrapper with scroll-to-top on navigation

## External Dependencies

### Frontend Libraries
- **React 19.x**: UI component library
- **React Router DOM 7.x**: Client-side routing
- **Lucide React**: Icon components
- **Framer Motion** (Laravel version): Animation library

### Build Tools
- **Vite 6.x**: Development server and production bundler
- **TypeScript 5.8**: Type checking
- **@vitejs/plugin-react**: React JSX transformation

### Backend (Laravel Implementation in Northdemy/)
- **Laravel 12.x**: PHP web framework
- **PHP 8.2+**: Runtime requirement
- **Composer**: PHP dependency management
- Third-party packages: Guzzle HTTP, Faker, various Symfony components

### Environment Configuration
- `GEMINI_API_KEY`: Optional API key for AI features (defined in .env.local)
- No database configuration present in the React-only version

### CDN Resources
- Tailwind CSS loaded from cdn.tailwindcss.com
- Google Fonts for Plus Jakarta Sans typography