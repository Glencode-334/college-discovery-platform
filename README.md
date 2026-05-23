# College Discovery Platform

A production-grade MVP for discovering, comparing, and exploring colleges.

## Features

- College Listing + Search
- Dynamic College Detail Pages
- Compare Colleges
- College Predictor Tool
- Responsive UI
- Global State Management with Zustand
- Loading Skeletons

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- TailwindCSS
- Zustand
- shadcn/ui

## Architecture Decisions

### App Router
Used Next.js App Router for scalable routing and nested layouts.

### Zustand
Used Zustand for lightweight global state management for compare functionality.

### Reusable Components
Built reusable UI systems such as:
- CollegeCard
- Navbar
- shared UI components

### Responsive Design
Used Tailwind responsive utilities for mobile-first layouts.

## Routes

- `/`
- `/colleges`
- `/colleges/[id]`
- `/compare`
- `/predictor`

## Running Locally

```bash
npm install
npm run dev
```

## Deployment

Recommended:
- Vercel

## Future Improvements

- Authentication
- Saved Colleges
- Real backend/database
- Pagination
- Advanced filtering
- AI-powered recommendations