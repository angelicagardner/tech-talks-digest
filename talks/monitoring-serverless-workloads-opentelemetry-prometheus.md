---
title: "Monitoring Serverless Workloads with OpenTelemetry and Prometheus"
labels: "cloud native, monitoring, observability, opentelemetry, prometheus, serverless"
year: 2024
---

# Monitoring Serverless Workloads with OpenTelemetry and Prometheus

**Speaker(s):** Ridwan Sharif, Google

**Video URL:** https://www.youtube.com/watch?v=r6qb3OivFyQ

**Summary:** The talk explains the challenges of observability in serverless environments, such as the transient nature of instances. To address these issues, Google introduced sidecars in Cloud Run to run alongside main containers for collecting telemetry data, and they implemented lifecycle dependencies to ensure proper telemetry collection during startup and shutdown. Adjustments were also made to support both push-based (e.g., OpenTelemetry) and pull-based (e.g., Prometheus) telemetry systems in serverless environments.

## Timestamps

- `00:00` - Introduction and Agenda
- `02:00` - Focus on Serverless
- `05:00` - Serverless Observability (O11y)
- `07:25` - Problem: serverless instances are expected to be short-lived
- `08:20` - Problem: the need to normalize cumulative metrics
- `08:50` - Problem: prometheus-based scraping expect metrics to be pulled
- `10:45` - Problem: need more control of how to configure collections
- `11:40` - Cloud Run infrastructure changes needed to accommodate o11y
- `14:35` - Adjustments needed for push-based OpenTelemetry Protocol (OTLP) ingest
- `15:05` - Adjustments needed for pull-based ingest (Prometheus metrics)
- `17:25` - How the productionize (deploy and configure) the collectors
- `19:00` - Next steps

## Key Takeaways

- Traditional monitoring tools face difficulties due to the ephemeral nature of serverless instances.
- Google introduced sidecars and lifecycle dependencies in Cloud Run to improve observability.
- Ongoing efforts include reducing resource overhead and addressing CPU throttling issues.

## Questions/Discussion Points

- These were the changes done in Cloud Run to accommodate o11y - what about other serverless services?
