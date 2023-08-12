import { Viagem } from 'src/types/viagem';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  viagens: Viagem[],
  paginaAtual: number,
  totalPaginas: number,
  buscando: boolean
}

const initialState: InitialState = {
  viagens: [],
  paginaAtual: 0,
  totalPaginas: 0,
  buscando: false
}

const viagemSlice = createSlice({
  initialState,
  name: "viagem",
  reducers: {}
});

export default viagemSlice.reducer;