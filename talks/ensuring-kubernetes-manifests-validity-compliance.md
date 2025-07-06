---
title: "Ensuring Kubernetes manifests validity & compliance"
labels: "gitops, kubernetes"
year: 2021
---

# Ensuring Kubernetes manifests validity & compliance - a tooling overview

**Speaker(s):** Yann Hamon

**Video URL:** https://youtu.be/YM7Wy_M7Lvw?si=NI2HioRxrRpyZpMa

**Summary:** In this talk, the speaker emphasizes the importance of validating Kubernetes manifests to ensure they adhere to official Kubernetes schemas and best practices. We're introduced to several tools that help with difference levels of such validation, and the speaker presents his own tool Kubeconform.

## Timestamps

- `00:00` - Introduction to the Talk and Presenter
- `02:05` - Simple example of tool use case
- `03:30` - Examples of YAML validation tools: yq, yamllint.
- `05:35` - Examples of Kubernetes validation tools: kubeval.
- `10:15` - Support for Custom Resources
- `11:05` - Introducing Kubeconform, high-performing Kubernetes manifest validation tool with CRD support
- `13:00` - Kubeconform Pros and Cons
- `13:55` - Client-side validation with kubectl
- `16:45` - Conform to best practices and/or policies: conftest, kubesec (security testing of manifests), kube-score, kube-linter, kubetest.
- `24:05` - Learnings from the tooling overview
- `28:40` - Summary and what you should use

## Key Takeaways

- Validation is important => reduce runtime issues and improve reliability.
- Tools exist on different levels, from YAML correctness to k8s compliance, best practices and security policies.
- Such validation tools help to handle compliance to new k8s versions and features.
- Adopt a layered approach: start with YAML validation, move to k8s schema compliance and then apply custom policies for security and best practices.
- YAML linter should be used in dev environment to catch formatting errors directly; and then
- Integrate k8s validation tools in CI/CD pipelines.

## Questions/Discussion Points

- Alternatives for when working with Helm: plugins for kubeval and conftest. (not Kubeconform yet)

## Links/Resources

- [Kubernetes manifest validation tool. Incorporate it into your CI, or use it locally to validate your Kubernetes configuration](https://github.com/yannh/kubeconform) 
