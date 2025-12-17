# backend/main.py
from fastapi import FastAPI, HTTPException # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from pydantic import BaseModel # type: ignore
from agents import Agent, Runner, set_default_openai_key
import os


# Initialize FastAPI app
app = FastAPI(title="NajafAI Physical AI Chatbot Backend")

# Allow CORS from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for request body
class ChatRequest(BaseModel):
    prompt: str

# Initialize oepnai key
openai_key = os.getenv("OPENAI_KEY")
set_default_openai_key(openai_key)

#  book data
book_data = """
# **Physical AI & Humanoid Robotics — Textbook Outline**
## **Introduction**
* **Focus:** AI Systems in the Physical World — Embodied Intelligence.
* **Goal:** Bridge the gap between digital intelligence and physical robotics. Students apply AI
knowledge to control humanoid robots in simulation and real-world environments.
* **Why It Matters:** Humanoid robots share human form, making them ideal for tasks in human
environments. Embodied intelligence moves AI from digital-only to physical-world applications.
---
## **Quarter Overview**
* **Theme:** Physical AI — AI systems that function in reality and understand physical laws.
* **Skills Learned:** Design, simulate, and deploy humanoid robots capable of natural human
interactions.
* **Tools:** ROS 2, Gazebo, NVIDIA Isaac Sim, Unity, GPT models.
---
## **Module 1: The Robotic Nervous System (ROS 2)**
**Focus:** Middleware for robot control.
**Key Concepts:**
* ROS 2 architecture: Nodes, Topics, Services.
* Python integration via `rclpy`.
* URDF (Unified Robot Description Format) for humanoids.
* ROS 2 package development and launch file management.
---
## **Module 2: The Digital Twin (Gazebo & Unity)**
**Focus:** Physics simulation and environment modeling.
**Key Concepts:**
* Simulate , gravity, and collisions in Gazebo.
* High-fidelity rendering and human-robot interaction in Unity.
* Sensors: LiDAR, Depth Cameras, IMUs.
* Build digital twins of humanoid robots for testing and experimentation.
---
## **Module 3: The AI-Robot Brain (NVIDIA Isaac)**
**Focus:** Advanced perception and training.
**Key Concepts:**
* NVIDIA Isaac Sim for photorealistic simulations and synthetic data generation.
* Isaac ROS for hardware-accelerated VSLAM and navigation.
* Nav2 for bipedal path planning.
* Reinforcement learning for robotic control.
* Sim-to-Real transfer techniques.
---
## **Module 4: Vision-Language-Action (VLA)**
**Focus:** Converging LLMs and Robotics.
**Key Concepts:**
* Voice-to-Action: OpenAI Whisper integration.
* Cognitive Planning: Translate natural language commands to ROS 2 action sequences.
* Multi-modal interaction: voice, gesture, vision.
* Capstone: Autonomous humanoid performing complex tasks via natural language input.
---
## **Learning Outcomes**
Students will be able to:
* Understand Physical AI and embodied intelligence.
* Master ROS 2 for robotic control.
* Simulate humanoid robots with Gazebo and Unity.
* Develop AI-powered humanoid robots using NVIDIA Isaac.
* Integrate GPT/LLM models for conversational robotics.
* Build humanoid robots capable of natural interactions.
---
## **Weekly Breakdown**
| Weeks | Topics |
| ----- | ----------------------------------------------------------------------------------------------- |
| 1–2 | Introduction to Physical AI; sensor systems (LiDAR, cameras, IMUs, force sensors). |
| 3–5 | ROS 2 Fundamentals: Nodes, topics, services, actions, Python packages, launch files. |
| 6–7 | Robot Simulation with Gazebo & Unity: URDF/SDF, physics and sensor simulation, visualization. |
| 8–10 | NVIDIA Isaac Platform: Isaac Sim, AI perception pipelines, reinforcement learning, Sim-to-Real. |
| 11–12 | Humanoid Robot Development: Kinematics, dynamics, locomotion, balance, manipulation. |
| 13 | Conversational Robotics: GPT integration, speech recognition, multimodal interaction. |
---
## **Capstone Project**
**Goal:** Autonomous humanoid robot
**Tasks:**
* Receive voice commands.
* Plan and navigate paths.
* Identify objects using computer vision.
* Manipulate objects based on tasks.
* Demonstrate human-like interactions.
---
## **Hardware Requirements**
### 1. Digital Twin Workstation
* GPU: NVIDIA RTX 4070 Ti+ (ideally 3090/4090 for smoother Sim-to-Real)
* CPU: Intel i7 13th Gen+ or AMD Ryzen 9
* RAM: 64 GB DDR5
* OS: Ubuntu 22.04 LTS
### 2. Physical AI Edge Kit
* Brain: NVIDIA Jetson Orin Nano/NX
* Eyes: Intel RealSense D435i/D455
* Balance: USB IMU (BNO055)
* Voice: USB Microphone/Speaker (ReSpeaker)
### 3. Robot Lab Options
**Option A: Proxy (Budget)** — Quadruped or robotic arm (Unitree Go2 Edu)
**Option B: Mini Humanoid** — Small table-top humanoids (Hiwonder TonyPi Pro, Unitree G1, Robotis OP3)
**Option C: Premium Lab** — Full-scale humanoids with ROS 2 control (Unitree G1)
### 4. Cloud Alternative
* AWS RoboMaker or NVIDIA Omniverse Cloud instances for simulation.
* Edge kits still required for deployment.
---
## **Key Concepts & Principles**
* **Embodied Intelligence:** AI coupled with physical body to interact with real-world environments.
* **ROS 2:** Middleware for robot control; modular architecture for distributed control.
* **Digital Twin:** Simulation of robot and environment for safe experimentation.
* **VLA (Vision-Language-Action):** Integration of LLMs with robotics for task execution.
* **Sim-to-Real Transfer:** Train models in simulation before deploying to real robots.
---
## **Assessments**
* ROS 2 package development
* Gazebo simulation implementation
* Isaac-based perception pipelines
* Capstone project: Autonomous humanoid robot
---
## **Suggested Textbook Structure**
1. Introduction to Physical AI
2. ROS 2 and Robotic Nervous System
3. Digital Twin Simulation with Gazebo & Unity
4. AI-Robot Brain with NVIDIA Isaac
5. Vision-Language-Action Integration
6. Capstone Project: Autonomous Humanoid
7. Appendices: Hardware setup, cloud resources, sensor reference, ROS 2 guides
"""

@app.post("/chat")
async def chat(request: ChatRequest):
    
    print("Received prompt:", request.prompt)
    book_agent = Agent(
    name="Physical AI & Humanoid Robotics assistant",
    instructions= f"""
    You are an intelligent Physical AI & Humanoid Robotics assistant.

You are given a text data of  book as a reference source.

BEHAVIOR RULES:

1. If the user's message is basic conversation (greetings, introductions, small talk),
   respond normally and naturally.
   Examples: "hello", "hi", "how are you", "what is your name", "who are you".

2. If the user's question is informational or academic:
   a) Answer ONLY if the answer is present in the book data.
   b) Use ONLY the information from the book data.
   c) Keep the answer descriptive SHORT and clear.
   d) Do NOT add explanations, examples, or extra details.

3. If the informational answer is NOT found in the book data,
   respond with exactly:
   "This information is not available in the provided book."

4. Do NOT mention the PDF, document, pages, or sources in your response.
follow book data as reference source, find user question answer from reference source
book data:
{book_data}
    """
    ,
    model="gpt-5-nano",

)
    result = await Runner.run(book_agent, request.prompt)

    final_response = str(result.final_output)
    print(final_response)

    return {"response": final_response}

