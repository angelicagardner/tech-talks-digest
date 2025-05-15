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

- `00:00` - 
- `00:00` - 

## Key Takeaways

- There are two “agent-only” Prometheus operators on Kubernetes: the Prometheus Operator and Google’s GMP Operator.
- Prometheus Operator deploys Prometheus as deployments with sharding, supports full back-end capabilities (querying, alerting, HA), and uses PodMonitor/ServiceMonitor CRDs.
- GMP Operator runs Prometheus as a DaemonSet on each node for stateless collection, offers simpler CRDs, and integrates out-of-the-box with GKE.
- Both operators simplify scrape configuration, automate target discovery status reporting, and forward metrics via remote-write to Thanos, Cortex or vendor back-ends.
- Choose the Prometheus Operator for a full-featured self-managed stack; choose GMP Operator for a lightweight, managed collection agent in cloud-native environments.

### Questions/Discussion Points

- ...

## Links/Resources

- ...
