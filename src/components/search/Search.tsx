import { FaSearch } from "react-icons/fa"

function Search() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 px-2">
      <h1 className="text-3xl sm:text-4xl font-marko font-semibold text-gray-800">
        Colaboradores
      </h1>
    <form className="flex w-full sm:max-w-md">
      <label htmlFor="" className="sr-only">Search</label>
      <div className="relative w-full">
        <input 
          type="text"
          id="nome"
          name="nome"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 
            focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Pesquise..."
          required
      />
      </div>
      <button type="submit" className="bg-indigo-600 rounded-md p-2 ms-2 text-sm font-medium
          border border-indigo-600 hover:bg-indigo-900 focus:ring-blue-300">
        <FaSearch size={20} className="text-white">
        </FaSearch>
      </button>
    </form>
  </div>
  )
}
export default Search