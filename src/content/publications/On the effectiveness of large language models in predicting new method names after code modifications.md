---
title: "On the effectiveness of large language models in predicting new method names after code modifications"
where: "Journal of Information and Software Technology"
state: "Published"
pubType: "Journal"
link: "https://doi.org/10.1016/j.infsof.2026.108179"
pubDate: "May 8 2026"
---

## Abstract

**Context**: Identifying effective methods for automatic method renaming after code modifications is crucial
for main-taining developer productivity and enhancing the performance of source code analysis tools.

**Objectives**: In this study, we benchmark the effectiveness of large language models (LLMs), including ChatGPT,
Llama2, and Mistral, in predicting new method names after code modifications. We also propose a validation pipeline
that goes beyond traditional string similarity by checking both semantic/structural alignment and explicit linguis-
tic consistency of method signatures, which is critical for preserving clear service contracts in service-oriented and
microservice-based systems.

**Methods**: Leveraging a dataset of 116 method code snippets with their original and modified names, we assess LLM
predictions using (i) Jaccard similarity and (ii) an encoder-only semantic evaluator fine-tuned to capture semantic and
structural name changes. To operationalize the practical relevance for Service-Oriented Computing, we additionally
apply a CodeBERT-based multiclass classifier to detect linguistic inconsistencies in method signatures and demonstrate
the pipeline on a transactional messaging microservices library.

**Results**: Our findings indicate that ChatGPT achieves a high success rate in predicting method names. Specifically,
it obtained 98% (Cosine) and 94% (Jaccard) accuracy when the similarity threshold was set to 0.5. For a maximum
similarity threshold of 1, ChatGPT maintained a notable performance with 49% (Cosine) and 74% (Jaccard) accuracy.
Conclusion: Our results highlight the potential of LLMs to automate method renaming and show that combining
similarity-based evaluation with semantic and linguistic validation provides a more reliable quality assurance layer for
API evolution, especially in service-oriented and microservice ecosystems.
