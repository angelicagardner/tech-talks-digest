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

- Start using Infrastructure as Code (IaC) from the beginning to manage cloud resources efficiently, simplify scaling, and ensure maintainability as infrastructure grows.
- Use declarative IaC methods where you define the desired state of your infrastructure (what you need), rather than detailing the steps to create it (how to achieve it).
- Incorporate IaC into Continuous Integration and Continuous Deployment (CI/CD) pipelines to automate infrastructure deployments, enforce consistency, and enable faster iterations.
- CloudFormation (Tool): AWS's native IaC tool using YAML/JSON to define infrastructure. It supports over 490 resource types and allows custom resources through the CloudFormation Registry.
- SAM (Framework): Built on CloudFormation, SAM simplifies serverless application deployment, offering local testing capabilities and streamlined deployment workflows.
- CDK (Framework): Enables defining cloud infrastructure using familiar programming languages (TypeScript, Python, Java, etc.). Provides high-level abstractions (constructs) and reusable design patterns.
- Terraform (Tool): A widely used, multi-cloud IaC tool by HashiCorp. Uses HCL (HashiCorp Configuration Language) for configuration and offers powerful state management. It integrates with CDK for additional functionality.
- Best Practices for IaC:
    - Organize your applications by separating components into distinct stacks or modules (e.g., infrastructure, security, backend, frontend).
    - Avoid hardcoding sensitive data. Use tools like AWS Secrets Manager, Parameter Store, or HashiCorp Vault to securely manage secrets.
    - Design templates using parameters and mappings to enable flexibility and reuse across environments (production, staging, development).
    - Adopt testing practices such as syntax checking, linting, snapshot tests, and integration tests to validate configurations before deployment.
    - Store IaC templates in version-controlled repositories (e.g., Git). Conduct peer reviews to ensure code quality, consistency, and adherence to best practices.
