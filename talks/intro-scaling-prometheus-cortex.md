---
title: "Intro to Scaling Prometheus with Cortex"
labels: "prometheus, cortex, monitoring"
year: 2020
---

# Intro to Scaling Prometheus with Cortex

**Speaker(s):** Tom Wilkie, Grafana Labs & Ken Haines, Microsoft

**Video URL:** https://youtu.be/oHGoZd-9jWA

**Summary:** Cortex is a horizontally scalable, push-based backend that allows multiple Prometheus instances to aggregate metrics into a single, multi-tenant cluster for global observability. It eliminates the vertical scaling limits and security hurdles of traditional federation by using distributed systems logic and cost-effective object storage for long-term data retention.

## Timestamps

- `00:00` - Introduction to Speakers and Agenda
- `01:15` - Prometheus Model & Grafana
- `04:30` - Prometheus' Answer to Global Observability = Federation
- `07:10` - Why Cortex?
- `08:15` - About Cortex
- `11:00` - History of Cortex
- `14:15` - Demo: Collecting metrics from various Prometheus instances and send to a Central Cortex installation to do global aggregates and reports via Grafana
- `19:15` - Outro

## Key Takeaways

- Prometheus is designed to be co-located with the jobs it monitors (pull-based). This becomes difficult to manage when software is deployed across multiple disparate regions or clusters.
- Standard Prometheus federation requires edge servers to be exposed for scraping (security risk), scales vertically (limited by single-node RAM), and often requires complex pre-aggregation to avoid overwhelming the central server.
- Cortex can be scaled out by adding more nodes to handle increased cardinality and ingestion rates (Horizontal Scalability).
- Cortex uses Prometheus’s remote_write feature. Edge Prometheus instances push data to the central Cortex cluster, eliminating the need to open firewall ports at the edge for pulling metrics.
- Through a Distributed Hash Table (DHT) and replication, Cortex ensures there are no gaps in data even if individual nodes fail.
- Cortex offloads data to object stores like Amazon S3, Google Bigtable, or Cassandra.

## Questions/Discussion Points

- This talk is a few years old and even though Cortex is a "Graduated" CNCF project, stable and reliable, the industry seems to have shifted its focus to Grafana Mimir, VictoriaMetrics and Thanos.
- Cortex and its peers now natively ingest OpenTelemetry (OTLP) so we aren't limited to Prometheus metrics anymore.
- The "Chunks" storage (DynamoDB/Cassandra) that is mentioned in the talk is considered legacy now and we use Object Storage (S3/GCS) because it is cheaper and scales better.

## Links/Resources

- [Cortex on GitHub](https://github.com/cortexproject/cortex)
