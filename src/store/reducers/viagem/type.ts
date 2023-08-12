import { Viagem } from 'src/types/viagem';

export interface InitialState {
  viagens: Viagem[],
  paginaAtual: number,
  totalPaginas: number,
  buscando: boolean
}