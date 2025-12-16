# Spec: Physical AI & Humanoid Robotics Course Textbook

## Project Overview
This specification details the creation of an AI-native technical textbook for a "Physical AI & Humanoid Robotics" course. The textbook will be built using Docusaurus, deployed to GitHub Pages, and will incorporate an integrated Retrieval-Augmented Generation (RAG) chatbot.

## Core Deliverables

### 1. AI/Spec-Driven Book Creation
*   **Technology Stack:** Docusaurus for static site generation (located in `Frontend/physical-ai-robotics-book`), deployed to GitHub Pages.
*   **Development Tools:** Spec-Kit Plus and Claude Code for content generation and project management.
*   **Content:** A comprehensive textbook for a course in Physical AI & Humanoid Robotics.

### 2. Integrated RAG Chatbot Development
*   **Embedding:** Chatbot must be embedded within the published book.
*   **Technology Stack:** OpenAI Agents/ChatKit SDKs, FastAPI (backend), Neon Serverless Postgres database, Qdrant Cloud Free Tier (vector database).
*   **Functionality:**
    *   Answer user questions about the book's content.
    *   Answer questions based *only* on text selected by the user.

## Bonus Point Opportunities (Optional Features)

### 3. Reusable Intelligence (Up to 50 extra points)
*   **Implementation:** Create and use reusable intelligence via Claude Code Subagents and Agent Skills within the book project.

### 4. Signup and Signin (Up to 50 extra points)
*   **Authentication System:** Implement Signup and Signin using Better-Auth (https://www.better-auth.com/).
*   **User Profiling:** During signup, ask users about their software and hardware background to enable personalized content.

### 5. Content Personalization (Up to 50 extra points)
*   **Functionality:** Logged-in users can personalize the content in chapters by pressing a button at the start of each chapter.
*   **Trigger:** Available after successful signup/signin.

### 6. Urdu Content Translation (Up to 50 extra points)
*   **Functionality:** Logged-in users can translate the content into Urdu in the chapters by pressing a button at the start of each chapter.
*   **Trigger:** Available after successful signup/signin.

## Timeline
*   **Submission Deadline:** Sunday, Nov 30, 2025 at 06:00 PM (form will close)
*   **Live Presentations:** Sunday, Nov 30, 2025 starting at 6:00 PM on Zoom

## Submission Requirements
*   Public GitHub Repo Link
*   Published Book Link for Github Pages or Vercel (includes Book, ChatKit, and any other component developed).
*   Demo video link (must be under 90 seconds).
*   WhatsApp number (for invitation to live presentations).

## Course Details: Physical AI & Humanoid Robotics

### Focus and Theme
AI Systems in the Physical World. Embodied Intelligence.
Goal: Bridging the gap between the digital brain and the physical body. Students apply their AI knowledge to control Humanoid Robots in simulated and real-world environments.

### Quarter Overview
This capstone quarter introduces Physical AI—AI systems that function in reality and comprehend physical laws. Students learn to design, simulate, and deploy humanoid robots capable of natural human interactions using ROS 2, Gazebo, and NVIDIA Isaac.

### Modules

#### Module 1: The Robotic Nervous System (ROS 2)
*   **Focus:** Middleware for robot control.
*   **Topics:** ROS 2 Nodes, Topics, and Services. Bridging Python Agents to ROS controllers using rclpy. Understanding URDF (Unified Robot Description Format) for humanoids.

#### Module 2: The Digital Twin (Gazebo & Unity)
*   **Focus:** Physics simulation and environment building.
*   **Topics:** Simulating physics, gravity, and collisions in Gazebo. High-fidelity rendering and human-robot interaction in Unity. Simulating sensors: LiDAR, Depth Cameras, and IMUs.

#### Module 3: The AI-Robot Brain (NVIDIA Isaac™)
*   **Focus:** Advanced perception and training.
*   **Topics:** NVIDIA Isaac Sim: Photorealistic simulation and synthetic data generation. Isaac ROS: Hardware-accelerated VSLAM (Visual SLAM) and navigation. Nav2: Path planning for bipedal humanoid movement.

#### Module 4: Vision-Language-Action (VLA)
*   **Focus:** The convergence of LLMs and Robotics.
*   **Topics:** Voice-to-Action: Using OpenAI Whisper for voice commands. Cognitive Planning: Using LLMs to translate natural language ("Clean the room") into a sequence of ROS 2 actions.
*   **Capstone Project:** The Autonomous Humanoid. A final project where a simulated robot receives a voice command, plans a path, navigates obstacles, identifies an object using computer vision, and manipulates it.

### Why Physical AI Matters
Humanoid robots are poised to excel in our human-centered world because they share our physical form and can be trained with abundant data from interacting in human environments. This represents a significant transition from AI models confined to digital environments to embodied intelligence that operates in physical space.

### Learning Outcomes
*   Understand Physical AI principles and embodied intelligence
*   Master ROS 2 (Robot Operating System) for robotic control
*   Simulate robots with Gazebo and Unity
*   Develop with NVIDIA Isaac AI robot platform
*   Design humanoid robots for natural interactions
*   Integrate GPT models for conversational robotics

### Weekly Breakdown
*   **Weeks 1-2: Introduction to Physical AI**
    *   Foundations of Physical AI and embodied intelligence
    *   From digital AI to robots that understand physical laws
    *   Overview of humanoid robotics landscape
    *   Sensor systems: LIDAR, cameras, IMUs, force/torque sensors
*   **Weeks 3-5: ROS 2 Fundamentals**
    *   ROS 2 architecture and core concepts
    *   Nodes, topics, services, and actions
    *   Building ROS 2 packages with Python
    *   Launch files and parameter management
*   **Weeks 6-7: Robot Simulation with Gazebo**
    *   Gazebo simulation environment setup
    *   URDF and SDF robot description formats
    *   Physics simulation and sensor simulation
    *   Introduction to Unity for robot visualization
*   **Weeks 8-10: NVIDIA Isaac Platform**
    *   NVIDIA Isaac SDK and Isaac Sim
    *   AI-powered perception and manipulation
    *   Reinforcement learning for robot control
    *   Sim-to-real transfer techniques
*   **Weeks 11-12: Humanoid Robot Development**
    *   Humanoid robot kinematics and dynamics
    *   Bipedal locomotion and balance control
    *   Manipulation and grasping with humanoid hands
    *   Natural human-robot interaction design
*   **Week 13: Conversational Robotics**
    *   Integrating GPT models for conversational AI in robots
    *   Speech recognition and natural language understanding
    *   Multi-modal interaction: speech, gesture, vision

### Assessments
*   ROS 2 package development project
*   Gazebo simulation implementation
*   Isaac-based perception pipeline
*   Capstone: Simulated humanoid robot with conversational AI

## Hardware Requirements

### General Considerations
This course is technically demanding, sitting at the intersection of Physics Simulation (Isaac Sim/Gazebo), Visual Perception (SLAM/Computer Vision), and Generative AI (LLMs/VLA). The primary investment must be in High-Performance Workstations for the "Simulated Humanoid" capstone, with Edge Computing Kits or specific robot hardware fulfilling the "Physical AI" promise.

### 1. The "Digital Twin" Workstation (Required per Student)
*   **GPU (The Bottleneck):** NVIDIA RTX 4070 Ti (12GB VRAM) or higher.
    *   **Reason:** High VRAM is needed to load USD assets for robot/environment and run VLA models.
    *   **Ideal:** RTX 3090 or 4090 (24GB VRAM) for smoother "Sim-to-Real" training.
*   **CPU:** Intel Core i7 (13th Gen+) or AMD Ryzen 9.
    *   **Reason:** Physics calculations (Rigid Body Dynamics) in Gazebo/Isaac are CPU-intensive.
*   **RAM:** 64 GB DDR5 (32 GB is the absolute minimum, but will crash during complex scene rendering).
*   **OS:** Ubuntu 22.04 LTS.
    *   **Note:** While Isaac Sim runs on Windows, ROS 2 (Humble/Iron) is native to Linux. Dual-booting or dedicated Linux machines are mandatory for a friction-free experience.

### 2. The "Physical AI" Edge Kit
*   **Purpose:** Covers Module 3 (Isaac ROS) and Module 4 (VLA).
*   **The Brain:** NVIDIA Jetson Orin Nano (8GB) or Orin NX (16GB).
    *   **Role:** Industry standard for embodied AI; students deploy ROS 2 nodes here to understand resource constraints.
*   **The Eyes (Vision):** Intel RealSense D435i or D455.
    *   **Role:** Provides RGB and Depth data, essential for VSLAM and Perception modules.
*   **The Inner Ear (Balance):** Generic USB IMU (BNO055).
    *   **Role:** Helps teach IMU calibration (often built into RealSense D435i or Jetson boards).
*   **Voice Interface:** A simple USB Microphone/Speaker array (e.g., ReSpeaker) for "Voice-to-Action" Whisper integration.

### 3. The Robot Lab (Optional, based on budget)
*   **Option A: The "Proxy" Approach (Recommended for Budget)**
    *   **Robot:** Unitree Go2 Edu (~$1,800 - $3,000).
    *   **Pros:** Highly durable, excellent ROS 2 support, affordable.
    *   **Cons:** Not a biped (humanoid).
*   **Option B: The "Miniature Humanoid" Approach**
    *   **Robot:** Unitree G1 (~$16k) or Robotis OP3 (~$12k). Budget alternative: Hiwonder TonyPi Pro (~$600).
    *   **Warning:** Cheap kits (Hiwonder) often use Raspberry Pi, which struggles with NVIDIA Isaac ROS. Use for kinematics, Jetson kits for AI.
*   **Option C: The "Premium" Lab (Sim-to-Real specific)**
    *   **Robot:** Unitree G1 Humanoid.
    *   **Reason:** One of few commercially available humanoids for dynamic walking with an open SDK for ROS 2 controllers.

### 4. Summary of Architecture
To teach this successfully, your lab infrastructure should look like this:

| Component   | Hardware                      | Function                                                       |
| :---------- | :---------------------------- | :------------------------------------------------------------- |
| Sim Rig     | PC with RTX 4080 + Ubuntu 22.04 | Runs Isaac Sim, Gazebo, Unity, and trains LLM/VLA models.      |
| Edge Brain  | Jetson Orin Nano              | Runs the "Inference" stack. Students deploy their code here.   |
| Sensors     | RealSense Camera + Lidar      | Connected to the Jetson to feed real-world data to the AI.     |
| Actuator    | Unitree Go2 or G1 (Shared)    | Receives motor commands from the Jetson.                       |

*   **Note:** Without RTX-enabled workstations, the course must rely entirely on cloud-based instances (e.g., AWS RoboMaker, NVIDIA's Omniverse Cloud), which introduces latency and cost complexity.

### 5. Architectural Decision: On-Premise Lab vs. Cloud-Native Lab
Building a "Physical AI" lab is a significant investment. The choice is between:
*   **Physical On-Premise Lab at Home (High CapEx)**
*   **Cloud-Native Lab (High OpEx)**

#### Option 2: The "Ether" Lab (Cloud-Native)
*   **Best for:** Rapid deployment, or students with weak laptops.
*   **1. Cloud Workstations (AWS/Azure)**
    *   **Instance Type:** AWS g5.2xlarge (A10G GPU, 24GB VRAM) or g6e.xlarge.
    *   **Software:** NVIDIA Isaac Sim on Omniverse Cloud (requires specific AMI).
    *   **Cost Calculation:** ~$205 per quarter per student (10 hours/week × 12 weeks @ $1.50/hour + $25 storage).
*   **2. Local "Bridge" Hardware**
    *   **Edge AI Kits:** Still needed for physical deployment phase. Cost: $700 (One-time purchase for Jetson Kit).
    *   **Robot:** One physical robot still needed for the final demo. Cost: $3,000 (Unitree Go2 Standard).
*   **3. The Latency Trap (Hidden Cost)**
    *   Controlling a real robot from a cloud instance is dangerous due to latency.
    *   **Solution:** Students train in the Cloud, download the model (weights), and flash it to the local Jetson kit.

#### The Economy Jetson Student Kit (Approx. $700 per kit)
*   **Best for:** Learning ROS 2, Basic Computer Vision, and Sim-to-Real control.
*   **Components:**
    *   **The Brain:** NVIDIA Jetson Orin Nano Super Dev Kit (8GB) - $249
    *   **The Eyes:** Intel RealSense D435i - $349 (includes IMU)
    *   **The Ears:** ReSpeaker USB Mic Array v2.0 - $69
    *   **Wi-Fi:** Included in Dev Kit
    *   **Power/Misc:** SD Card (128GB) + Jumper Wires - $30
*   **Total:** ~$700 per kit.
