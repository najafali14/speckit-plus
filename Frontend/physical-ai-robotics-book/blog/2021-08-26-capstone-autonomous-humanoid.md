---
slug: capstone-autonomous-humanoid
title: "Capstone Preview: Voice-to-Action Autonomous Humanoid"
authors: [najaf]
tags: [capstone, humanoid, vla, whisper, nav2]
---

The capstone ties everything together: a humanoid that hears a voice command, plans a sequence, navigates, perceives, and manipulates—all with safety gates.

<!-- truncate -->

### Flow
1) **Voice Intake:** Whisper converts speech to text.
2) **Planner:** LLM breaks intent into ROS 2 actions with guardrails.
3) **Perception & Navigation:** VSLAM + Nav2 plan paths; perception validates targets.
4) **Action & Safety:** Controllers execute with fall detection, collision avoidance, and stop/abort hooks.

### Success criteria
- Stable end-to-end run in simulation.
- RAG answers cite book sources when explaining planner steps.
- Safety stop rehearsed before any live demo.

See the full capstone chapter: `/docs/module4/week13-conversational-robotics`
