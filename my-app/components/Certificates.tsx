'use client'

import { Award, ExternalLink, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'


const certificates = [
  {
    title: "Fundamentos de Deep Learning",
    institution: "NVIDIA",
    date: "02/2024",
    image: "http://res.cloudinary.com/dbsqaquyv/image/upload/v1735838982/folder/wgt0f27zu0euoq2bqvxf.jpg",
    description: "Este curso cubre los fundamentos del aprendizaje profundo, incluyendo redes neuronales, backpropagation, y técnicas de optimización.",
    links: [
      { text: "link del certificado", url: "https://learn.nvidia.com/certificates?id=bc23a2a7ba604a0bbc6c060128a8348f" }
    ]
  },
  {
    title: "Building Transformer-Based NLP Applications",
    institution: "NVIDIA",
    date: "03/2024",
    image: "http://res.cloudinary.com/dbsqaquyv/image/upload/v1735838964/folder/hcxdfs7dreth0zohbzan.jpg",
    description: "Este curso se enfoca en la construcción de aplicaciones de procesamiento de lenguaje natural utilizando arquitecturas basadas en transformers.",
    links: [
      { text: "link del certificado", url: "https://learn.nvidia.com/certificates?id=0af9dd67319b4e0187a40fc5acea7920" }
    ]
  }
]

export function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Certificados</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            {...cert}
            onClick={() => setSelectedCertificate(cert)}
          />
        ))}
      </div>
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{selectedCertificate.title}</h3>
                <button 
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
              <Image 
                src={selectedCertificate.image} 
                alt={selectedCertificate.title} 
                width={600} 
                height={400} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 dark:text-gray-400 mb-2">{selectedCertificate.institution}</p>
              <p className="text-gray-500 dark:text-gray-500 mb-4">{selectedCertificate.date}</p>
              <p className="text-gray-700 dark:text-gray-300">{selectedCertificate.description}</p>
              
            
              <div className="flex space-x-4 mt-4">
                {selectedCertificate.links.map((link, index) => (
                  <a key={index} href={link.url} className="flex items-center text-blue-500 hover:underline">
                    <ExternalLink size={18} className="mr-1" />
                    {link.text}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function CertificateCard({ title, institution, date, image, onClick }) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <Image src={image} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{institution}</p>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <Award size={18} className="mr-2" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  )
}
