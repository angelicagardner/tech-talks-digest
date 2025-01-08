---
title: "Dude, Where’s My Error?: How OpenTelemetry Records Errors, and Why..."
labels: "observability, opentelemetry"
year: 2024
---

# Dude, Where’s My Error?: How OpenTelemetry Records Errors, and Why...

**Speaker(s):** Adriana Villela, ServiceNow Cloud Observability & Reese Lee, New Relic

**Video URL:** https://www.youtube.com/watch?v=mfIaqvPHAjE

**Summary:** The talk explores how OpenTelemetry standardizes error handling across different programming languages and observability backends. The speakers explain the differences between errors and exceptions, how they are represented in spans and logs, and how context propagation ensures traceability across distributed systems. A demo showcases how errors are visualized in tools like Jaeger and other observability platforms.

## Timestamps

- `00:00` - Introduction to the Speakers
- `01:45` - Table of Contents for the Talk
- `02:30` - Background on why we need a standardized way to capture telemetry and errors
- `03:50` - Errors vs Exceptions
- `05:15` - Error Handling in OTel
- `07:20` - Record Errors using Spans
- `11:00` - Record Errors using Logs
- `12:00` - Which is better: Spans or Logs?
- `14:30` - Demo
- `24:00` - Wrap up

## Key Takeaways

- Languages handle errors and exceptions differently e.g., Go lacks exceptions, while Java and Python use structured exception handling
- OTel provides a standardized way to capture errors. Errors can be recorded using spans and logs. Spans represent individual units of work enriched with metadata, attributes, status codes and events. Logs are structured point-in-time messages correlted with traces for debugging. Whether to use spans or logs depends on team preference, backend support, and trace-log correlation capabilities.
- Context propagation ties together spans and logs across distributed systems.  
- Different observability tools interpret spans, logs, and events uniquely. E.g. span events might be treated as logs in Jaeger, but as dedicated signals in other backends.

## Links/Resources

- Demo repo: https://github.com/avillela/otel-errors-talk
