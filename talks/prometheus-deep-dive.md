---
title: "Prometheus Deep Dive"
labels: "prometheus, observability"
year: 2019
---

# Prometheus Deep Dive

**Speaker(s):** Ben Kochie

**Video URL:** https://youtu.be/Me-kZi4xkEs

**Summary:** This talk delved into the design choices of Prometheus monitoring system architecture, and best practices and recommendations for data collection and scaling strategies. The speaker also showcased some recent enhancements (although this was in 2019). 

## Timestamps

- `00:00` - Introduction to Speaker and Prometheus
- `02:25` - Prometheus Design
- `04:40` - Prometheus Data Collection
- `10:10` - Scaling Strategies
- `13:40` - Q&A: Prometheus' Storage
- `16:10` - Q&A: Retroactively Evaluating Recording Rules
- `17:25` - Q&A: Experience with Thanos
- `22:20` - Q&A: Facing Problems with Prometheus
- `23:25` - Q&A: Application-specific Metrics
- `25:50` - Q&A: Vertical Compaction
- `27:10` - Q&A: Prometheus Web Interface
- `28:30` - Q&A: TSDB Sizing
- `29:10` - Q&A: Config Management

## Key Takeaways

- Prometheus is designed to be the most reliable component on the network by minimizing dependencies and running locally. This way, Prometheus maintains visibility even if external network dependencies fail. The Write-Ahead log ensures data reliability during operations and restarts and the immutability of the time series database prevents data corruption.
- Prometheus should be deployed close to the targets to ensure accurate monitoring without relying on broader network stability.
- Vertically scale Prometheus instances before considering horizontal scaling, e.g. for 1,000-pods or similarly large deployments should split Prometheus instances based on services to enhance manageability and performance.
- Take capacity planning seriously, e.g. a server handling 100,000 samples/second requires planning behind how to manage storage and processing.
