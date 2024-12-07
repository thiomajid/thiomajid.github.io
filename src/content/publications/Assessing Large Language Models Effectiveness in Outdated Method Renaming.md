---
title: "Assessing Large Language Models Effectiveness in
Outdated Method Renaming"
where: "ICSOC 2024"
state: "Published"
pubType: "Conference"
---

## Abstract

Identifying effective methods for automatic method renaming after code modifications is crucial
for maintaining developer productivity and enhancing the performance of source code analysis tools.
In this study, we focus on benchmarking the effectiveness of the ChatGPT large language model (LLM)
in predicting new method names after code modifications.

Leveraging a dataset of method code snippets along with their
original and modified names, we conducted experiments on 116 samples to assess the prediction accuracy of ChatGPT.
Using Jaccard similarity as the metric, we varied the similarity threshold to evaluate the classification
performance of predicted names.

However, the Jaccard similarity does not retain the magnitude or
direction of the vectors, reflecting the strength and polarity of the similarity.
In addition, it ignores the order and context of the words, which results in missing
potential syntactic or semantic variations. To solve this problem, we propose another validation process
which not only detects whether or not an LLM captured semantic changes of a method, but also its
structural changes in order to be able to generate a suitable name for this given method.

Our results indicate that ChatGPT achieves a high success rate in predicting method names, obtaining 98%
(Resp. 94%) when the threshold is set to 0.5 for the Cosine (resp. Jaccard) similarity.
For a threshold of 1 (maximum similarity), ChatGPT maintains a notable performance with 49%
(Resp. 74%) Cosine (resp. Jaccard) similarity. This demonstrates the potential of ChatGPT for automating method
renaming tasks in software development workflows.
