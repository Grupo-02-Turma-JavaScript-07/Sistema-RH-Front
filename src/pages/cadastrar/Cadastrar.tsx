import Sidebar from "../../components/sidebar/Sidebar";

function Cadastrar() {
    return (
        <div className="flex min-h-screen mb-5">
            <Sidebar/>
            <div className="flex flex-1 flex-col items-center justify-center">
                <h1 className="text-3xl my-6 font-marko">Cadastrar Colaborador</h1>
    
                <form className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-[40vw] 
                font-zain text-xl">
                    <div className="flex flex-col">
                        <label htmlFor="nome" className="mb-1 font-medium">Nome</label>
                        <input
                        type="text"
                        id="nome"
                        name="nome"
                        className="border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Digite o nome"
                        />
                    </div>
        
                    <div className="flex flex-col">
                        <label htmlFor="foto" className="mb-1 font-medium">Foto (Link da imagem)</label>
                        <input
                        type="text"
                        id="foto"
                        name="foto"
                        className="border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="URL da imagem"
                        />
                    </div>
        
                    <div className="flex flex-col">
                        <label htmlFor="salario" className="mb-1 font-medium">Salário</label>
                        <input
                        type="text"
                        id="salario"
                        name="salario"
                        className="border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Digite o salário"
                        />
                    </div>
        
                    <div className="flex flex-col">
                        <label htmlFor="cargo" className="mb-1 font-medium">Cargo</label>
                        <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        className="border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Digite o cargo"
                        />
                    </div>
        
                    <div className="flex flex-col">
                        <label htmlFor="dataAdmissao" className="mb-1 font-medium">Data de Admissão</label>
                        <input
                        type="date"
                        id="dataAdmissao"
                        name="dataAdmissao"
                        className="border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </div>
        
                    <button
                        type="submit"
                        className="bg-[#26C6DA] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
      
    )
  }
  
  export default Cadastrar;
  