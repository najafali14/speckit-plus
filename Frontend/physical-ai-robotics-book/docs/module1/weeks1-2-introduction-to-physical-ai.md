title: Weeks 1–2 · Introduction to Physical AI
sidebar_label: Weeks 1–2 · Intro to Physical AI
---

Early weeks establish why embodied intelligence matters and how to reason about humanoid systems that must obey physics while staying safe and responsive.

## Learning Goals
- Define Physical AI and embodied intelligence with examples of humanoid use cases.
- Map the landscape of sensors (LiDAR, RGB/depth, IMUs, force/torque) and their roles.
- Understand the human-robot interface expectations (latency, stability, safety envelopes).
- Set up a development environment on Ubuntu 22.04 with ROS 2 distributions (Humble/Iron).

## Topics
- **From Digital to Physical AI:** Constraints of real-world actuation vs. cloud-only AI.
- **Robot Architectures:** Control loops, perception-planning-action stacks, and safety interlocks.
- **Sensor Primer:** Data modalities, noise models, calibration basics, and time synchronization.
- **Toolchain Overview:** ROS 2 packages, workspaces, and launch files; links to Gazebo, Unity, and NVIDIA Isaac™.

## Hands-On
- Install ROS 2 on Ubuntu 22.04; verify nodes, topics, and services with `ros2` CLI.
- Create a starter ROS 2 Python package; publish/subscribe to a simple sensor topic.
- Inspect URDF samples for humanoid joints; visualize in RViz.

## Readiness Checklist
- [ ] ROS 2 workspace builds without errors.
- [ ] Basic pub/sub demo runs with expected message rates.
- [ ] Team can explain how sensor data flows into perception and control loops.

:::tip Author
**Najaf Ali** — founder of [najafai.com](https://najafai.com). Author of this textbook and curator of the Physical AI & Humanoid Robotics program.
:::
