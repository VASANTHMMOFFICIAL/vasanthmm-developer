import { FaCode, FaMobileAlt, FaReact, FaPaintBrush } from 'react-icons/fa'

export const services = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description:
      'End-to-end frontend builds — from component architecture to deployment — with clean, maintainable code.',
    icon: FaCode,
  },
  {
    id: 'responsive-websites',
    title: 'Responsive Websites',
    description:
      'Layouts that adapt smoothly across mobile, tablet, and desktop without sacrificing design intent.',
    icon: FaMobileAlt,
  },
  {
    id: 'react-development',
    title: 'React Development',
    description:
      'Scalable React applications built with hooks, context, and a component structure that stays easy to extend.',
    icon: FaReact,
  },
  {
    id: 'ui-development',
    title: 'UI Development',
    description:
      'Pixel-conscious interfaces with thoughtful motion, spacing, and typography that feel premium to use.',
    icon: FaPaintBrush,
  },
]

export const achievements = [
  { id: 'projects', label: 'Projects Delivered', value: 6 },
  { id: 'experience', label: 'Years of Experience', value: 2 },
  { id: 'technologies', label: 'Technologies Used', value: 12 },
  { id: 'commits', label: 'GitHub Contributions', value: 800 },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Priya Raghunathan',
    role: 'Product Manager, TechNova',
    quote:
      'Vasanth turned our vague requirements into a polished, working UI faster than we expected, and communicated clearly the whole way through.',
  },
  {
    id: 't2',
    name: 'Arjun Kumar',
    role: 'Engineering Lead, Bright Bench',
    quote:
      'Solid grasp of React fundamentals and a real eye for detail. The dashboard he built is still our reference for how components should be structured.',
  },
  {
    id: 't3',
    name: 'Meera Suresh',
    role: 'Founder, Loop Studio',
    quote:
      'Reliable, responsive, and easy to collaborate with. He caught edge cases in the design before we even noticed them ourselves.',
  },
]

export const experience = [
  {
    id: 'exp1',
    role: 'Frontend Developer',
    company: 'Bright Bench Technologies',
    period: '2024 — Present',
    points: [
      'Built and maintained reusable React component libraries used across three product teams.',
      'Improved page load performance through code-splitting and lazy loading.',
      'Collaborated with designers to translate Figma files into pixel-accurate, responsive UI.',
    ],
  },
  {
    id: 'exp2',
    role: 'Frontend Developer (Associate)',
    company: 'Loop Studio',
    period: '2023 — 2024',
    points: [
      'Developed admin dashboards and customer-facing UIs with React and REST APIs.',
      'Implemented form validation and EmailJS-based contact flows for client sites.',
      'Worked in an agile team, shipping features on a two-week release cycle.',
    ],
  },
]
