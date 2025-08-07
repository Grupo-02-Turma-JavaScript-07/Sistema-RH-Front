import { useState } from "react"
import { FaHome, FaUser, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { Link, useLocation } from "react-router-dom"

function Sidebar() {
  const [abaColaboradores, setAbaColaboradores] = useState(false)
  const [minimizado, setMinimizado] = useState(false)

  const location = useLocation()
  const { pathname } = location

  const inicioEstaAtivo = pathname === "/perfil" || pathname === "/home" || pathname === "/"
  const colaboradoresEstaAtivo = pathname.startsWith("/colaboradores")

  return (
    <div className="flex">
      <aside className={`h-screen bg-white border-r border-gray-200 text-sm font-medium relative transition-all duration-300 ${minimizado ? "w-16" : "w-60"}`}>
        <button
          onClick={() => setMinimizado(!minimizado)}
          className="absolute -right-3 top-2 bg-white border border-indigo-100 cursor-pointer rounded-full p-1 shadow hover:bg-gray-100"
        >
          {minimizado ? <FaChevronRight size={16} /> : <FaChevronLeft size={16} />}
        </button>
        <div className={`pt-4 pb-3 ${minimizado ? "text-center" : "px-5"} font-zain text-xl font-semibold tracking-wide text-gray-800`}>
          {!minimizado && (
            <Link to='/'>
              <span
                className={`text-cyan-700 text-2xl whitespace-nowrap transition-opacity duration-300 ease-in-out ${minimizado ? 'opacity-0 delay-0' : 'opacity-100 delay-200'
                  }`}
              >
                [Flow G2 RH]
              </span>
            </Link>
          )}
        </div>
        <div className="w-full h-px bg-indigo-100 mb-2" />
        <Link to="/perfil">
          <div className={`relative flex items-center gap-2 px-4 py-2 mb-1 rounded-md cursor-pointer ${inicioEstaAtivo ? "bg-indigo-100 text-indigo-900" : "text-gray-700 hover:bg-gray-100"}`}>
            {inicioEstaAtivo && <span className="absolute left-0 top-1 bottom-1 w-1 bg-indigo-600 rounded-r-md" />}
            <FaHome size={16} />
            {!minimizado && <span>Início</span>}
          </div>
        </Link>
        <div
          onClick={() => setAbaColaboradores(!abaColaboradores)}
          className={`flex items-center justify-between px-4 py-2 rounded-md cursor-pointer ${colaboradoresEstaAtivo ? "bg-indigo-100 text-indigo-900" : "text-gray-700 hover:bg-gray-100"}`}
        >
          <div className="flex items-center gap-2">
            <FaUser size={16} />
            {!minimizado && <span>Colaboradores</span>}
          </div>
          {!minimizado && (abaColaboradores ? <IoIosArrowUp size={14} /> : <IoIosArrowDown size={14} />)}
        </div>
        {!minimizado && abaColaboradores && (
          <div className="ml-10 mt-1 flex flex-col gap-1 text-gray-600 text-sm">
            <Link to="/colaboradores" className={`hover:text-indigo-600 ${pathname === "/colaboradores" ? "text-indigo-700 font-semibold" : ""}`}>
              Listar
            </Link>
            {/* ##todo - vamos implementar o cadastro? */}
            <span className="hover:text-indigo-600 cursor-pointer">Cadastrar</span>
          </div>
        )}
      </aside>
      <div className="w-px bg-indigo-100 h-screen" />
    </div>
  )
}

export default Sidebar
