import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaBootstrap, FaPython, FaFilePdf, FaDatabase, FaTable } from 'react-icons/fa'
import { SiJquery, SiNextdotjs, SiTailwindcss, SiRedux, SiReacthookform, SiAxios, SiVite, SiPostgresql } from 'react-icons/si'
import { TbRoute } from 'react-icons/tb'
import { FiGlobe, FiLayers, FiBox, FiMonitor, FiZap } from 'react-icons/fi'
import { SiTypescript } from "react-icons/si";
export const skillCategories = [
  // 'All',
  'Frontend',
  'Frameworks',
  'API & Networking',
  'Build Tools',
  'Backend',
  'Databases',
  'Tools & Version Control',
  'Concepts',
]

export const skills = [
  // Frontend
  { id: 'html', name: 'HTML5', category: 'Frontend', level: 95, icon: FaHtml5, color: '#E34F26' },
  { id: 'css', name: 'CSS3', category: 'Frontend', level: 92, icon: FaCss3Alt, color: '#1572B6' },
  { id: 'js', name: 'JavaScript (ES6+)', category: 'Frontend', level: 92, icon: FaJs, color: '#F7DF1E' },
  { id: 'jquery', name: 'jQuery', category: 'Frontend', level: 85, icon: SiJquery, color: '#0769AD' },
  { id: 'react', name: 'React.js', category: 'Frontend', level: 92, icon: FaReact, color: '#61DAFB' },

  // Frameworks
  { id: 'typescript', name: 'TypeScript', category: 'Frameworks', level: 80, icon: SiTypescript, color: '#3178C6' },
  // { id: 'nextjs', name: 'Next.js', category: 'Frameworks', level: 78, icon: SiNextdotjs, color: '#EDEDED' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frameworks', level: 85, icon: SiTailwindcss, color: '#38BDF8' },
  { id: 'bootstrap5', name: 'Bootstrap 5', category: 'Frameworks', level: 88, icon: FaBootstrap, color: '#7952B3' },
  { id: 'react-bootstrap', name: 'React Bootstrap', category: 'Frameworks', level: 82, icon: FaBootstrap, color: '#8A63D2' },
  { id: 'redux-toolkit', name: 'Redux Toolkit', category: 'Frameworks', level: 78, icon: SiRedux, color: '#764ABC' },
  { id: 'router', name: 'React Router', category: 'Frameworks', level: 85, icon: TbRoute, color: '#CA4245' },
  { id: 'react-hook-form', name: 'React Hook Form', category: 'Frameworks', level: 80, icon: SiReacthookform, color: '#EC5990' },

  // API & Networking
  { id: 'axios', name: 'Axios', category: 'API & Networking', level: 88, icon: SiAxios, color: '#5A29E4' },
  { id: 'rest-api', name: 'REST API Integration', category: 'API & Networking', level: 88, icon: FiGlobe, color: '#38BDF8' },

  // Build Tools
  { id: 'vite', name: 'Vite', category: 'Build Tools', level: 88, icon: SiVite, color: '#646CFF' },

  // Backend
  { id: 'python', name: 'Python', category: 'Backend', level: 70, icon: FaPython, color: '#3776AB' },

  // Databases
  { id: 'sql', name: 'SQL', category: 'Databases', level: 75, icon: FaDatabase, color: '#4479A1' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Databases', level: 72, icon: SiPostgresql, color: '#4169E1' },

  // Tools & Version Control
  { id: 'git', name: 'Git', category: 'Tools & Version Control', level: 88, icon: FaGitAlt, color: '#F05032' },
  { id: 'github', name: 'GitHub', category: 'Tools & Version Control', level: 88, icon: FaGithub, color: '#E2E8F0' },
  { id: 'datatables', name: 'DataTables', category: 'Tools & Version Control', level: 82, icon: FaTable, color: '#2DD4BF' },
  { id: 'fpdf', name: 'FPDF', category: 'Tools & Version Control', level: 68, icon: FaFilePdf, color: '#EF4444' },

  // Concepts
  { id: 'responsive-design', name: 'Responsive Web Design', category: 'Concepts', level: 92, icon: FiMonitor, color: '#38BDF8' },
  { id: 'component-architecture', name: 'Component-Based Architecture', category: 'Concepts', level: 90, icon: FiLayers, color: '#7C3AED' },
  { id: 'state-management', name: 'State Management', category: 'Concepts', level: 85, icon: FiBox, color: '#2563EB' },
  { id: 'cross-browser', name: 'Cross-Browser Compatibility', category: 'Concepts', level: 85, icon: FiGlobe, color: '#22C55E' },
  { id: 'performance', name: 'Performance Optimization', category: 'Concepts', level: 85, icon: FiZap, color: '#FBBF24' },
]
