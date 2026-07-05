# Product

## Register

product

## Users

Prospective Velocity Exchange users, integrators, and community members looking for protocol documentation before the docs are publicly ready. Right now the entire docs site is pre-launch, so every visitor — regardless of intent — lands on a single gate instead of any content.

## Product Purpose

Velocity Exchange brings on-chain, cross-margined perpetual futures to Solana. This documentation site (Nextra-based, with a sidebar-driven docs structure, search, and SDK reference generation) is the reference for the protocol, its SDKs, and developer integration.

Currently the docs are pre-launch: nothing should be readable yet. A coming-soon page needs to block the entire docs site (all routes) behind a single "not live yet" screen, styled consistently with the docs' own visual system rather than as a separate marketing campaign. Visitors should be able to read the message and, optionally, follow links to Discord/social channels for updates — no other interaction is required.

## Brand Personality

Quiet and confident. Minimal, technical, understated — the same restrained tone as the existing docs UI (single brand green accent on a neutral gray/near-black surface, no hype language, no countdowns or campaign flourishes).

## Anti-references

No named anti-references given. Default to avoiding: marketing-campaign styling (gradients, hero stats, countdown timers, email-capture forms), anything that reads as a separate "microsite" rather than the docs' own system, and any tone that oversells or hypes the launch.

## Design Principles

- **One gate, not a campaign.** The coming-soon page is an extension of the docs shell (same layout chrome, same tokens, same logo mark), not a bespoke marketing page.
- **Say less.** A single clear message — docs aren't live yet — beats hype copy, countdowns, or progress bars.
- **Reuse before inventing.** Follow the pattern already set by `app/not-found.tsx` (centered mark, short copy, one or two links) rather than designing a new visual language.
- **No dead ends without an outlet.** Give visitors somewhere to go (Discord/socials/main site) even though there's no docs content to show yet.

## Accessibility & Inclusion

No project-specific requirements stated. Default to WCAG AA: body text ≥4.5:1 contrast (the existing `--vlc-*` tokens are already tuned for this), respect `prefers-reduced-motion`, and keep the page keyboard- and screen-reader-navigable (semantic headings, visible focus states, no motion-gated content).
