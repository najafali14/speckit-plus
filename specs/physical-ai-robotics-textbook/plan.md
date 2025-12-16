# Plan: Physical AI & Humanoid Robotics Course Textbook

## 1. Scope and Dependencies

### In Scope:
*   Creation of a Docusaurus-based textbook for Physical AI & Humanoid Robotics, deployed to GitHub Pages.
*   Integration of a RAG chatbot using OpenAI Agents/ChatKit, FastAPI, Neon Postgres, and Qdrant Cloud.
*   Implementation of bonus features: reusable intelligence (Subagents/Agent Skills), user authentication (Better-Auth), content personalization, and Urdu translation.
*   Detailed content covering ROS 2, Gazebo & Unity, NVIDIA Isaac™, and Vision-Language-Action (VLA).

### Out of Scope:
*   Development of actual humanoid robot hardware.
*   Deep research into novel AI algorithms beyond their application in robotics.
*   Management of student-specific cloud instances (this plan outlines options but does not detail ongoing management).

### External Dependencies:
*   **Technologies:** Docusaurus, GitHub Pages, OpenAI Agents/ChatKit SDKs, FastAPI, Neon Serverless Postgres, Qdrant Cloud Free Tier, Claude Code, Better-Auth, OpenAI Whisper.
*   **Hardware (for Physical Lab option):** NVIDIA RTX GPUs, Intel/AMD CPUs, NVIDIA Jetson Orin Nano/NX, Intel RealSense D435i/D455, USB IMU, ReSpeaker USB Mic Array, Unitree Go2 Edu/G1/Robotis OP3/Hiwonder TonyPi Pro.
*   **Cloud Services (for Cloud-Native Lab option):** AWS/Azure cloud instances (e.g., AWS g5.2xlarge), NVIDIA Omniverse Cloud.

## 2. Key Decisions and Rationale

### Architectural Decision: Lab Infrastructure (On-Premise vs. Cloud-Native)
*   **Options Considered:**
    1.  **On-Premise Lab:** Each student requires a high-performance workstation with NVIDIA RTX GPU, ample RAM, and Ubuntu 22.04. This provides a low-latency environment for simulation and real-robot control.
    2.  **Cloud-Native Lab:** Utilize cloud workstations (AWS/Azure) for simulation and training, with local edge hardware (Jetson Kit) for physical deployment and a shared physical robot for final demos. This reduces CapEx but increases OpEx and introduces latency challenges for real-time control.
*   **Trade-offs:**
    *   **On-Premise:** High initial capital expenditure, high performance, low latency, complex maintenance.
    *   **Cloud-Native:** Low initial capital expenditure, high operational expenditure, potential latency issues for real-robot control, easier scalability for workstations.
*   **Rationale:** Given the high computational demands (Physics Simulation, Visual Perception, Generative AI) and the emphasis on "Physical AI," the choice of lab infrastructure is critical. The decision impacts cost, accessibility, performance, and the fidelity of the "Sim-to-Real" transfer experience. **Recommendation: Suggest both options, with a preference for a hybrid approach where training is done in the cloud and deployment to local edge devices.**

### Content Creation Strategy:
*   **Approach:** Leverage Spec-Kit Plus for defining the book structure and content requirements, and Claude Code for generating draft content based on the course modules and learning outcomes.
*   **Rationale:** This aligns with the "AI/Spec-Driven Book Creation" mandate and aims to accelerate content development.

### RAG Chatbot Implementation:
*   **Approach:** Implement FastAPI as a backend service for the chatbot, connecting to Neon Serverless Postgres for metadata and Qdrant Cloud for vector embeddings of the book content. OpenAI Agents/ChatKit SDKs will be used for the chatbot logic.
*   **Rationale:** This stack provides a robust, scalable, and cost-effective solution for a RAG system.

## 3. Interfaces and API Contracts

### RAG Chatbot API:
*   **Endpoint:** `/chat` (POST)
*   **Inputs:**
    *   `query: str` (User's question)
    *   `selected_text: Optional[str]` (Text selected by the user for context-aware questioning)
*   **Outputs:**
    *   `answer: str` (Chatbot's response)
    *   `sources: List[str]` (References to book sections used for the answer)
*   **Errors:** Standard HTTP error codes (e.g., 400 for bad request, 500 for internal server error).

### User Authentication API (Better-Auth integration):
*   **Endpoints:** `/signup`, `/signin` (POST)
*   **Inputs:** User credentials, software/hardware background questions for signup.
*   **Outputs:** Auth tokens, user profile data.

### Content Personalization/Translation API:
*   **Endpoints:** `/personalize`, `/translate` (POST)
*   **Inputs:** `chapter_id: str`, `user_profile: Dict`, `language: Optional[str]` (for translation)
*   **Outputs:** Personalized/translated chapter content.

## 4. Non-Functional Requirements (NFRs) and Budgets

### Performance:
*   **Textbook Loading:** Sub-2 second load time for main pages.
*   **Chatbot Response:** P95 latency of <3 seconds for chatbot responses.
*   **Content Personalization/Translation:** Real-time (sub-1 second) processing per chapter.

### Reliability:
*   **Textbook Uptime:** 99.9% availability for the GitHub Pages deployment.
*   **Chatbot Uptime:** 99% availability for the FastAPI service.
*   **Error Budget:** 1% for API errors.

### Security:
*   **Authentication:** Secure user authentication via Better-Auth, protecting user data.
*   **Data Handling:** Secure handling of user background data; no sensitive information logged.
*   **API Security:** Implement API key protection for chatbot and other backend services.

### Cost:
*   **Cloud-Native Lab:** ~$205 per quarter per student for cloud workstations (excluding local bridge hardware and shared robot).
*   **Economy Jetson Student Kit:** ~$700 per kit (one-time cost).

## 5. Data Management and Migration

### Book Content:
*   **Source of Truth:** Markdown files within the Docusaurus project.
*   **Schema Evolution:** Docusaurus manages content structure; changes handled via standard Git workflow.

### Chatbot Data:
*   **Text Embeddings:** Stored in Qdrant Cloud.
*   **Metadata/User Data:** Stored in Neon Serverless Postgres.
*   **Schema Evolution:** Managed via database migrations for Neon Postgres.

## 6. Operational Readiness

### Observability:
*   **Logging:** Structured logging for FastAPI service (e.g., using `structlog`).
*   **Metrics:** Monitor API latency, error rates, and resource utilization for chatbot service.
*   **Traces:** Distributed tracing for complex RAG chatbot interactions (e.g., using OpenTelemetry).

### Alerting:
*   Thresholds for API error rates, service downtime, and resource exhaustion.
*   On-call owner for the chatbot backend service.

### Deployment and Rollback:
*   **Textbook:** GitHub Pages for Docusaurus deployment; Git for version control and rollback.
*   **Chatbot:** Containerized deployment (Docker) to a cloud platform (e.g., Render, Fly.io, or AWS Fargate); Git for version control and rollback.

### Feature Flags:
*   Consider feature flags for bonus functionalities (personalization, translation) to enable staged rollout and A/B testing.

## 7. Risk Analysis and Mitigation

*   **Risk 1: High Hardware Cost (On-Premise Lab):** Mitigation: Offer cloud-native lab option or the Economy Jetson Student Kit as alternatives.
*   **Risk 2: Cloud Latency for Real Robot Control:** Mitigation: Implement a training-in-cloud, deploy-to-local-edge model for robot control. Optimize model size for edge deployment.
*   **Risk 3: Complexity of Integrating Multiple AI Services:** Mitigation: Modularize the chatbot architecture, use established SDKs, and conduct thorough integration testing.

## 8. Evaluation and Validation

*   **Definition of Done:** All core deliverables implemented, tested, and deployed. Bonus features, if implemented, are also verified.
*   **Output Validation:** Verify Docusaurus build, chatbot API responses, and authentication flows.

## 9. Architectural Decision Record (ADR)
*   **Significant Decision:** Lab Infrastructure (On-Premise vs. Cloud-Native). An ADR will be proposed to document the detailed reasoning and trade-offs.
