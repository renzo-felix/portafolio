import { BookOpen, Calendar } from 'lucide-react'

export function Courses() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Cursos Relevantes</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  )
}

function CourseCard({ title, institution, date }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <BookOpen size={24} className="text-blue-500" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{institution}</p>
          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={16} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const courses = [
  { title: "Base de Datos", institution: "UTEC", date: "04/2023" },
  { title: "Desarrollo basado en plataformas", institution: "UTEC", date: "08/2023" },
  { title: "Fundamentos de deep learning", institution: "NVIDIA", date: "02/2024" },
  { title: "Building Transformer-Based NLP Application", institution: "NVIDIA", date: "03/2024" },
  { title: "Cloud computing (desarrollo en la nube)", institution: "UTEC", date: "04/2024" },
  { title: "Ing de software", institution: "UTEC", date: "08/2024" },
  { title: "Diseño y Análisis de algoritmos", institution: "UTEC", date: "08/2024" },
]

