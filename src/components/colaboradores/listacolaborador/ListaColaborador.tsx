import React, { useState, useEffect } from "react";
import CardColaborador from "../cardcolaborador/CardColaborador";
import colaboradoresData from "../../../data/colaboradores.json";
import type { Colaborador } from "../../../models/Colaborador";
import Sidebar from "../../sidebar/Sidebar";
import Search from "../../search/Search";
import { FallingLines } from "react-loader-spinner";

function ListaColaboradores() {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColaboradores(colaboradoresData as unknown as Colaborador[]);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const isVazio = colaboradores.length === 0;

  return (
    <div className="flex">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <FallingLines
            color="#26C6DA"
            width="100"
            visible={true}
            aria-Label="falling-circles-loading"
          />
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="flex flex-col justify-center w-full my-4">
            <div className="container flex flex-col w-full p-4">
              <Search />
              {isVazio ? (
                <div className="text-center text-gray-700 dark:text-gray-300 mt-8">
                  Nenhum colaborador encontrado.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                  {colaboradores.map((colaborador) => (
                    <CardColaborador
                      key={colaborador.id}
                      colaborador={colaborador}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListaColaboradores;
