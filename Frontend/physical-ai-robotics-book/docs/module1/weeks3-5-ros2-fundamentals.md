title: Weeks 3–5 · ROS 2 Fundamentals
sidebar_label: Weeks 3–5 · ROS 2 Fundamentals
---

Deep dive into ROS 2 as the robotic nervous system, focusing on humanoid-ready abstractions and tooling.

## Learning Goals
- Build ROS 2 nodes, topics, services, and actions for humanoid control loops.
- Manage parameters and launch files for multi-node bring-up.
- Describe humanoid kinematics via URDF and connect to controllers.
- Bridge Python agents to ROS controllers with `rclpy`.

## Topics
- **Nodes & Communication:** QoS profiles, message timing, and reliability choices for walking vs. manipulation.
- **Package Layout & Builds:** `colcon` workflows, workspace overlays, and dependency management.
- **URDF for Humanoids:** Joint limits, collision models, and sensor placement; validating with RViz/Gazebo.
- **Control Interfaces:** Commanding actuators, handling feedback loops, and safety stops.

## Hands-On
- Create a multi-node demo: sensor ingest → simple filter → actuator command.
- Author a URDF for a bipedal skeleton; visualize and test joint limits.
- Add launch files to orchestrate bring-up; tune QoS for stable message delivery.

## Readiness Checklist
- [ ] Nodes publish/subscribe at target rates without dropped messages.
- [ ] URDF renders correctly and passes collision checks.
- [ ] Launch files bring up the stack reliably with parameter overrides.

:::tip Author
**Najaf Ali** — founder of [najafai.com](https://najafai.com). Author of this textbook and curator of the Physical AI & Humanoid Robotics program.
:::
