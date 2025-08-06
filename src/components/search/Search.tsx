import { FaSearch } from "react-icons/fa"

function Search() {
  return (
    <form className="flex justify-center mx-auto">
      <label htmlFor="" className="sr-only">Search</label>
      <div className="relative w-full">
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900
        text-sm rounded-md block w-full focus:border-indigo-600 focus:ring-indigo-600 p-2"/>
      </div>
      <button type="submit" className="bg-indigo-600 rounded-md p-2 ms-2 text-sm font-medium
      border border-indigo-600 hover:bg-indigo-900 focus:ring-blue-300">
        <FaSearch size={20} className="text-white">
        </FaSearch>
      </button>
    </form>
  )
}

export default Search