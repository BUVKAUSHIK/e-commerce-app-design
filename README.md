# FinOps Checkout Analytics

> Privacy-first, end-to-end checkout analytics powered by PostHog + Stripe + Vercel

> Automatically synced with your [v0.app](https://v0.app/) deployments

![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)
![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)

---

## Table of Contents

- [Overview](#overview)
- [The Problem](#the-problem)
- [Architecture](#architecture)
- [System Design](#system-design)
- [Implementation](#implementation)
- [Tech Stack](#tech-stack)
- [Key Outcomes](#key-outcomes)
- [Roadmap](#roadmap)
- [Getting Started](#getting-started)
- [Features](#features)
- [Integrations](#integrations)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

FinOps Checkout Analytics is a privacy-first, end-to-end checkout analytics platform built to answer critical conversion questions:

- **Where** do users drop off in the purchase flow?
- **What** changes improve conversion (tested with experiments)?
- **Which** payments actually succeed (confirmed server-side via Stripe)?

**Goal:** Improve conversion rates without collecting sensitive user data.

## The Problem

Most e-commerce analytics tools either:
- Collect too much PII (violating privacy best practices)
- Lack end-to-end visibility across the checkout funnel
- Cannot attribute revenue to specific UI changes

This project solves all three with a zero-PII, server-verified approach.

## Architecture

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                  FINOPS CHECKOUT ANALYTICS ARCHITECTURE                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────┐     ┌──────────────────┐     ┌───────────────────────┐    │
│  │         │     │                  │     │                       │    │
│  │  User   │────▶│   Frontend App   │────▶│   Vercel Serverless   │    │
│  │ Browser │     │(Next.js + React) │    │      Functions        │    │
│  │         │     │                  │     │                       │    │
│  └─────────┘     └──────────────────┘     └───────────────────────┘    │
│         │                 │                          │                  │
│         │                 │                          │                  │
│         ▼                 ▼                          ▼                  │
│  ┌───────────┐    ┌───────────────┐        ┌──────────────┐            │
│  │           │    │               │        │              │            │
│  │ PostHog   │    │    Stripe     │        │   Vercel     │            │
│  │Analytics  │    │   Checkout    │        │  Deployment  │            │
│  │(Tracking) │    │  (Payments)   │        │  (Hosting)   │            │
│  │           │    │               │        │              │            │
│  └───────────┘    └───────────────┘        └──────────────┘            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Architecture Overview

The system follows a **three-layer architecture**:

1. **Frontend Layer** — Next.js app that renders the e-commerce UI and fires analytics events
2. **Backend Layer** — Vercel Serverless Functions handling Stripe webhook verification
3. **External Services** — PostHog (analytics), Stripe (payments), Vercel (hosting)

## System Design

### Data Flow

```text
User Action → PostHog Event → Analytics Dashboard
              │
              └─→ Stripe Webhook → Payment Verification
```

### Component Responsibilities

| Component | Responsibility |
|---|---|
| **Next.js App** | Product pages, cart, checkout UI, PostHog event instrumentation |
| **PostHog** | Event tracking, funnels, A/B experiments, session replay |
| **Stripe** | Payment processing and webhook notifications |
| **Vercel Functions** | Stripe webhook handlers with server-side event verification |

## Implementation

### What Was Built

1. **Event Instrumentation**: Instrumented key checkout events sent to PostHog (no PII).
2. **Conversion Funnel Analysis**: Built a funnel measuring the journey (Landing → Product Click → Checkout → Completion).
3. **Behavioral Analysis**: Used breakdowns and session replay to spot bottlenecks.
4. **A/B Testing**: Ran PostHog Experiments on checkout CTA/button variants.
5. **Payment Confirmation**: Integrated Stripe Checkout + Webhooks for server-side verification.
6. **Deployment & Verification**: Deployed on Vercel with verified event flow.

## Tech Stack

| Component | Technology | Purpose |
|---|---|---|
| **Analytics** | PostHog | Events, Funnels, Cohorts, Experiments (A/B), Session Replay |
| **Payments** | Stripe | Checkout + Webhooks |
| **Frontend** | Next.js / React | E-commerce UI with TypeScript |
| **Styling** | Tailwind CSS | Utility-first responsive design |
| **Deployment** | Vercel | Hosting + Webhook endpoints + CI/CD |
| **Backend** | Vercel Serverless Functions | Stripe webhook handling |

## Key Outcomes

- **Delivered**: A working checkout analytics system; a repeatable optimization loop (Measure → Hypothesize → Test → Ship); privacy-conscious design.
- **Impact**: Quantified drop-off points; validated UI/UX with A/B tests; confirmed revenue via server-side events; reduced cart abandonment.

## Roadmap

- Add tracking plan/spec documentation.
- Track performance metrics (load time).
- Add alerting for conversion drops or failed payments.
- Segment funnels by traffic source/device.
- Implement cohort analysis and revenue attribution.
- Integrate email marketing for cart abandonment.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- PostHog project (API key)
- Stripe account (API keys)
- Vercel account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/BUVKAUSHIK/e-commerce-app-design.git
cd e-commerce-app-design

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file with:

```bash
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

Live Demo: [https://v0-one-page-e-commerce-pi.vercel.app/](https://v0-one-page-e-commerce-pi.vercel.app/)

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy — Vercel handles the rest

## Features

| Feature | Description |
|---|---|
| **Conversion Funnels** | Real-time visualization of user journey through checkout |
| **Session Replay** | Watch user sessions to identify UX friction points |
| **A/B Experiments** | Test UI variants with statistical significance |
| **Cohort Analysis** | Segment users by behavior and track over time |
| **Stripe Payments** | Full payment processing with webhook verification |
| **Mobile Responsive** | Fully responsive design across all devices |
| **Modular Codebase** | Clean component structure for easy extension |

## Integrations

- **PostHog**: Full event/funnel/experiment suite.
- **Stripe**: Payments and webhook-verified revenue tracking.
- **Vercel**: Deployment and serverless functions.

## Contributing

Contributions are welcome! Please follow the standard workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Licensed under the MIT License.
