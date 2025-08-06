import { useState } from "react"
import { FaHome, FaUser } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

function Sidebar() {
  const [abaColaboradores, setAbaColaboradores] = useState(false)

  return (
    <div className="flex ">
      <aside className="w-60 h-screen bg-white border-r border-gray-200 text-sm font-medium relative">
        <div className="px-5 pt-4 pb-3 font-zain text-xl font-semibold tracking-wide text-gray-800">
          RH - FLOW
        </div>
        <div className="w-full h-px bg-indigo-100 mb-2" />
        <div className="relative flex items-center gap-2 bg-indigo-100 text-indigo-900 rounded-md pl-4 pr-3 py-2 mb-1">
          <span className="absolute left-0 top-1 bottom-1 w-1 bg-indigo-600 rounded-r-md" />
          <FaHome size={14} />
          <span>Início</span>
        </div>

        <div
          onClick={() => setAbaColaboradores(!abaColaboradores)}
          className="flex items-center justify-between text-gray-700 hover:bg-gray-100 cursor-pointer px-4 py-2 rounded-md"
        >
          <div className="flex items-center gap-2">
            <FaUser size={14} />
            <span>Colaboradores</span>
          </div>
          {abaColaboradores ? <IoIosArrowUp size={14} /> : <IoIosArrowDown size={14} />}
        </div>

        {abaColaboradores && (
          <div className="ml-10 mt-1 flex flex-col gap-1 text-gray-600 text-sm">
            <span className="hover:text-indigo-600 cursor-pointer">Listar</span>
            <span className="hover:text-indigo-600 cursor-pointer">Cadastrar</span>
          </div>
        )}
      </aside>

      <div className="w-px bg-indigo-100 h-screen" />
    </div>
  )
}

export default Sidebar
