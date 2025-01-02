import { Briefcase, Mail, Linkedin } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Renzo Felix Aponte</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="mailto:renzofelixaponte@gmail.com" className="flex items-center">
                <Mail size={18} className="mr-1" />
                Email
              </a>
            </li>
            <li>
              <a href="tel:+51940136461" className="flex items-center">
                <Briefcase size={18} className="mr-1" />
                +51 940 136 461
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/renzo-felix-aponte/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Linkedin size={18} className="mr-1" />
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

