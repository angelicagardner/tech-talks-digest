---
title: "Prometheus and OpenTelemetry: Better Together"
labels: "observability, opentelemetry, prometheus"
year: 2024
---

# Prometheus and OpenTelemetry: Better Together

**Speaker(s):** Adriana Villela, Reese Lee
**Video URL:** https://www.youtube.com/watch?v=LJd1pJ0k28g
**Summary:** Prometheus is used for monitoring and alerting while OpenTelemetry provides a broader observability framework including metrics, traces, and logs. This talk centers on how these tools complement each other.

## Timestamps

- `00:00` - Presentation of speakers
- `01:10` - Introduction of the talk
- `03:25` - Brief refresher on OpenTelemetry Collector and Prometheus
- `06:00` - Prometheus Receiver, Prometheus Exporter and Prometheus Remote Write exporter
- `08:40` - OTel Target Allocator
- `15:20` - Introducing the demo; setup in k8s. Python app emits Prometheus metrics to be ingested by an OTel Collector. And with help of the Target Allocator it transfers the data as OTLP metrics to the Collector's Stdout (using the Logging Exporter)
- `26:10` - Additional OpenTelemetry components
- `28:00` - Wrap up

## Key Takeaways

- OpenTelemetry acts as a vendor-neutral way to collect and process data to be exported to various backends including Prometheus. The Prometheus Receiver and Exporter components allow for collecting metrics exposed by Prometheus and exporting them back into Prometheus or other compatible backends.
- The Target Allocator component helps to distribute the scraping load among multiple Prometheus instances to address scalability and performance issues. It helps in the even distribution of scraping tasks and resource allocation (crucial in large-scale deployments).
- Pros: leverage monitoring and alerting capabilities of Prometheus while take advantage of instrumentation and flexibility offered by OpenTelemetry. This integrations allows for a comprehensive observability strategy which can include tracing and logging alongside metrics monitoring.
- Cons: the integration introduces complexity regarding configuration and management of two systems. Learning curve can be steep for teams, and operational overhead might increase, i.e. the time, effort, and resources required to manage and maintain the systems.

### Questions/Discussion Points**

- Some of the challenges with Prometheus raised here have been address by projects like Prometheus Operator, Thanos, Cortex, ...
- Is perhaps OpenTel an attractive solution for those needing more observability than just metrics?
