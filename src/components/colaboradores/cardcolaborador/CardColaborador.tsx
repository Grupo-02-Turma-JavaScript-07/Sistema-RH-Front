import React from "react";
import type {Colaborador} from "../../../models/Colaborador";

interface Props {
  colaborador: Colaborador;
}

function CardColaborador({ colaborador }: Props) {
  const dataFormatada = new Date(colaborador.dataAdmissao).toLocaleDateString("pt-BR");

  return (
    <div className=" p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-3">
        <img
          className="w-30 h-30 mb-3 rounded-full shadow-lg object-cover"
          src={colaborador.foto}
          alt={`Foto de ${colaborador.nome}`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {colaborador.nome}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {colaborador.cargo}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Admissão: {dataFormatada}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Salário: R$ {colaborador.salario.toFixed(2)}
        </span>
        <div className="flex mt-2 md:mt-6 ">
          <a
            href="#"
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contato
          </a>
          <a
            href="#"
            className="py-1.5 px-3 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Mensagem
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardColaborador;
