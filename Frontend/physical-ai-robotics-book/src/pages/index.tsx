import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Chatbot from "@site/src/components/Chatbot";

import styles from './index.module.css';

const stats = [
  {label: 'Modules', value: '4', detail: 'ROS 2 · Gazebo/Unity · Isaac™ · VLA'},
  {label: 'Capstone', value: 'Autonomous Humanoid', detail: 'Voice → Plan → Navigate → Manipulate'},
  {label: 'Platform', value: 'Docusaurus + RAG', detail: 'OpenAI Agents · Qdrant · Neon · FastAPI'},
];

const moduleCards = [
  {
    title: 'Module 1 · ROS 2 Nervous System',
    text: 'Nodes, topics, services, and URDF for humanoid-ready control loops.',
    link: '/docs/module1/weeks3-5-ros2-fundamentals',
  },
  {
    title: 'Module 2 · Digital Twin',
    text: 'Gazebo physics, Unity visuals, and sensor simulation for safe iteration.',
    link: '/docs/module2/weeks6-7-robot-simulation-with-gazebo',
  },
  {
    title: 'Module 3 · NVIDIA Isaac™ Brain',
    text: 'Photorealistic scenes, VSLAM, Nav2 planning, and sim-to-real export.',
    link: '/docs/module3/weeks8-10-nvidia-isaac-platform',
  },
  {
    title: 'Module 4 · VLA & Capstone',
    text: 'Whisper voice intake, LLM planners, and grounded answers via RAG.',
    link: '/docs/module4/week13-conversational-robotics',
  },
];

function Hero(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div>
            <Heading as="h1" className={styles.heroTitle}>
              Physical AI & Humanoid Robotics
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.heroChips}>
              <span>ROS 2</span>
              <span>Gazebo & Unity</span>
              <span>NVIDIA Isaac™</span>
              <span>Vision-Language-Action</span>
            </div>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/introduction">
                Start Reading
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/hardware-requirements">
                Hardware Setup
              </Link>
            </div>
            <div className={styles.statGrid}>
              {stats.map(stat => (
                <div key={stat.label} className={styles.statCard}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                  <p className={styles.statDetail}>{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroBadge}>
            <img src={useBaseUrl('/img/feature-robotics.svg')} alt="Humanoid robotics illustration" />
            <div className={styles.heroBadgeText}>
              <p>AI-Native Textbook</p>
              <p>Najaf Ali · Founder of najafai.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ModuleStrip(): ReactNode {
  return (
    <section className={styles.moduleStrip}>
      <div className="container">
        <div className={styles.stripHeader}>
          <Heading as="h2">What you will build</Heading>
          <p>
            A full-stack robotics experience—from ROS 2 control to cloud-grounded
            RAG assistance—culminating in an autonomous humanoid capstone.
          </p>
        </div>
        <div className={styles.moduleGrid}>
          {moduleCards.map(card => (
            <Link key={card.title} to={card.link} className={styles.moduleCard}>
              <p className={styles.moduleTitle}>{card.title}</p>
              <p className={styles.moduleText}>{card.text}</p>
              <span className={styles.moduleCta}>Open module →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorSpotlight(): ReactNode {
  return (
    <section className={styles.authorSection}>
      <div className="container">
        <div className={styles.authorCard}>
          <img src={useBaseUrl('/img/author-najaf-ali.svg')} alt="Portrait illustration of Najaf Ali" />
          <div>
            <p className={styles.authorLabel}>Author</p>
            <p className={styles.authorName}>Najaf Ali</p>
            <p className={styles.authorTitle}>Founder of najafai.com · Robotics educator</p>
            <p className={styles.authorText}>
              Najaf shapes AI-native learning experiences that connect simulation,
              perception, and embodied control. This book pairs narrative guidance
              with actionable labs so teams can ship safer humanoid systems.
            </p>
            <div className={styles.authorLinks}>
              <Link to="/docs/assessments">View assessments</Link>
              <Link to="/docs/hardware-requirements">Hardware guide</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Course"
      description="AI-native textbook with ROS 2, Gazebo, Unity, NVIDIA Isaac™, and Vision-Language-Action capstone.">
      <Hero />
      <main>
        <HomepageFeatures />
        <ModuleStrip />
        <AuthorSpotlight />
        <Chatbot />

      </main>
    </Layout>
  );
}
