---
id: hardware-requirements
title: Hardware Requirements & Lab Setup
sidebar_label: Hardware Requirements
---

The course spans heavy simulation, perception, and embodied control. Choose the lab model that fits your budget and latency needs.

## Workstation for the Digital Twin (per student)
- **GPU:** NVIDIA RTX 4070 Ti (12GB VRAM) minimum; RTX 3090/4090 (24GB) ideal for Isaac Sim and VLA models.
- **CPU:** Intel i7 13th Gen+ or AMD Ryzen 9 for physics workloads.
- **RAM:** 64 GB DDR5 recommended (32 GB is the bare minimum).
- **OS:** Ubuntu 22.04 LTS for best ROS 2/Isaac compatibility.

## Edge Kit for Physical AI
- **Compute:** NVIDIA Jetson Orin Nano (8GB) or Orin NX (16GB).
- **Vision:** Intel RealSense D435i/D455 for RGB-D + IMU.
- **Balance:** USB IMU (e.g., BNO055) if not using the RealSense IMU.
- **Audio:** USB mic/speaker array (ReSpeaker) for Whisper voice intake.

## Robot Lab Options
- **Proxy Quadruped (Budget-Friendly):** Unitree Go2 Edu — durable, strong ROS 2 support.
- **Miniature Humanoid:** Unitree G1 or Robotis OP3; budget option Hiwonder TonyPi Pro (limited compute).
- **Premium Lab:** Unitree G1 Humanoid for dynamic walking and open SDK access.

## Lab Architectures
- **On-Premise Lab (Low Latency, Higher CapEx):** Local high-end workstation runs Gazebo/Isaac; Jetson handles edge inference; robot receives commands over a local network.
- **Cloud-Native Lab (Lower CapEx, Higher OpEx):** Cloud workstations (e.g., AWS g5.2xlarge) run Isaac Sim/Omniverse; Jetson remains local for deployment; one shared robot for final demos. Mitigate latency by training in cloud and flashing models locally.

## Economy Jetson Student Kit (~$700)
- **Kit Contents:** Jetson Orin Nano Dev Kit (8GB), RealSense D435i, ReSpeaker USB Mic Array, SD card + cabling.
- **Use Cases:** ROS 2 fundamentals, basic computer vision, and sim-to-real control exercises.

## Quick Setup Checklist
- [ ] Ubuntu 22.04 installed with GPU drivers and CUDA per NVIDIA docs.
- [ ] ROS 2 distro installed; `ros2 doctor` passes.
- [ ] Jetson image prepared; SSH access verified.
- [ ] Sensors connected and streaming; timestamps synchronized.
- [ ] Safety plan: physical e-stop or software stop for any robot sessions.

:::tip Author
**Najaf Ali** — founder of [najafai.com](https://najafai.com). Author of this textbook and curator of the Physical AI & Humanoid Robotics program.
:::
