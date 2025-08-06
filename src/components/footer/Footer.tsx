import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1f2a56] to-[#273171] text-white text-xl">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="font-zain flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <div>
            <h1 className="text-4xl text-cyan-400 font-bold">[Flow G2 RH]</h1>
            <p className="text-gray-300 mt-2 max-w-xs text-justify">
              Uma plataforma de gestão de pessoas feita para simplificar sua rotina e empoderar seu RH.
            </p>
          </div>

          <ul className="flex flex-col sm:flex-row gap-4 text-xl font-medium">
            <li className="hover:text-gray-300 transition"><a href="#">Início</a></li>
            <li className="hover:text-gray-300 transition"><a href="#">Sobre</a></li>
            <li className="hover:text-gray-300 transition"><a href="#">Recursos</a></li>
            <li className="hover:text-gray-300 transition"><a href="#">Contato</a></li>
          </ul>

          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaEnvelope /></a>
          </div>
        </div>

        <div className="font-zain border-t border-white/10 mt-6 pt-4 text-xl text-center text-gray-400">
          © 2025 RH Flow. Todos os direitos reservados. <a href="#" className="underline hover:text-white">Termos e Privacidade</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
