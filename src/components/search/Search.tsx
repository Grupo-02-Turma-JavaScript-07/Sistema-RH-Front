import { FaSearch } from "react-icons/fa"

function Search() {
  return (
    <form className="flex justify-center mx-auto">
      <label htmlFor="" className="sr-only">Search</label>
      <div className="relative w-full">
        <input 
          type="text"
          id="nome"
          name="nome"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        placeholder="Insira o nome..."
        required
      />
      </div>
      <button type="submit" className="bg-indigo-600 rounded-md p-2 ms-2 text-sm font-medium
      border border-indigo-600 hover:bg-indigo-900 focus:ring-blue-300">
        <FaSearch size={20} className="text-white">
        </FaSearch>
      </button>
    </form>
  )
}