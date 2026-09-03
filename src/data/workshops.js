import intelliSourcePhoto1 from '../assets/images/events/intellisource-workshop-2025/photo-1.jpeg';
import intelliSourcePhoto2 from '../assets/images/events/intellisource-workshop-2025/photo-2.jpeg';
import intelliSourcePhoto3 from '../assets/images/events/intellisource-workshop-2025/photo-3.jpeg';

import promptEngineeringPhoto1 from '../assets/images/events/prompt-engineering-workshop/photo-1.jpeg';
import promptEngineeringPhoto3 from '../assets/images/events/prompt-engineering-workshop/photo-3.jpeg';
import promptEngineeringPhoto4 from '../assets/images/events/prompt-engineering-workshop/photo-4.jpeg';

import aiCyberSecurityPhoto1 from '../assets/images/events/ai-in-cyber-security/photo-1.jpeg';
import aiCyberSecurityPhoto2 from '../assets/images/events/ai-in-cyber-security/photo-2.jpeg';
import aiCyberSecurityPhoto3 from '../assets/images/events/ai-in-cyber-security/photo-3.jpeg';

export const WORKSHOPS = [
  {
    slug: 'intellisource-workshop-2025',
    category: 'Workshops',
    title: 'IntelliSource Workshop 2025 with RedHat',
    meta: 'Industry Connect',
    date: 'Nov 14, 2025',
    description:
      'A joint session with the CyberSmart Club and RedHat experts, covering open-source technologies, enterprise Linux, and cloud-native development through live demos and hands-on technical challenges. Closed with a valedictory session and prizes for top performers.',
    photos: [
      intelliSourcePhoto1,
      intelliSourcePhoto2,
      intelliSourcePhoto3,
    ],
  },
  {
    slug: 'prompt-engineering-workshop',
    category: 'Workshops',
    title: 'Prompt Engineering Workshop',
    meta: 'Workshop',
    date: 'Dec 18',
    description:
      'A hands-on workshop on prompt engineering led by Thanish C, focused on how to write clearer, more effective prompts to get consistently better output from AI tools — covering practical techniques members could apply immediately in their own work.',
    photos: [
      promptEngineeringPhoto1,
      promptEngineeringPhoto3,
      promptEngineeringPhoto4,
    ],
  },
  {
    slug: 'ai-in-cyber-security',
    category: 'Workshops',
    title: 'AI in Cyber Security: Defending the Digital Frontier',
    meta: 'Workshop',
    date: 'April 29, 2025',
    description:
      'A session by Rashtra Shourya, Lead InfoSec and BISO at GIT, in association with ISAC, on how AI is transforming cybersecurity through real-time threat detection and machine-learning-driven anomaly detection. Covered real-world case studies on AI-driven threat mitigation and wrapped up with an interactive quiz for the 100+ students who attended.',
    photos: [
      aiCyberSecurityPhoto1,
      aiCyberSecurityPhoto2,
      aiCyberSecurityPhoto3,
    ],
  },
];