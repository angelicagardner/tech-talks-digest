---
title: "Monitoring the World: Scaling Thanos in Dynamic Prometheus Environments"
labels: "monitoring, prometheus, thanos"
year: 2024
---

# Monitoring the World: Scaling Thanos in Dynamic Prometheus Environments

**Speaker(s):** Colin Douch, Cloudflare

**Video URL:** https://youtu.be/ofhvbG0iTjU?si=be7Df_-4ryWneqiZ

**Summary:** Cloudflare scaled their Thanos metrics stack to 600+ data centers by moving to R2 storage and automating bucket creation for every new site. They optimized performance by running resource-heavy compaction on idle edge CPUs during off-peak hours and using a custom proxy to prevent slow, global queries.

## Timestamps

- `00:00` - Introduction to the Talk & Speaker
- `01:22` - Cloudflare's Thanos Journey
- `05:20` - Tooling Developed to Handle Scaling & Improve UX
- `06:15` - Storage
- `12:10` - Compactors
- `14:35` - Stores
- `17:15` - Queries
- `20:20` - Outro with Q&A

## Key Takeaways

- Cloudflare moved from Nagios/OpenTSDB to Prometheus and Thanos in 2018.

- They abandoned OpenTSDB primarily because they lacked Java expertise and found the Hadoop/HBase stack difficult to maintain.

- Initial Scale (2018): ~100 data centers, <1 billion active time series. Current Scale: 600+ data centers, 1,000+ sidecars, 50TB+ metrics daily, and 50 petabytes of long-term storage.

- Storage: Internal Ceph storage was unmaintained and centralized. Migrated to Cloudflare R2 (S3-compatible object storage). Since Thanos sidecars only allow one upload per block, they patched Thanos to allow configurable metadata filenames. This let them run two sidecars simultaneously to dual-write to both Ceph and R2 during the transition.

- Compactors: Run on bare-metal edge nodes using Nomad. They run compaction jobs as "Chron" tasks during night. Compactor is a background worker that merges Prometheus' 2-hour metrics blocks into larger blocks, e.g. 2 weeks, to reduce the number of files.

- Stores: For optimal SLOs, a single Thanos store should handle roughly 5 terabytes of data blocks. They built a tool called "Store Sinker" that automatically chunks buckets into 5TB segments and provisions a dedicated store for each chunk.

- Queries: By default, Thanos queries every store API it knows, meaning a query is only as fast as the slowest connected data center. So they built a Label Enforcer reverse proxy to enforce including an "external label", e.g. data center name or region.

## Questions/Discussion Points

- Speaker mentions they want to meet a "decently respectable set of SLOs", what could they be? Query latency? Availability/Up-time? Data freshness (how quickly data is available in long-term storage)? Retention integrity?
