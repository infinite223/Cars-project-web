import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    show:false, 
    message:'',
    type: 'ERROR'
  },
  reducers: {
    setMessage: (state, action) => {
      state = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMessage } = messageSlice.actions
export const selectMessage = (state:{show:boolean, message:string, type:string}) => state.message

export default messageSlice.reducer