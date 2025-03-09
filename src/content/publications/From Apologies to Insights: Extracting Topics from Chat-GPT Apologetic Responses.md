---
title: "From Apologies to Insights: Extracting Topics from ChatGPT
Apologetic Responses"
where: "Journal of Decision Systems"
state: "Published"
pubType: "Journal"
link: "https://www.tandfonline.com/doi/full/10.1080/12460125.2024.2438610"
---

## Abstract

This article aims to pinpoint areas of suboptimal performance in ChatGPT’s responses,
with a specific emphasis on instances containing the term ’apologies.’ Our
primary objective is to conduct a nuanced analysis, shedding light on potential
shortcomings within ChatGPT’s generated responses and delineating areas requiring
improvement.

In addition to this primary focus, we introduce an additional layer of analysis,
delving into responses where ChatGPT issues apologies. In this context, we aim to
identify the underlying tasks or queries that developers presented to ChatGPT,
revealing specific tasks where the model may demonstrate unreliability, such as refactoring
or code completion. Furthermore, employing the Latent Dirichlet Allocation algorithm,
we determine topics to gain insights into the most discussed themes with ChatGPT.
This insight suggests potential domains where ChatGPT may face challenges in fulfilling specific tasks.

Using a targeted methodology, we extract key insights to comprehensively understand the topics where ChatGPT may
exhibit deficiencies. To validate the apologetic topics further, we adopt an innovative approach leveraging
on the recent advancement of transformer-based Large Language Models (LLMs). LLMs demonstrated a level
on many of the language understunding tasks higher than humans. We prompt an LLM (we opted for Claude) to assign for
each apologetic response, the most appropriate topic among the list of all topics.

We compared the topics identified by the LLM model with those determined using LDA and experts.
We achieved a consensus rate of 77.5%. This allowed us to gain more confidence in the mined apologetic topics.
Subsequently, for additional validation, we identified the topics of non-apologetic responses and assessed any overlap
with the apologetic topics. We did not observe any overlap between the topics of apologetic responses
and those of the non-apologetic ones. This finding confirms and strengthens the validity of the apologetic topics
we identified as being exclusive to the apologetic ones. This synthesis contributes to a deeper comprehension of language
model performance, opening new avenues for improvement.
