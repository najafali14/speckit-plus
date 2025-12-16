---
id: assessments
title: Assessments & Checkpoints
sidebar_label: Assessments
---

Assessment emphasizes working systems over theory. Each milestone should be demoable with logs and brief retrospectives.

## Module Deliverables
- **Module 1 (ROS 2):** Working ROS 2 package with nodes, topics, and services; URDF renders correctly; basic pub/sub demo recorded.
- **Module 2 (Digital Twin):** Gazebo scene with humanoid URDF, sensors streaming into ROS 2; Unity visual demo or recording.
- **Module 3 (NVIDIA Isaac™):** VSLAM + Nav2 pipeline in simulation; synthetic dataset export; Jetson latency check for exported model.
- **Module 4 (VLA & Capstone):** Voice-to-action loop with Whisper + planner; autonomous task run-through with safety stops.

## Evaluation Criteria
- **Technical Fidelity:** Physics realism, stable control loops, and reproducible builds.
- **Observability:** Logs/metrics/traces for key pipelines (perception, navigation, planner).
- **Safety & Reliability:** Stop/abort handling, collision avoidance, and fall recovery.
- **Grounded AI:** RAG answers cite sources; planner steps reference book content where applicable.
- **Documentation:** Runbooks, configuration notes, and links to demos.

## Demo Checklist
- [ ] GitHub Pages site builds and is accessible.
- [ ] RAG chatbot reachable from the book and returns grounded responses.
- [ ] Each module has a short screencast or recorded run.
- [ ] Capstone script exercised end-to-end with safety stop rehearsal.

:::tip Author
**Najaf Ali** — founder of [najafai.com](https://najafai.com). Author of this textbook and curator of the Physical AI & Humanoid Robotics program.
:::
