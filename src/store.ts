import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {gameSlice} from './slices/game.js'
import { blockSlice } from './slices/block.js';

const reducer = combineReducers({
  entities: gameSlice.reducer,
  blocks: blockSlice.reducer,
})

const middleware = () => next => action => {
  console.log('↳', action);
  return next(action);
}

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

export type RootState = ReturnType<typeof reducer>
