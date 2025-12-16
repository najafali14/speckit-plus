---
id: introduction
title: Physical AI & Humanoid Robotics
sidebar_label: Introduction
---

Welcome to the Physical AI & Humanoid Robotics course textbook. This book is the core learning companion for building embodied, AI-driven systems that bridge digital intelligence with the physical world. It is built with Docusaurus and designed to pair with hands-on labs, simulation exercises, and an integrated Retrieval-Augmented Generation (RAG) assistant.

## Course Focus
- **Physical AI & Embodied Intelligence:** Apply AI models to humanoid platforms that must respect physics, safety, and real-time constraints.
- **Tooling:** ROS 2 for control, Gazebo and Unity for simulation, NVIDIA Isaac™ for perception and training, and Vision-Language-Action (VLA) pipelines for natural commands.
- **AI-Native Book:** Content is generated and maintained with Spec-Kit Plus and Claude Code, enabling rapid iteration and consistency across chapters.
- **Interactive Support:** A RAG chatbot (OpenAI Agents/ChatKit + FastAPI + Neon Postgres + Qdrant) is embedded to answer questions and ground responses in the text or user-selected passages.

## What You Will Learn
- Architect humanoid systems with ROS 2 nodes, topics, services, and actions.
- Build digital twins in Gazebo and Unity to de-risk physical experiments.
- Use NVIDIA Isaac Sim/ROS for VSLAM, navigation, and perception pipelines.
- Translate natural-language intent to robot actions with LLMs and Whisper.
- Plan and deliver a capstone: an autonomous humanoid that hears, plans, navigates, perceives, and manipulates.

## How the Book is Organized
- **Module 1 – The Robotic Nervous System (ROS 2):** Core middleware, URDF, and control pipelines.
- **Module 2 – The Digital Twin (Gazebo & Unity):** Physics, rendering, and sensor simulation.
- **Module 3 – The AI-Robot Brain (NVIDIA Isaac™):** Photorealistic simulation, VSLAM, navigation, and sim-to-real.
- **Module 4 – Vision-Language-Action:** Voice-to-action flows, cognitive planning with LLMs, and the Autonomous Humanoid capstone.
- **Assessments:** Project checkpoints and evaluation criteria across modules.
- **Hardware Requirements:** Workstation, edge kits, and lab setup options for on-premise and cloud-native paths.

## Delivery & Operations
- **Build & Deploy:** GitHub Pages hosts the book; CI/CD keeps content live.
- **Chatbot Integration:** FastAPI backend with Neon Postgres (metadata) and Qdrant (embeddings) powers the in-book assistant.
- **Feature Flags:** Personalization, Urdu translation, and authentication via Better-Auth can be toggled for staged rollout.

Use the sidebar to jump into each module. The book favors hands-on guidance, with links to lab setups, code samples, and evaluation rubrics so you can ship working robots—not just read about them.

:::tip Author
**Najaf Ali** — founder of [najafai.com](https://najafai.com). Author of this textbook and curator of the Physical AI & Humanoid Robotics program.
:::
