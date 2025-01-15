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
- `00:00` - 

## Key Takeaways

- Adopt IaC from the beginning to manage cloud resources efficiently and ease maintenance as your infrastructure grows.

Understand IaC Frameworks:

    CloudFormation: The original AWS IaC tool using YAML/JSON, offering extensive flexibility and support for over 490 resource types. It includes the CloudFormation Registry for custom resources.
    SAM (Serverless Application Model): Simplifies deploying serverless applications by building on CloudFormation, providing easy local testing and streamlined deployment processes.
    CDK (Cloud Development Kit): Allows defining infrastructure using familiar programming languages (TypeScript, Python, Java), offering higher-level abstractions through constructs and design patterns.
    Terraform: A versatile IaC tool by HashiCorp using HCL (HashiCorp Configuration Language), known for its multi-cloud capabilities and state management features. It now integrates with CDK for enhanced functionality.

Prefer Declarative Over Imperative Approaches: Use declarative IaC methods where you specify what infrastructure you need, rather than how to create it. This approach enhances repeatability, predictability, and reduces complexity.

Implement Best Practices for IaC:

    Layer Your Applications: Separate different components into distinct stacks (e.g., infrastructure, security, backend, frontend) to improve manageability and reduce the risk of widespread issues.
    Avoid Hardcoding Secrets: Utilize secure methods like AWS Secrets Manager, Parameter Store, or HashiCorp Vault to manage sensitive information instead of embedding them directly in templates.
    Start Small and Scale Gradually: Begin with simple deployments and progressively add complexity, ensuring each step is manageable and thoroughly tested.
    Use Parameters and Mappings: Design templates to be flexible and reusable across multiple environments (production, staging, development) by leveraging parameters and mappings.
    Thoroughly Test Your Infrastructure Code: Incorporate testing practices such as syntax checking, linting, snapshot tests, and integration tests to validate configurations before deployment.
    Version Control and Peer Reviews: Store IaC templates in version-controlled repositories and conduct peer reviews to maintain code quality and consistency.

Leverage Tool-Specific Features:

    CloudFormation Registry: Extend CloudFormation capabilities by creating custom resources without the need for complex Lambda functions.
    SAM CLI: Utilize SAM’s CLI for local development, testing, and debugging of serverless applications, enhancing productivity and reliability.
    CDK Constructs: Use low-level CloudFormation constructs, higher-level service constructs, and community-driven design patterns in CDK to simplify and accelerate infrastructure deployment.

Integrate IaC with CI/CD Pipelines: Incorporate IaC into continuous integration and continuous deployment pipelines to automate deployments, enforce consistency, and enable rapid iterations.

Choose the Right Tool for Your Needs: Select IaC tools based on your team’s expertise and project requirements. Whether it's CloudFormation for deep AWS integration, SAM for serverless applications, CDK for programming language familiarity, or Terraform for multi-cloud support, ensure the tool aligns with your workflow and goals.

Embrace Automation While Maintaining Control: Utilize IaC to automate repetitive tasks and manage infrastructure at scale, but maintain oversight through practices like monitoring, logging, and regular audits to prevent and quickly address issues.

Stay Updated and Engage with the Community: Keep abreast of the latest updates and features in IaC tools, and participate in community forums and discussions to share knowledge, seek support, and contribute to best practices

### Questions/Discussion Points

- ...

## Links/Resources

- ...
