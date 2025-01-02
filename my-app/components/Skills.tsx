'use client'

import { Code, PenToolIcon, Terminal, type LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

// Define the Skill type
type Skill = {
  name: string
  level: number // Percentage (0-100)
}

// Define the SkillCategory type using LucideIcon
type SkillCategory = {
  category: string
  icon: LucideIcon
  color: string
  items: Skill[]
}

const skills: SkillCategory[] = [
  {
    category: "Lenguajes",
    icon: Code,
    color: "bg-blue-500",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "PHP", level: 65 }
    ]
  },
  {
    category: "Frameworks y Tecnologías",
    icon: PenToolIcon,
    color: "bg-green-500",
    items: [
      { name: "React", level: 85 },
      { name: "Vue", level: 70 },
      { name: "Spring Boot", level: 75 },
      { name: "Next.js", level: 80 },
      { name: "NestJS", level: 65 },
      { name: "AWS", level: 60 }
    ]
  },
  {
    category: "Herramientas",
    icon: Terminal,
    color: "bg-purple-500",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 65 },
      { name: "Jenkins", level: 70 },
      { name: "Jira", level: 80 },
      { name: "Postman", level: 85 }
    ]
  }
]

export function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        Habilidades Técnicas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skillCategory, index) => (
          <SkillCard key={index} {...skillCategory} />
        ))}
      </div>
    </section>
  )
}

type SkillCardProps = SkillCategory

function SkillCard({ icon: Icon, category, color, items }: SkillCardProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
      <div className={`${color} inline-block p-3 rounded-full text-white mb-4`}>
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        {category}
      </h3>
      <ul className="space-y-4">
        {items.map((skill, index) => (
          <li key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div 
                className={`${color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: animate ? `${skill.level}%` : '0%' }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

