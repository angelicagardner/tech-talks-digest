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

- `00:00` - Introduction to the Talk and Speaker
- `02:10` - Debuggning without context makes it difficult to connect the dots
- `04:00` - With context and correlation we have evidence and everyone can be on the same page
- `06:30` - Trace Sampling (Head / Tail) allows to only keep the most useful data
- `09:30` - Use each signal of your telemetry data for its intended purpose (Metrics vs Traces vs Logs)
- `12:30` - Metric Views to control metric streams
- `14:00` - Communicate value to the Leadership
- `17:05` - Change the engineer mindset for cross-organisation alignment
- `20:30` - Takeaway points

## Key Takeaways

- By propagating OpenTelemetry’s trace context end-to-end we get concrete evidence rather than relying on hunches when debugging.
- Leverage metrics, traces, and logs for their intended purposes but also correlate them via exemplars and semantic conventions.
- Use head sampling for low-overhead probabilistic trace capture, and tail sampling (via a collector) to focus on the most interesting traces (errors, high-latency) without losing end-to-end context.
- Keep metrics cardinality low and use “metric views” at runtime to reshape or filter out unbounded labels, ensuring performant long-term storage and querying.
- Use telemetry to prove ROI and guide leadership decisions by tying service-level indicators (SLIs/SLOs) back to real user-experience and business KPIs.
- We learn by doing so it's a good idea to guide engineers to adoption through live labs or “observability game days,” making it easy—and fun—for to experience the value of context-driven debugging.

### Questions/Discussion Points

- Easy talk to follow along, kind of like an overview/intro to OpenTelemetry’s APIs and SDKs. I would say the recommended audience is Platform/SRE/DevOps engineers who want to move from ad-hoc metrics to a unified, standards-based approach - or engineering leads/architects looking to align multiple teams around a common telemetry model.
