# GetMyMarket Demo Implementation Plan

## Overview
This plan outlines the creation of a frontend demo for "GetMyMarket: Agentic Financial Intelligence System", focusing on a Landing Page and a Dashboard, using mock data as requested by the user.

## Stack
- **Framework:** React + TypeScript (Vite)
- **Styling:** Tailwind CSS (built on the generated UI-UX Pro Max Design System)
- **Icons:** Lucide React
- **Routing:** React Router DOM (or simple state-based routing for a single-page demo)

## Phases

### Phase 1: Setup
- Initialize Vite React project in `frontend` directory.
- Install dependencies: `tailwindcss@3.4.1`, `lucide-react`, `recharts` (for dashboard charts).
- Configure tailwind based on `design-system/getmymarket/MASTER.md`. (Colors, Fonts).

### Phase 2: Landing Page
- **Hero Section:** Value proposition ("Agentic Financial Intelligence").
- **Features Section:** Highlighting Real-Time Sentiment, Natural Language Explanations, Conversational Interface.
- **CTA:** "View Demo" button that routes to the dashboard.
- **Design implementation:** Clean, white/slate background with blue/orange accents, modern typography (Outfit/Work Sans).

### Phase 3: Dashboard Demo
- **Sidebar/Nav:** Navigation between sections (Overview, Signals, Chat).
- **Sentiment Agent Timeline:** Mock real-time feed of signals extracted from earnings/news.
- **Why is this moving?:** LLM explanation card for specific stocks (e.g., HDFC Bank).
- **Risk-Scoring Grid:** Confidence-weighted signals table.

### Phase 4: Verification
- Validate against UI-UX Pro Max Pre-Delivery Checklist (hover states, svgs instead of emojis, cursor-pointers, contrast).
