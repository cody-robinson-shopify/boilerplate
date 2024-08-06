import { createSlice, ThunkAction, UnknownAction } from '@reduxjs/toolkit'
import { Entity, GameTag, EntityType, GameState, BlockActionType } from '../utils/enums.js';
import { blockAdd } from './block.js';
import { RootState } from '../store.js';

const initialState = [{
    [GameTag.Id]: '0',
    [GameTag.Type]: EntityType.Game,
    [GameTag.GameState]: GameState.Connected,
  }] as Entity[];

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    fullEntity: (state, action) => {
      state.push(action.payload);
    },

    tagChange: (state, action) => {
      const { id, tag, value } = action.payload;
      const entity = state.find(entity => entity[GameTag.Id] === id);
      if (entity) {
        entity[tag] = value;
      }
    }
  }
})

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>

export const fullEntity = (entity: Entity): AppThunk => (dispatch, getState) => {
  const state = getState();
  console.log('state', state);
  const id = state.entities.length.toString();

  const newEntity = {
    [GameTag.Id]: id,
    ...entity,
  };

  dispatch(gameSlice.actions.fullEntity(newEntity));
  dispatch(blockAdd({ type: BlockActionType.FullEntity, data: newEntity }));
}

export const { tagChange } = gameSlice.actions
