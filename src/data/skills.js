import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from 'react-icons/fa'
import { SiVite, SiAxios, SiFramer } from 'react-icons/si'
import { TbRoute } from 'react-icons/tb'
import { MdOutlineDevices } from 'react-icons/md'
import { VscVscode } from 'react-icons/vsc'

export const skillCategories = ['All', 'Frontend', 'Libraries', 'Tools']

export const skills = [
  { id: 'html', name: 'HTML5', category: 'Frontend', level: 95, icon: FaHtml5 },
  { id: 'css', name: 'CSS3', category: 'Frontend', level: 92, icon: FaCss3Alt },
  { id: 'js', name: 'JavaScript (ES6+)', category: 'Frontend', level: 90, icon: FaJs },
  { id: 'react', name: 'React', category: 'Frontend', level: 90, icon: FaReact },
  { id: 'router', name: 'React Router', category: 'Frontend', level: 85, icon: TbRoute },
  { id: 'responsive', name: 'Responsive Design', category: 'Frontend', level: 90, icon: MdOutlineDevices },

  { id: 'axios', name: 'Axios', category: 'Libraries', level: 85, icon: SiAxios },
  { id: 'framer', name: 'Framer Motion', category: 'Libraries', level: 82, icon: SiFramer },
  { id: 'icons', name: 'React Icons', category: 'Libraries', level: 90, icon: FaReact },

  { id: 'git', name: 'Git', category: 'Tools', level: 85, icon: FaGitAlt },
  { id: 'github', name: 'GitHub', category: 'Tools', level: 85, icon: FaGithub },
  { id: 'vscode', name: 'VS Code', category: 'Tools', level: 92, icon: VscVscode },
  { id: 'vite', name: 'Vite', category: 'Tools', level: 88, icon: SiVite },
  { id: 'npm', name: 'npm', category: 'Tools', level: 88, icon: FaNpm },
]
