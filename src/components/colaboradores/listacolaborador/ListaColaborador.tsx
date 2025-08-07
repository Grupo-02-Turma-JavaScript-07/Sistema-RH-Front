import React, { useState, useEffect } from "react";
import CardColaborador from "../cardcolaborador/CardColaborador";
import colaboradoresData from "../../../data/colaboradores.json";
import type { Colaborador } from "../../../models/Colaborador";
import Sidebar from "../../sidebar/Sidebar";
import Search from "../../search/Search";

function ListaColaboradores() {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);

  useEffect(() => {
    console.log("Dados carregados:", colaboradoresData);
    setColaboradores(colaboradoresData as unknown as Colaborador[]);
  }, []);

  const isVazio = colaboradores.length === 0;

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col justify-center w-full my-4">
            <Search/>
          <div className="container flex flex-col w-full p-4">
            {isVazio ? (
              <div className="text-center text-gray-700 dark:text-gray-300">
                Nenhum colaborador encontrado.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      </div>
    </>
  );
}

export default ListaColaboradores;