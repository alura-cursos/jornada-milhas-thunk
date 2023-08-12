import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { InitialState } from './type';
import { carregarDados, carregarMaisViagens } from './middlewares';

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
      .addCase(carregarDados.fulfilled, (state, { payload }) => {
        state.viagens = payload.viagens;
        state.paginaAtual = payload.paginaAtual;
        state.totalPaginas = payload.totalPaginas;
      })
      .addCase(carregarMaisViagens.fulfilled, (state, { payload }) => {
        state.viagens.push(...payload.novasViagens);
        state.paginaAtual = payload.pagina;
      })
      .addMatcher(
        isAnyOf(carregarDados.pending, carregarMaisViagens.pending),
        (state) => { state.buscando = true }
      )
      .addMatcher(
        isAnyOf(
          carregarDados.fulfilled,
          carregarMaisViagens.fulfilled,
          carregarDados.rejected,
          carregarMaisViagens.rejected
        ),
        (state) => { state.buscando = false }
      )
  }
});

export default viagemSlice.reducer;