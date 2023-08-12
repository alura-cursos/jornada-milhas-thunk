import { createAsyncThunk } from '@reduxjs/toolkit';
import { carregarDestinos, carregarOrigens, getViagens } from 'src/services/viagens';

export const carregarDados = createAsyncThunk(
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

export const carregarMaisViagens = createAsyncThunk(
  'viagem/carregarMais',
  async (paginaAtual: number) => {
    const { novasViagens, pagina } = await getViagens(paginaAtual + 1);

    return { novasViagens, pagina}
  }
)
