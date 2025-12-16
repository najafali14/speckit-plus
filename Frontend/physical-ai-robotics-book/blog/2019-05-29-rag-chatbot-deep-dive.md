---
slug: rag-chatbot-deep-dive
title: Grounded RAG Chatbot for the Book
authors: [najaf]
tags: [rag, chatbot, qdrant, neon, openai, fastapi]
---

The in-book assistant is a Retrieval-Augmented Generation (RAG) chatbot built to keep answers grounded in the textbook or in user-selected passages.

<!-- truncate -->

### Architecture
- **Backend:** FastAPI orchestrates retrieval and response generation.
- **Memory:** Qdrant Cloud stores embeddings; Neon Postgres holds metadata.
- **LLM Layer:** OpenAI Agents/ChatKit for reasoning, with strict citation rules.
- **Client:** Embedded React widget in Docusaurus pages.

### Why this design
Humanoid workflows need verifiable guidance. The chatbot cites the sections it uses, so teams can trace every recommendation back to the book or the highlighted text they provided.

### Implementation notes
- Chunk docs consistently (by headings) before embedding.
- Log the retrieved chunk IDs and include them in responses.
- Keep latency budgets under 3 seconds; cache embeddings locally when iterating.
