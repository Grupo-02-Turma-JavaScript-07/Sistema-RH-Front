import colaboradores from "../data/colaboradores.json";
import type Colaborador from "../models/Colaborador";

export function getColaboradorById(id: number): Colaborador | undefined {
  const colaborador = colaboradores.find((c) => c.id === id);

  if (!colaborador) return undefined;

  return {
    ...colaborador,
    dataAdmissao: new Date(colaborador.dataAdmissao),
  };
}
