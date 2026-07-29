# RESONANT UI 2027

> **A unified UI/UX design language for AI-native products**  
> Calm by default. Alive when useful. Transparent when intelligent.

**Document:** `STYLING.md`  
**Version:** 1.0  
**Status:** Forward-looking design specification  
**Target:** Web, mobile, desktop, embedded displays, and multimodal AI interfaces  
**Audience:** Product designers, frontend engineers, AI agents, design-system maintainers, and product owners

---

## 0. How to Use This Specification

This file is both a creative direction and an implementation contract.

The keywords **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are normative:

- **MUST / MUST NOT**: required for conformance.
- **SHOULD / SHOULD NOT**: recommended unless a documented product constraint justifies an exception.
- **MAY**: optional and context-dependent.

When an AI system generates a screen from this file, it MUST prioritize, in order:

1. User intent and task completion.
2. Accessibility and legibility.
3. Trust, control, and reversibility.
4. Information hierarchy.
5. Brand expression.
6. Decorative novelty.

A screen that looks futuristic but obscures information, destabilizes navigation, or hides AI behavior is non-conformant.

---

## 1. Design Thesis

The dominant interface shift of 2026 is not a visual style. It is the movement from static pages toward adaptive, multimodal, AI-mediated systems. The interface is no longer only a surface that users operate; it becomes a negotiated layer between human intent, machine interpretation, data, and action.

**Resonant UI 2027** turns that shift into one coherent design language:

- **Intent-led:** organize the experience around what the user is trying to achieve, not around application modules.
- **Adaptive but stable:** personalize density, emphasis, assistance, and modality without moving core controls unpredictably.
- **Transparent about intelligence:** label AI-generated content, reveal sources and uncertainty, and keep consequential actions under user control.
- **Tactile but readable:** use depth, translucency, texture, and motion as functional signals rather than decoration.
- **Expressive but calm:** introduce personality through typography, color pulses, crafted imagery, and micro-interactions while preserving cognitive clarity.
- **Multimodal by design:** support touch, pointer, keyboard, voice, camera, haptics, and context without making any one mode mandatory.
- **Accessible at runtime:** adapt not only to screen size, but also to user ability, motion preferences, contrast needs, environment, and input method.

### 1.1 The 2027 opportunity

Many 2026 products converge on the same visual result: rounded cards, blurred panels, gradient blobs, generic sans-serif typography, and a chat box added to an otherwise conventional application. This creates visual familiarity but weak differentiation and often weak trust.

Resonant UI proposes a more durable direction:

> **The next premium interface will feel less like a generated screen and more like a responsive instrument.**

It should communicate what it knows, what it is doing, why it changed, and what the user can control.

### 1.2 The signature expression

The system combines two material ideas:

- **Luminous Paper:** warm, quiet, highly legible content surfaces.
- **Liquid Lens:** restrained translucent controls that float above content and react to focus, motion, and context.

Use Luminous Paper for reading, analysis, creation, forms, tables, and long tasks. Use Liquid Lens for navigation, temporary controls, command surfaces, media controls, and contextual actions.

**Never place all content inside glass.** Glass is a control material, not the default content background.

---

## 2. What This System Absorbs—and Rejects—from 2026

| 2026 movement | Adopt | Reject |
|---|---|---|
| Multimodal experiences | Seamless switching among keyboard, touch, voice, camera, and haptics | Voice-only flows and hidden mode changes |
| Designing for intent | Goal-led navigation, task-aware assistance, outcome previews | Guessing intent without confirmation |
| Machine Experience design | Structured metadata, clear component semantics, machine-readable states | Optimizing for agents at the expense of humans |
| Glassmorphism / Liquid Glass | Translucent navigation and controls with contrast protection | Low-contrast text, excessive blur, glass-on-glass nesting |
| AI-generated design systems | Token-driven generation, automated variants, machine-verifiable constraints | Unreviewed generated components and undocumented style drift |
| Emotion-aware modes | User-selected pace, density, sound, and tone | Covert emotion inference or manipulation |
| Better prompt design | Structured intent capture, examples, constraints, and editable plans | Empty chat boxes as the only interaction model |
| Nostalgia and tactile craft | Warmth, texture, editorial type, imperfect human details | Decorative retro references that reduce usability |
| Expressive motion | Meaningful state transitions and spatial continuity | Constant ambient animation and attention theft |
| Hyper-personalization | Adaptable defaults and explicit preferences | Navigation reshuffling, filter bubbles, or unexplained changes |

---

## 3. Core Principles

## 3.1 Intent Before Interface

Every major screen MUST answer:

1. What is the user trying to accomplish?
2. What is the next best action?
3. What information is necessary now?
4. What can remain progressively disclosed?

Navigation labels SHOULD describe outcomes: `Review applications`, `Plan campaign`, `Resolve exceptions`, `Compare scenarios`.

Avoid organizing primary navigation only around internal nouns such as `Modules`, `Objects`, `Records`, or `Tools` unless the product serves expert operators who explicitly use those terms.

## 3.2 Adaptive, Not Unstable

The interface MAY adapt:

- Information density.
- Recommended actions.
- Default modality.
- Explanatory depth.
- Content ordering inside a stable region.
- Tone and animation intensity.
- Shortcut prominence.

The interface MUST NOT silently change:

- Primary navigation positions.
- Destructive-action locations.
- Established keyboard shortcuts.
- Meaning of color, icon, or shape.
- Previously confirmed privacy or automation settings.

Any material adaptation MUST be explainable through a small `Why this changed` affordance.

## 3.3 Intelligence Must Be Legible

Users MUST be able to distinguish:

- User-authored content.
- AI-generated content.
- AI-suggested content not yet applied.
- System-calculated facts.
- Retrieved source material.
- Inferences and uncertainty.

Do not use sparkle icons as the only indication of AI. Use a text label where trust matters: `AI suggestion`, `Generated draft`, `Based on 4 sources`, or `Low confidence`.

## 3.4 Depth Must Carry Meaning

Elevation communicates interaction priority:

- **Level 0:** page background and ambient field.
- **Level 1:** content canvas.
- **Level 2:** grouped interactive region or card.
- **Level 3:** sticky navigation, command surface, active inspector.
- **Level 4:** popover, menu, temporary tool.
- **Level 5:** modal or critical interruption.

Do not add shadow solely to make an element “look premium.” If two surfaces have equal interaction priority, they SHOULD share the same elevation.

## 3.5 Motion Is Feedback

Motion MUST explain at least one of the following:

- Where an element came from.
- Where it went.
- What changed.
- What is active.
- Whether an action succeeded, failed, or remains in progress.

Motion MUST NOT be required to understand state. Every animated state needs a static visual equivalent.

## 3.6 Human Character Prevents Synthetic Uniformity

Use one controlled humanizing element per major view:

- Editorial serif headline.
- Crafted illustration.
- Grain or paper texture.
- Expressive but accessible accent color.
- Deliberately asymmetrical composition.
- Warm microcopy.
- A responsive brand mark.

Do not combine all of them simultaneously. The product should feel authored, not decorated.

## 3.7 Accessible by Construction

Accessibility is not a post-processing mode. Components MUST be designed to remain usable under:

- 200% text zoom.
- Keyboard-only input.
- Screen reader navigation.
- Reduced motion.
- Increased contrast.
- Color-vision differences.
- Touch imprecision.
- Slow network or low-power device conditions.
- AI failure or unavailable personalization.

---

## 4. Experience Architecture

Resonant UI uses a five-layer architecture.

### 4.1 Layer 1 — Ambient Field

The ambient field establishes mood without carrying critical information.

It MAY include:

- A very subtle radial color field.
- Low-opacity grain.
- A contextual gradient that changes between broad product modes.
- A static branded illustration.

It MUST NOT reduce text contrast or animate continuously behind reading surfaces.

### 4.2 Layer 2 — Product Shell

The shell contains stable global navigation, identity, environment, and status.

Desktop pattern:

- Left rail or top bar, never both as equally dominant systems.
- Product switcher and current workspace at the beginning.
- Global search / command entry near the center or top.
- Notifications, account, and system status at the end.

Mobile pattern:

- Bottom navigation for three to five primary destinations.
- Top app bar for current context and local actions.
- Command surface invoked through a persistent but unobtrusive action.

### 4.3 Layer 3 — Task Canvas

The task canvas is the primary work area. It uses Luminous Paper rather than glass.

A task canvas SHOULD contain:

1. A concise outcome-oriented title.
2. Current status or scope.
3. One primary action.
4. Main content.
5. Optional contextual inspector.

### 4.4 Layer 4 — Intelligence Layer

AI assistance appears as a contextual collaborator, not a permanent chat column.

It MAY appear as:

- Inline suggestion.
- Command palette.
- Draft sidecar.
- Explain panel.
- Plan preview.
- Structured intent composer.
- Automated status summary.

AI UI MUST collapse when it is not useful. It MUST NOT permanently consume more than 35% of the desktop viewport unless the user explicitly enters a co-creation mode.

### 4.5 Layer 5 — Evidence Layer

Any AI-generated recommendation, calculation, or consequential action SHOULD provide an evidence path.

The evidence layer may contain:

- Sources.
- Assumptions.
- Confidence.
- Changed fields.
- Decision history.
- Model or automation identity.
- Human approval state.

This layer is normally summarized and progressively disclosed.

---

## 5. Visual Language

## 5.1 Design Character

Use these adjectives as a visual filter:

- Calm.
- Precise.
- Tactile.
- Luminous.
- Contextual.
- Human.
- Credible.

Avoid:

- Sterile.
- Neon-everywhere.
- Over-rounded.
- Cartoonishly bouncy.
- Foggy.
- Chrome-heavy.
- Visually noisy.
- Indistinguishable from an AI template.

## 5.2 Color Strategy: Quiet Base, Contextual Chroma

The color system has four layers:

1. **Neutral field:** warm or cool near-neutral backgrounds.
2. **Ink:** high-contrast text and line colors.
3. **Semantic colors:** success, warning, danger, information.
4. **Contextual chroma:** one active accent family that reflects product context.

Contextual chroma MAY change by workspace, task, or brand campaign, but its semantic meaning MUST remain stable.

### 5.2.1 Reference tokens

These values are a starting point, not a substitute for contrast testing.

```css
:root {
  color-scheme: light dark;

  /* Luminous Paper — light */
  --color-canvas: oklch(98.2% 0.008 88);
  --color-surface-1: oklch(99.4% 0.004 88);
  --color-surface-2: oklch(96.8% 0.010 88);
  --color-surface-3: oklch(93.8% 0.014 88);

  --color-ink-1: oklch(20% 0.018 265);
  --color-ink-2: oklch(39% 0.020 265);
  --color-ink-3: oklch(55% 0.018 265);

  --color-line: oklch(84% 0.014 265 / 0.72);
  --color-line-strong: oklch(68% 0.025 265 / 0.80);

  /* Contextual chroma — default violet-blue */
  --color-accent-50: oklch(96% 0.025 285);
  --color-accent-100: oklch(91% 0.055 285);
  --color-accent-300: oklch(75% 0.145 285);
  --color-accent-500: oklch(59% 0.220 285);
  --color-accent-600: oklch(51% 0.215 285);
  --color-accent-700: oklch(43% 0.185 285);

  --color-success: oklch(55% 0.145 155);
  --color-warning: oklch(70% 0.160 78);
  --color-danger: oklch(56% 0.215 28);
  --color-info: oklch(58% 0.155 240);

  /* Liquid Lens */
  --lens-fill: oklch(99% 0.006 260 / 0.68);
  --lens-fill-strong: oklch(99% 0.006 260 / 0.84);
  --lens-border: oklch(100% 0 0 / 0.56);
  --lens-shadow: 0 12px 40px rgb(16 24 40 / 0.14);
  --lens-blur: 18px;
}

[data-theme="dark"] {
  --color-canvas: oklch(16% 0.015 265);
  --color-surface-1: oklch(20% 0.016 265);
  --color-surface-2: oklch(24% 0.018 265);
  --color-surface-3: oklch(29% 0.020 265);

  --color-ink-1: oklch(94% 0.010 88);
  --color-ink-2: oklch(78% 0.014 88);
  --color-ink-3: oklch(64% 0.016 88);

  --color-line: oklch(46% 0.020 265 / 0.64);
  --color-line-strong: oklch(61% 0.025 265 / 0.76);

  --lens-fill: oklch(25% 0.018 265 / 0.66);
  --lens-fill-strong: oklch(29% 0.020 265 / 0.82);
  --lens-border: oklch(100% 0 0 / 0.12);
  --lens-shadow: 0 18px 52px rgb(0 0 0 / 0.34);
}
```

### 5.2.2 Color rules

- Body text MUST meet WCAG AA contrast.
- Critical status MUST NOT rely on hue alone; pair color with icon, label, pattern, or shape.
- Accent color SHOULD occupy less than 12% of a typical productivity screen.
- Gradients SHOULD use adjacent hues and low luminance variation behind text.
- Never place small text directly on a translucent surface over uncontrolled imagery.
- Provide a solid fallback when `backdrop-filter` is unavailable or contrast cannot be guaranteed.

## 5.3 Typography: Functional Variable Type + Editorial Signal

Use a two-family system:

- **Interface sans:** `Inter Variable`, `Geist`, `Roboto Flex`, or a comparable variable sans.
- **Editorial accent:** `Newsreader`, `Source Serif 4`, or a brand serif.

The interface sans handles navigation, forms, tables, labels, and body content. The editorial face is reserved for major headlines, narrative moments, premium summaries, or brand statements.

### 5.3.1 Type tokens

```css
:root {
  --font-sans: "Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-serif: "Newsreader Variable", Newsreader, ui-serif, Georgia, serif;
  --font-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;

  --text-xs: clamp(0.75rem, 0.72rem + 0.10vw, 0.8125rem);
  --text-sm: clamp(0.875rem, 0.84rem + 0.12vw, 0.9375rem);
  --text-md: clamp(1rem, 0.96rem + 0.15vw, 1.0625rem);
  --text-lg: clamp(1.125rem, 1.04rem + 0.28vw, 1.25rem);
  --text-xl: clamp(1.375rem, 1.18rem + 0.65vw, 1.75rem);
  --text-2xl: clamp(1.75rem, 1.35rem + 1.25vw, 2.5rem);
  --text-3xl: clamp(2.25rem, 1.55rem + 2.25vw, 4rem);
  --text-display: clamp(3rem, 1.9rem + 4.2vw, 7rem);
}
```

### 5.3.2 Typography rules

- Default body size MUST be at least `16px` equivalent.
- Body line height SHOULD be `1.45–1.7`.
- Long-form content SHOULD stay between `55–78ch`.
- UI labels SHOULD use sentence case, not all caps.
- Numerical dashboards SHOULD enable tabular numerals.
- Variable font axes MAY react subtly to viewport and hierarchy; they MUST NOT animate continuously during reading.
- Kinetic typography MAY be used for launch moments, onboarding, or media experiences, but MUST stop after one cycle and respect reduced-motion settings.

## 5.4 Spacing and Density

Use a 4px base unit with semantic spacing tiers.

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
}
```

The product SHOULD support three user-selectable densities:

| Mode | Typical use | Row height | Control height |
|---|---|---:|---:|
| Comfortable | General use, touch, accessibility | 52–60px | 44–48px |
| Standard | Default mixed-input environment | 44–52px | 40–44px |
| Compact | Expert data-dense workflows | 36–44px | 32–36px |

Even in compact mode, the effective pointer target MUST meet accessibility requirements through spacing or an enlarged hit area.

## 5.5 Shape Language

Resonant UI uses a **radius hierarchy**, not one universal pill shape.

```css
:root {
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-pill: 999px;
}
```

- Inputs and compact controls: `--radius-sm`.
- Buttons: `--radius-sm` or `--radius-md`.
- Cards and panels: `--radius-md` or `--radius-lg`.
- Command surfaces and floating navigation: `--radius-xl`.
- Pills: only for tags, filters, segmented controls, and compact status.
- Modals MUST NOT look like oversized pills.

Asymmetry MAY be used in hero layouts, image masks, and editorial containers. Functional controls MUST remain geometrically predictable.

## 5.6 Materials and Depth

### Luminous Paper

```css
.paper {
  background: var(--color-surface-1);
  border: 1px solid var(--color-line);
  box-shadow:
    0 1px 2px rgb(16 24 40 / 0.04),
    0 12px 28px rgb(16 24 40 / 0.06);
}
```

### Liquid Lens

```css
.lens {
  background: var(--lens-fill);
  border: 1px solid var(--lens-border);
  box-shadow: var(--lens-shadow);
  -webkit-backdrop-filter: blur(var(--lens-blur)) saturate(1.18);
  backdrop-filter: blur(var(--lens-blur)) saturate(1.18);
}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .lens {
    background: var(--color-surface-1);
  }
}
```

### Material rules

- Use no more than two simultaneous blur strengths in one viewport.
- Do not nest translucent panels more than one level deep.
- Text on a lens surface requires a stable local scrim or opaque fill when underlying content changes.
- Depth MUST flatten under increased-contrast modes.
- Background texture opacity SHOULD remain below 3% on content-heavy screens.

## 5.7 Iconography

Icons SHOULD be:

- Optical, not mechanically uniform.
- 1.75–2px stroke at a 24px grid.
- Slightly rounded, but not bubbly.
- Paired with labels for unfamiliar or consequential actions.
- Animated only to confirm state or progress.

Do not mix filled, outlined, and 3D icons arbitrarily. Use:

- Outline for default actions.
- Filled for selected state.
- Duotone or layered icons only for brand moments and high-level navigation.

## 5.8 Imagery and Illustration

Prefer imagery that has evidence of authorship:

- Documentary photography.
- Natural texture.
- Physical materials.
- Editorial collage.
- Controlled 3D objects.
- Human-made diagrams.

AI-generated imagery MUST be labeled where provenance matters. Avoid generic “person using laptop with glowing AI particles” visuals.

---

## 6. Layout System

## 6.1 Responsive Grid

```css
:root {
  --page-gutter: clamp(1rem, 2.5vw, 3rem);
  --content-max: 1440px;
  --reading-max: 76ch;
  --sidebar-width: clamp(240px, 18vw, 320px);
  --inspector-width: clamp(300px, 24vw, 420px);
}
```

- Mobile: 4-column conceptual grid.
- Tablet: 8-column grid.
- Desktop: 12-column grid.
- Wide analytical workspace: 16-column grid MAY be used.

Avoid rigid desktop cards stacked into a single mobile column without reprioritization. Responsive behavior MUST preserve task hierarchy, not merely geometry.

## 6.2 Composition Patterns

### Focus Canvas

Use for creation, analysis, and review.

```text
[Stable shell]
[Outcome title + status + primary action]
[Main task canvas................][Context inspector]
[Evidence / history drawer on demand]
```

### Guided Flow

Use for onboarding, setup, checkout, and consequential automation.

```text
[Progress + exit]
[Current decision]
[Preview / explanation]
[Back] [Primary action]
```

### Intelligence Sidecar

Use when AI and user co-create.

```text
[User artifact / data................][AI plan, suggestions, evidence]
```

The sidecar MUST be resizable or collapsible and SHOULD remember the user’s last explicit preference.

### Spatial Stack

Use for media, maps, dashboards, and immersive contexts.

```text
[Content world / visualization]
      [floating lens controls]
      [context card]
      [temporary action tray]
```

Spatial layouts MUST retain a linear semantic DOM order.

## 6.3 Container Queries

Components SHOULD respond to their available container, not only the viewport.

```css
.card-region {
  container-type: inline-size;
}

@container (max-width: 420px) {
  .metric-card {
    grid-template-columns: 1fr;
  }
}
```

---

## 7. Motion and Interaction

## 7.1 Motion Tokens

```css
:root {
  --duration-instant: 80ms;
  --duration-fast: 140ms;
  --duration-standard: 220ms;
  --duration-slow: 360ms;
  --duration-scene: 520ms;

  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-enter: cubic-bezier(0.05, 0.7, 0.1, 1);
  --ease-exit: cubic-bezier(0.3, 0, 0.8, 0.15);
  --ease-spring: linear(
    0, 0.012, 0.048, 0.104, 0.176, 0.258, 0.346, 0.437,
    0.526, 0.61, 0.688, 0.758, 0.819, 0.87, 0.912, 0.946,
    0.971, 0.988, 0.997, 1
  );
}
```

### 7.1.1 Motion mapping

| Interaction | Duration | Behavior |
|---|---:|---|
| Hover / focus | 80–140ms | Border, fill, subtle elevation |
| Button press | 80–120ms | 1–2% compression, immediate state feedback |
| Popover | 140–220ms | Fade + 4–8px directional movement |
| Panel | 220–360ms | Spatial continuity from trigger |
| Page / mode transition | 360–520ms | Shared element or restrained crossfade |
| AI streaming | Variable | Stable text flow; no layout jumping |

## 7.2 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

A production implementation SHOULD replace large movement with opacity, border, or instant state changes rather than merely speeding all animations to zero.

## 7.3 Haptics and Sound

Haptics MAY reinforce:

- Successful drop.
- Mode change.
- Confirmed destructive action.
- Navigation boundary.

Sound MUST be opt-in except for accessibility-required alerts. Every sound cue MUST have a visual equivalent.

## 7.4 Cursor and Pointer Behavior

- Interactive elements MUST expose an appropriate pointer or hover state.
- Drag handles MUST be visible on focus and hover.
- Hover-only information is prohibited.
- Magnetic cursor effects and trailing cursors are prohibited in productivity interfaces.

---

## 8. AI-Native UX Patterns

## 8.1 Intent Composer, Not Empty Prompt Box

The primary AI entry should help users form a high-quality request.

A conformant intent composer includes:

- Goal.
- Context.
- Constraints.
- Desired output.
- Optional examples or attachments.
- Scope of allowed actions.

Example:

```text
Goal: Compare three campaign options
Context: Q3 launch, Southeast Asia, $250k budget
Constraints: Must use existing creative assets
Output: Recommendation + risk table + editable plan
Actions allowed: Read project data; do not publish or contact anyone
```

The interface MAY begin as a natural-language field, but it SHOULD progressively extract these fields and allow the user to edit them.

## 8.2 Plan Before Consequential Action

For actions that create, send, publish, purchase, delete, approve, or modify many records, the AI MUST show a plan before execution.

A plan preview contains:

1. Interpreted objective.
2. Steps.
3. Data sources.
4. Assumptions.
5. Expected changes.
6. Permissions needed.
7. Reversibility.
8. Final confirmation.

## 8.3 Confidence Without False Precision

Do not display `87% confident` unless the value is calibrated and meaningful.

Prefer qualitative states tied to action:

- **High confidence:** consistent evidence; safe to proceed with normal review.
- **Mixed evidence:** review highlighted assumptions.
- **Low confidence:** insufficient or conflicting data; user input required.

Confidence MUST be accompanied by a reason or evidence path.

## 8.4 Sources and Provenance

AI output SHOULD distinguish:

- Retrieved fact.
- User-provided fact.
- Calculation.
- Inference.
- Recommendation.
- Creative generation.

Use inline source markers for high-stakes factual claims. Provide a source drawer for long outputs.

## 8.5 Editable Before Applied

AI-generated artifacts SHOULD be directly editable in their destination format:

- Email as email fields.
- Schedule as calendar blocks.
- Report as structured document.
- Query as filters and conditions.
- Workflow as nodes and approvals.

Do not force the user to edit consequential output inside a chat transcript.

## 8.6 Reversible by Default

Automation SHOULD create an undo point. The UI MUST communicate:

- What changed.
- How long undo remains available.
- What cannot be reversed.
- Where the action is recorded.

## 8.7 Agent Activity

When an AI agent performs multiple operations, show a compact activity model:

```text
Planning → Retrieving → Comparing → Drafting → Awaiting approval
```

Users SHOULD be able to inspect completed steps, pause when feasible, and cancel pending work.

Do not expose raw chain-of-thought. Show concise operational summaries, evidence, inputs, and outcomes.

## 8.8 Memory and Personalization

The interface MUST provide:

- A visible indicator when saved memory affects an answer.
- A way to inspect relevant remembered preferences.
- A way to correct or delete them.
- A mode that ignores saved personalization for the current task.

## 8.9 Emotion-Aware Modes

Emotion-aware design MUST be user-controlled.

Acceptable:

- `Calm mode` reduces animation, chroma, notifications, and information density.
- `Focus mode` hides nonessential content.
- `Coach mode` adds explanations and encouragement.
- `Expert mode` increases density and removes basic guidance.

Unacceptable:

- Inferring stress from camera, voice, typing cadence, or biometrics without explicit, informed consent.
- Changing prices, urgency, or persuasive messaging based on inferred vulnerability.
- Hiding the reason for a mode change.

## 8.10 Graceful Failure

AI failure messages MUST specify:

1. What failed.
2. What remains safe or unchanged.
3. What the user can do next.
4. Whether retrying is appropriate.
5. Whether a non-AI path is available.

Bad: `Something went wrong.`

Good: `The assistant could not verify two source files, so no records were changed. Reconnect the files or continue with the verified data only.`

---

## 9. Component Specification

## 9.1 Buttons

### Variants

- **Primary:** one per local decision region.
- **Secondary:** supporting action.
- **Quiet:** low-priority action in toolbars.
- **Danger:** destructive action with explicit label.
- **AI action:** standard button with `AI` label or recognizable system mark; not a rainbow gradient by default.

### Rules

- Minimum standard height: 40px desktop, 44px touch-first.
- Icon-only buttons require an accessible name and tooltip.
- Loading buttons preserve width and label context.
- Disabled buttons SHOULD explain unmet requirements when focused or hovered.
- Destructive buttons MUST use verbs: `Delete workspace`, not `Confirm`.

## 9.2 Inputs

Inputs MUST have persistent labels. Placeholder text is supplementary, not a label.

```text
Label
[User value or placeholder               ]
Supporting text / validation
```

- Error states MUST identify the problem and resolution.
- Validation SHOULD occur after user interaction, not immediately on page load.
- AI-assisted fields MUST indicate what will be generated or transformed.

## 9.3 Cards

Cards are for grouping, not for wrapping every element.

A card SHOULD contain one coherent object, decision, summary, or action group.

Avoid card grids when a table, list, or continuous document better communicates relationships.

Interactive cards MUST show hover and keyboard-focus states and SHOULD use an explicit action label when the destination is not obvious.

## 9.4 Navigation

Primary navigation MUST remain stable across sessions unless the user explicitly customizes it.

Use adaptive emphasis rather than adaptive reordering:

- Highlight likely next task.
- Show a contextual shortcut.
- Keep original destinations in place.

## 9.5 Command Surface

The command surface unifies search, navigation, creation, and AI assistance.

It SHOULD support:

- Natural language.
- Keyboard commands.
- Recent tasks.
- Search results.
- Direct actions.
- Structured filters.

Results MUST clearly distinguish `Navigate`, `Create`, `Ask`, and `Run` actions.

## 9.6 Dialogs and Modals

Use a modal only when the user must resolve a decision before safely continuing.

- Simple confirmation: small dialog.
- Multi-field creation: sheet or focused page.
- Complex workflow: dedicated page.
- Non-blocking detail: popover or inspector.

Modal-on-modal is prohibited.

## 9.7 Notifications

Use four levels:

1. Inline status.
2. Toast for transient confirmation.
3. Notification center for asynchronous information.
4. Interruptive alert only for urgent, consequential events.

Success toasts SHOULD disappear automatically. Errors requiring action MUST remain available until resolved or dismissed.

## 9.8 Tables and Dense Data

Tables MUST support:

- Keyboard navigation where practical.
- Sticky headers for long data.
- Clear selected and focused states.
- Explicit sort direction.
- Empty, loading, error, and partial-data states.
- Density switching for expert users.

AI summaries MUST NOT replace access to underlying data.

## 9.9 Charts

Charts MUST include:

- Plain-language title stating the insight or question.
- Units and time range.
- Accessible palette.
- Tooltip or data table equivalent.
- Annotation for unusual events.
- Clear distinction between actual, estimated, and AI-forecast values.

Avoid decorative 3D chart geometry.

## 9.10 Loading and Streaming

Use skeletons only when the approximate structure is known. Use a progress indicator when duration or stages are meaningful.

For generated text:

- Stream by stable blocks or sentences.
- Avoid rapid token flicker.
- Preserve scroll position.
- Allow the user to stop generation.
- Reveal sources as they become available without shifting the entire layout.

---

## 10. Accessibility Requirements

The target is **WCAG 2.2 AA** minimum, with selected AAA practices for focus visibility and critical workflows.

### 10.1 Minimum requirements

- Text contrast: at least 4.5:1 for normal text and 3:1 for large text.
- Non-text UI contrast: at least 3:1 where required.
- Visible keyboard focus on every interactive control.
- Focus indicator SHOULD approximate a 2px perimeter and meet 3:1 contrast against adjacent colors.
- Pointer targets MUST satisfy WCAG 2.2 target-size requirements; touch-first controls SHOULD provide at least 44×44 CSS pixels.
- Semantic HTML before ARIA.
- Logical heading structure.
- Form fields with programmatic labels and described errors.
- No content or action available only by hover, color, sound, gesture, or animation.
- `prefers-reduced-motion`, `prefers-contrast`, and forced-colors modes SHOULD be tested.
- Zoom to 200% MUST not cause loss of functionality.
- Text spacing overrides MUST not break content.

### 10.2 Focus style

```css
:focus-visible {
  outline: 3px solid var(--color-accent-500);
  outline-offset: 3px;
}

@media (forced-colors: active) {
  :focus-visible {
    outline: 2px solid CanvasText;
  }
}
```

### 10.3 Glass accessibility

Translucency MUST degrade gracefully:

- Increased contrast: replace glass with opaque surfaces.
- Reduced transparency, where detectable: use solid surfaces.
- Image background: use a local opaque scrim.
- Forced colors: remove shadows and background effects.

### 10.4 Cognitive accessibility

- Keep primary actions consistent.
- Use plain, specific language.
- Break complex tasks into visible steps.
- Preserve entered data after errors.
- Avoid countdown pressure except where objectively necessary.
- Give users control over autoplay, notification frequency, and personalization.

---

## 11. Content and Voice

## 11.1 Voice principles

The product voice is:

- Direct.
- Specific.
- Calm.
- Respectful.
- Non-performative.
- Honest about uncertainty.

Avoid faux-human claims such as `I understand exactly how you feel` unless the system truly has relevant user-provided context and the wording is appropriate.

## 11.2 Labels

Prefer verbs for actions and nouns for destinations.

- Action: `Generate comparison`, `Review changes`, `Send for approval`.
- Destination: `Projects`, `Evidence`, `Automations`.

Avoid vague labels: `Continue`, `Done`, `Yes`, `Magic`, `Enhance` when a more precise label exists.

## 11.3 AI microcopy

Use calibrated language:

- `Suggested from your project data`.
- `Drafted by AI; review before sending`.
- `Three assumptions need confirmation`.
- `No records will change until you approve`.
- `Based on sources updated through July 2026`.

Do not imply certainty with language such as `The best option is...` when the result depends on assumptions. Prefer `Recommended under the selected assumptions`.

## 11.4 Empty States

An empty state SHOULD include:

1. What belongs here.
2. Why it is useful.
3. One primary next action.
4. Optional example data.

Do not fill empty states with oversized illustration at the expense of guidance.

---

## 12. Responsive and Multimodal Behavior

## 12.1 Device Continuity

Tasks SHOULD transfer across devices with state preserved.

Examples:

- Start a voice capture on mobile; edit the structured result on desktop.
- Review a plan on desktop; approve a limited step on mobile.
- Display summary and status on a watch or ambient screen without exposing sensitive detail.

## 12.2 Input Modality

The UI MUST support at least keyboard, pointer, and touch where the platform permits.

Voice and camera interactions require:

- Clear recording state.
- Permission explanation.
- Visible transcript or interpretation.
- Correction before action.
- Immediate stop control.
- Data retention disclosure.

## 12.3 Context Adaptation

Permitted context signals include:

- Viewport and container size.
- Input method.
- Connection quality.
- Battery or performance class when available and appropriate.
- User-selected accessibility preferences.
- User-selected focus or density mode.
- Current task stage.

Location, biometrics, microphone, camera, and inferred emotion MUST require purpose-specific consent.

---

## 13. Performance and Sustainable UX

A premium interface is fast.

### 13.1 Performance budgets

Recommended initial budgets for a product screen:

- Initial JavaScript: under 200KB compressed for core shell where feasible.
- Critical CSS: under 30KB compressed.
- Largest Contentful Paint: target under 2.5 seconds at the 75th percentile.
- Interaction to Next Paint: target under 200ms at the 75th percentile.
- Cumulative Layout Shift: target below 0.1.

### 13.2 Visual performance rules

- Do not animate large blurred layers continuously.
- Avoid multiple full-screen `backdrop-filter` surfaces.
- Lazy-load noncritical imagery and 3D assets.
- Provide low-motion and low-power render paths.
- Reserve layout dimensions for streamed or asynchronous content.
- Prefer CSS and vector effects over large video backgrounds.

### 13.3 AI performance

AI interactions SHOULD acknowledge input immediately, then expose meaningful stages rather than an indefinite spinner.

Use optimistic UI only for reversible low-risk actions. Do not pretend a consequential AI operation succeeded before verification.

---

## 14. State Model

Every component MUST define:

- Default.
- Hover, where applicable.
- Focus-visible.
- Active / pressed.
- Selected.
- Disabled.
- Loading.
- Success.
- Warning.
- Error.
- Empty.
- Partial or stale data, where applicable.

AI-capable components SHOULD additionally define:

- Not generated.
- Generating.
- Generated, unreviewed.
- User-edited.
- Approved.
- Applied.
- Failed.
- Outdated due to changed source data.

State MUST be represented in semantics and text, not only visual styling.

---

## 15. AI Generation Rules for Frontend Agents

When an AI coding agent uses this file, it MUST follow these rules.

### 15.1 Before generating a page

The agent MUST identify:

1. Primary user role.
2. Primary outcome.
3. Highest-risk action.
4. Required data states.
5. Accessibility constraints.
6. Desktop and mobile hierarchy.

If information is missing, the agent SHOULD use conservative defaults and mark assumptions in code comments or documentation.

### 15.2 Component generation

- Reuse existing components before creating new variants.
- Use semantic tokens rather than raw colors.
- Do not hardcode arbitrary spacing values when a token exists.
- Do not add gradients, glass, animation, or 3D effects without a functional purpose.
- Every interactive component requires keyboard behavior and accessible naming.
- Every asynchronous component requires loading, error, empty, and retry states.
- Every AI-generated artifact requires provenance and review state where relevant.

### 15.3 Verification

Generated interfaces MUST be visually and functionally tested against:

- Light and dark themes.
- 320px, 768px, 1280px, and 1600px widths.
- 200% zoom.
- Keyboard-only navigation.
- Reduced-motion preference.
- Long labels and localization expansion.
- Empty, loading, partial, error, and success states.
- Glass fallback without `backdrop-filter`.
- Slow AI response and AI failure.

An AI-generated screen is not complete merely because it renders. The implemented behavior must match the stated design rationale.

---

## 16. Anti-Patterns

The following are prohibited unless a documented product-specific exception exists:

1. Full-screen glass backgrounds behind long-form text.
2. Rainbow gradients used as a generic AI signal.
3. A permanent chatbot panel on every screen.
4. Empty prompt boxes without examples, constraints, or structured assistance.
5. Hidden AI actions that directly alter data.
6. Confidence percentages without calibration or explanation.
7. Navigation items that reorder themselves automatically.
8. Destructive actions beside common primary actions with equal visual weight.
9. Hover-only controls or explanations.
10. Continuous parallax, floating blobs, or ambient motion on work screens.
11. More than three card elevation levels in one region.
12. Every container using the same oversized radius.
13. Icons without labels for unfamiliar actions.
14. Generated copy that claims certainty unsupported by evidence.
15. AI output shown without editable structure when editing is expected.
16. Low-contrast gray-on-gray “premium minimalism.”
17. Skeleton screens that do not match the final layout.
18. Toasts used for errors that require action.
19. Emotional adaptation without explicit user control.
20. Decorative personalization that weakens consistency or accessibility.

---

## 17. Example Screen Blueprints

## 17.1 AI-Native Dashboard

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Workspace     Search / Ask / Run                       Status Account │
├──────────┬───────────────────────────────────────────────────────────┤
│ Stable   │ Outcome title                            Primary action    │
│ nav      │ Scope · freshness · current mode                           │
│          ├───────────────────────────────────┬───────────────────────┤
│          │ Main evidence-backed dashboard    │ Contextual sidecar    │
│          │                                   │ - AI summary          │
│          │ charts / table / exceptions       │ - assumptions         │
│          │                                   │ - recommended action  │
│          ├───────────────────────────────────┴───────────────────────┤
│          │ Activity / evidence / history, collapsed by default       │
└──────────┴───────────────────────────────────────────────────────────┘
```

## 17.2 Generative Workspace

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Artifact title           Saved · AI draft · 3 sources      Share     │
├────────────────────────────────────────┬─────────────────────────────┤
│ Editable destination artifact          │ Intent                       │
│                                        │ Goal                         │
│ document / email / plan / workflow     │ Constraints                  │
│                                        │ Plan                         │
│ AI changes shown as reviewable diff    │ Evidence                     │
├────────────────────────────────────────┴─────────────────────────────┤
│ Undo available · Review 4 changes                    Apply changes    │
└──────────────────────────────────────────────────────────────────────┘
```

## 17.3 Mobile Task Flow

```text
[Context + back]
[Outcome title]
[Status / scope]
[Primary content]
[Inline AI suggestion, collapsed]
[Sticky primary action]
[Bottom navigation]
```

The mobile screen MUST not reduce the experience to a chat transcript. Preserve structured actions and destination-native editing.

---

## 18. Conformance Checklist

A release conforms to Resonant UI 2027 when all applicable items pass.

### Strategy

- [ ] The screen is organized around a clear user outcome.
- [ ] Adaptation improves relevance without destabilizing navigation.
- [ ] AI is used only where it adds meaningful value.

### Trust and AI

- [ ] AI-generated or AI-suggested content is labeled.
- [ ] Consequential AI actions require preview and approval.
- [ ] Sources, assumptions, and uncertainty are accessible.
- [ ] Users can edit, undo, stop, or correct AI behavior where applicable.
- [ ] Failure states preserve data and provide a non-AI path when feasible.

### Visual system

- [ ] Luminous Paper is used for content; Liquid Lens is limited to controls and overlays.
- [ ] Glass surfaces have opaque and high-contrast fallbacks.
- [ ] Color, radius, spacing, and elevation use semantic tokens.
- [ ] Expressive visual elements do not compete with task content.

### Interaction

- [ ] Motion communicates state or spatial continuity.
- [ ] Reduced-motion behavior is implemented.
- [ ] Loading, empty, error, partial, and success states exist.
- [ ] Responsive layouts reprioritize content rather than merely stack it.

### Accessibility

- [ ] WCAG 2.2 AA requirements are met.
- [ ] Keyboard navigation and visible focus are complete.
- [ ] Touch and pointer targets are adequate.
- [ ] 200% zoom and text expansion do not break the layout.
- [ ] No meaning relies only on color, motion, sound, hover, or gesture.

### Performance

- [ ] Decorative effects do not compromise interaction performance.
- [ ] Layout shift is controlled during loading and generation.
- [ ] Low-power and unsupported-effect fallbacks remain usable.

---

## 19. Governance

The design system SHOULD be governed as code and policy, not only as a visual library.

Maintain:

- Design tokens in a versioned package.
- Component contracts and accessibility tests.
- AI interaction patterns and approval thresholds.
- Content standards.
- Change log with migration guidance.
- Visual regression tests.
- Conformance examples and anti-examples.

AI MAY generate component proposals, documentation, and variants. Human maintainers remain responsible for approving semantic changes, accessibility behavior, trust patterns, and high-risk automation.

---

## 20. Research Basis and References

This specification synthesizes, extends, and operationalizes the following 2026 design movements and standards:

1. Joe Smiley, **“The most popular experience design trends of 2026”**, UX Collective — multimodal experience, designing for intent, Machine Experience design, nostalgia, glassmorphism, AI-generated design systems, emotionally aware modes, and prompt design.  
   https://uxdesign.cc/the-most-popular-experience-design-trends-of-2026-3ca85c8a3e3d

2. Figma, **“Top web design trends for 2026”** — expressive color, retrofuturism, type, texture, and differentiated visual identity.  
   https://www.figma.com/resource-library/web-design-trends/

3. Figma, **“State of the Designer 2026”** and **2026 AI report** — convergence of design and development workflows and increased AI-mediated collaboration.  
   https://www.figma.com/reports/state-of-the-designer-2026/  
   https://www.figma.com/blog/2026-ai-report/

4. Nielsen Norman Group, **Adaptive Design / Outcome-Oriented Design** — designing adaptive frameworks around user outcomes rather than one fixed interface.  
   https://www.nngroup.com/topic/adaptive-design/

5. Google Material Design 3 — adaptive components, accessibility, structured hierarchy, and expressive motion.  
   https://m3.material.io/

6. Google PAIR, **People + AI Guidebook** — human-centered AI, calibrated trust, feedback, control, graceful failure, and user autonomy.  
   https://pair.withgoogle.com/guidebook/

7. Apple Human Interface Guidelines, **Liquid Glass** — translucent material as a functional layer for controls and navigation rather than content obstruction.  
   https://developer.apple.com/documentation/technologyoverviews/liquid-glass

8. W3C, **Web Content Accessibility Guidelines 2.2** — current accessibility baseline, focus visibility, contrast, input, and target-size requirements.  
   https://www.w3.org/TR/WCAG22/

9. MDN, **`prefers-reduced-motion`** — adapting motion to user system preferences.  
   https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion

10. Material Design, **Accessibility Designing** — structure, flow, contrast, and touch-target guidance.  
    https://m3.material.io/foundations/designing/overview

---

## 21. Final Design Directive

Build interfaces that are recognizable without being generic, adaptive without being unstable, intelligent without being opaque, and expressive without becoming exhausting.

The 2027 signature is not a visual effect. It is a product that behaves with visible intention:

> **Quiet surfaces for thought. Living controls for action. Explicit evidence for trust.**
