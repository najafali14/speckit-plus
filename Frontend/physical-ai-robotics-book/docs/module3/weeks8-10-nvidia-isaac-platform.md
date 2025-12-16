title: Weeks 8–10 · NVIDIA Isaac Platform
sidebar_label: Weeks 8–10 · NVIDIA Isaac™
---

Use NVIDIA Isaac™ to build perception and navigation stacks that can survive the jump from simulation to real hardware.

## Learning Goals
- Install and operate NVIDIA Isaac Sim for photorealistic scenes and synthetic data.
- Use Isaac ROS for hardware-accelerated VSLAM and navigation with Nav2.
- Plan paths and behaviors for bipedal movement and obstacle negotiation.
- Prepare policies and datasets for sim-to-real transfer to Jetson edge devices.

## Topics
- **Isaac Sim:** Scene composition, domain randomization, and synthetic dataset export.
- **Perception Pipelines:** VSLAM, depth processing, and object detection with Isaac ROS gems.
- **Navigation:** Mapping, localization, and path planning for humanoid gait constraints.
- **Sim-to-Real:** Dataset curation, model export, latency budgeting, and safety limits on edge.

## Hands-On
- Build a photorealistic lab scene; generate synthetic data for perception models.
- Run VSLAM and Nav2 in simulation; validate loop closures and stable path plans.
- Export a lightweight perception model and deploy to a Jetson for latency checks.

## Readiness Checklist
- [ ] Isaac Sim scenes run with acceptable FPS on target GPU.
- [ ] VSLAM produces stable poses; Nav2 plans avoid collisions in simulation.
- [ ] Exported models meet Jetson latency/VRAM budgets for edge deployment.

:::tip Author
**Najaf Ali** — founder of [najafai.com](https://najafai.com). Author of this textbook and curator of the Physical AI & Humanoid Robotics program.
:::
