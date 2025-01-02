'use client'

import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Experience } from '../components/Experience'
import { Education } from '../components/Education'
import { Skills } from '../components/Skills'
import { Courses } from '../components/Courses'
import { Certificates } from '../components/Certificates'
import { Footer } from '../components/Footer'
import { Moon, Sun } from 'lucide-react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
        <div className="stars"></div>
        <Header />
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-white/30 dark:bg-gray-800/30 text-gray-800 dark:text-gray-200 backdrop-blur-sm z-50 transition-all duration-300 hover:scale-110"
          aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <main className="container mx-auto px-4 py-8 relative z-10">
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Courses />
          <Certificates />
        </main>
        <Footer />
      </div>
    </div>
  )
}

