import { createSlice } from '@reduxjs/toolkit'
import { BlockActionType } from '../utils/enums.js';



interface Block {
  type: BlockActionType;
  data: unknown;
}

const initialState = [] as Block[]

export const blockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {
    blockStart: (state, action) => {
      state.push({
        type: BlockActionType.BlockStart,
        data: { id: action.payload.id }
      });
    },

    blockAdd: (state, action) => {
      state.push({
        type: action.payload.type,
        data: action.payload.data
      });
    },

    blockEnd: (state, action) => {
      state.push({
        type: BlockActionType.BlockEnd,
        data: { id: action.payload.id }
      });
    }

  }
})

export const { blockStart, blockAdd, blockEnd } = blockSlice.actions
