---
title: "eBPF’s Abilities and Limitations: The Truth"
labels: "ebpf, cloud native, linux"
year: 2024
---

# eBPF’s Abilities and Limitations: The Truth

**Speaker(s):** Liz Rice & John Fastabend, Isovalent

**Video URL:** https://youtu.be/tClsqnZMN6I

**Summary:** eBPF is no longer restricted by its early limitations and has evolved into a flexible tool capable of advanced operations, such as Layer 7 protocol parsing. This talk explains how modern features like timer callbacks, subprograms, and improved looping allow for complex tasks while maintaining system safety through the verifier.

## Timestamps

- `00:00` - Introduction to the Talk & Speakers
- `01:30` - What's Possible with eBPF?
- `02:40` - Turing (in)completeness
- `06:40` - eBPF verifier
- `10:50` - Conway's Game of Life Demo
- `13:10` - Limitations
- `15:40` - Evolution of Looping
- `19:10` - Subprograms
- `21:10` - BPF execution termination
- `23:10` - Memory allocation
- `26:30` - Are the Statements about Limitations still True?
- `28:50` - Outro

## Key Takeaways

- While eBPF is technically bounded for safety, it is practically powerful enough to perform arbitrarily complex tasks (turing complete).

- eBPF verifier originally limited programs to 4,000 instructions but modern kernels allow up to 1 million instructions per subprogram and with the ability to chain subprograms together.

- The verifier's primary job is ensuring memory safety, preventing kernel crashes, and making sure no program hangs the CPU indefinitely.

- eBPF now supports bounded loops and timer callbacks that allow a program to hand over the CPU and resume later.
