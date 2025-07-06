---
title: "Doing Things Prometheus Can’t Do with Prometheus"
labels: "observability, prometheus"
year: 2019
---

# Doing Things Prometheus Can’t Do with Prometheus

**Speaker(s):** Tim Simmons, DigitalOcean

**Video URL:** https://youtu.be/pRmnh8lgjsU

**Summary:** This talk is about exploring how Prometheus can handle more than expected when used skillfully. The speaker emphasizes that good observability isn’t about fancy tools but about investing time to understand them and he encourages treating observability as critical infrastructure to make thoughtful, informed decisions - that is the way we get the most out of Prometheus.

## Timestamps

- `00:00` - Introduction to Speaker and Talk
- `03:00` - Introduction to Prometheus and Metrics
- `04:20` - Good observability doesnt come for free
- `06:40` - The limitations of Prometheus
- `09:20` - High Availability Prometheus
- `13:45` - Prometheus Metrics Best Practices
- `19:55` - Example of how to craft a metric to match desired outcome
- `21:05` - Prometheus Longterm Storge
- `24:10` - Machine Learning on Metrics
- `27:20` - Exporters & Custom Metrics
- `29:25` - Alert Manager Best Practices
- `31:00` - Observability Culture with SLOs (Service Level Objectives)
- `34:45` - Conclusion

## Key Takeaways

- Observability requires time, effort, and understanding — there are no shortcuts
- Metrics, logs, and traces must be designed into systems, not added as afterthoughts
- Prometheus is not a distributed system and can get resource spikes from bad queries, if you run out of CPU/memory you can slow down the instance to the point that it gets unresponsive, and you might end up with a gap when querying later because the server had been put in a situation where it couldnt get out and scrape metrics. It also wont evaluate any alerts.
- For HA Prometheus, use replicas of Prometheus to avoid data gaps during failures and put a reverse proxy (e.g., promxy or Thanos Query) in front of replicas to fan out queries and deduplicate data. Be aware of increased latency and operational overhead with these proxies.
- For metrics;
    - Use Prometheus configuration limits;
    - Avoid unbounded label values;
    - Limit label combinations to reduce cardinality;
    - Shard/federate Prometheus instances for scalability; and
    - Use separate metrics for different levels of granularity (endpoint, API version, global).
- Exporters should use "ConstMetrics" pattern to avoid stale metric issues from ephemeral values. Centralize and standardize custom exporters to replace ad-hoc monitoring scripts.
- Group and route alerts smartly (e.g., critical to pager, debug to Slack). Maintain alert context and write playbooks to act on alerts.

## Questions/Discussion Points

- This talk is from 2019 and now in 2025 with the launch of Prometheus 3.x, some limitations mentioned have been improved. E.g. better query performance, support for native histograms (for better cardinality handling), and more efficient long-term storage with block eviction. However, Prometheus is still not a distributed system and HA setups still require external tools.
