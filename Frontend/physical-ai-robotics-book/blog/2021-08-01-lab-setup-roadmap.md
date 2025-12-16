---
slug: lab-setup-roadmap
title: "Lab Setup Roadmap: On-Prem vs Cloud-Native"
authors: [najaf]
tags: [hardware, lab, jetson, cloud, workstation]
---

Choosing the right lab architecture determines how smooth your sim-to-real journey will be. Here’s how we frame the trade-offs for the course.

<!-- truncate -->

### On-Prem Lab (low latency, higher CapEx)
- RTX 4070 Ti+ workstation on Ubuntu 22.04.
- Runs Gazebo/Isaac locally; Jetson handles edge inference.
- Best for tight control loops, minimal jitter, and hardware-in-the-loop tests.

### Cloud-Native Lab (lower CapEx, higher OpEx)
- Cloud workstation (e.g., AWS g5.xlarge) for Isaac Sim/Omniverse.
- Jetson stays local; one shared robot for final demos.
- Mitigate latency: train in cloud, flash models to edge before physical runs.

### Economy Jetson Kit (~$700)
- Orin Nano 8GB, RealSense D435i, ReSpeaker mic array, SD + cabling.
- Great for ROS 2 fundamentals, perception labs, and testing sim-to-real exports.

Full checklist: `/docs/hardware-requirements`
