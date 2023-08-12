import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './type';
import { carregarDados } from './middlewares';

const initialState: InitialState = {
  viagens: [],
  paginaAtual: 0,
  totalPaginas: 0,
  buscando: false
}

const viagemSlice = createSlice({
  initialState,
  name: "viagem",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(carregarDados.pending, (state) => { state.buscando = true })
      .addCase(carregarDados.fulfilled, (state, { payload }) => {
        state.viagens = payload.viagens;
        state.paginaAtual = payload.paginaAtual;
        state.totalPaginas = payload.totalPaginas;
        state.buscando = false;
      })
      .addCase(carregarDados.rejected, (state) => { state.buscando = false })
  }
});

export default viagemSlice.reducer;