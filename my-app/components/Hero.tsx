'use client'

import { GraduationCap, Languages, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Hero() {
  const [offset, setOffset] = useState(0)
  const [text, setText] = useState('')
  const fullText = "Estudiante de Ciencias de la Computación"

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)

    let i = 0
    const typeWriter = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typeWriter)
      }
    }, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(typeWriter)
    }
  }, [])

  return (
    <section className="py-20 text-center relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10">
        <div className="mb-8 inline-block rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
        <Image
        src="https://res.cloudinary.com/dbsqaquyv/image/upload/v1735838109/folder/du72t1i8ofygi4puis6e.jpg?height=200&width=200"
        alt="Imagen con parámetros"
        width={200}
        height={200}
      />
        </div>
        <h2 className="text-5xl font-bold mb-4 text-white shadow-text">Renzo Felix Aponte</h2>
        <p className="text-2xl mb-8 text-white shadow-text h-16">
          {text}<span className="animate-blink">|</span>
        </p>
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full px-6 py-3 shadow-md hover:bg-opacity-30 transition-all duration-300">
            <GraduationCap size={24} className="mr-2 text-blue-300" />
            <span className="text-white">Ciencias de la Computación - UTEC</span>
          </div>
          <div className="flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full px-6 py-3 shadow-md hover:bg-opacity-30 transition-all duration-300">
            <Languages size={24} className="mr-2 text-green-300" />
            <span className="text-white">Inglés: Intermedio A2 | Español: Nativo</span>
          </div>
        </div>
        <a href="#experience" className="inline-block animate-bounce">
          <ChevronDown size={36} className="text-white" />
        </a>
      </div>
    </section>
  )
}

