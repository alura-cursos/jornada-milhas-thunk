import { Viagem } from 'src/types/viagem';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { carregarDestinos, carregarOrigens, getViagens } from 'src/services/viagens';

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

const carregarDados = createAsyncThunk(
  'viagem/carregarDados',
  async () => {
    const [viagensData, novasOrigens, novosDestinos] = await Promise.all([
      getViagens(),
      carregarOrigens(),
      carregarDestinos(),
    ]);
    const { pagina, totalPaginas, novasViagens } = viagensData;
    
    return {
      paginaAtual: pagina,
      totalPaginas,
      viagens: novasViagens,
      destinos: novosDestinos,
      origens: novasOrigens
    }
  }
);

const viagemSlice = createSlice({
  initialState,
  name: "viagem",
  reducers: {}
});

export default viagemSlice.reducer;