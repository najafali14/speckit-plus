import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  bookSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module1/weeks1-2-introduction-to-physical-ai',
        'module1/weeks3-5-ros2-fundamentals',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'module2/weeks6-7-robot-simulation-with-gazebo',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'module3/weeks8-10-nvidia-isaac-platform',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'module4/weeks11-12-humanoid-robot-development',
        'module4/week13-conversational-robotics',
      ],
    },
    'assessments',
    'hardware-requirements',
  ],
};

export default sidebars;