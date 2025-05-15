---
title: "Prometheus Operators in the Wild"
labels: "observability, kubernetes, prometheus"
year: 2024
---

# Prometheus Operators in the Wild

**Speaker(s):** Bartłomiej Płotka & Mahmoud Amin

**Video URL:** https://www.youtube.com/watch?v=pMlv626cyGU

**Summary:** This talk compares two Kubernetes “agent-only” operators for Prometheus metric collection: the community-maintained Prometheus Operator and Google’s Managed Service for Prometheus (GMP) Operator. Both operators hide complex scrape configs behind custom resources, but the Prometheus Operator uses deployment-based sharding and gives you full back-end features (querying, alerting, HA), whereas GMP runs a daemonset per node for a lightweight, stateless collector that’s built into GKE.

## Timestamps

- `00:00` - Introduction to the Talk
- `02:45` - Prometheus (collection) in k8s, "agent mode"
- `04:30` - Do we need Operators?
- `05:50` - Reason 1 why a Prometheus Operator makes sense: Scrape config
- `08:45` - Reason 2 why a Prometheus Operator makes sense: Scalability
- `10:15` - Prometheus Operator
- `12:00` - GMP Operator
- `16:30` - Demo
- `21:30` - TL;DR: Prometheus vs GMP Operator
- `25:15` - Questions

## Key Takeaways

- Prometheus Operator deploys Prometheus as Deployments with sharding, supports full back-end capabilities (querying, alerting, HA), and uses PodMonitor/ServiceMonitor CRDs.
- GMP Operator runs Prometheus as a DaemonSet on each node for stateless collection, offers simpler CRDs, and integrates out-of-the-box with GKE (enabled by default when create new GKE cluster).
- Both operators simplify scrape configuration, automate target discovery status reporting, and forward metrics via remote-write to Thanos, Cortex or vendor back-ends.
- Choose the Prometheus Operator for a full-featured self-managed stack; choose GMP Operator for a lightweight, managed collection agent in cloud-native environments.
- GMP Operator is an agent-only scraper ("collection-focused") which means that it collects metrics and remote-write them to whatever long-term storage or managed Prometheus service you’ve chosen, but it leaves the storage, querying, alerting, and UI entirely to that downstream system.

### Questions/Discussion Points

- It would be interesting to compare with other operator patterns such as OpenTelemetry Collector (as a Prometheus scraper), Thanos Operator / Cortex Operator (deploy Prometheus instances alongside long-term storage backends) or Cluster Monitoring Operator (the de-facto way in OpenShift) which is built on top of the Prometheus Operator and adds cluster-wide defaults and multi-tenant isolation. 
