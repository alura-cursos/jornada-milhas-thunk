import { createSlice } from '@reduxjs/toolkit';
import { carregarDados } from '../viagem/middlewares';

interface InitialState {
  destinos: string[],
  origens: string[]
}

const initialState: InitialState = {
  destinos: [],
  origens: [],
}

const filtroSlice = createSlice({
  initialState,
  name: "filtro",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      carregarDados.fulfilled,
      (state, { payload }) => {
        state.destinos = payload.destinos;
        state.origens = payload.origens;
      }
    )
  }
});

export default filtroSlice.reducer;