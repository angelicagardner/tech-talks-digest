---
title: "Monitoring Serverless Workloads with OpenTelemetry and Prometheus"
labels: "cloud native, monitoring, observability, opentelemetry, prometheus, serverless"
year: 2024
---

# Monitoring Serverless Workloads with OpenTelemetry and Prometheus

**Speaker(s):** Ridwan Sharif, Google

**Video URL:** https://www.youtube.com/watch?v=r6qb3OivFyQ

**Summary:**

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

- ...

### Questions/Discussion Points

- These were the changes done in Cloud Run to accommodate o11y - what about other serverless services?
