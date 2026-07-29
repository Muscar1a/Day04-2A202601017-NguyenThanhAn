# Agent Trace Visualizer

A multi-agent workflow visualization dashboard built following **Resonant UI 2027** design system (STYLING.md). Displays tool calls, reasoning steps, and ReAct loops from agent transcripts.

## Tech Stack

- **Vite** — dev server & build
- **React 19** + **TypeScript** — component framework
- **Tailwind CSS** + **Resonant UI tokens** — styling per STYLING.md
- **ES Modules** — modern JS runtime

## Features

- View conversation turns from agent transcripts
- Inspect ReAct loops (Reason → Act → Reason → Act)
- See tool calls with arguments and results
- Timeline view showing round-by-round execution
- Dark mode support per design spec
- Responsive layout (desktop/mobile/tablet)

## Development

```bash
cd frontend
npm install          # or pnpm install
npm dev              # Vite dev server at http://localhost:5173
```

## Build

```bash
npm build            # Production build to dist/
npm preview          # Serve dist/ locally
```

## Data Format

Compatible with transcript JSON from `starter_v0/transcripts/*.transcript.json`. See `public/samples/example_transcript.json` for example structure.

## Design System Conformance

Per `frontend/STYLING.md`:
- [x] Luminous Paper for content surfaces
- [x] Liquid Lens for controls (with fallback)
- [x] WCAG 2.2 AA contrast requirements
- [x] Keyboard focus visible outlines
- [x] Reduced motion support
- [x] Semantic spacing tokens (--space-*)
- [x] Radius hierarchy (xs/sm/md/lg/xl/pill)
- [x] Two-family typography (Inter variable + serif headlines)

## Anti-Patterns Avoided

- [x] No rainbow gradients as generic AI signal
- [x] No permanent chatbot panel on every screen
- [x] No empty prompt boxes without guidance
- [x] No hover-only information
- [x] No continuous parallax/animations on work screens
