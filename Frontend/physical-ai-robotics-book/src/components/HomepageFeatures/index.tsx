import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Embodied AI Stack',
    Svg: require('@site/static/img/feature-robotics.svg').default,
    description: (
      <>
        Build humanoid systems with ROS 2, Gazebo/Unity, and NVIDIA Isaac™ while
        respecting real-time, safety, and physics constraints.
      </>
    ),
  },
  {
    title: 'Grounded AI Assistance',
    Svg: require('@site/static/img/feature-chatbot.svg').default,
    description: (
      <>
        An in-book RAG chatbot (OpenAI Agents/ChatKit + Qdrant + Neon) answers
        questions with citations to the textbook or user-selected text.
      </>
    ),
  },
  {
    title: 'Hands-On Capstone',
    Svg: require('@site/static/img/feature-capstone.svg').default,
    description: (
      <>
        Ship the Autonomous Humanoid: voice-to-action commands, navigation,
        perception, and manipulation with safety stops and demo runbooks.
      </>
    ),
  },
  {
    title: 'Lab-Ready Delivery',
    Svg: require('@site/static/img/feature-lab.svg').default,
    description: (
      <>
        Hardware guidance for workstations, Jetson edge kits, and robot options,
        plus on-prem and cloud-native lab patterns with safety checklists.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
