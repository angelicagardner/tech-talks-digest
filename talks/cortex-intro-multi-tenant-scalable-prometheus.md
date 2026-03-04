---
title: "Cortex Intro: Multi-Tenant Scalable Prometheus"
labels: "prometheus, cortex, monitoring"
year: 2024
---

# Cortex Intro: Multi-Tenant Scalable Prometheus

**Speaker(s):** Ben Ye, Amazon Web Services & Friedrich Gonzalez, Adobe

**Video URL:** https://youtu.be/by538PPSPQ0

**Summary:** This talk provides an overview of Cortex which is a CNCF incubating project designed as a horizontally scalable, multi-tenant, long-term storage solution for Prometheus. The speakers describes how Cortex handles high-cardinality metrics by utilizing an API-driven architecture that separates read and write paths, and they introduce the newest features (from version 1.13).

## Timestamps

- `00:00` - Introduction to Speakers and Cortex
- `01:45` - The Problem with Scaling Prometheus
- `03:20` - What Cortex Does Differently
- `04:35` - Cortex Key Features
- `06:15` - Architecture
- `08:15` - Working in the CNCF Ecosystem
- `09:00` - New Features & Improvements
- `23:00` - A Thanks to Contributors and Highlight some PRs
- `23:20` - Demo
- `27:45` - Outro
- `28:30` - Q&A

## Key Takeaways

- Cortex solves the "memory-heavy" limitation of standard Prometheus by providing a central API to ingest, store, and query metrics across many instances with built-in multi-tenancy and isolation.
- Metrics are sent via "Remote Write" to Distributors, which pass data to Ingesters. It uses a replication factor of 3 to ensure high availability; data is eventually compacted and shipped to long-term block storage like Amazon S3. Store Gateways handle the retrieval of older data from the bucket storage for long-term queries.
- The Query Frontend and Scheduler manage incoming requests, providing result caching and splitting to speed up performance.
- Cortex now supports OTLP (OpenTelemetry Protocol) ingestion directly. It also supports Native Histograms.
- Cortex vs. Thanos: While both projects share code and goals, the speakers suggest Cortex is often the better choice for platform teams needing strict multi-tenant limits and centralized management, whereas Thanos is traditionally preferred for simpler, sidecar-based federation.

## Questions/Discussion Points

- See my questions/discussion points [in this related talk](https://github.com/angelicagardner/tech-talks-digest/blob/main/talks/intro-scaling-prometheus-cortex.md).
