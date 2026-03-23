---
title: "Telemetry Showdown: Fluent Bit Vs. OpenTelemetry Collector - a Comprehensive Benchmark Analysis"
labels: "cloud native, opentelemetry, observability, fluentbit"
year: 2024
---

# Telemetry Showdown: Fluent Bit Vs. OpenTelemetry Collector - a Comprehensive Benchmark Analysis

**Speaker(s):** Henrik Rexed, Dynatrace

**Video URL:** https://youtu.be/ykq1F_3PmJw?si=ARY7R3PGHjwIwHvk

**Summary:** The speaker benchmarks Fluent Bit and the OpenTelemetry Collector to help engineers choose the right agent for their observability needs. Fluent Bit is an incredibly lightweight and powerful specialist for high-speed log parsing, while the OTel Collector is the superior choice for managing complex metrics and traces due to its advanced transformation and cardinality reduction capabilities.He recommends using Fluent Bit for log-centric edge cases, and the OTel Collector, ideally paired with a Target Allocator to ensure memory stability, for comprehensive, full-stack telemetry pipelines.

## Timestamps

- `00:00` - Introduction to Talk & Speaker
- `01:10` - Disclaimer
- `01:50` - The Fight & Players
- `03:45` - Round 1: Design
- `08:40` - Round 2: Logging
- `10:20` - Round 3: Metrics
- `12:00` - Round 4: Traces
- `13:10` - Performance Tests

## Key Takeaways

- Fluent Bit uses Tags to route data; very lightweight and concise configuration. - OTel Collector uses Connectors/Routing which are configuration files tend to be much larger.

- Fluent Bit has superior parsing incl. Regex, JSON, Lua, WASM.

- For metrics, Fluent Bit lacks scrape configs, relabeling, and cardinality reduction - while OTel Collector has full support for Prometheus scraping and cardinality management.

- Fluent Bit acts as a proxy/gateway; only supports OTLP/HTTP (no gRPC). While OTel Operator has full processing, sampling, and multi-protocol support.

- Round 1 (Design) was quite equal, Round 2 (Logging) Fluent Bit won, Round 3 (Metrics) won by OTel Collector, Round 4 (Traces) won by OTel Collector.

## Questions/Discussion Points

- The speaker explicitly stated that his performance benchmarks and comparisons were based on Fluent Bit version 2.x.

- Fluent Bit has historically focused on logging but recently added support for metrics and traces (v2.x/3.0). OTel Collector has native support for traces and metrics, with logs being the more recent addition. What will be these business roadmaps moving forward, will them meet/become more and more similar?

- A fun way to make the presentation/comparison engaging :)
