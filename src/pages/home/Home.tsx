import { Link } from "react-router-dom"
import RhFlow from "../sobre/Sobre"

function Home() {
    return (
        <>
        <header className="bg-gradient-to-r from-[#1f2a56] to-[#060f42] fixed top-0 w-full z-50">
            <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
                <a
                    href="#home"
                    className="flex gap-2 items-center text-3xl md:text-4xl font-marko text-white hover:text-cyan-300 transition-colors duration-300"
                >
                    <h1>[Flow G2 RH]</h1>
                </a>

                <nav className="w-full md:w-auto mt-4 md:mt-0">
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center text-white">
                        <li>
                            <a href="#home" className="hover:text-cyan-300 transition-colors duration-300 font-zain text-2xl md:text-3xl">Home</a>
                        </li>
                        <li>
                            <a href="#sobre" className="hover:text-cyan-300 transition-colors duration-300 font-zain text-2xl md:text-3xl">Sobre</a>
                        </li>
                        <li>
                            <Link to="/perfil" className="hover:text-cyan-300 transition-colors duration-300 font-zain text-2xl md:text-3xl">Perfil</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <div id="home" className="relative min-h-screen flex items-center bg-black text-white overflow-hidden pt-24 md:pt-32">
            <img
                src="https://ik.imagekit.io/iyc9bztrf8/premium_photo-1661397029055-2c5da6951c4a.png?updatedAt=1754496647525"
                alt="Imagem de fundo personalizada"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
            <div className="relative z-10 px-4 md:px-8 w-full max-w-3xl ml-14 text-left">
                <h2 className="font-marko text-3xl md:text-5xl font-bold mb-6">
                    Olá! Este é o <span className="text-cyan-400">[Flow G2 RH]</span>
                </h2>
                <p className="text-xl md:text-2xl font-bold font-zain mb-6 text-justify">
                    Um sistema de gerenciamento de Recursos Humanos criado para auxiliar empresas no controle dos dados essenciais de seus colaboradores.
                </p>
                <Link
                    to="/colaboradores"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-zain text-xl md:text-2xl py-2 px-6 rounded shadow-md transition-colors duration-300"
                >
                    Acesse nosso sistema!
                </Link>
            </div>
        </div>

        <section className="bg-gray-200 py-16" id="sobre">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div>
                        <h3 className="font-marko text-3xl md:text-5xl mb-6 font-bold text-cyan-400 text-center md:text-left">Resumo</h3>
                        <p className="font-zain text-xl md:text-2xl text-black text-justify">
                            O Flow G2 RH é um sistema completo de gestão de Recursos Humanos, desenvolvido para otimizar o controle de dados dos colaboradores. Com interface intuitiva, permite gerenciar cadastros de forma prática e eficiente. Além de automatizar processos, melhora a comunicação interna e apoia decisões estratégicas, tornando a rotina do RH mais ágil, segura e organizada.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/iyc9bztrf8/istockphoto-1362181407-2048x2048.jpg?updatedAt=1754501332531"
                            alt="Gestão de pessoas"
                            className="w-full max-w-md h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>

        <RhFlow />
        </>
    )
}

export default Home
