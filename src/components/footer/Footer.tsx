import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1f2a56] to-[#020515] text-white text-lg relative z-50 bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="font-zain flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-2xl text-cyan-400 font-bold font-marko">[Flow G2 RH]</h1>
            <p className="text-gray-300 mt-2 max-w-xs mx-auto md:mx-0 text-justify">
              Uma plataforma de gestão de pessoas feita para simplificar sua rotina e empoderar seu RH.
            </p>
          </div>

          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium">
            <li className="hover:text-gray-300 transition">
              <a href="/home">Início</a>
            </li>
            <li className="hover:text-gray-300 transition">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="hover:text-gray-300 transition">
              <a href="/perfil">Perfil</a>
            </li>
            <li className="hover:text-gray-300 transition">
              <a href="#">Contato</a>
            </li>
          </ul>

          <div className="flex justify-center md:justify-end gap-6 text-2xl">
            <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaEnvelope /></a>
          </div>
        </div>

        <div className="font-zain border-t border-white/10 mt-10 pt-4 text-center text-sm text-gray-400">
          © 2025 RH Flow. Todos os direitos reservados. 
          <a href="#" className="underline hover:text-white ml-1">Termos e Privacidade</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer