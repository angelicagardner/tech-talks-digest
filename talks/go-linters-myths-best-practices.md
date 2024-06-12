---
title: "Go Linters: Myths and Best Practices"
labels: "clean code, linting"
year: 2019
---

# Go Linters: Myths and Best Practices

**Speaker(s):** Denis Isaev

**Video URL:** https://www.youtube.com/watch?v=1U-Gzz4TYP0

**Summary:** In this talk, the speaker introduces the concept of linters related to Golang and debunks some common myths about linting. He explains the importance linters play in maintaining high code quality and discuss different types of linter checks plus best practices for using linters. The speaker has developed `golangci-lint` which is a tool that aggregates multiple Go linters into one.

## Timestamps

- `00:00` - Introduction
- `00:50` - What is a Linter?
- `01:35` - Linting Myth #1
- `03:00` - Linting Myth #2
- `05:45` - Linting Myth #3
- `06:20` - Formatting Check
- `07:55` - Complexity Check
- `09:45` - Style Check
- `12:15` - Unused Code Check
- `15:15` - Bug Finding
- `18:10` - Which Go linters should be used?
- `18:55` - Linting Myth #4
- `21:25` - Introducing golangci-lint
- `23:40` - Linting Myth #5
- `29:25` - Best Practices
- `35:15` - Writing Own Linters
- `35:55` - Summary

## Key Takeaways

- `golangci-lint` is aggregates multiple Go linters into a single tool. This integration simplifies the linting process by running various static analysis checks simultaneously, helping developers maintain high code quality and follow best practices without needing to configure and run each linter individually.
- During the talk, the following myths regarding linting are busted:
  - Linters don't find real bugs
  - Linters do more harm than good
  - There are too many linters, only use 2-3
  - Running linters is too slow
  - It's too late to introduce linters to already big projects

### Questions/Discussion Points

- What configurations are commonly used for .golangci.yml - or is the default most common? Is the default "enough"?

## Links/Resources

- [golangci-lint](https://golangci-lint.run/)
