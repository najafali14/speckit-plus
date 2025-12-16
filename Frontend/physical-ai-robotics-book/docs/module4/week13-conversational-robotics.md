title: Week 13 · Conversational Robotics & Capstone
sidebar_label: Week 13 · Conversational Robotics
---

Deliver the autonomous humanoid: accept voice commands, plan actions, navigate, perceive, and manipulate safely.

## Learning Goals
- Integrate Whisper for speech-to-text and natural-language command intake.
- Translate goals to action plans with LLM-based cognitive planners.
- Ground responses and actions using the RAG pipeline backed by course content.
- Demonstrate the full loop from perception to actuation for the capstone.

## Topics
- **Voice-to-Action:** Audio capture, Whisper transcription, and intent parsing.
- **Cognitive Planning:** Breaking down commands (“Clean the room”) into ROS 2 action sequences with safety checks.
- **Grounded Assistance:** Using Qdrant + OpenAI Agents/ChatKit to cite book passages in answers and planner justifications.
- **Demo Readiness:** Latency budgets, failure modes, and human-in-the-loop controls.

## Capstone Expectations
- Humanoid receives a spoken command, plans a path, navigates obstacles, identifies a target object, and manipulates it.
- Plans cite knowledge sources (book content or selected text) and log decisions.
- Safety guards: stop/abort commands, collision avoidance, and monitored power limits.

## Readiness Checklist
- [ ] End-to-end voice-to-action loop completes reliably in simulation.
- [ ] RAG answers cite sources and respect user-selected context.
- [ ] Demo script and safety stop procedures are rehearsed before live presentation.

:::tip Author
**Najaf Ali** — founder of [najafai.com](https://najafai.com). Author of this textbook and curator of the Physical AI & Humanoid Robotics program.
:::
