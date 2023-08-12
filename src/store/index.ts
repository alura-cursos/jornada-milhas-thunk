import { configureStore, Middleware } from '@reduxjs/toolkit';
import usuario from './reducers/usuario';
import viagem from './reducers/viagem';
import filtro from './reducers/filtro';
import createDebugger from 'redux-flipper';

const middlewares: Middleware[] = [];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: {
    usuario,
    viagem,
    filtro
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(...middlewares)
  ,
});

export default store;