import { createSlice } from '@reduxjs/toolkit'
import { RootStore } from '../store'

export interface MessageStore {
    show:boolean, 
    message:string,
    type: string
}

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    prompt: {
      show:false, 
      message:'Nie prawidłowe dane!',
      type: 'ERROR'
    }
  },
  reducers: {
    setMessage: (state, action) => {
      state.prompt = action.payload
    }
  },
})

export const { setMessage } = messageSlice.actions
export const selectMessage = (state:RootStore) => state.message.prompt

export default messageSlice.reducer