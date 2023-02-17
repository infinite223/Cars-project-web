import { createSlice } from '@reduxjs/toolkit'
import { RootStore } from '../store'

export interface LoadingStore {
   loading:boolean
}

export const creatingProjectSlice = createSlice({
  name: 'creatingProject',
  initialState: {
    creatingProject:{}
  },
  reducers: {
    setCreatingProject: (state, action) => {
      state.creatingProject = action.payload
    }
  },
})

export const { setCreatingProject } = creatingProjectSlice.actions
export const selectCreatingProject = (state:RootStore) => state.creatingProject

export default creatingProjectSlice.reducer