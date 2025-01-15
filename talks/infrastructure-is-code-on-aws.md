---
title: "Infrastructure IS Code on AWS"
labels: "aws, infrastructure"
year: 2024
---

# Infrastructure IS Code on AWS

**Speaker(s):** Darko Mesaroš - Developer Advocate at AWS

**Video URL:** https://youtu.be/r4VT6ktLQm4?si=l1mIxs84gl8ZytED

**Summary:** The talk emphasizes the importance of Infrastructure as Code (IaC) on AWS, highlighting various frameworks like CloudFormation, SAM, CDK, and Terraform. The speaker explains the differences between imperative and declarative IaC approaches and demonstrates how modern tools simplify the deployment and management of complex infrastructures. Additionally, the talk outlines best practices for implementing IaC, including layering applications, separating stacks, avoiding hardcoded secrets, and thoroughly testing configurations.

## Timestamps

- `00:00` - Introduction and Agenda for the talk
- `01:15` - What is Infrastructure as Code?
- `06:10` - Introduction to the speaker
- `07:25` - AWS CloudFormation (IaC)
- `10:25` - Cloud Formation Registry
- `12:25` - AWS Serverless Application Model (SAM)
- `17:25` - AWS Cloud Development Kit
- `23:30` - Testing demo
- `29:50` - Terraform
- `32:20` - Best Practices

## Key Takeaways

- Adopt IaC from the beginning to manage cloud resources efficiently and ease maintenance as your infrastructure grows.
- Prefer declarative over imperative approaches, use declarative IaC methods where you specify what infrastructure you need rather than how to create it.
- Integrate IaC with CI/CD Pipelines: Incorporate IaC into continuous integration and continuous deployment pipelines to automate deployments, enforce consistency, and enable rapid iterations.
- CloudFormation (tool): The original AWS IaC tool using YAML/JSON, offering support for over 490 resource types. It includes the CloudFormation Registry for custom resources.
- SAM (framework): Simplifies deploying serverless applications by building on CloudFormation, providing easy local testing and streamlined deployment processes.
- CDK (framework): Allows defining infrastructure using familiar programming languages (TypeScript, Python, Java), offering higher-level abstractions through constructs and design patterns.
- Terraform (tool): A versatile IaC tool by HashiCorp using HCL (HashiCorp Configuration Language), known for its multi-cloud capabilities and state management features. It integrates with CDK for enhanced functionality.
- Best Practices for IaC are:
    - Layer your applications by separating different components into distinct stacks (e.g., infrastructure, security, backend, frontend).
    - Avoid hardcoding secrets, utilize AWS Secrets Manager, Parameter Store, or HashiCorp Vault.
    - Use parameters and mappings to design templates to be flexible and reusable across multiple environments (production, staging, development).
    - Incorporate testing practices such as syntax checking, linting, snapshot tests, and integration tests to validate configurations before deployment.
    - Store IaC templates in version-controlled repositories and conduct peer reviews to maintain code quality and consistency.
