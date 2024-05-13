---
title: "Architecting Growth: Scaling Tactics for Prometheus Metrics"
labels: "observability, prometheus, monitoring"
year: 2024
---

# Architecting Growth: Scaling Tactics for Prometheus Metrics

**Speaker(s):** Arthur Silva Sens & Nicolas Takashi

**Video URL:** [https://youtu.be/bVICOulH5IY](https://youtu.be/bVICOulH5IY)

**Summary:** The talk focused on scaling tactics for Prometheus metrics collection. Using the story of Eva, a farmer who automated her operations with IoT devices, the speakers illustrated how to handle growing metric volumes and ensure system reliability using sharding strategies. The session emphasized starting simple and progressively adopting more complex solutions as needed.

## Timestamps

- `00:00` - Introduction to the speakers
- `01:05` - Prometheus Operator TLDR
- `02:45` - User Story Example: Eva integrated IoT devices into her family farm to automate and optimize operations. Eva's setup evolved as the scale of her data collection increased, requiring more sophisticated management and scaling solutions.
- `07:35` - Sharding Strategies
- `12:50` - Sharding Challenges
- `14:35` - User Story Example continues, Eva will use the sharding feature by Prometheus Operator but she now has circumstances which causes spikes in exposed metrics which will OOMKill some Prometheus'. Solution: Shard Autoscaling
- `17:05` - Recap & Summary

## Key Takeaways

- Prometheus Operator manages Prometheus setups on Kubernetes. It uses Custom Resource Definitions (CRDs) like Pod Monitors and Service Monitors to abstract k8s service discovery (SD). New CRDs like the "Scrape Config" are being introduced to mimic complete Prometheus configurations.
- Vertical scaling (increasing resources of a single instance) might be sufficient initially. However, as limits are reached, horizontal scaling (adding more instances) becomes necessary. This involves more complex configurations but offers greater flexibility and reliability.
- Sharding Strategies: Functional Sharding is grouping similar metric targets under separate Prometheus instances, achieved via namespace selectors or label selectors within Prometheus Operator. Hash Mod Sharding is using relabeling functions to distribute metrics across different instances based on hash values.

### Questions/Discussion Points**

- In what use cases and scenarios is it good to use the Prometheus Operator? What is it's competitors?
- It was mentioned to utilize tools like Thanos for queries across multiple data sources and for efficient data handling in large-scale environments. Should look into Thanos and its UCs. Can it be used without Prometheus Operator?
