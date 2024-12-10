---
title: "What Is This OpenTelemetry Thing?"
labels: "observability, opentelemetry"
year: 2024
---

# What Is This OpenTelemetry Thing?

**Speaker(s):** Martin Thwaites - Principle Developer Advocate at Honeycomb

**Video URL:** https://youtu.be/jC1icupHlMs

**Summary:** OpenTelemetry is a tool to help achieve observability, and the standard for vendor-agnostic telemetry signal emission. The speaker explains what OpenTelemetry is, describes its core signals (traces, logs, metrics) as well as the concepts propagation and baggage. We also get information about methods to integrate opentelemetry into applications and what is the difference between head and tail sampling to balance observability needs and costs.

## Timestamps

- `00:00` - Introduction to Observability.
- `02:15` - Metrics was the primary tool for monitoring production systems in 2000.
- `03:15` - In 2012-2013 we shifted to time-series databases that stored metric data points with associated labels, enabling queries. Also, tools emerged for managing log data for deeper insights.
- `06:45` - By 2017, modern observability emerged with more complex systems and distributed architecture, requiring tools for distributed tracing to enable real-time insights into interconnected systems function. The tools operated under different, incompatible standards - collaboration emerged to create a unified standard: OpenTelemetry.
- `08:50` - What is OpenTelemetry?
- `14:00` - What is a Trace?
- `18:30` - What is a Log?
- `20:20` - What is a Metric?
- `24:00` - Propagation (The Real Magic)
- `25:00` - Baggage
- `27:30` - How-to integrate OpenTelemetry into applications
- `38:20` - Sampling
- `43:00` - What's coming?

## Key Takeaways

- OpenTelemetry has become the number one project from CNCF, surpassing Kubernetes in adoption. It is the de facto standard for emitting telemetry signals from applications, enabling vendor-agnostic observability.
- The OpenTelemetry Protocol (OTLP) defines the data model and API contracts. It supports 11 programming languages and focuses on traces, metrics, and logs as core observability signals.
- There are no pillars in OpenTelemetry, there are signals (representing different types of data). Core signals are: Traces, Metrics, Logs.
- Traces provide causality (what caused what) and performance insights for debugging. They consist of spans which are structured data blobs with attributes like IDs, timestamps, and causality information. Traces allow for visualizations like waterfalls and service graphs.
- Logs are point-in-time data (happening right now) intended for humans (the message-template part), used for debugging issues. Logs lack causality but can be structured and are useful in capturing application state. Logs are (unfortunately) more easy to do badly.
- Metrics are time-series aggregates (data point with associated labels, we have the data points in buckets), useful for tracking patterns like error rates or latency distributions. They are cost-effective and fast for querying but lack deep context and are best for low cardinality/dimensionality.
- propagation enables distributed systems to share context by transmitting state across requests. It uses the W3C Trace Context Specification. Sampling within propagation helps optimize performance by determining which traces are retained.
- Baggage in OpenTelemetry allows transmitting additional context between services to influence tracing data without altering the API contract. E.g. a user ID can be added to baggage and used for spans or logs. It is part of the W3C baggage specification. While powerful, it poses significant risks as baggage propagates across all HTTP calls, including third-party APIs. Misuse, such as transmitting sensitive data like social security numbers, can lead to severe security and privacy concerns.
- Methods for integrating OpenTelemetry into applications: auto-instrumentation (no code changes, uses agents), coded instrumentation (add custom spans and context for precise/intentional telemetry data, e.g. in app startup), OTel Collector (processing and forwarding telemetry data to backend, provides centralized config, secure egress, redaction/filtering and enrichment).
- Sampling is a technique offering observability without drowning in data (and costs). Sampling strategies include head and tail sampling. Head sampling decides whether to capture the data before processing starts (more efficient but lacks detailed context) and tail sampling makes the decision after processing so it can use detailed info, but it incurs delays and increases memory usage.
