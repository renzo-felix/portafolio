'use client'

import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const experiences = [
  {
    title: "Ingeniero de Software (Full Stack)",
    company: "Perú 360",
    location: "Barranco, Lima",
    date: "Junio 2024",
    description: [
      "Desarrollo de una aplicación web para fomentar el turismo en Perú.",
      "Backend: Arquitectura modular y escalable (NestJS, Prisma ORM), autenticación segura con JWT, CRUD completo para gestión de lugares turísticos.",
      "Frontend: Interfaz moderna y responsiva (Next.js, React, TailwindCSS), búsqueda avanzada con filtros dinámicos, funcionalidad de login seguro y sistema de reseñas."
    ],
    links: [
      { text: "linkelinkedin", url: "https://www.linkedin.com/company/peru-360/about/" },
    
    ],
    logo: "https://res.cloudinary.com/dbsqaquyv/image/upload/v1735841789/peru_el3xq2.jpg?height=80&width=80"
  },
  {
    title: "Desarrollador Full-Stack (Proyecto Personal)",
    company: "Plataforma de Conexión Laboral para Estudiantes",
    location: "Proyecto Personal",
    date: "Noviembre 2024",
    description: [
      "Backend: Roles y permisos personalizados, notificaciones en tiempo real, gestión escalable de publicaciones y comentarios.",
      "Frontend: Gestión de perfiles interactivos, seguimiento de empresas, vistas dedicadas para postulaciones."
    ],
    logo: "https://res.cloudinary.com/dbsqaquyv/image/upload/v1735842164/milogo_ii3fvx.jpg?height=80&width=80",
    links: [
      { text: "Repositorio Frontend", url: "https://github.com/renzo-felix/RedSocial.git" },
      { text: "Repositorio Backend", url: "https://github.com/renzo-felix/RedSocialBackend.git" }
    ]
  },
  {
    title: "Organización Estudiantil Aerospace-UTEC",
    company: "UTEC",
    location: "Lima, Perú",
    date: "2023-2024",
    description: [
      "Diseñé e implementé una interfaz gráfica intuitiva y funcional utilizando Tkinter y Python, siguiendo principios de programación orientada a objetos.",
      "Gestioné la documentación del proyecto y realicé pruebas exhaustivas para garantizar la estabilidad y la precisión en la visualización de datos atmosféricos.",
      "Mejoré habilidades blandas como trabajo en equipo, comunicación efectiva y gestión del tiempo al coordinar entregables en un entorno colaborativo."
    ],
    logo: "http://res.cloudinary.com/dbsqaquyv/image/upload/v1735839014/folder/ptkm82pwyreewwzbkrjt.jpg?height=80&width=80",
    links: [
      { text: "Link del proyecto", url: "https://github.com/renzo-felix/interfaz" }
    ]
  }
]

export function Experience() {
  const [currentExperience, setCurrentExperience] = useState(0)

  const nextExperience = useCallback(() => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length)
  }, [])

  const prevExperience = useCallback(() => {
    setCurrentExperience((prev) => (prev - 1 + experiences.length) % experiences.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextExperience()
    }, 10000) // Cambia cada 10 segundos

    return () => clearInterval(timer)
  }, [nextExperience])

  const experience = experiences[currentExperience]

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Experiencia</h2>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <Image
              src={experience.logo}
              alt={`${experience.company} Logo`}
              width={80}
              height={80}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-1 text-gray-700 dark:text-gray-200">{experience.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{experience.company} | {experience.location} | {experience.date}</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
            {experience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {experience.links && (
            <div className="flex space-x-4 mt-4">
              {experience.links.map((link, index) => (
                <a key={index} href={link.url} className="flex items-center text-blue-500 hover:underline">
                  <ExternalLink size={18} className="mr-1" />
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-between p-4 bg-gray-50 dark:bg-gray-700">
          <button 
            onClick={prevExperience} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300"
            aria-label="Experiencia anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2">
            {experiences.map((_, index) => (
              <span 
                key={index} 
                className={`h-2 w-2 rounded-full ${
                  index === currentExperience ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-500'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextExperience} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300"
            aria-label="Siguiente experiencia"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

