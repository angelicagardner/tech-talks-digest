# Tech Talks Digest

This repository is my knowledge base dedicated to summarizing tech talks from various conferences.

The goal is to provide a personal, structured resource where each entry includes:

- A high-level summary of the talk.
- Actionable insights and architectural patterns.
- Pointers to the different segments.
- Personal reflections and potential applications in modern engineering.

## Repository Setup

### Viewing the Summaries

All talk summaries are stored in the `/talks` directory and rendered as an table on the GitHub Pages site.

### Adding a New Talk

1. **Open Issues**: Interesting talks yet to be summarized appear as open issues following a template.
2. **After Watching**: Summarize the talk in a new Markdown file in the `/talks` directory (on the dev branch). The Markdown file should follow the setup in `talks/_example.md`.
3. **Open a Pull Request**: Reference the issue using #issue_number. A GitHub Action syncs the issue labels (publisher, year, research type, etc.) to the PR.
4. **GitHub Actions**: When merged, a workflow regenerates the website index automatically.

## Label System

The repository uses labels to categorize talks consistently:

### 1. Talk Category 🟦

Indicates the nature and engineering utility of the talk.

| Label | Description |
| --- | --- |
| Architectural Deep Dive | Focuses on internal systems, patterns, and technical mechanics. |
| Case Study | Implementations from specific production environments. |
| Keynote / Vision | High-level perspectives on industry trends and the future of tech. |
| Tutorial / Tooling | Practical sessions focused on how to use a specific framework or tool. |
| Engineering Leadership | Focuses on team dynamics, mentorship, and tech strategy. |

### 2. Conference & Host 🟪

Where the talk was originally presented e.g., CNCF, GOTO, AWS, GopherCon.

### 3. Publication Year 🟨

The year the talk was recorded.

### Tech Domain & Tags 🟥

Content-specific labels such as observability, golang, networking, security, and cloud native.

## Channels 

I monitor the following channels to identify talks for synthesis:

| Channel / Resource | Region | Key Tracks / Subjects |
| --- | --- | --- |
| [AWS re:Invent](https://www.youtube.com/@AWSEventsChannel) | 🇺🇸 | Networking & Content Delivery, Serverless, Containers, Open Source, Security, Compliance & Identity |
| [CNCF](https://www.youtube.com/@cncf) | 🌎 | Telco, AI, Observability, Platform Engineering, Cloud Native Security, Wasm |
| [CppCon](https://www.youtube.com/@CppCon) | 🇺🇸 | Back to Basics (Beginner friendly), Modern C++, Performance Optimization |
| [EuroPython](https://www.youtube.com/@EuroPythonConference) | 🇪🇺 | AsyncIO & Concurrency, Python Performance, Enterprise Integration |
| [GopherCon](https://www.youtube.com/@GopherAcademy) | 🇺🇸 | Go Core Internals, Language Proposals, Tooling & Compiler Evolution |
| [GopherCon Europe](https://www.youtube.com/@GopherConEurope) | 🇪🇺 | Cloud Native Go, eBPF & Networking, Observability, Open Source Innovation |
| [GopherCon UK](https://www.youtube.com/@GopherConUK) | 🇬🇧 | Advanced Concurrency, High-Performance Systems, Backend Scalability |
| [GOTO Conferences](https://www.youtube.com/@GOTO-) | 🌎 | Software Architecture & Tech Leadership |
| [InfoQ](https://www.youtube.com/@infoq) | 🌎 | High-level System Design, Architecture Trends, Engineering Leadership |
| [PyCon US](https://www.youtube.com/@PyConUS) | 🇺🇸 | CPython Internals, Language Evolution, MLOps & AI Infrastructure, Scalable Web Systems |
