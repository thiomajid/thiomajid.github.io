---
title: "MoxE: Mixture of xLSTM Experts with Entropy-Aware Routing for Efficient Language Modeling"
where: "arXiv"
state: "Preprint"
pubType: "arXiv"
link: "https://arxiv.org/abs/2505.01459"
pubDate: "May 01 2025"
---

# Abstract

This paper introduces **MoxE**, a novel architecture that synergistically combines the Extended Long Short-Term Memory (xLSTM) with the Mixture of Experts (MoE) framework to address critical scalability and efficiency challenges in large language models
(LLMs). The proposed method effectively leverages xLSTM’s innovative memory structures while strategically introducing sparsity through MoE to substantially reduce computational overhead. At the heart of our approach is a novel entropy-based routing
mechanism, designed to dynamically route tokens to specialized experts, thereby ensuring efficient and balanced resource utilization. This entropy awareness enables the architecture to effectively manage both rare and common tokens, with mLSTM blocks being favored to handle rare tokens. To further enhance generalization, we introduce a suite of auxiliary losses, including entropy-based and group-wise balancing losses, ensuring robust performance and efficient training. Theoretical analysis and empirical evaluations rigorously demonstrate that MoxE achieves **significant efficiency gains and enhanced effectiveness** compared to existing approaches, marking a notable advancement in scalable LLM architectures.
