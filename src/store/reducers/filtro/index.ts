import { createSlice } from '@reduxjs/toolkit';

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
});

export default filtroSlice.reducer;