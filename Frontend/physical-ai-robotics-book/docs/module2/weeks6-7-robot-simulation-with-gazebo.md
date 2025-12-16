title: Weeks 6–7 · Robot Simulation with Gazebo & Unity
sidebar_label: Weeks 6–7 · Gazebo & Unity
---

Build the digital twin to de-risk physical experiments and iterate quickly on locomotion and manipulation.

## Learning Goals
- Stand up Gazebo for physics-accurate simulation of humanoid motion.
- Use Unity for high-fidelity rendering and human-robot interaction demos.
- Simulate and instrument sensors: LiDAR, depth cameras, and IMUs.
- Understand physics parameters (gravity, collisions, contact dynamics) that affect gait stability.

## Topics
- **Gazebo Setup:** World files, plugins, and physics engines; tuning for biped balance.
- **Unity as a Visual Twin:** Rendering pipelines, input devices, and interaction staging.
- **Sensor Simulation:** Noise models, frame transforms, and time synchronization with ROS 2.
- **Collision & Contact:** Foot contact modeling, friction, and fall detection strategies.

## Hands-On
- Launch a humanoid URDF in Gazebo; validate center of mass and joint ranges.
- Add depth camera and LiDAR sensors; stream data into ROS 2 topics and visualize in RViz.
- Prototype a Unity scene for demo videos; mirror ROS 2 state for animation cues.

## Readiness Checklist
- [ ] Gazebo world runs at real-time factor ~1.0 with stable frames.
- [ ] Sensor topics stream expected data; timestamps align with ROS 2 clock.
- [ ] Unity scene can ingest robot state and render interaction scenarios.

:::tip Author
**Najaf Ali** — founder of [najafai.com](https://najafai.com). Author of this textbook and curator of the Physical AI & Humanoid Robotics program.
:::
