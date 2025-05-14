---
title: "Shift Into an Observability Mindset with OpenTelemetry"
labels: "observability, opentelemetry"
year: 2024
---

# Shift Into an Observability Mindset with OpenTelemetry

**Speaker(s):** Daniel Gomez Blanco

**Video URL:** https://www.youtube.com/watch?v=_0AorR5JUS8

**Summary:** This talk is about explaining that in today’s complex, distributed systems you can no longer debug by intuition and isolated metrics alone - you need rich, standards-based context propagated end‐to‐end. By adopting OpenTelemetry’s unified model for metrics, traces and logs, teams gain data ("evidence") instead of guesswork and can correlate user experience across services.

## Timestamps

- `00:00` - 
- `00:00` - 

## Key Takeaways

- Context over Intuition: Propagate OpenTelemetry’s trace context end-to-end so you have concrete evidence rather than relying on hunches when debugging.
- Unified Signals: Leverage the three OpenTelemetry signals—metrics, traces, and logs—each for its intended purpose and correlate them via exemplars and semantic conventions.
- Sampling Strategies: Use head sampling for low-overhead probabilistic trace capture, and tail sampling (via a collector) to focus on the most interesting traces (errors, high-latency) without losing end-to-end context.
- Cardinality Control: Keep metric cardinality low and use “metric views” at runtime to reshape or filter out unbounded labels, ensuring performant long-term storage and querying.
- Cross-Org Adoption: Pair centralized Observability Engineers (tooling & standards) with domain-specific “Observability Ambassadors” to drive consistent instrumentation and best practices across teams.
- Business Alignment: Tie service-level indicators (SLIs/SLOs) back to real user-experience and business KPIs, using telemetry to prove ROI and guide leadership decisions.
- Hands-On Enablement: Reinforce adoption through live labs or “observability game days,” making it easy—and fun—for engineers to experience the value of context-driven debugging firsthand.

### Questions/Discussion Points

- ...

## Links/Resources

- ...
