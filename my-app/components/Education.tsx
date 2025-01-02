import { MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'

export function Education() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        Educación
      </h2>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Imagen */}
          <div className="md:flex-shrink-0">
            <div className="h-48 w-48 mx-auto md:mx-0">
              <Image
                src="http://res.cloudinary.com/dbsqaquyv/image/upload/v1735838996/folder/s2kil2rqm9cj8b5pvoy1.png"
                alt="Universidad de Tecnología y Ciencias"
                width={400}
                height={400}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Grado en curso
            </div>
            <h3 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
              Ciencias de la Computación
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Universidad de Tecnología y Ciencias
            </p>
            <div className="mt-4 flex items-center text-gray-600 dark:text-gray-400">
              <MapPin size={18} className="mr-2" />
              <span>Barranco - Lima - Perú</span>
            </div>
            <div className="mt-2 flex items-center text-gray-600 dark:text-gray-400">
              <Calendar size={18} className="mr-2" />
              <span>Septiembre 2022 - Actualidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

