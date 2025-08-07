import { Gear, Plus, UserCircle } from '@phosphor-icons/react';
import { getColaboradorById } from '../../service/Service';

interface PerfilProps {
    idColaborador: number;
}

function Perfil({ idColaborador }: PerfilProps) {
    const colaborador = getColaboradorById(idColaborador);

    return (
        <div className="p-4 mx-auto">
            <div className="flex flex-row justify-between items-center">
                <h2 className="font-marko text-2xl ">Início</h2>
                <div className="relative group">
                    <button>
                        <img
                        src="https://i.pinimg.com/736x/84/3c/84/843c84e8bbaaa979413a20165bc7d9ef.jpg"
                        alt="Imagem avatar"
                        className="h-10 w-10 rounded-full cursor-pointer"
                        />
                    </button>
                    <div className="absolute left-[-250px] mt-2 w-[20vw] bg-white border rounded-lg shadow-lg 
                    opacity-0 group-hover:opacity-100 invisible flex-nowrap p-5 group-hover:visible transition-all 
                    duration-200">
                        <div className='flex flex-row items-center hover:bg-gray-100'>
                            <UserCircle size={20} />
                            <a href="#" className="font-zain text-2xl block px-4 py-2">Meu dados</a>
                        </div>
                        <div className='flex flex-row items-center hover:bg-gray-100'>
                            <Gear size={20} />
                            <a href="#" className="font-zain text-2xl block px-4 py-2">Configurações da conta</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <h3 className='font-marko text-4xl'>Olá,</h3>
                <p>{colaborador?.nome}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <img
                    src="https://i.pinimg.com/736x/84/3c/84/843c84e8bbaaa979413a20165bc7d9ef.jpg"
                    alt="Imagem avatar"
                    className="my-5 h-20 w-20 rounded-full outline-dashed outline-gray-300 outline-offset-5"
                />
                <div className='flex flex-row gap-10 mx-10 border border-gray-200 p-10 rounded-xl shadow-sm'>
                    <div className='flex flex-col'>
                        <p className='font-zain text-2xl'>Data de Admissão</p>
                        <p>{colaborador?.dataAdmissao.toLocaleDateString()}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-zain text-2xl'>Cargo</p>
                        <p>{colaborador?.cargo}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-zain text-2xl'>Salário</p>
                        <p>{colaborador?.salario}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-20'>
                <div className="my-10 p-4 border border-gray-200 rounded-xl shadow-sm">
                    <Plus size={20} />
                    <h2 className=" mt-2 text-lg font-semibold text-gray-800">Novo colaborador</h2>
                    <p className=" mt-2 font-zain text-2xl text-gray-600">Finalize as configurações do seu perfil.</p>
                </div>
                <div className="my-10 p-4 border border-gray-200 rounded-xl shadow-sm">
                    <Plus size={20} />
                    <h2 className=" mt-2 text-lg font-semibold text-gray-800">Novo colaborador</h2>
                    <p className=" mt-2 font-zain text-2xl text-gray-600">Finalize as configurações do seu perfil.</p>
                </div>
            </div>
        </div>
    );
}

export default Perfil;