# GetMyMarket

Agentic Financial Intelligence System for market monitoring, sentiment-driven signal extraction, and explainable stock movement analysis.

## Overview

GetMyMarket combines real-time signal ingestion with an AI-first interface:

- Real-time sentiment scanning from earnings-call style narratives, filings, and financial news streams
- Explainability engine for why a stock is moving, tied to event triggers
- Conversational querying in plain English with source attribution
- Risk-scoring dashboard with confidence-weighted visual signals

## Current Product Surfaces

- Landing page: product narrative and positioning
- Dashboard: terminal-style market intelligence console

## Core Dashboard Capabilities

- Watchlist with confidence and risk signals
- Event reasoning stream (fake demo feed)
- Price and sentiment overlay chart
- Sector momentum chart
- Signal variance anomaly chart
- Conversational command interface for stock analysis prompts

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Recharts
- Framer Motion
- Lucide React

## Project Structure

- frontend: React app and UI implementation
- docs: planning documents
- design-system: design references and page-level design material

## Local Development

### Prerequisites

- Node.js 20+ (Node.js 22 recommended)
- npm 10+

### Install

1. Go to frontend folder
2. Install dependencies

```bash
cd frontend
npm install
```

### Run Dev Server

```bash
npm run dev
```

### Build Production Bundle

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Routes

- / : Landing page
- /dashboard : Agentic terminal-style dashboard

## Deployment

This project can be deployed as a static site from frontend/dist.

### Netlify CLI flow

```bash
cd frontend
npm run build
netlify deploy --prod --dir=dist
```

## Product Vision

GetMyMarket aims to become a copilot for active market participants by combining:

- Fast event-to-signal translation
- Natural-language explainability over market moves
- Risk-aware, confidence-scored decision support

## Status

Current implementation is a frontend prototype with enriched fake data designed to validate UX and interaction patterns before backend agent integration.
