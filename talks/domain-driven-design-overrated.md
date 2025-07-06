---
title: "Is Domain-Driven Design Overrated?"
labels: "domain-driven design, software architecture"
year: 2021
---

# Is Domain-Driven Design Overrated?

**Speaker(s):** Stefan Tilkov

**Video URL:** https://www.youtube.com/watch?v=ZZp9RQEGeqQ

**Summary:** The talk explains how Domain-Driven Design (DDD) is a good starting point but not something to be dogmatic about. DDD emphasizes building software with the domain as the central focus, the idea is to create a shared understanding between domain experts and developers through DDD key aspects. The speaker highlights DDD’s contributions, such as tactical patterns and strategic concepts, but also discusses its limitations - encouraging flexibility and the use of alternative approaches depending on the project.

## Timestamps

- `00:00` - Introduction
- `01:00` - What is Domain-driven design?
- `04:30` - Key aspect #1: Ubiquitous language
- `04:50` - Key aspect #2: Tactical patterns
- `06:10` - Key aspect #3: Strategic design
- `07:00` - Bounded contexts
- `09:30` - Conceptual extensibility
- `15:10` - Should design be domain-driven?
- `26:30` - Revisit bounded contexts
- `29:00` - Summary

## Key Takeaways

- DDD has the idea that the domain model is the core of the software system (main concepts expressed in the model are visible in the implementation).
- Ubiquitous language refers to a shared, consistent vocabulary used by both domain experts (e.g., business stakeholders) and developers. 
- Tactical patterns help structure code, while strategic design (e.g., bounded contexts) aids in managing domain complexity.
- DDD provides a set of best practices, patterns, and context relationships that should be a starting point and not rigid/fixed.
- Every design should be domain-driven (not technology-driven) and understanding the domain is key, but not every software needs to be built using a technology-neutral Object Oriented (OO) core.
- Alternatives to DDD can be: using an RDBMS, UX/UI-driven design that evolves from user experiments, using mathematical/functional models to generalize/abstract domain models, or be purely model-driven and create technology-independent models.
- Implementation strategy can differ depending on the bounded context of your project, e.g. OrderMgmt (bc) is UX-driven while Accounting (bc) is has a Relational strategy and Fulfilment (bc) is tactical DDD.

## Questions/Discussion Points

- He mentions it's common among developers to have "domain allergy" i.e. preferring to explore cool technology to being bothered by learning domain concepts. I wonder if this has to do with personality, age - or is it generic? Can it be somewhat prevented through stronger product ownership?
